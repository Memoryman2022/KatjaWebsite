import React from "react";

import "../CSS/Home.css";
function Home() {
  return (
    <div className="home-container">
      <div className="home-image-container">
        <img className="image" src="/bannerHome.jpg" alt="Home Banner" />
      </div>
      <a
        href="https://www.instagram.com/art_by_katja_hh/?igshid=ZG5haXlzdDVmc2M5"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  );
}

export default Home;
