import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import joblib

# Load and preprocess the data
insurance_dataset = pd.read_csv('./insurance.csv')

# Encoding categorical features
insurance_dataset.replace({'sex': {'male': 0, 'female': 1}}, inplace=True)
insurance_dataset.replace({'smoker': {'yes': 0, 'no': 1}}, inplace=True)
insurance_dataset.replace({'region': {'southeast': 0, 'southwest': 1, 'northeast': 2, 'northwest': 3}}, inplace=True)

# Split into features and target
X = insurance_dataset.drop(columns='charges', axis=1)
Y = insurance_dataset['charges']

# Split into train and test sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# Train the model
regressor = LinearRegression()
regressor.fit(X_train, Y_train)

# Evaluate the model
training_data_prediction = regressor.predict(X_train)
r2_train = metrics.r2_score(Y_train, training_data_prediction)

test_data_prediction = regressor.predict(X_test)
r2_test = metrics.r2_score(Y_test, test_data_prediction)

print(f'Training R-squared: {r2_train}')
print(f'Test R-squared: {r2_test}')

# Save the model to a file
joblib.dump(regressor, 'trained_model.pkl')

# Also save the column names for reference when making predictions
model_columns = list(X.columns)
joblib.dump(model_columns, 'model_columns.pkl')

print("Model saved as trained_model.pkl")
print("Model columns saved as model_columns.pkl")