#!/usr/bin/env python3
"""
Council of LLMs Orchestrator
Real implementation that coordinates multiple LLM agents to build software.

Author: Ruben van der Linde
License: MIT
"""

import json
import os
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List
import requests

# Configuration
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")
OUTPUT_DIR = Path("council-real-output")
MODEL = "qwen2.5-coder:1.5b"  # Small, fast model for testing

class Agent:
    """Base class for LLM agents."""
    
    def __init__(self, name: str, role: str, system_prompt: str):
        self.name = name
        self.role = role
        self.system_prompt = system_prompt
        
    def generate(self, prompt: str, temperature: float = 0.7) -> str:
        """Generate response from LLM."""
        full_prompt = f"{self.system_prompt}\n\n{prompt}"
        
        payload = {
            "model": MODEL,
            "prompt": full_prompt,
            "stream": False,
            "options": {
                "temperature": temperature,
                "num_predict": 2000  # Max tokens to generate
            }
        }
        
        print(f"🤖 {self.name} ({self.role}) is thinking...")
        start_time = time.time()
        
        try:
            response = requests.post(
                f"{OLLAMA_HOST}/api/generate",
                json=payload,
                timeout=120
            )
            response.raise_for_status()
            result = response.json()
            
            elapsed = time.time() - start_time
            print(f"✅ {self.name} responded in {elapsed:.1f}s")
            
            return result["response"]
            
        except Exception as e:
            print(f"❌ Error from {self.name}: {e}")
            raise

class GeertAgent(Agent):
    """Geert - Product Owner Agent"""
    
    def __init__(self):
        super().__init__(
            name="Geert",
            role="Product Owner",
            system_prompt="""You are Geert, an experienced Product Owner.
Your job is to break down project requirements into clear user stories.

For each user story, provide:
- ID (US1, US2, etc.)
- Title (As a... I want... So that...)
- Description
- Acceptance Criteria (3-5 bullet points)

Return ONLY valid JSON in this format:
{
  "user_stories": [
    {
      "id": "US1",
      "title": "...",
      "description": "...",
      "acceptance_criteria": ["...", "..."]
    }
  ]
}"""
        )
    
    def create_user_stories(self, project_description: str) -> Dict[str, Any]:
        """Convert project description to user stories."""
        prompt = f"""Project Requirements:
{project_description}

Break this into 2-3 user stories. Return ONLY JSON, no markdown, no explanation."""
        
        response = self.generate(prompt, temperature=0.3)
        
        # Clean up response (remove markdown code blocks if present)
        response = response.strip()
        if response.startswith("```"):
            lines = response.split("\n")
            response = "\n".join(lines[1:-1])
        
        try:
            return json.loads(response)
        except json.JSONDecodeError as e:
            print(f"⚠️ Failed to parse JSON: {e}")
            print(f"Raw response: {response[:200]}")
            # Return fallback structure
            return {"user_stories": [{"id": "US1", "title": "Parse error", "description": response[:500], "acceptance_criteria": []}]}

class SaskiaAgent(Agent):
    """Saskia - Scrum Master Agent"""
    
    def __init__(self):
        super().__init__(
            name="Saskia",
            role="Scrum Master",
            system_prompt="""You are Saskia, an experienced Scrum Master.
Your job is to create sprint plans from user stories.

For each task, provide:
- ID (TASK1.1, TASK1.2, etc.)
- User story it belongs to
- Which agent should do it (Johnie for backend, Boris for security, Linda for tests)
- Description
- Dependencies (empty array if none)

Return ONLY valid JSON in this format:
{
  "sprint_name": "Sprint 1: ...",
  "user_stories_in_sprint": ["US1"],
  "tasks": [
    {
      "id": "TASK1.1",
      "user_story_id": "US1",
      "agent": "Johnie",
      "description": "...",
      "dependencies": []
    }
  ]
}"""
        )
    
    def create_sprint_plan(self, user_stories: List[Dict]) -> Dict[str, Any]:
        """Create sprint plan from user stories."""
        stories_text = json.dumps(user_stories, indent=2)
        
        prompt = f"""User Stories:
{stories_text}

Create a sprint plan for the FIRST user story only.
Break it into 3 tasks: 1 for Johnie (code), 1 for Boris (security review), 1 for Linda (tests).
Return ONLY JSON, no markdown, no explanation."""
        
        response = self.generate(prompt, temperature=0.3)
        
        # Clean up response
        response = response.strip()
        if response.startswith("```"):
            lines = response.split("\n")
            response = "\n".join(lines[1:-1])
        
        try:
            return json.loads(response)
        except json.JSONDecodeError as e:
            print(f"⚠️ Failed to parse JSON: {e}")
            print(f"Raw response: {response[:200]}")
            return {"sprint_name": "Sprint 1", "tasks": []}

