from boggle import Boggle
from flask import Flask, session, request, render_template, redirect, make_response, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

boggle_game = Boggle()

@app.route('/')
def make_board():
    """make a new board when get request sent to '/'"""
    board = boggle_game.make_board()
    session['board'] = board
    return render_template('boggle.html', board=board)

@app.route('/guess_check/', methods=['POST'])
def answer_check():
    ''' Check to see if valid word on board, if yes return valid, else invalid'''
    user_guess = request.form.get('guess')
    print('this is our attempt at figuring what is going on with answer_check()', session['board'])
    check_word_on_board = boggle_game.check_valid_word(session['board'], user_guess)
    result_dict = {'result': check_word_on_board}
    return jsonify(result_dict)
