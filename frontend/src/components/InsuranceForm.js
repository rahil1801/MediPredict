import axios from 'axios';
import React, { useState } from 'react';

const PredictForm = () => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        bmi: '',
        children: '',
        smoker: '',
        region: ''
    });

    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending the request to Netlify serverless function
            const response = await axios.post('/.netlify/functions/predict', formData);

            setPrediction(response.data.prediction);
            setError(null);
        } catch (error) {
            console.error("Prediction request failed:", error);
            setError('Error in prediction');
            setPrediction(null);
        }
    };


    return ( 
        <div className="py-20 px-4 bg-white/50" id='predict'>
            <div className='max-w-4xl mx-auto'>
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Get Your Insurance Cost Prediction
                    </h2>
                    <p className="text-lg text-gray-600">
                        Fill in your details below to get an accurate prediction of your medical insurance costs
                    </p>
                </div>
                <div className="bg-white/80 p-8 shadow-2xl hover:shadow-3xl
                transition-all duration-500">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="age">Age</label>
                                <input 
                                    name="age" 
                                    value={formData.age} 
                                    onChange={handleChange}
                                    placeholder="Enter your age"
                                    type="number"
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="sex">Gender</label>
                                <select 
                                    name="sex" 
                                    value={formData.sex} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                >
                                    <option value="" disabled>Select your Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="bmi">BMI</label>
                                <input 
                                    name="bmi" 
                                    value={formData.bmi} 
                                    onChange={handleChange} 
                                    placeholder="Enter your BMI" 
                                    type="number" 
                                    step="0.1" 
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="children">Children</label>
                                <input 
                                    name="children" 
                                    value={formData.children} 
                                    onChange={handleChange} 
                                    placeholder="Number of children" 
                                    type="number" 
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="smoker">Smoker</label>
                                <select 
                                    name="smoker" 
                                    value={formData.smoker} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                >
                                    <option value="" disabled>Are you a smoker?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium mb-1" htmlFor="region">Region</label>
                                <select 
                                    name="region" 
                                    value={formData.region} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                >
                                    <option value="" disabled>Select your region</option>
                                    <option value="northeast">Northeast</option>
                                    <option value="northwest">Northwest</option>
                                    <option value="southeast">Southeast</option>
                                    <option value="southwest">Southwest</option>
                                </select>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                        >
                            Predict
                        </button>
                    </form>
                    {prediction !== null && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold">Predicted Insurance Cost</h3>
                            <p className="text-2xl font-medium">${prediction.toFixed(2)}</p>
                        </div>
                    )}
                    {error && (
                        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg shadow-md text-center">
                            <p>{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PredictForm;
