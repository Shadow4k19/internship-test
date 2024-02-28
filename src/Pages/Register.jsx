import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [personalinfo, setPersonalinfo] = useState({
    name: "",
    surname: "",
    date_of_birth: "",
    religion: "",
    tel: "",
    address: "",
    gender: "",
  });

  const handleChange = (field, value) => {
    setPersonalinfo({
      ...personalinfo,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    if (username && password && personalinfo) {
      alert("Create Sucessful");
      window.location.href = "/";
      /*const response = await fetch("http://127.0.0.1:8000/api/person/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, personalinfo }),
      });
      const responseData = await response.json();
      if (response.ok) {
        alert("Create success");
        window.location.href = "/";
      } else {
        console.log(responseData.error);
        alert(responseData.error);
      }*/
    } else {
      alert("info is null");
    }
  };
  return (
    <div className="container-register">
      <div className="register-container">
        <form>
          <h2 className="text-center">Register</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                required
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
                required
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
                required
                className="form-control input-width"
                value={personalinfo.Name}
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
                required
                className="form-control input-width"
                value={personalinfo.Surname}
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
                required
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
                required
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
                required
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
                maxLength={10}
                value={personalinfo.tel}
                required
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
              required
              value={personalinfo.address}
              onChange={(e) => handleChange("address", e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary float-end"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
