import { useState } from "react";
import "./slider.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  function showNextImage() {
    imageIndex === images.length -1 
    ? setImageIndex(0)
    : setImageIndex(imageIndex + 1)
  }
  function showPrevImage() {
    imageIndex === 0 
    ? setImageIndex(images.length - 1) 
    : setImageIndex(imageIndex - 1)
  }
  return (
    <div className="slider">
      {/* Slider */}
      {/* If image index is any index value say 1, 2 etc it'll display the slider */}
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <IoIosArrowBack size={70} onClick={showPrevImage} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <IoIosArrowForward size={70} onClick={showNextImage} />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            <IoMdClose size={40} />
          </div>
        </div>
      )}

      {/* Property Image display */}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="houses"
            onClick={() => setImageIndex(index + 1)} // we're adding 1 since we removed the first item hence index starts at 0
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
