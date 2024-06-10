const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
  return tf.loadGraphModel('https://storage.googleapis.com/general_ml_dicoding/model.json');
}

module.exports = loadModel;
