//

// critera for search
// radius
// cuisine
// rating

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";


export const getAllTrucks = async () => {
  const data = await axiosWithAuth.get("api");
  const json = await data.json();

  return json.results;
};

function SearchTrucks() {
  const [truckData, setTruckData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    getAllTrucks().then((trucks) => {
      setTruckData(trucks);
      setfilterData(trucks);
    });
  }, []);

  const onChange = (e) => setSearch(e.target.value);
  useEffect(() => {
    setfilterData(
      truckData.filter(
        (c) => c.cuisine.toLowerCase().includes(search.toLowerCase()),
        c.radius.toLowerCase().includes(search.toLowerCase()),
        c.rating.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="truckcard">
      <form>
        <input
          onChange={onChange}
          id="name"
          class="searchform"
          type="text"
          aria-describedby="name-desc"
        ></input>
      </form>

      {filterData.map((t, index) => (
        <div key={index} className="card">
          <img src={t.image} />

          <div>Name {t.name}</div>
          <div>Cuisine {t.cuisine}</div>
          <div>Distance to me {t.radius}</div>
          <div>Rating {t.rating}</div>
        </div>
      ))}
    </div>
  );
}
export default SearchTrucks;
