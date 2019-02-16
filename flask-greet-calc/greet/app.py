from flask import Flask

app = Flask(__name__)

@app.route('/welcome')
def welcome():
    """Return a simple welcome message."""

    html = "<html><body><h1>welcome</h1></body></html>"
    return html

@app.route('/welcome/home')
def welcome_home():
    """Return a simple welcome message."""

    html = "<html><body><h1>welcome home</h1></body></html>"
    return html

@app.route('/welcome/back')
def welcome_back():
    """Return a simple welcome message."""

    html = "<html><body><h1>welcome back</h1></body></html>"
    return html