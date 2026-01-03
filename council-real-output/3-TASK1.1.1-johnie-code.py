from flask import Flask, request, jsonify
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