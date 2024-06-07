import List from "../components/List";
import Chat from "../components/chat/Chat";
import { userData } from "../lib/dummydata";
import "./profile.scss";

function Profile() {
  return (
    <div className="profile">
      {/* Details */}
      <div className="details">
        <div className="wrapper">
        <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className="info">
                <span>
                    Avatar:
                <img src={userData.img} alt="User profile pic" />
                </span>
                <span>Username: <b>John Doe</b></span>
                <span>Email: <b>john@gmail.com</b></span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
            <List/>
            <div className="title">
                <h1>Saved List</h1>
            </div>
            <List/>
        </div>
      </div>
      {/* Chat */}
      <div className="chatContainer">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
