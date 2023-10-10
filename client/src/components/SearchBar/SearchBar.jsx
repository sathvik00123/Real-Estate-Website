import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./SearchBar.css";
import { motion } from "framer-motion";

const SearchBar = ({ filter, setFilter }) => {

  return (
    <motion.div
      className="search-bar flexCenter"
      initial={{ y: "2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
    > 
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by title/city/country..."
      />
      <button className="button">Search</button>
    </motion.div>
  );
};

export default SearchBar;
