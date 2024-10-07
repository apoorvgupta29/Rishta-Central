import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProfileWithoutAuth } from '../firebase/firestore';

function CreateProfilePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    community: '',
    bio: '',
    email: '',
    achievements: [''], 
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAchievementChange = (index, value) => {
    const newAchievements = [...formData.achievements];
    newAchievements[index] = value;
    setFormData(prevState => ({
      ...prevState,
      achievements: newAchievements
    }));
  };

  const addAchievement = () => {
    setFormData(prevState => ({
      ...prevState,
      achievements: [...prevState.achievements, '']
    }));
  };

  const removeAchievement = (index) => {
    const newAchievements = formData.achievements.filter((_, i) => i !== index);
    setFormData(prevState => ({
      ...prevState,
      achievements: newAchievements
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createProfileWithoutAuth(formData);
      alert('Profile created successfully!');
      navigate('/listings');
    } catch (error) {
      console.error('Error creating profile:', error);
      setError('Failed to create profile. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create Your Profile</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profession" className="block mb-2">Profession</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="community" className="block mb-2">Community</label>
          <input
            type="text"
            id="community"
            name="community"
            value={formData.community}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block mb-2">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Achievements</label>
          {formData.achievements.map((achievement, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={achievement}
                onChange={(e) => handleAchievementChange(index, e.target.value)}
                className="flex-grow px-3 py-2 text-black border rounded mr-2"
              />
              <button
                type="button"
                onClick={() => removeAchievement(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAchievement}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Achievement
          </button>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Create Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfilePage;