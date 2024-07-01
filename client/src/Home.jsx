import React from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Home = () => {
  return (
    <div className="home-page">
      <div className="general-deatils-nav">
        <img src="./octopus3.png" style={{ width: "350px" }} />
        <div className="general-deatils">
          <h2>Good Morning Yonatan!</h2>
          <h3>
            Don't forget that you are the most important thing here.{" "}
            <strong>I am here for you! ❤️</strong>
          </h3>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p>
            <h3>Work Time</h3>
            You started your day at <strong>9:37</strong>,{" "}
            <strong>2:35 </strong>
            hours ago{" "}
          </p>
          <button>Manage</button>

        </div>
        <div className="card">
          <h3>Take a Break</h3>
          <p>You deserve it!</p>

          <div className="action-buttons">
            <button>
              {" "}
              <MusicNoteIcon />
            </button>
            <button>
              <CoffeeIcon />
            </button>
            <button>
              {" "}
              <SportsGymnasticsIcon />
            </button>
            <button>
              <SportsEsportsIcon />
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Missions</h3>

          <p>
            Your current mission is: <strong> Analyze ads.json</strong>
          </p>
          <button>All Missions</button>
        </div>
        <div className="card">
          <h3>Meetings</h3>

          <p>
            Your next meeting is: <strong> Adi Levi, CTO, 14:00</strong>
          </p>
          <button>All Meetings</button>
        </div>
        
        <div className="card">Card 5 Content</div>
        <div className="card">Card 6 Content</div>
        <div className="card">Card 7 Content</div>
        <div className="card">Card 8 Content</div>
      </div>{" "}
    </div>
  );
};

export default Home;
