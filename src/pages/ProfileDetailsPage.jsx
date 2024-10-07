import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileById } from '../firebase/firestore';

function ProfileDetailsPage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const fetchedProfile = await getProfileById(id);
      setProfile(fetchedProfile);
    };
    fetchProfile();
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white text-gray-700 rounded-lg shadow-md overflow-hidden">
        <img src={profile.imageLink ? profile.imageLink : "https://i.imgur.com/MWAcQRM.jpeg"} alt={profile.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{profile.name}, {profile.age}</h1>
          <p className="text-xl text-gray-700 mb-4">{profile.profession}</p>
          <p className="text-gray-600 mb-4">{profile.location}</p>
          <p className="text-gray-800 mb-6">{profile.bio}</p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            {profile.instagram && (
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Instagram
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            )}
          </div>
          {profile.achievements && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
              <ul className="list-disc list-inside">
                {profile.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;