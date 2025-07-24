




import React, { useContext, useRef, useState } from 'react'
import Card from "../components/Card.jsx";

const image1 = "/img1.png";
const image2 = "/img2.png";
const image3 = "/img3.png";
const image4 = "/img4.png";
const image5 = "/img5.png";
const image6 = "/img6.png";
const image7 = "/img7.png";
const image8 = "/img8.png";
const image9 = "/img9.png";
const image10 = "/img10.png";
const image11 = "/img11.png";
const image12 = "/img12.png";
const image13 = "/img13.png";
const image14 = "/img14.png";
const image15 = "/img15.png";
import { LuImagePlus } from "react-icons/lu";
import { userDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";


const Customize = () => {
  const {serverUrl,
    userData,
    setUserData,
    backendImage , setBackendImage,
    frontendImage , setFrontendImage,
    selectedImage , setSelectedImage}=useContext(userDataContext)
const navigate=useNavigate();

  const inputImage=useRef()
  const handleImage=(e)=>{
    const file=e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex'>
       <IoArrowBack className="absolute top-[10px] left-[10px] text-white w-[45px] h-[35px] cursor-pointer "  onClick={()=>navigate("/")}/>
      <div className='w-[90%] max-w-[60%] flex justify-center items-center flex-col p-[] '>
       <h1 className='text-white mb-[40px] text-[30px] text-center'>Select your <span className='text-blue-200'>Assistant image</span></h1>
       <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap '>
         <Card image={image1} />
       <Card image={image2} />
        <Card image={image4} />
         <Card image={image6} />
          <Card image={image7} />
           <Card image={image9} />
            <Card image={image10} />
             <div className={`w-[70px] h-[140px] mx-[10px] my-[10px] lg:w-[120px] lg:h-[150px] bg-[#030326] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-600 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage== "input"?"border-4 border-white shadow-2xl shadow-blue-600 ":null}`} onClick={()=>{
              inputImage.current.click()
              setSelectedImage("input")
              }}>
              {!frontendImage && 
      <LuImagePlus className='text-white w-[45px] h-[45px]' />}
      {frontendImage && <img src={frontendImage} className='h-full w-full object-cover'/>}
       </div>
      <input type="file" accept='image/*' ref={inputImage}hidden onChange={handleImage}/>
    </div>
     {selectedImage && <button  className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] cursor-pointer" onClick={()=>navigate("/customize2")}>Next</button>}
    
      </div>
      
    </div>
  )
}

export default Customize
