import React from 'react';
import ProfileInfo from '../components/profile/ProfileInfo';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

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
      <div className="mt-64">
        <ProfileInfo {...petProfile} />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;