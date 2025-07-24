

import React, { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Customize2 = () => {
  const { userData, backendImage, selectedImage, serverUrl, setUserData } =
    useContext(userDataContext);

  const [assistantName, setAssistantName] = useState(
    userData?.assistantName || ""
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleupdateAssistant = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("assistantName", assistantName);

      if (backendImage) {
        formData.append("assistantImage", backendImage); // Send file
      } else if (selectedImage) {
        formData.append("imageUrl", selectedImage); // Send Cloudinary URL
      }

      const result = await axios.post(
        `${serverUrl}/api/user/update`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(result.data);
      setUserData(result.data);

      // ✅ Redirect to home page
      navigate("/");
    } catch (error) {
      console.error(error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col">
      <IoArrowBack
        className="absolute top-[10px] left-[10px] text-white w-[45px] h-[35px] cursor-pointer"
        onClick={() => navigate("/customize")}
      />

      <h1 className="text-white mb-[40px] text-[30px] text-center">
        Enter your <span className="text-blue-200">Assistant name</span>
      </h1>

      <input
        type="text"
        placeholder="eg. Prince"
        className="w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
        required
        onChange={(e) => setAssistantName(e.target.value)}
        value={assistantName}
      />

      {assistantName && (
        <button
          className="min-w-[300px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] cursor-pointer"
          disabled={loading}
          onClick={handleupdateAssistant} // ✅ Call the function, not pass a reference
        >
          {!loading ? "Finally create your assistant" : "Loading..."}
        </button>
      )}
    </div>
  );
};

export default Customize2;
