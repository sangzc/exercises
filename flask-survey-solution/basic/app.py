from flask import Flask, session, request, render_template, redirect, make_response
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

# key names will use to store some things in the session;
# put here as constants so we're guaranteed to be consistent in
# our spelling of these

RESPONSES_KEY = 'responses'

app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"

debug = DebugToolbarExtension(app)


@app.route("/")
def start_survey():
    """Select a survey."""

    session[RESPONSES_KEY] = []

    return render_template("survey_start.html",
                           survey=survey)


@app.route("/questions/<int:qid>", methods=["POST"])
def handle_question(qid):
    """Handle a question: save last question & ask new one."""

    if qid > 0:
        # they've answered a question, so get response choice
        choice = request.form['answer']

        # add this response to the list in the session
        responses = session[RESPONSES_KEY]
        responses.append(choice)
        session[RESPONSES_KEY] = responses

    if qid >= len(survey.questions):
        # Done survey? Thank them
        return render_template("completion.html")

    else:
        # go to next question
        question = survey.questions[qid]
        return render_template("question.html",
                               question_num=qid,
                               question=question)
