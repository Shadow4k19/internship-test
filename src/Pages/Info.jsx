import React, { useEffect, useState } from "react";
import User from "../Class/User";
import "./Info.css";

const Info = () => {
  const [personalinfo, setPersonalinfo] = useState({
    name: "Anuthep",
    surname: "Kumseam",
    date_of_birth: "2003-01-02",
    religion: "Buddhism",
    tel: "0963747949",
    gender: "Male",
    address: "33/4 Bangmaenang Bangyai Nonthaburi 11140",
  });
  const username = User.getUsername();
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://127.0.0.1:8000/api/person/?username=${username}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          const {
            name,
            surname,
            date_of_birth,
            religion,
            tel,
            address,
            gender,
          } = data[0];

          setPersonalinfo((prevInfo) => ({
            ...prevInfo,
            name,
            surname,
            date_of_birth,
            religion,
            tel,
            address,
            gender,
          }));

          console.log(personalinfo);
        } else {
          console.error("Failed to fetch data from the backend");
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    fetchData();
  }, [username]);*/

  const renderPersonalInfo = () => {
    return Object.entries(personalinfo).map(([key, value]) => (
      <div
        key={key}
        className={
          key === "address"
            ? "mb-3 text-position"
            : "col-md-6 mb-3 text-position"
        }
      >
        {key}:
        {key === "address" ? (
          <textarea className="form-control show" value={value} readOnly />
        ) : (
          <input className="form-control show" value={value} readOnly />
        )}
      </div>
    ));
  };

  const handleEdit = () => {
    window.location.href = `/edit`;
  };

  const handleLogout = () => {
    User.deleteUser();
    if (User.getUsername() === null) {
      window.location.href = "/";
    }
  };

  return (
    <div className="container">
      <div className="info-container">
        <div className="background">
          <div className="img-container">
            <img className="img-people" src="profile.png" alt=""></img>
          </div>
          <label className="form-label text">Personal Information</label>
        </div>
        <div className="row show-output">{renderPersonalInfo()}</div>
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-primary float-end"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger float-end"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
