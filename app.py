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
    return render_template('quiz.html', quiz=quiz_data)


if __name__ == '__main__':
    app.run()
