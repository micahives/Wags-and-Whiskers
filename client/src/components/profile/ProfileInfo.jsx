import React from 'react';

const ProfileInfo = ({ petName, species, age }) => {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Pet Name: {petName}</p>
      <p>Species: {species}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ProfileInfo;
