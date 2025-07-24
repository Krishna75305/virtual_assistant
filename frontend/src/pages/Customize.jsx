// import React, { useContext, useRef, useState } from 'react'
// import Card from '../components/Card'
// import image1 from "../assets/image1.png"
// import image2 from "../assets/image2.jpg"
// import image3 from "../assets/authBg.png"
// import image4 from "../assets/image4.png"
// import image5 from "../assets/image5.png"
// import image6 from "../assets/image6.jpeg"
// import image7 from "../assets/image7.jpeg"
// import { RiImageAddLine } from "react-icons/ri";
// import { userDataContext } from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// import { MdKeyboardBackspace } from "react-icons/md";
// function Customize() {
//   const {serverUrl,userData,setUserData,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage}=useContext(userDataContext)
//   const navigate=useNavigate()
//      const inputImage=useRef()

//      const handleImage=(e)=>{
// const file=e.target.files[0]
// setBackendImage(file)
// setFrontendImage(URL.createObjectURL(file))
//      }
//   return (
//     <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px] '>
//         <MdKeyboardBackspace className='absolute top-[30px] left-[30px] text-white cursor-pointer w-[25px] h-[25px]' onClick={()=>navigate("/")}/>
//         <h1 className='text-white mb-[40px] text-[30px] text-center '>Select your <span className='text-blue-200'>Assistant Image</span></h1>
//         <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
//       <Card image={image1}/>
//        <Card image={image2}/>
//         <Card image={image3}/>
//          <Card image={image4}/>
//           <Card image={image5}/>
//            <Card image={image6}/>
//             <Card image={image7}/>
//      <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input"?"border-4 border-white shadow-2xl shadow-blue-950 ":null}` } onClick={()=>{
//         inputImage.current.click()
//         setSelectedImage("input")
//      }}>
//         {!frontendImage &&  <RiImageAddLine className='text-white w-[25px] h-[25px]'/>}
//         {frontendImage && <img src={frontendImage} className='h-full object-cover'/>}
    
//     </div>
//     <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage}/>
//       </div>
// {selectedImage && <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold cursor-pointer  bg-white rounded-full text-[19px] ' onClick={()=>navigate("/customize2")}>Next</button>}
      
//     </div>
//   )
// }

// export default Customize





import React, { useContext, useRef, useState } from 'react'
import Card from "../components/Card.jsx";

import image1 from "../assets/img1.png"
import image2 from "../assets/img2.png"
import image3 from "../assets/img3.png"
import image4 from "../assets/img4.png"
import image5 from "../assets/img5.png"
import image6 from "../assets/img6.png"
import image7 from "../assets/img7.png"
import image8 from "../assets/img8.png"
import image9 from "../assets/img9.png"
import image10 from "../assets/img10.png"
import image11 from "../assets/img11.png"
import image12 from "../assets/img12.png"
import image13 from "../assets/img13.png"
import image14 from "../assets/img14.png"
import image15 from "../assets/img15.png"
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
