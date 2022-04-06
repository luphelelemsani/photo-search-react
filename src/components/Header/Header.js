// import { useState } from "react";
import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "../../assets/images/search.svg";
import "./header.css";

export default function Header({ filterItem }) {
  const [topic, setTopic] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    filterItem(topic);
    console.log(topic);
  };
  return (
    <nav>
      <header>
        <div>
          <img src={Logo} alt="imagen logo" />
        </div>
      </header>
      <div>
        <form className="input-container">
          <input
            type="text"
            placeholder="Search topics..."
            onChange={(e) => {
              setTopic(e.target.value.toLowerCase());
            }}
          />
          <button type="submit" onClick={Submit}>
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </form>
      </div>
    </nav>
  );
}
