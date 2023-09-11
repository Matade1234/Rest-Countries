import React from "react";
import Search from "../components/Search";
import Countries from "../components/Countries";
import Loading from "../utils/Loading";

const Hompage = ({
  allCountries,
  isLoading,
  filterByRegion,
  filterBySearch,
  darkMode
}) => {
  console.log(isLoading);
  return (
    <div>
      <Search filterByRegion={filterByRegion} filterBySearch={filterBySearch} />
      {isLoading && <Loading darkMode={darkMode} />}
      {!isLoading && <Countries allCountries={allCountries} />}
    </div>
  );
};

export default Hompage;
