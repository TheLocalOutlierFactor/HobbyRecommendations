from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin
import json
from joblib import load
from sklearn.neural_network import MLPClassifier
from sklearn import preprocessing
import numpy as np

app = Flask(__name__, static_folder='../client/build', static_url_path='')
cors = CORS(app)

clf_b = load('./models/model_balanced.joblib')
clf_0 = load('./models/model_bias_0.joblib')
clf_1 = load('./models/model_bias_1.joblib')

HOBBIES_B = np.array(['История',
                      'Психология',
                      'Компьютеры',
                      'Поэзия',
                      'Спорт (в качестве зрителя)',
                      'Занятие спортом',
                      'Шоппинг',
                      'Наука и технологии',
                      'Домашние животные'
                     ])

HOBBIES_0 = np.array(['Политика',
                      'Математика',
                      'Физика',
                      'Экономика и менеджмент',
                      'Биология',
                      'Химия',
                      'География',
                      'Медицина',
                      'Юриспруденция',
                      'Машины',
                      'Искусство',
                      'Религия',
                      'Танцы',
                      'Игра на музыкальных инструментах',
                      'Написание стихов',
                      'Садоводство',
                      'Жизнь знаменитостей',
                      'Театр',
                      'Экстремальные виды спорта'
                     ])

HOBBIES_1 = np.array(['Интернет',
                      'Иностранные языки',
                      'Выезды на природу',
                      'Социализация'
                     ])

@app.route('/api/questions')
def get_questions():
    with open('questions.json') as q:
        questions = json.load(q)
    return questions

@app.route('/api/result', methods=["POST"])
def get_result():
    answers = request.json.get("Answers")
    answers = [int(x) for x in answers]
    answers = np.asarray(answers).reshape(1, -1)
    answers = preprocessing.scale(answers, axis=1)

    predictions_b = clf_b.predict_proba(answers)[0]
    predictions_0 = clf_0.predict_proba(answers)[0]
    predictions_1 = clf_1.predict_proba(answers)[0]

    list_1 = list(zip(HOBBIES_B, predictions_b))
    list_2 = list(zip(HOBBIES_0, predictions_0))
    list_3 = list(zip(HOBBIES_1, predictions_1))

    full_list = list_1 + list_2 + list_3
    full_list = sorted(full_list, key=lambda x: x[1], reverse=True)

    final_result = []
    cnt = 0
    for res in full_list:
        if res[1] < 0.5 or cnt == 6:
            break
        else:
            cnt += 1
            final_result.append(res[0])

    recommendations = {'recommendations': final_result}
    return recommendations

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
