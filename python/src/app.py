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


@app.route('/prediction', methods = ['POST', 'GET'])
@cross_origin()
def prediction():
    # director = request.args.get('director')
    # description = request.args.get('description')
    # genres = request.args.get('genres')
    # duration = request.args.get('duration')
    # title = request.args.get('title')
    # actors = request.args.get('actors')
    # budget = request.args.get('budget')

    input_parameters = {'Category_to_be_predicted': 'Good', 'Director': request.json['director'], 'Duration': request.json['duration'],
                        'Description': request.json['description'], 'Genre': request.json['genres']}
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
