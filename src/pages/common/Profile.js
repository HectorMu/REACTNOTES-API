import { useState, useEffect, useCallback } from "react";
import EditProfileCard from "../../components/profile/EditProfileCard";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileSettings from "../../components/profile/ProfileSettings";
import { getProfileData } from "../../services/profile";

const Profile = ({ user, setUser }) => {
  const [onEditing, setOnEditing] = useState(false);
  const [onConfig, setOnConfig] = useState(false);

  const getProfileDataHandler = useCallback(async () => {
    const data = await getProfileData();
    window.localStorage.setItem("userSession", JSON.stringify(data));
    setUser(data);
  }, [setUser]);

  const toggleEditing = () => {
    setOnEditing(!onEditing);
  };
  const toggleConfig = () => {
    setOnConfig(!onConfig);
  };

  useEffect(() => {
    getProfileDataHandler();
  }, [getProfileDataHandler]);
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto">
          <div className="card shadow-lg">
            {onEditing === false && onConfig === false ? (
              <ProfileCard
                toggleConfig={toggleConfig}
                toggleEditing={toggleEditing}
                user={user}
              />
            ) : onEditing === true ? (
              <EditProfileCard
                setUser={setUser}
                toggleEditing={toggleEditing}
                user={user}
              />
            ) : (
              <ProfileSettings toggleConfig={toggleConfig} setUser={setUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
