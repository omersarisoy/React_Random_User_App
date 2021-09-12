import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import email from "./assets/email.svg"
import location from "./assets/location.svg"
import phoneNumber from "./assets/phone.svg"

const App = () => {
  const [user, SetUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        SetUser(data.results);
        console.log(data.results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      {user?.map((item,index) => (
        <div key={index} className="card-wrap">

          <div className="pic-name">
            <img src={item.picture.large} alt="profile" className="profil-pic" />
            <h2>{item.name.title} {item.name.first} {item.name.last}</h2>
          </div>

          <div className="par-container">
            <img src={email} alt="email-pic" className="icon"/>
            <p className="par">{item.email}</p>
          </div>

          <div className="par-container">
            <img src={phoneNumber} alt="Phone-pic" className="icon" />
            <p className="par" >{item.phone}</p>
          </div>

          <div className="par-container">
            <img src={location} alt="location-pic" className="icon"/>
            <p className="par">{item.location.city} - {item.location.country}</p>
          </div>

          <p className="age"> Age:{item.dob.age} </p>
          <p className="register"> Register Date:{item.registered.date.substr(0,10)} </p>
        </div>
      ))}

      <button onClick={fetchUser} className="button">
        {" "}
        Random User{" "}
      </button>
    </div>
  );
};

export default App;
