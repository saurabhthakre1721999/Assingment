import { useState } from "react";
import Calendar from "react-calendar";

const Form = () => {
  const [profile, setprofile] = useState({
    firstname: " ",

    lastname: "",
    studentemail: "",
    birthdate: "",
    gender: "",
    streetaddress: "",
    streetaddressline2: "",
    city: "",
    state: "",
    postal: " ",
    studentemail: "",
    mobilenumber: "",
    phonenumeber: "",
    worknumber: "",

    courses: "",
    company: "",
  });
  const oninputchange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setprofile({ ...profile, [name]: value });
  };
  return (
    <div>
      <div>
        <h1> Registration form </h1>
        <hr />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <input
            type="text"
            name="firstname"
            value={profile.firstname}
            onChange={oninputchange}
          />
          <span> first name</span>
        </div>{" "}
        <div>
          <input
            type="text"
            name="middelname"
            value={profile.middelname}
            onChange={oninputchange}
          />
          <span> middel name</span>
        </div>{" "}
        <div>
          <input
            type="text"
            name="lastname"
            value={profile.lastname}
            onChange={oninputchange}
          />
          <span> last name</span>
        </div>
      </div>
      <div>
        <input type="date time" name="lastname" onChange={oninputchange} />{" "}
        <span> birthdate</span>
      </div>{" "}
      <div>
        <select name="gender" id="">
          <option value="">Male</option>
          <option value=""> female</option>
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Address</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <span>
            <input
              type="text"
              name="streetaddress"
              id=""
              onChange={oninputchange}
            />
          </span>
          <span> Street Address </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            <input
              type="text"
              name="streetaddressline2"
              id=""
              onChange={oninputchange}
            />
          </span>
          <span> Street Address line 2</span>
        </div>
        <div style={{ display: "flex" }}>
          <span>
            {" "}
            <span>
              <input type="text" name="city" id="" onChange={oninputchange} />{" "}
            </span>
            <span> City</span>
          </span>
          <span>
            {" "}
            <span>
              <input type="text" name="state" id="" onChange={oninputchange} />{" "}
            </span>
            <span> State</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="Postal" id="" onChange={oninputchange} />
          <span> postal/zip code</span>
        </div>
      </div>
      <div style={{ display: " flex" }}>
        {" "}
        <div>
          <span>
            <h3> Student Email</h3>
          </span>
          <span>
            <input
              type="mail"
              name="studntemail"
              id=""
              onChange={oninputchange}
            />
          </span>{" "}
        </div>{" "}
        <div>
          <span>
            <h3> Mobile Number</h3>
          </span>
          <span>
            <input
              type="text"
              name="mobilenumber"
              id=""
              onChange={oninputchange}
            />
          </span>{" "}
        </div>
      </div>
      <div style={{ display: " flex" }}>
        {" "}
        <div>
          <span>
            <h3> Phone Number</h3>
          </span>
          <span>
            <input
              type="text"
              name="phonenumber"
              id=""
              onChange={oninputchange}
            />
          </span>{" "}
        </div>{" "}
        <div>
          <span>
            <h3> Work Number</h3>
          </span>
          <span>
            <input
              type="text"
              name="worknumber"
              id=""
              onChange={oninputchange}
            />
          </span>{" "}
        </div>
      </div>
      <div style={{ display: " flex" }}>
        {" "}
        <div>
          <span>
            <h3> Company</h3>
          </span>
          <span>
            <input type="text" name="company" id="" onChange={oninputchange} />
          </span>{" "}
        </div>{" "}
        <div>
          <span>
            <h3> Courses</h3>
          </span>
          <span>
            <input type="text" name="courses" id="" onChange={oninputchange} />
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
export default Form;
