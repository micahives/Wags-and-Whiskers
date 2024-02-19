import React from 'react';
import ProfileInfo from '../components/profile/ProfileInfo';
import Header from '../components/common/Header';

const ProfilePage = () => {
  // Demo data
  const petProfile = {
    petName: 'Fluffy',
    species: 'Cat',
    age: 5,
  };

  return (
    <div>
      <Header />
      <div className="mt-32">
        <ProfileInfo {...petProfile} />
      </div>
    </div>
  );
};

export default ProfilePage;