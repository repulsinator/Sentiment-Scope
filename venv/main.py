from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/sentiment', methods=['POST'])
def analyze_sentiment():
    # Extract text from JSON request body
    text = request.get_json()['text']

    # Perform sentiment analysis with TextBlobp
    blob = TextBlob(text)
    sentiment = {
        'polarity': blob.sentiment.polarity,
        'subjectivity': blob.sentiment.subjectivity
    }

    return jsonify(sentiment), 200  # Return JSON response with status code

@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Invalid request'}), 400

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True)  # Starts the Flask application server
    print("Server is running on http://127.0.0.1:5000")