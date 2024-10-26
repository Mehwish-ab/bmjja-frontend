import React from "react";
import Banner from "./Banner/Banner";
import Explore from "./Explore/Explore";
import Joining from "./Joining/Joining";
import CardGrid from "./Cards/CardGrid";
import VideoSection from "./Videos/VideoSection";
// import Subscription from "./Subscription/Subscription";
import TimeTable from "./TimeTable/TimeTable";
import Location from "./Location/Location";

import "./styles.css";

const Index = () => {
  return (
    <div>
      <Banner />
      <Explore />
      <Joining />
      <CardGrid />
      <VideoSection />
      {/* <Subscription /> */}
      <TimeTable />
      <Location />
      <div className="signature-section">
        <div className="container">
          <div className="d-flex align-items-end justify-content-end flex-column">
            <div className="text">
              <p>
                By applying the best teaching methodologies within a <br />
                curriculum we can help you fulfil your potential.
              </p>
            </div>
            <div className="text signature mt-1">
              <p>Gus Oliveira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
