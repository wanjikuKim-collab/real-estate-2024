import "./message.scss";

function Message({photo, name, message}) {
  return (
    <div className="message">
      <img src={photo} alt="profile photo" />
      <span>{name}</span>
      <p>{message}</p>
    </div>
  );
}

export default Message;
