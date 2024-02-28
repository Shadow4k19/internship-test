import React, { useState, useEffect } from "react";
import User from "../Class/User";
import "./Register.css";

const Edit = () => {
  const [username, setUsername] = useState("Test");
  const [password, setPassword] = useState("Test1234");
  const [personalinfo, setPersonalinfo] = useState({
    name: "Anuthep",
    surname: "Kumseam",
    date_of_birth: "2003-01-02",
    religion: "Buddhism",
    tel: "0963747949",
    address: "33/4 Bangmaenang Bangyai Nonthaburi 11140",
    gender: "Male",
  });
  const user = User.getUsername();
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://127.0.0.1:8000/api/person/?username=${user}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsername(data[0].username);
          setPassword(data[0].password);
          const { username, password, ...rest } = data[0];

          setPersonalinfo((prevInfo) => ({
            ...prevInfo,
            ...rest,
          }));
        } else {
          console.error("Failed to fetch data from the backend");
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    fetchData();
  }, [user]);*/

  const handleChange = (field, value) => {
    setPersonalinfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    alert("Save sucessful");
    window.location.href = "/info";
    /*console.log(personalinfo);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/person/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, personalinfo }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Data updated successfully:", responseData);
        alert("Data updated successfully");
        window.location.href = "/info";
      } else {
        console.error("Failed to update data:", responseData);
      }
    } catch (error) {
      console.error("Error during data update:", error);
    }*/
  };

  return (
    <div className="container-register">
      <div className="register-container">
        <form>
          <h2 className="text-center">Edit</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="form-control input-width"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control input-width"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control input-width"
                value={personalinfo.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="Surname" className="form-label">
                Surname
              </label>
              <input
                type="text"
                placeholder="Surname"
                className="form-control input-width"
                value={personalinfo.surname}
                onChange={(e) => handleChange("surname", e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="dateofbirth" className="form-label">
                Date of Brith
              </label>
              <input
                type="date"
                className="form-control input-width"
                value={personalinfo.date_of_birth}
                onChange={(e) => handleChange("date_of_birth", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-control input-width"
                value={personalinfo.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value=" ">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="religion" className="form-label">
                Religion
              </label>
              <input
                type="text"
                placeholder="Religion"
                value={personalinfo.religion}
                className="form-control"
                onChange={(e) => handleChange("religion", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="tel" className="form-label">
                Tel.
              </label>
              <input
                type="text"
                placeholder="Tel."
                value={personalinfo.tel}
                maxLength={10}
                className="form-control"
                onChange={(e) => handleChange("tel", e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              value={personalinfo.address}
              onChange={(e) => handleChange("address", e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary float-end"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
