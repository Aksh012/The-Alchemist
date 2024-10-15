import React, { useState } from 'react';
import Navbar from './Navbar';

const RemediesPage = () => {
  // Dummy remedies data with user information
  const [remedies, setRemedies] = useState([
    {
      id: 1,
      title: 'Coconut Oil for Tan Skin',
      description: 'Apply coconut oil to the tanned areas for natural moisturization and tan removal.',
      user: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=1' },
    },
    {
      id: 2,
      title: 'Aloe Vera for Hair Fall',
      description: 'Use aloe vera gel on the scalp to reduce hair fall and promote hair growth.',
      user: { name: 'Bob Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    },
    {
      id: 3,
      title: 'Honey and Olive Oil for Dry Skin',
      description: 'Mix honey and olive oil and apply to dry skin for hydration.',
      user: { name: 'Charlie Brown', avatar: 'https://i.pravatar.cc/150?img=3' },
    },
    {
      id: 4,
      title: 'Tea Tree Oil for Dandruff',
      description: 'Apply diluted tea tree oil to the scalp to combat dandruff effectively.',
      user: { name: 'Diana Prince', avatar: 'https://i.pravatar.cc/150?img=4' },
    },
    {
      id: 5,
      title: 'Lemon Juice for Oily Skin',
      description: 'Apply lemon juice to oily areas to reduce shine and control oil.',
      user: { name: 'Ethan Hunt', avatar: 'https://i.pravatar.cc/150?img=5' },
    },
    {
      id: 6,
      title: 'Oatmeal for Sensitive Skin',
      description: 'Use oatmeal as a gentle exfoliant for sensitive skin.',
      user: { name: 'Fiona Gallagher', avatar: 'https://i.pravatar.cc/150?img=6' },
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [newRemedy, setNewRemedy] = useState({ title: '', description: '' });

  // Define a color palette
  const colors = [
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-purple-100',
    'bg-red-100',
    'bg-teal-100',
  ];

  const handleCardClick = (remedy) => {
    setSelectedRemedy(remedy);
    setShowModal(true);
  };

  const handleAddRemedy = () => {
    setRemedies([...remedies, { id: remedies.length + 1, ...newRemedy, user: { name: 'New User', avatar: 'https://i.pravatar.cc/150' } }]);
    setNewRemedy({ title: '', description: '' });
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRemedy(null);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Suggested Remedies</h1>

        {/* Display suggested remedies in a grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {remedies.map((remedy) => {
            // Randomly select a color from the palette
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                key={remedy.id}
                className={`${randomColor} p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition`}
                onClick={() => handleCardClick(remedy)}
              >
                <div className="flex items-center mb-2">
                  <img src={remedy.user.avatar} alt={remedy.user.name} className="w-10 h-10 rounded-full mr-2" />
                  <span className="font-semibold text-gray-800">{remedy.user.name}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{remedy.title}</h2>
                <p className="text-gray-600">{remedy.description}</p>
              </div>
            );
          })}
        </div>

        {/* Add Remedy Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Add Remedy
          </button>
        </div>

        {/* Modal for Enlarged Remedy */}
        {showModal && selectedRemedy && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex items-center mb-4">
                <img src={selectedRemedy.user.avatar} alt={selectedRemedy.user.name} className="w-12 h-12 rounded-full mr-3" />
                <span className="font-semibold text-gray-800">{selectedRemedy.user.name}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{selectedRemedy.title}</h2>
              <p className="text-gray-700 mb-4">{selectedRemedy.description}</p>
              <button
                onClick={closeModal}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal for Adding Remedy */}
        {showModal && !selectedRemedy && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Add a New Remedy</h2>
              <input
                type="text"
                placeholder="Title"
                value={newRemedy.title}
                onChange={(e) => setNewRemedy({ ...newRemedy, title: e.target.value })}
                className="border rounded w-full py-2 px-3 mb-4"
              />
              <textarea
                placeholder="Description"
                value={newRemedy.description}
                onChange={(e) => setNewRemedy({ ...newRemedy, description: e.target.value })}
                className="border rounded w-full py-2 px-3 mb-4"
              />
              <div className="flex justify-between">
                <button
                  onClick={handleAddRemedy}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
                <button
                  onClick={closeModal}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RemediesPage;