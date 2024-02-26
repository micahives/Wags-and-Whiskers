import React from 'react';
import { useState } from 'react';
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
      <div>
        <div>
          <div>
            <ProfilePicture image={image} />
          </div>
          <div className="mt-32">
            <ProfileInfo {...petProfile} />
          </div >
        </div>
        <div>
          {/* Add Pet and list of pets */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;