class JohnieAgent(Agent):
    """Johnie - Backend Developer Agent"""
    
    def __init__(self):
        super().__init__(
            name="Johnie",
            role="Backend Developer",
            system_prompt="""You are Johnie, an expert Python backend developer.
You write clean, secure, well-documented Flask APIs.

Always include:
- Type hints
- Docstrings
- Input validation (Pydantic)
- Error handling
- Logging

Return ONLY the Python code, no markdown, no explanation."""
        )
    
    def write_code(self, task_description: str, user_story: Dict) -> str:
        """Generate code for a task."""
        prompt = f"""User Story: {user_story.get('title', 'N/A')}
Acceptance Criteria:
{chr(10).join(f"- {c}" for c in user_story.get('acceptance_criteria', []))}

Task: {task_description}

Write complete, production-ready Flask API code. Return ONLY code, no markdown, no explanation, no backticks."""
        
        response = self.generate(prompt, temperature=0.2)
        
        # Clean up markdown code blocks
        response = response.strip()
        if response.startswith("```"):
            # Remove first and last lines
            lines = response.split("\n")
            # Find where code starts (skip ```python or just ```)
            start = 1
            if len(lines) > 1 and lines[0].startswith("```"):
                start = 1
            # Find where code ends (last line with ```)
            end = len(lines) - 1
            for i in range(len(lines) - 1, -1, -1):
                if lines[i].strip().startswith("```"):
                    end = i
                    break
            response = "\n".join(lines[start:end])
        
        return response

class BorisAgent(Agent):
    """Boris - Security Expert Agent"""
    
    def __init__(self):
        super().__init__(
            name="Boris",
            role="Security Expert",
            system_prompt="""You are Boris, a security expert.
You review code for vulnerabilities and provide actionable recommendations.

Check for:
- Input validation gaps
- Injection vulnerabilities
- Authentication/authorization issues
- Data exposure risks
- Rate limiting
- CORS configuration

Return markdown report with:
## Security Review: [Code Name]
### Findings
- [Issue 1]
- [Issue 2]
### Recommendations
- [Fix 1]
- [Fix 2]
### Verdict: ✅ APPROVED / ⚠️ NEEDS FIXES / ❌ REJECTED"""
        )
    
    def review_code(self, code: str, task_description: str) -> str:
        """Review code for security issues."""
        prompt = f"""Task: {task_description}

Code to review:
```python
{code}
```

Perform security review. Return markdown report."""
        
        return self.generate(prompt, temperature=0.3)

class LindaAgent(Agent):
    """Linda - Test Engineer Agent"""
    
    def __init__(self):
        super().__init__(
            name="Linda",
            role="Test Engineer",
            system_prompt="""You are Linda, an expert test engineer.
You write comprehensive pytest test suites.

Always test:
- Happy path (valid inputs)
- Edge cases (boundaries, empty, null)
- Error handling (invalid inputs, exceptions)
- Status codes (200, 201, 400, 404, 500)

Use pytest fixtures and clear test names.
Return ONLY Python test code, no markdown, no explanation."""
        )
    
    def write_tests(self, code: str, task_description: str, user_story: Dict) -> str:
        """Generate tests for code."""
        prompt = f"""User Story: {user_story.get('title', 'N/A')}
Task: {task_description}

Code under test:
{code}

Write comprehensive pytest test suite (15+ tests).
Test happy path, edge cases, and error handling.
Return ONLY code, no markdown, no backticks, no explanation."""
        
        response = self.generate(prompt, temperature=0.2)
        
        # Clean up markdown code blocks
        response = response.strip()
        if response.startswith("```"):
            lines = response.split("\n")
            start = 1
            end = len(lines) - 1
            for i in range(len(lines) - 1, -1, -1):
                if lines[i].strip().startswith("```"):
                    end = i
                    break
            response = "\n".join(lines[start:end])
        
        return response

