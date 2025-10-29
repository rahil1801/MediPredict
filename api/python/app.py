from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in prod
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = os.path.join(os.path.dirname(__file__), "trained_model.pkl")
model = joblib.load(MODEL_PATH)

def preprocess(data):
    # similar to your previous logic, raise ValueError on invalid data
    d = {}
    d['age'] = int(data['age'])
    d['bmi'] = float(data['bmi'])
    d['children'] = int(data['children'])
    d['smoker'] = 0 if str(data['smoker']).lower() == 'yes' else 1
    region_mapping = {'southeast': 0, 'southwest': 1, 'northeast': 2, 'northwest': 3}
    d['region'] = region_mapping[str(data['region']).lower()]
    d['sex'] = 0 if str(data['sex']).lower() == 'male' else 1
    return d

@app.post("/predict")
async def predict(request: Request):
    payload = await request.json()
    try:
        p = preprocess(payload)
        features = np.array([[p['age'], p['sex'], p['bmi'], p['children'], p['smoker'], p['region']]])
        pred = float(model.predict(features)[0])
        return {"prediction": pred}
    except ValueError as ve:
        return {"error": str(ve)}, 400
    except Exception as e:
        return {"error": f"Internal error: {str(e)}"}, 500
