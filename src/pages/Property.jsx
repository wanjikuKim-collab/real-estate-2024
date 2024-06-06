import "./property.scss";
import Slider from "../components/Slider";
import Map from "../components/Map";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { listData, singlePostData, userData } from "../lib/dummydata";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
// room sizes icons
import { RiHotelBedLine } from "react-icons/ri";
import { PiBathtubBold } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import PropertyFeatureCard from "../components/PropertyFeatureCard";

//feature icons
import { FaTools } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

function Property() {
  const [save, setSave] = useState(false);

  function handleSave() {
    setSave(!save);
  }


  return (
    <div className="property">
      {/* LEFT SIDE */}
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
                <img src={userData.img} alt="User profile pic" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <PropertyFeatureCard
              icon={<FaTools />}
              header="Utilities"
              description="Renter is responsible"
            />
            <PropertyFeatureCard
              icon={<MdOutlinePets />}
              header="Pet POlicy"
              description="Pets Allowed"
            />
            <PropertyFeatureCard
              icon={<GiPayMoney />}
              header="Property Fees"
              description="Must have 3x the rent in total household income"
            />
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <RxDimensions />
              <span>80sqm</span>
            </div>
            <div className="size">
              <RiHotelBedLine size={20} />
              <span>2 bedroom</span>
            </div>
            <div className="size">
              <PiBathtubBold size={20} />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <PropertyFeatureCard
              icon={<IoSchoolSharp />}
              header="School"
              description="250m away"
            />
            <PropertyFeatureCard
              icon={<FaBusAlt />}
              header="Bus Stop"
              description="100m away"
            />
            <PropertyFeatureCard
              icon={<MdRestaurant />}
              header="Restaurant"
              description="200m away"
            />
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
          </div>

          <div className="buttons">
            <button>
              {save ? <FaBookmark /> : <FaRegBookmark />} Send a Message
            </button>
            <button>
              <FaRocketchat />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
