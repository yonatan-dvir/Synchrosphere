import React from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  return (
    <div className="home-page">
      <div className="general-deatils-nav">
        <img src="./octopus3.png" style={{ width: "350px" }} />
        <div className="general-deatils">
          <h1>Good Morning Yonatan!</h1>
          <h3>
            Don't forget that you are the most important thing here.{" "}
            <strong>I am here for you! ❤️</strong>
          </h3>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p>
            <h3>Work Time ⏰</h3>
            You started your day at <strong>9:37</strong>,{" "}
            <strong>2:35 </strong>
            hours ago{" "}
          </p>
          <button>Manage</button>
        </div>
        <div className="card">
          <h3>Take a Break ☕️</h3>
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
          <h3>Missions 🧠</h3>

          <p>
            Your current mission is: <strong> Analyze ads.json</strong>
          </p>
          <p>
            Your next mission is: <strong> Fix bug #214</strong>
          </p>
          <button>All Missions</button>
        </div>
        <div className="card">
          <h3>Meetings 📅 </h3>

          <p>
            Your next meeting is: <strong> Adi Levi, CTO, 14:00</strong>
          </p>
          <p>
            Your next event is: <strong> Happy Remote Hour, 17:00, Zoom</strong>
          </p>
          <button>All Meetings</button>
        </div>

        <div className="card">
          {" "}
          <h3>Tools ⚒️ </h3>
          <div className="action-buttons">
            <button>
              {" "}
              <img src="./zoom.png" style={{ width: "35px" }} />
            </button>
            <button>
              <img src="./google-sheets.png" style={{ width: "35px" }} />
            </button>
            <button>
              {" "}
              <img src="./chat-gpt.png" style={{ width: "35px" }} />
            </button>
            <button>
              <img src="./translate.png" style={{ width: "35px" }} />{" "}
            </button>
          </div>{" "}
          <br />
          <button>All Tools</button>
        </div>
        <div className="card">
          {" "}
          <h3>Remote Hub 👨🏻‍💻</h3>
          <p>Be a part of this important community of remote workers.</p>
          <button>Remote Hub</button>
        </div>
        <div className="card">
          {" "}
          <h3>Rewards 🥇</h3>
          <p>
            March 2024, 3rd <strong> Productive Reward </strong>
          </p>
          <p>
            February 2023, 1st <strong> Commitment Reward </strong>
          </p>
          <p>
            June 2022, 2nd <strong> FIFA Tournament </strong>
          </p>
          <button>My Rewards</button>
        </div>
        <div className="card">
          {" "}
          <h3>Shopping 🛒 </h3>
          <p>Buy merchandise of your company.</p>
          <p>
            You have <strong> 16 </strong>more tokens.
          </p>
          <p>
            <strong> SALE! 3 shirts in 10 tokens! </strong>
          </p>
          <button>Store</button>
        </div>
        <div className="card">
          {" "}
          <h3>Contacts 👥</h3>
          <p>Quick actions with your favorits contacts</p>
          <div className="contact">
            <p>
              <strong>Tali, </strong>HR
            </p>
            <div className="contact-actions">
              <button className="contact-button">
                <CallIcon />
              </button>
              <button className="contact-button">
                <EmailIcon />
              </button>
              <button className="contact-button">
                <SportsEsportsIcon />
              </button>
              <button className="contact-button">
                <CoffeeIcon />
              </button>
            </div>
          </div>
          <div className="contact">
            <p>
              <strong>Jack, </strong>Sales Manager{" "}
            </p>
            <div className="contact-actions">
              <button className="contact-button">
                <CallIcon />
              </button>
              <button className="contact-button">
                <EmailIcon />
              </button>
              <button className="contact-button">
                <SportsEsportsIcon />
              </button>
              <button className="contact-button">
                <CoffeeIcon />
              </button>
            </div>
          </div>
          <button>All Contacts</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
