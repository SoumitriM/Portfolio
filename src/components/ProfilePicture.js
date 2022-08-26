import "./profilepicture.scss";
import profilePic from "../assets/profilePic2.png";

const ProfilePicture = () => {
    return <div className="profile-picture"><img src={profilePic} alt=""/></div>
};

export default ProfilePicture;