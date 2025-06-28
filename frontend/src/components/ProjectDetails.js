
import React from 'react';
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, Users } from 'lucide-react';

const ProjectDetails = () => {
  const features = [
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Advanced ML Algorithm",
      description: "Our machine learning model uses regression analysis to provide accurate insurance cost predictions based on multiple health and demographic factors."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Secure & Private",
      description: "Your personal information is protected with enterprise-grade security. We don't store your data and all calculations are performed securely."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Real-time Predictions",
      description: "Get instant insurance cost estimates without waiting. Our optimized system provides results in seconds with high accuracy rates."
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      title: "User-Friendly Interface",
      description: "Simple, intuitive design that makes it easy for anyone to get insurance predictions without technical knowledge required."
    }
  ];

  const stats = [
    { label: "Predictions Made", value: "50,000+" },
    { label: "Accuracy Rate", value: "94.5%" },
    { label: "Happy Users", value: "15,000+" },
    { label: "Years Experience", value: "5+" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Our Prediction System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our medical insurance cost prediction system leverages cutting-edge machine learning 
            technology to provide accurate and reliable insurance cost estimates tailored to your unique profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="border-0 p-5 py-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <div className="text-xl text-gray-800">
                  {feature.title}
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-center mt-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="hover-scale">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Enter Your Information</h4>
              <p className="text-gray-600">
                Provide basic demographic and health information including age, BMI, smoking status, and region.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">AI Analysis</h4>
              <p className="text-gray-600">
                Our machine learning algorithm analyzes your data against thousands of insurance records to find patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Get Prediction</h4>
              <p className="text-gray-600">
                Receive an accurate insurance cost prediction instantly, helping you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
