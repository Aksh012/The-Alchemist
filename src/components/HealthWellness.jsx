import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";

const categories = [
  {
    name: "Skin Care",
    imageUrl: "images/skincare.jpg",
    plants: ["Aloe Vera", "Neem", "Turmeric", "Tulsi"],
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    name: "Hair Care",
    imageUrl: "/images/haircare.png",
    plants: ["Bhringraj", "Amla", "Hibiscus", "Fenugreek"],
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    name: "Diseases",
    imageUrl: "/images/diseases.png",
    plants: ["Ashwagandha", "Tulsi", "Ginger"],
    bgColor: "bg-red-100",
    textColor: "text-red-800",
  },
  {
    name: "Nutrition",
    imageUrl: "/images/nutrition.png",
    plants: ["Moringa", "Spinach", "Broccoli"],
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    name: "Fitness",
    imageUrl: "/images/fitness.png",
    plants: ["Wheatgrass", "Spirulina", "Ginseng"],
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    name: "Mental Health",
    imageUrl: "/images/mentalhealth.png",
    plants: ["Lavender", "Chamomile", "Ashwagandha"],
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
];

const wellnessTips = [
  {
    title: "Hydrate Regularly",
    description:
      "Drinking enough water is crucial for maintaining optimal health. It aids digestion, skin health, and regulates body temperature.",
  },
  {
    title: "Eat Whole Foods",
    description:
      "Incorporate more fruits, vegetables, whole grains, and nuts into your diet to improve overall wellness and energy levels.",
  },
  {
    title: "Daily Exercise",
    description:
      "Physical activity boosts your immune system, improves mood, and helps maintain a healthy weight.",
  },
  {
    title: "Mental Wellness",
    description:
      "Practicing mindfulness and meditation can significantly reduce stress and promote emotional balance.",
  },
];

const HealthWellness = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <Navbar />
      <div className="py-8 px-4 text-center pt-36 bg-gradient-to-br from-teal-900 via-emerald-800 to-green-700 min-h-screen">
        <h2 className="text-4xl font-bold mb-6 text-green-100">
          Explore Health & Wellness Categories
        </h2>

        {/* Reduced Width for Text */}
        <p className="text-lg mb-8 text-teal-100 mx-auto max-w-3xl">
          Discover the power of natural remedies and holistic living through our
          curated categories. Learn more about plants that can improve your
          skin, hair, fitness, and overall well-being.
        </p>

        {/* Add Padding to Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 cursor-pointer duration-300 ease-in-out`}
              onClick={() => openModal(category)}
            >
              <img
                className="w-full h-48 object-cover"
                src={category.imageUrl}
                alt={category.name}
              />
              <div className="p-4">
                <h3
                  className={`text-xl pb-2 font-semibold ${category.textColor}`}
                >
                  {category.name}
                </h3>
                <p className={`text-sm ${category.textColor} opacity-80`}>
                  Explore plants and herbs known for their healing and wellness
                  properties.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Wellness Tips with Reduced Width */}
        <div className="mt-12 px-4">
          <h2 className="text-3xl font-bold mb-10 text-green-100">
            Wellness Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
            {/* Display All Cards */}
            {wellnessTips.map((tip, index) => (
              <div
                key={index}
                className="bg-teal-800 bg-opacity-50 p-6 rounded-lg shadow-md max-w-md mx-auto shadow-white/20"
              >
                <h3 className="text-xl font-semibold text-green-200 mb-2">
                  {tip.title}
                </h3>
                <p className="text-teal-100">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Add Call to Action Section with Reduced Text Width */}
          <div className="mt-16 bg-teal-800 bg-opacity-50 py-8 px-6 rounded-lg shadow-lg max-w-4xl mx-auto text-center shadow-white/20">
            <h3 className="text-2xl font-bold text-green-200 mb-4">
              Take a Step Towards Better Health
            </h3>
            <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
              Embrace natural living and enhance your well-being by integrating
              these herbs and practices into your daily life. Join us in a
              journey towards a healthier, balanced lifestyle.
            </p>
            <button className="py-3 px-6 bg-green-500 text-teal-900 font-semibold rounded-lg shadow-md hover:bg-green-400 transition-transform transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>

        {selectedCategory && (
          <Modal category={selectedCategory} closeModal={closeModal} />
        )}
      </div>
    </>
  );
};

export default HealthWellness;
