from flask import Flask, render_template, request, jsonify, Blueprint
import json
import os
from flask.helpers import make_response
from flask.wrappers import Request


CLIENT_LANG = 'ru'
THEME = 'dark'

app = Flask(__name__)
app.config['SECRET_KEY'] = '--s3cret_kEy-'


@app.route('/', methods=['GET'])
def index():
    if CLIENT_LANG == 'ru':
        return render_template('index.html')
    else:
        return render_template('index_en.html')

@app.route('/start_game', methods=['POST'])
def start_game():
    # if CLIENT_LANG == 'ru':
    #     return render_template('index.html')
    # else:
    #     return render_template('index_en.html')
    data = json.loads(request.form['data'])
    print(data)
    return 'Data received', 200


@app.route('/change_language', methods=['POST'])
def change_language():
    global CLIENT_LANG
    data = json.loads(request.form['data'])
    CLIENT_LANG = data
    return 'Data received', 200


@app.route('/theme', methods=["GET", "POST"])
def change_theme():
    global THEME
    if request.method == 'GET':
        return THEME, 200
    if request.method == 'POST':
        data = json.loads(request.form['data'])
        THEME = data
        print(THEME)
        return 'Data received', 200


def main():
    app.run(port=1234, host="0.0.0.0")


if __name__ == "__main__":
    main()
