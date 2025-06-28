from flask import Flask, request, jsonify
import numpy as np
import joblib  # Changed from pickle to joblib
import os

app = Flask(__name__)

# Allow Cross-Origin Resource Sharing (CORS)
from flask_cors import CORS
CORS(app)

# Load your trained model from the 'models' directory
model_path = os.path.join('trained_model.pkl')
model = joblib.load(model_path)  # Using joblib instead of pickle

# Function to convert input to numeric values
def preprocess_input(data):
    try:
        # Convert each input to appropriate numeric type
        data['age'] = int(data['age'])
        data['bmi'] = float(data['bmi'])
        data['children'] = int(data['children'])
        data['smoker'] = 0 if data['smoker'].lower() == 'yes' else 1  # Fixed: 0=yes, 1=no to match training
        region_mapping = {
            'southeast': 0,
            'southwest': 1,
            'northeast': 2,
            'northwest': 3
        }
        data['region'] = region_mapping[data['region'].lower()]
        data['sex'] = 0 if data['sex'].lower() == 'male' else 1  # 0=male, 1=female to match training
    except Exception as e:
        raise ValueError(f"Invalid input data: {str(e)}") from e
    return data

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        processed_data = preprocess_input(data)
        # Ensure consistent feature order - use the same order as during training
        features = [
            processed_data['age'],
            processed_data['sex'],
            processed_data['bmi'],
            processed_data['children'],
            processed_data['smoker'],
            processed_data['region']
        ]
        features = np.array(features).reshape(1, -1)
        prediction = model.predict(features)[0]
        return jsonify({'prediction': float(prediction)})  # Convert numpy float to native Python float
    except ValueError as ve:
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        return jsonify({'error': f'Internal Server Error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)