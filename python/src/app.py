from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello():
    return 'Hello World'

@app.route('/input', methods=['GET', 'POST'])
@cross_origin()
def input():
    if request.method == 'GET':
        title = request.args.get('title')
        director = request.args.get('director')
        actors = request.args.get('actors')
        description = request.args.get('description')
        genres = request.args.get('genres')
        duration = request.args.get('duration')
        budget = request.args.get('budget')
        return request.args

    if request.method == 'POST':
        return request.json

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=7000, debug=True)
