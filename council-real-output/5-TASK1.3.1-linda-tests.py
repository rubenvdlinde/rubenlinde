import pytest
from flask import request, jsonify
from pydantic import BaseModel, ValidationError

app = Flask(__name__)

class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        form_data = ContactForm.parse_obj(request.json)
        # Simulate sending the data to a service or database
        submission_id = "12345"  # Replace with actual logic to generate a unique ID
        return jsonify({'submission_id': submission_id}), 201
    except ValidationError as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

# Happy path test
def test_submit_contact_happy_path():
    data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Test Subject",
        "message": "This is a test message."
    }
    response = app.test_client().post('/submit-contact', json=data)
    assert response.status_code == 201
    assert 'submission_id' in response.json

# Edge case tests
def test_submit_contact_edge_cases():
    # Empty data
    response = app.test_client().post('/submit-contact', json={})
    assert response.status_code == 400
    assert 'error' in response.json

    # Null data
    response = app.test_client().post('/submit-contact', json=None)
    assert response.status_code == 400
    assert 'error' in response.json

    # Invalid email format
    data = {
        "name": "John Doe",
        "email": "invalid-email",
        "subject": "Test Subject",
        "message": "This is a test message."
    }
    response = app.test_client().post('/submit-contact', json=data)
    assert response.status_code == 400
    assert 'error' in response.json

    # Invalid subject length
    data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "This is a very long subject that exceeds the maximum allowed length.",
        "message": "This is a test message."
    }
    response = app.test_client().post('/submit-contact', json=data)
    assert response.status_code == 400
    assert 'error' in response.json

# Error handling tests
def test_submit_contact_error_handling():
    data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Test Subject",
        "message": "This is a test message."
    }
    with pytest.raises(ValidationError) as e:
        app.test_client().post('/submit-contact', json=data)
    assert 'error' in str(e.value)

# Status code tests
def test_submit_contact_status_codes():
    data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Test Subject",
        "message": "This is a test message."
    }
    response = app.test_client().post('/submit-contact', json=data)
    assert response.status_code == 201

    data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Test Subject",
        "message": "This is a test message."
    }
    with pytest.raises(ValidationError) as e:
        app.test_client().post('/submit-contact', json=data)
    assert response.status_code == 400