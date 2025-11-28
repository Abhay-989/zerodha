import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
 import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";
const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthStore();
 const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-menu">
      {/* Profile Button */}
      <div className="profile" onClick={() => setOpen(!open)}>
        <div className="avatar">
          {user?.name ? user.name.substring(0, 2).toUpperCase() : "US"}
        </div>
        <p className="username">{user?.name || "User"}</p>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown">
          <button  onClick={handleLogout}  >Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