class CouncilOrchestrator:
    """Main orchestrator that coordinates all agents."""
    
    def __init__(self):
        self.agents = {
            "geert": GeertAgent(),
            "saskia": SaskiaAgent(),
            "johnie": JohnieAgent(),
            "boris": BorisAgent(),
            "linda": LindaAgent()
        }
        
        # Create output directory
        OUTPUT_DIR.mkdir(exist_ok=True)
        
    def save_output(self, filename: str, content: Any):
        """Save agent output to file."""
        filepath = OUTPUT_DIR / filename
        
        if isinstance(content, dict) or isinstance(content, list):
            filepath.write_text(json.dumps(content, indent=2))
        else:
            filepath.write_text(str(content))
        
        print(f"💾 Saved: {filepath}")
    
    def run_sprint(self, project_description: str):
        """Run a full sprint cycle."""
        print("=" * 60)
        print("🚀 COUNCIL OF LLMs - REAL EXECUTION")
        print("=" * 60)
        print(f"📝 Project: {project_description[:100]}...")
        print(f"⏰ Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()
        
        # Step 1: Geert creates user stories
        print("=" * 60)
        print("STEP 1: Product Owner (Geert) - Create User Stories")
        print("=" * 60)
        user_stories_data = self.agents["geert"].create_user_stories(project_description)
        self.save_output("1-geert-user-stories.json", user_stories_data)
        user_stories = user_stories_data.get("user_stories", [])
        print(f"✅ Created {len(user_stories)} user stories")
        print()
        
        # Step 2: Saskia creates sprint plan
        print("=" * 60)
        print("STEP 2: Scrum Master (Saskia) - Create Sprint Plan")
        print("=" * 60)
        sprint_plan = self.agents["saskia"].create_sprint_plan(user_stories)
        self.save_output("2-saskia-sprint-plan.json", sprint_plan)
        tasks = sprint_plan.get("tasks", [])
        print(f"✅ Planned {len(tasks)} tasks")
        print()
        
        # Step 3: Execute tasks in dependency order
        completed_tasks = {}
        
        # Execute Johnie's tasks first
        for task in [t for t in tasks if t.get("agent", "").lower() == "johnie"]:
            task_id = task.get("id", "UNKNOWN")
            description = task.get("description", "")
            us_id = task.get("user_story_id", "")
            user_story = next((us for us in user_stories if us.get("id") == us_id), {})
            
            print("=" * 60)
            print(f"STEP 3: Backend Developer (Johnie) - {task_id}")
            print("=" * 60)
            code = self.agents["johnie"].write_code(description, user_story)
            output_file = f"3-{task_id}-johnie-code.py"
            self.save_output(output_file, code)
            completed_tasks[task_id] = {"code": code, "file": output_file}
            print(f"✅ Generated code for {task_id}")
            print()
        
        # Then Boris's reviews
        for task in [t for t in tasks if t.get("agent", "").lower() == "boris"]:
            task_id = task.get("id", "UNKNOWN")
            description = task.get("description", "")
            
            print("=" * 60)
            print(f"STEP 4: Security Expert (Boris) - {task_id}")
            print("=" * 60)
            
            # Find the code from Johnie
            johnie_task = next((t for t in tasks if t.get("agent", "").lower() == "johnie"), None)
            if johnie_task and johnie_task["id"] in completed_tasks:
                code = completed_tasks[johnie_task["id"]]["code"]
                review = self.agents["boris"].review_code(code, description)
                output_file = f"4-{task_id}-boris-review.md"
                self.save_output(output_file, review)
                completed_tasks[task_id] = {"review": review, "file": output_file}
                print(f"✅ Security review complete for {task_id}")
            else:
                print(f"⚠️ No code found to review for {task_id}")
            print()
        
        # Finally Linda's tests
        for task in [t for t in tasks if t.get("agent", "").lower() == "linda"]:
            task_id = task.get("id", "UNKNOWN")
            description = task.get("description", "")
            us_id = task.get("user_story_id", "")
            user_story = next((us for us in user_stories if us.get("id") == us_id), {})
            
            print("=" * 60)
            print(f"STEP 5: Test Engineer (Linda) - {task_id}")
            print("=" * 60)
            
            # Find the code from Johnie
            johnie_task = next((t for t in tasks if t.get("agent", "").lower() == "johnie"), None)
            if johnie_task and johnie_task["id"] in completed_tasks:
                code = completed_tasks[johnie_task["id"]]["code"]
                tests = self.agents["linda"].write_tests(code, description, user_story)
                output_file = f"5-{task_id}-linda-tests.py"
                self.save_output(output_file, tests)
                completed_tasks[task_id] = {"tests": tests, "file": output_file}
                print(f"✅ Test suite generated for {task_id}")
            else:
                print(f"⚠️ No code found to test for {task_id}")
            print()
        
        # Summary
        print("=" * 60)
        print("✅ SPRINT COMPLETE!")
        print("=" * 60)
        print(f"📁 All outputs saved to: {OUTPUT_DIR.absolute()}")
        print(f"⏰ Finished: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()
        print("📊 Generated Files:")
        for file in sorted(OUTPUT_DIR.glob("*")):
            size = file.stat().st_size
            print(f"  - {file.name} ({size} bytes)")

def main():
    """Main entry point."""
    # Test project: Simple Contact Form API
    project_description = """
Build a REST API for a contact form with the following features:

1. Accept contact form submissions with validation
   - Required fields: name (string), email (email), subject (string), message (text min 10 chars)
   - Return 201 on success with submission ID
   - Return 400 on validation errors

2. Health check endpoint
   - GET /health returns 200 OK with status

Use Flask + Pydantic for validation.
Include proper error handling and logging.
"""
    
    orchestrator = CouncilOrchestrator()
    orchestrator.run_sprint(project_description.strip())

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️ Interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Fatal error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

