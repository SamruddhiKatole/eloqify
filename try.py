from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/upload_resume', methods=['POST'])
def upload_resume():
    file = request.files.get('file')
    if not file:
        return jsonify({"text": "No file provided"}), 400
    
    # Example extraction logic (replace with your own)
    extracted_text = "Extracted text from resume..."
    return jsonify({"text": extracted_text})

if __name__ == '__main__':
    # Ensure the host is 127.0.0.1 and port is 5000
    app.run(host='127.0.0.1', port=5000, debug=True)
