import "./chat.scss";
import photo from "../../assets/profile.png";
import Message from "../message/Message";
import { useState } from "react";

function Chat() {
    const[chat, setChat] = useState(true)


  return (
    <div className="chat">
        {/* Messages */}
      <div className="messages">
        <h1>Messages</h1>
        <Message            
          message="Hi there! I'm loooking..."
          name="Jane Doe"
          photo={photo}
        />
        <Message
          message="Hi there! I'm loooking..."
          name="Jane Doe"
          photo={photo}
        />
        <Message
          message="Hi there! I'm loooking..."
          name="Jane Doe"
          photo={photo}
        />
        <Message
          message="Hi there! I'm loooking..."
          name="Jane Doe"
          photo={photo}
        />
         <Message
          message="Hi there! I'm loooking..."
          name="Jane Doe"
          photo={photo}
        />
      </div>
      {/* ChatBox */}
      {chat &&

      <div className="chatBox">
        <div className="top">
            <div className="user">
                <img src={photo} alt="profile photo" />
                John Doe
            </div>
            <div className="close" onClick={()=> setChat(null)}>X</div>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>That would be fantastic!  I'd love to see some virtual tours.</p>
                <span>2 min ago</span>
            </div>
            <div className="chatMessage own">
                <p>That would be fantastic!  I'd love to see some virtual tours.</p>
                <span>2 min ago</span>
            </div>  <div className="chatMessage ">
                <p>That would be fantastic!  I'd love to see some virtual tours.</p>
                <span>2 min ago</span>
            </div>  <div className="chatMessage own">
                <p>That would be fantastic!  I'd love to see some virtual tours.</p>
                <span>2 min ago</span>
            </div>  <div className="chatMessage">
                <p>That would be fantastic!  I'd love to see some virtual tours.</p>
                <span>2 min ago</span>
            </div>  <div className="chatMessage own">
                <p>That would be fantastic!  I'd love to see some virtual tours.</p>
                <span>2 min ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>send</button>
        </div>
      </div>
      }
    </div>
  );
}

export default Chat;
