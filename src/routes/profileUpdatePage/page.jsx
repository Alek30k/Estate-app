import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
// import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import axios from "axios";
import ThemeContext from "../../context/ThemeContext";
// import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await axios.put(
        `https://estate-app-backend-rrai.onrender.com/api/users/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar: avatar[0],
        }
      );
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    <div className={theme}>
      <div className="profileUpdatePage">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Update Profile</h1>
            <div className="item">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={currentUser.username}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser.email}
              />
            </div>
            <div className="item">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>
            <button className={`  ${theme === "dark" ? "buttonDark" : ""}`}>
              Update
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
        <div className="sideContainer">
          <img
            src={avatar[0] || currentUser.avatar || "/noavatar.jpeg"}
            alt=""
            className="avatar"
          />
          <UploadWidget
            uwConfig={{
              cloudName: "dztl3rtlc",
              uploadPreset: "estate",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
