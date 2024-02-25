// import React from 'react';

// const UploadImage = ({ onImageUpload }) => {

//   const handleUpload = async (event) => {
//     const imageFile = event.target.files[0];

//     const response = await fetch('/api/upload', {
//       method: 'POST',
//       body: imageFile
//     });
    
//     if (response.ok) {
//       onImageUpload(imageFile); 
//     }
//   }

//   return (
//     <label>
//       Upload Image:
//       <input type="file" onChange={handleUpload}/> 
//     </label>
//   )
// }

// export default UploadImage;
