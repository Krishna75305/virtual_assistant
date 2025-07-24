import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Card = ({ image }) => {
  const {serverUrl,
      userData,
      setUserData,
      backendImage , setBackendImage,
      frontendImage , setFrontendImage,
      selectedImage , setSelectedImage}=useContext(userDataContext)
  return (
    <div className={` w-[70px] h-[140px] mx-[10px] my-[10px] lg:w-[120px] lg:h-[150px] bg-[#030326] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-600 cursor-pointer hover:border-4 hover:border-white ${selectedImage==image?"border-4 border-white shadow-2xl shadow-blue-600 ":null}`} onClick={()=>{
      setSelectedImage(image)
      setBackendImage(null)
      setFrontendImage(null)
      }}>
      <img src={image} className='h-full w-full object-cover' alt='assistant' />
    </div>
  )
}

export default Card
