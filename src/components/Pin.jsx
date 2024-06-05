import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { NavLink } from "react-router-dom";

function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={item.img} alt="Property" />
            <div className="textContainer">
                <NavLink to={`/${item.id}`}>
                    {item.title}
                </NavLink>
                <span>{item.bedroom} bedroom</span>
                <b>$ {item.price}</b>
            </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
