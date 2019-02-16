from flask import Flask, session, request, render_template, redirect, make_response
from flask_debugtoolbar import DebugToolbarExtension
from surveys import surveys

# key names will use to store some things in the session;
# put here as constants so we're guaranteed to be consistent in
# our spelling of these

CURRENT_SURVEY_KEY = 'current_survey'
RESPONSES_KEY = 'responses'

app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"

debug = DebugToolbarExtension(app)


@app.route("/")
def show_pick_survey_form():
    """Show pick-a-survey form."""

    return render_template("pick-survey.html", surveys=surveys)


@app.route("/", methods=["POST"])
def pick_survey():
    """Select a survey."""

    survey_id = request.form['survey_code']

    # don't let them re-take a survey until cookie times out
    if request.cookies.get(f"completed_{survey_id}"):
        return render_template("already-done.html")

    survey = surveys[survey_id]
    session[CURRENT_SURVEY_KEY] = survey_id
    session[RESPONSES_KEY] = []

    return render_template("survey_start.html",
                           survey=survey)


@app.route("/questions/<int:qid>", methods=["POST"])
def handle_question(qid):
    """Handle a question: save last question & ask new one."""

    if qid > 0:
        # they've answered a question, so get response choice/text
        choice = request.form['answer']
        text = request.form.get("text", "")

        # add this response to the list in the session
        responses = session[RESPONSES_KEY]
        responses.append({"choice": choice, "text": text})
        session[RESPONSES_KEY] = responses

    survey_code = session[CURRENT_SURVEY_KEY]
    survey = surveys[survey_code]

    if qid >= len(survey.questions):
        # they're done survey, so redirect to thanks page
        return redirect("/thanks")

    else:
        # go to next question
        question = survey.questions[qid]
        return render_template("question.html",
                               question_num=qid,
                               question=question)


@app.route("/thanks")
def say_thanks():
    """Thank user and list responses."""

    survey_id = session[CURRENT_SURVEY_KEY]
    survey = surveys[survey_id]
    responses = session[RESPONSES_KEY]
    print("responses=", responses)

    html = render_template("completion.html",
                           survey=survey,
                           responses=responses)

    # Set cookie noting this survey is done so they can't re-do it
    response = make_response(html)
    response.set_cookie(f"completed_{survey_id}", "yes", max_age=60)
    return response
