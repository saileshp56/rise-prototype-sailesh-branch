import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders, faPlus
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="searchBar">
        <form>
          <label className="sr-only" htmlFor="search"></label>
          <input type="text" placeholder="Say Something... "></input>
        </form>
      </div>
      <div className="mainBox">
        <div className="notification">
          <div className="topBar">
            <div>
              <h3>Notification</h3>
            </div>
            <div className="icons">
              <FontAwesomeIcon className="iconN" icon={faSliders} />
              <FontAwesomeIcon className="iconN" icon={faPlus} />
            </div>
          </div>
        </div>
        <div className="verification">
          <h3>Verification</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;