import Slider from "../components/Slider";
import "./property.scss";
import { IoLocationOutline } from "react-icons/io5";
import { singlePostData, userData } from "../lib/dummydata";

function Property() {
  
  return (
    <div className="property">
      <div className="details">
        <div className="wrapper">
          {/* the wrapper in all my pages is there to add padding 
          to the component inside. It won't interfere with our two
           distinct page sections, the left and right */}
          <Slider images={singlePostData.images} />
          
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <p className="address">
                  <IoLocationOutline />
                  <span>{singlePostData.address}</span>
                </p>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="User profile pic"/>
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Property;
