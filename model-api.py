from flask import Flask, request
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from transformers import TFAutoModel, AutoTokenizer
import transformers
import logging
transformers.logging.set_verbosity(transformers.logging.ERROR)
tf.get_logger().setLevel(logging.ERROR)

app = Flask(__name__)
CORS(app)

MAX_LEN = 250
MODEL = 'roberta-base'
TOKENIZER = AutoTokenizer.from_pretrained(MODEL)

def regular_encode(text, tokenizer=TOKENIZER, max_len=MAX_LEN):
    return np.array(tokenizer.batch_encode_plus(text, padding='max_length', truncation=True, max_length=max_len)['input_ids'])

def load_model(max_len=MAX_LEN, model=MODEL):
    transformer = TFAutoModel.from_pretrained(model)
    input_word_ids = tf.keras.layers.Input(shape = (max_len, ), dtype=tf.int32, name='input_word_ids')
    sequence_output = transformer(input_word_ids)[0]
    cls_token = sequence_output[:, 0, :]
    output = tf.keras.layers.Dense(1, activation='linear', dtype='float32')(cls_token)
    model = tf.keras.models.Model(inputs = [input_word_ids], outputs=[output])
    return model

model = load_model()
model.load_weights('./models/model_1.h5')

@app.route('/predict', methods=['POST'])
def predict():
    request_data = request.get_json()
    text = regular_encode([request_data['text']])
    pred = model.predict(text)[0][0]
    return {"prediction": str(pred)}

if __name__ == '__main__':
    app.run(debug=True)