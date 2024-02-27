import React from 'react';
import { useState } from 'react';
import Header from '../components/common/Header';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePicture from '../components/profile/ProfilePicture';

const ProfilePage = () => {
  // Demo data
  const petProfile = {
    petName: 'Fluffy',
    species: 'Cat',
    age: 5,
  };

  const [image] = useState(null);

  return (
    <div className="h-full">
      <Header /> {/* Include the Header component */}
      <div className="container px-4 py-12 mt-32">
        <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 h-full">
            <div className="h-64 flex items-center justify-center">
              <div className="h-32 w-32 bg-gray-500 rounded-full overflow-hidden justify-center items-center">
                {/* <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt="Profile"
                /> */}
              </div>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl text-black font-semibold">{petProfile.petName}</h2>
              {/* Replace petProfile.petName with actual username */}
              <p className="text-sm text-black">{petProfile.species}</p>
              {/* Replace petProfile.species with actual email */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;