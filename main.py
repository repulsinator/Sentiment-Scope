from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/sentiment', methods=['POST'])
def analyze_sentiment():
    # Extract text from JSON request body
    text = request.get_json()['text']

    # Perform sentiment analysis with TextBlob
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity

    # Calculate positive and negative percentages
    if polarity > 0:
        positive_percentage = polarity * 100
        negative_percentage = 0
    elif polarity < 0:
        positive_percentage = 0
        negative_percentage = abs(polarity) * 100
    else:  # polarity == 0
        positive_percentage = 50
        negative_percentage = 50

    sentiment = {
        'polarity': polarity,
        'subjectivity': blob.sentiment.subjectivity,
        'positive_percentage': positive_percentage,
        'negative_percentage': negative_percentage
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