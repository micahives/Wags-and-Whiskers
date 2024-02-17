import React from 'react';
import ProfileInfo from '../components/profile/ProfileInfo';

const ProfilePage = () => {
  // Demo data
  const petProfile = {
    petName: 'Fluffy',
    species: 'Cat',
    age: 5,
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileInfo {...petProfile} />
    </div>
  );
};

export default ProfilePage;