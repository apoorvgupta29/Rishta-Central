import { Heart, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileCard({ profile }) {
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.preventDefault();
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="mx-auto w-80 h-[500px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={profile.imageLink ? profile.imageLink : "https://i.imgur.com/MWAcQRM.jpeg"}
          alt={profile.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 m-2 rounded-full text-sm font-semibold">
          {profile.age}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-2xl text-black text-primary">{profile.name}</h2>
          <Heart className="text-red-500 h-6 w-6" />
        </div>
        <p className="text-lg font-semibold text-gray-700 mb-2">{profile.profession}</p>
        <p className="text-sm text-gray-600 mb-4">{profile.community}</p>
        <p className="text-sm text-gray-500 mb-4">{profile.bio}</p>
        

      </div>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex space-x-4 text-gray-500">
          {profile.instagram && (
            <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          <a href={`mailto:${profile.email}`}>
            <Mail className="h-5 w-5" />
          </a>
          <a href={`tel:${profile.phone}`}>
            <Phone className="h-5 w-5" />
          </a>
        </div>
        <button
          onClick={handleViewDetails}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          View Full Profile
        </button>
      </div>
    </div>
  );
}
