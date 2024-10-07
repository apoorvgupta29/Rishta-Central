import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProfiles } from '../firebase/firestore';
import ProfileCard from '../components/ProfileCard';


function ListingPage() {
  const [profiles, setProfiles] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const fetchProfiles = async () => {
      const fetchedProfiles = await getProfiles();
      setProfiles(fetchedProfiles);
    };
    fetchProfiles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Profiles</h1>
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setViewMode('grid')}
          className={`mr-2 ${viewMode === 'grid' ? 'bg-blue-800 text-white' : 'bg-blue-600'} px-4 py-2 rounded`}
        >
          Grid
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`${viewMode === 'list' ? 'bg-blue-800 text-white' : 'bg-blue-600'} px-4 py-2 rounded`}
        >
          List
        </button>
      </div>
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'space-y-6'}
      `}>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} viewMode={viewMode}/>
        ))}
      </div>
    </div>
  );
}

export default ListingPage;