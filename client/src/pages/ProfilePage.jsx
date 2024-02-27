import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePicture from '../components/profile/ProfilePicture';

import { useQuery } from "@apollo/client"
import { GET_ME} from '../utils/queries'



const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const { loading, data, refetch } = useQuery(GET_ME);
  const [petList, setPetList] = useState({});



  useEffect(() => {
    const getUserData = async () => {
       try {
 if (!data){
   return;
 }
 setUserData(data.me);  //                      SETS USER DATA AND THE LIST OF PETS
 setPetList(data.me.myPets)
 } catch (err) {
   console.error(err);
 }};
 getUserData();
   },[data])
 
 
   useEffect(() => {
     refetch(); //                          Trigger refetch on initial render
   }, [refetch]);

      const myPets = petList
      const [image] = useState(null);




  return (
    <div className="h-full">
      <Header />

      <div className="container px-4 py-12 mt-32">
        <div className="max-w-xs mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="p-4 h-full">
            <div className="h-64 flex items-center justify-center">
              <div className="h-32 w-32 bg-gray-500 rounded-full overflow-hidden justify-center items-center">
              </div>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl text-black font-semibold">{userData.username}</h2>
              <p className="text-sm text-black">{userData.petCount} Pets</p>

              <div><button className='m-4 px-4 bg-gray-500 rounded-lg'>Add Pet</button></div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="m-8 grid grid-cols-3 gap-4">

 {myPets && myPets.length > 0 && (  //                                      LIST OF PETS CARD CONDITINALLY RENDERED IF DATA EXISTS
      <div >
        {myPets.map((pet) => (
          <div key={pet._id} className="bg-gray-700 p-4  rounded-lg shadow-md m-4">
            <h2 className="text-xl font-semibold">{pet.petName}</h2>
             <p>{pet.isDog ? 'Dog' : 'Cat'}</p>
            <p>Age: {pet.age} Weeks</p>
            <p>Weight: {pet.weight} lbs</p>
          </div>
                      //                             ----------------TODO: NEEDS to LINK TO WELLNESS PAGE---------------------
        ))}
      </div>
    )}
    </div>
    </div>
  );
};

export default ProfilePage;