import Card from "../components/Card";
import Filter from "../components/Filter";
import { listData } from "../lib/dummydata";
import "./listing.scss";
import Map from "../components/Map"

function Listing() {
  let data = listData;

  return (
    <div className="listing">
      <div className="listingContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  );
}

export default Listing;
