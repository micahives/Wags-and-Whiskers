import React from 'react';

const defaultProfilePic = 'https://i.imgflip.com/6yvpkj.jpg';

const ProfilePicture = ({ image }) => {
  return (
    <img 
      src={image || defaultProfilePic}
      alt="Profile"
    />
  );
}

export default ProfilePicture;
