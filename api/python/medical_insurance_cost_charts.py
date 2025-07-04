import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import pickle

"""Data Collection & Analysis"""

# loading the data from csv file to a Pandas DataFrame
insurance_dataset = pd.read_csv('E:\Web Dev\\flask_ml_project\\backend\insurance.csv')

# first 5 rows of the dataframe
insurance_dataset.head()

# number of rows and columns
insurance_dataset.shape

# getting some information about the dataset
insurance_dataset.info()

"""Categorical Features:
* Sex
* Smoker
- Region
"""

# checking for missing values
insurance_dataset.isnull().sum()

"""Data Analysis"""

# statistical Measures of the dataset
insurance_dataset.describe()

# distribution of age values
sns.set()
plt.figure(figsize=(6,6))
sns.distplot(insurance_dataset['age'])
plt.title('Age Distribution')
plt.show()

# Gender column
plt.figure(figsize=(6,6))
sns.countplot(x='sex', data=insurance_dataset)
plt.title('Sex Distribution')
plt.show()

insurance_dataset['sex'].value_counts()

# bmi distribution
plt.figure(figsize=(6,6))
sns.distplot(insurance_dataset['bmi'])
plt.title('BMI Distribution')
plt.show()

"""Normal BMI Range --> 18.5 to 24.9"""

# children column
plt.figure(figsize=(6,6))
sns.countplot(x='children', data=insurance_dataset)
plt.title('Children')
plt.show()

insurance_dataset['children'].value_counts()

# smoker column
plt.figure(figsize=(6,6,))
sns.countplot(x='smoker',data = insurance_dataset)
plt.title('smoker')
plt.show()

insurance_dataset['smoker'].value_counts()

# region column
plt.figure(figsize=(6,6))
sns.countplot(x='region', data=insurance_dataset)
plt.title('region')
plt.show()

insurance_dataset['region'].value_counts()

# distribution of charges value
sns.set()
plt.figure(figsize=(6,6))
sns.distplot(insurance_dataset['charges'])
plt.title('Charge Distribution')
plt.show()

"""Data Pre-Processing

Encoding the categorical features
"""

# Encoding sex column
insurance_dataset.replace({'sex':{'male':0, 'female':1}}, inplace=True)

# encoding 'smoker' column
insurance_dataset.replace({'smoker':{'yes':0, 'no':1}}, inplace=True)

# encoding 'region' column
insurance_dataset.replace({'region':{'southeast':0, 'southwest':1, 'northeast':2, 'northwest':3}}, inplace=True)

"""Splitting the Features and Target"""

X = insurance_dataset.drop(columns='charges', axis=1)
Y = insurance_dataset['charges']

print(X)

print(Y)

"""Splitting the data into Trining data & Testing Data"""

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2, random_state=2)

print(X.shape, X_train.shape, X_test.shape)

"""Model Training

Linear Regression
"""

# Loading the Linear Regression model
regressor = LinearRegression()

regressor.fit(X_train, Y_train)

"""Model Evaluation"""

# prediction on training data
training_data_prediction = regressor.predict(X_train)

# R squared value
r2_train = metrics.r2_score(Y_train, training_data_prediction)
print('R Squared Value :  ',r2_train)

# prediction on test data
test_data_prediction = regressor.predict(X_test)

# R squared value
r2_test = metrics.r2_score(Y_test, test_data_prediction)
print('R Squared Value :  ',r2_test)

#save the model
with open('model.pkl', 'wb') as model_file:
    pickle.dump(regressor, model_file)

"""Building a Predictive System

"""

# input_data = (31,1,25.74,0,1,0)

# # changing input_data to a numpy array
# input_data_as_numpy_array = np.asarray(input_data)

# # reshape the array
# input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

# prediction = regressor.predict(input_data_reshaped)
# print(prediction)

# print('The insurance cost is USD ', prediction[0])



