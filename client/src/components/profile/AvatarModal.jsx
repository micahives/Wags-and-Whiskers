import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { X } from 'lucide-react'; // Importing the 'X' icon from lucide-react
import greenCat from '../../assets/greencat.svg';
import greenDog from '../../assets/greendog.svg';
import { EDIT_PROFILE } from '../../utils/mutations';

const AvatarModal = ({ onClose, onSelectAvatar }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [editProfile] = useMutation(EDIT_PROFILE);

  const handleSelectAvatar = async (avatar) => {
    const data = await editProfile({
      variables: {image: avatar}
    });
    setSelectedAvatar(avatar);
    onSelectAvatar(avatar); // Pass the selected avatar back to the parent component

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50">
      <div className="relative bg-gray-700 rounded-lg p-8 w-96 h-64 flex flex-col justify-center items-center">
        <button className="text-white absolute top-0 right-0 m-4" onClick={onClose}>
          <X size={24} />
        </button>
        {selectedAvatar ? ( // Render selected avatar if one is selected
          <img src={selectedAvatar === 'dog' ? greenDog : greenCat} alt="Selected Avatar" className="w-32 h-32 cursor-pointer" onClick={() => setSelectedAvatar(null)} />
        ) : ( // Render avatar selection buttons if no avatar is selected
          <>
            <h2 className="text-2xl text-white font-semibold mb-4">Choose Avatar</h2>
            <div className="flex justify-center space-x-4">
              <button onClick={() => handleSelectAvatar('dog')}>
                <img src={greenDog} alt="Dog Avatar" className="w-32 h-32 cursor-pointer" />
              </button>
              <button onClick={() => handleSelectAvatar('cat')}>
                <img src={greenCat} alt="Cat Avatar" className="w-32 h-32 cursor-pointer" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AvatarModal;