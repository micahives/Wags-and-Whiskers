import React from 'react';
import { useState } from 'react';
import Header from '../components/common/Header';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePicture from '../components/profile/ProfilePicture';
import '../../src/'


const ProfilePage = () => {
  // Demo data
  const petProfile = {
    petName: 'Fluffy',
    species: 'Cat',
    age: 5,
  };

  const [ image ] = useState(null) 

  return (
    <div className="h-full">
      <Header /> {/* Include the Header component */}
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="mt-20"> {/* Adjust the margin-top as needed */}
          <div className="flex justify-center items-center">
            <div>
              <ProfilePicture image={image} />
            </div>
            <div className="ml-8">
              <ProfileInfo {...petProfile} />
            </div>
          </div>
          <div>
            {/* Add Pet and list of pets */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfilePage;