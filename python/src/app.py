from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

import blackbox


@app.route('/')
def hello():
    return 'Hello World'


@app.route('/prediction')
@cross_origin()
def prediction():
    title = request.args.get('title')
    director = request.args.get('director')
    actors = request.args.get('actors')
    description = request.args.get('description')
    genres = request.args.get('genres')
    duration = request.args.get('duration')
    budget = request.args.get('budget')

    input_parameters = {'Category_to_be_predicted': 'Good', 'Director': 'Zack Snyder', 'Duration': 120,
                        'Description': 'A very bloody good movie', 'Genre': 'Drama, Horror'}
    models = blackbox.Classification_Model_Perfected.Train_Models(input_parameters)
    prediction = blackbox.Classification_Model_Perfected.Prediction_Controller(input_parameters, models)

    json = {
        'category': prediction.Category,
        'probability': prediction.Probability
    }

    return jsonify(json)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=7000, debug=True)
