from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
from json import JSONEncoder
import numpy

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

    class NumpyArrayEncoder(JSONEncoder):
        def default(self, obj):
            if isinstance(obj, numpy.ndarray):
                return obj.tolist()
            return JSONEncoder.default(self, obj)

    # Serialization
    encodedArray = {"prediction": prediction}
    encodedData = json.dumps(encodedArray, cls=NumpyArrayEncoder) 
    return encodedData


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=7000, debug=True)
