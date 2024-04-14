from flask import Flask, render_template, request, jsonify
from data import data

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


def update_user(new_data):
    if 'step' not in new_data:
        return False, "'step' is required"

    data['user']['step'] = new_data['step']
    data['user']['currentQuizQuestion'] = new_data.get('currentQuizQuestion', data['user']['currentQuizQuestion'])
    data['user']['quizScore'] = new_data.get('quizScore', data['user']['quizScore'])

    return True, None


@app.route('/update_user_step', methods=['POST'])
def update_user_step():
    new_data = request.get_json()
    success, error = update_user(new_data)
    if not success:
        return jsonify({'success': False, 'error': error}), 400
    return jsonify({'success': True})


@app.route('/learn')
def learn():
    update_user({'step': 1})
    birds_data = data['birds']
    return render_template('birdsList.html', birds=birds_data)


@app.route('/quiz')
def quiz():
    quiz_data = data['quizQuestions']
    return render_template('Quiz/quiz.html', quiz=quiz_data)

@app.route('/quiz/<int:question_number>')
def quiz_question(question_number):
    #User has started quiz
    if question_number == 1:
        update_user({'step': 2, 'currentQuizQuestion': 1, 'quizScore': 0})

    quiz_data = data['quizQuestions']
    question = quiz_data[question_number - 1]

    if question['type'] == 'QUIZ_MULTIPLE_CHOICE':
        return render_template('Quiz/multiple_choice.html', question=question, question_number=question_number, score=data['user']['quizScore'], total_num_questions=len(quiz_data))
    

    return render_template('Quiz/mapping.html', question=question, question_number=question_number, score = data['user']['quizScore'], total_num_questions=len(quiz_data))

@app.route('/quiz_results')
def quiz_results():
    return render_template('Quiz/quiz_results.html', score=data['user']['quizScore'], total_num_questions=len(data['quizQuestions']))

if __name__ == '__main__':
    app.run()
