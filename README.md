
# Sentiment Scope

## Overview

Sentiment Scope is a powerful Chrome extension designed to help users perform sentiment analysis on any selected text within their browser. By simply highlighting a piece of text and activating the extension, users can quickly gain insights into the emotional tone and subjective nature of the content. This extension provides detailed data, including the polarity, subjectiveness, positivity, and negativity of the selected text.

## Features

- **Polarity Analysis**: Determines the overall sentiment of the text, whether it is positive, negative, or neutral.
- **Subjectiveness Analysis**: Evaluates how subjective or objective the selected text is.
- **Positivity and Negativity Scores**: Provides specific scores indicating the level of positive and negative emotions in the text.
- **User-Friendly Interface**: Easy to use with a simple and intuitive UI.
- **Real-Time Results**: Instant sentiment analysis with real-time updates as you select different pieces of text.
- **Lightweight and Fast**: Optimized for performance to ensure a seamless user experience.
- **No External API**: The sentiment analysis is performed using a Flask server created by the developer, ensuring data privacy and faster processing.

## Uses

- **Content Creation**: Writers and bloggers can analyze the sentiment of their content to ensure it conveys the desired tone.
- **Market Research**: Businesses can analyze customer reviews and feedback to gauge public opinion and sentiment towards their products or services.
- **Social Media Monitoring**: Social media managers can quickly analyze comments and posts to understand audience sentiment.
- **Educational Purposes**: Students and researchers can use the extension to study the sentiment of various texts for academic projects.
- **Customer Support**: Support teams can analyze customer messages to better understand their emotional state and respond accordingly.

## How It Works

The Chrome extension leverages a Flask server to perform sentiment analysis. This server uses the TextBlob library to analyze the selected text. TextBlob is a Python library for processing textual data. It provides a simple API for diving into common natural language processing (NLP) tasks, such as part-of-speech tagging, noun phrase extraction, sentiment analysis, classification, translation, and more.

### Flask Server

- The Flask server handles requests from the Chrome extension.
- It processes the selected text using TextBlob and returns the sentiment analysis results.
- The server ensures that no external APIs are used, maintaining data privacy and security.

### TextBlob

TextBlob is built on top of NLTK and Pattern, offering an easy-to-use interface for NLP tasks. For sentiment analysis, TextBlob assigns polarity and subjectiveness scores to the input text. Polarity ranges from -1 (negative) to 1 (positive), while subjectiveness ranges from 0 (objective) to 1 (subjective).

## Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/yourusername/sentiment-scope.git
    ```

2. Navigate to the extension directory:
    ```sh
    cd sentiment-scope
    ```

3. Set up the Flask server:
    ```sh
    cd flask-server
    pip install -r requirements.txt
    python main.py
    ```

4. Open Chrome and go to `chrome://extensions/`.

5. Enable **Developer mode** by clicking the toggle switch in the top right corner.

6. Click the **Load unpacked** button and select the directory where you cloned the repository.

7. The extension should now be installed and ready to use.

## Usage

1. Highlight any text on a webpage.

2. Click on the Sentiment Scope extension icon in the Chrome toolbar.

3. View the sentiment analysis results, including polarity, subjectiveness, positivity, and negativity scores.

## Screenshots

![Screenshot 1](path/to/screenshot1.png)
*Polarity and Subjectiveness Analysis*

![Screenshot 2](path/to/screenshot2.png)
*Positivity and Negativity Scores*

## Technologies Used

- **JavaScript**: The core language for developing the extension.
- **HTML/CSS**: For creating the user interface.
- **Flask**: Python web framework for handling backend requests.
- **TextBlob**: Python library for processing textual data and performing sentiment analysis.

