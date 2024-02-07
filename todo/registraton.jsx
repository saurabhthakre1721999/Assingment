import { useState } from "react";
import Calendar from "react-calendar";

const Form = () => {
  const [profile, setprofile] = useState({
    firstname: "",
    middelname: "",

    lastname: "",
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
    comments: "",
    submitstatus: false,
  });
  const oninputchange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setprofile({ ...profile, [name]: value });
  };

  const inputsubmit = (e) => {
    setprofile({ ...profile, submitstatus: true });
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
        <input
          type="date"
          name="birthdate"
          value={profile.birthdate}
          onChange={oninputchange}
        />{" "}
        <span> birthdate</span>
      </div>{" "}
      <div>
        <select name="gender" id="" onChange={oninputchange}>
          <option value=" male">Male</option>
          <option value="female"> female</option>
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
              value={profile.streetaddress}
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
              value={profile.streetaddressline2}
              onChange={oninputchange}
            />
          </span>
          <span> Street Address line 2</span>
        </div>
        <div style={{ display: "flex" }}>
          <span>
            {" "}
            <span>
              <input
                type="text"
                value={profile.city}
                name="city"
                id=""
                onChange={oninputchange}
              />{" "}
            </span>
            <span> City</span>
          </span>
          <span>
            {" "}
            <span>
              <input
                type="text"
                value={profile.state}
                name="state"
                id=""
                onChange={oninputchange}
              />{" "}
            </span>
            <span> State</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="postal"
            value={profile.postal}
            id=""
            onChange={oninputchange}
          />
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
              type="email"
              name="studentemail"
              id=""
              value={profile.studentemail}
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
              type="tel"
              name="mobilenumber"
              id=""
              value={profile.mobilenumber}
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
              type="tel"
              name="phonenumber"
              value={profile.phonenumeber}
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
              value={profile.worknumber}
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
            <input
              type="text"
              name="company"
              value={profile.company}
              id=""
              onChange={oninputchange}
            />
          </span>{" "}
        </div>{" "}
        <div>
          <span>
            <h3> Courses</h3>
          </span>
          <span>
            <select
              name="courses"
              value={profile.courses}
              id=""
              onChange={oninputchange}
            >
              <option value="Btech">Btech</option>
              <option value="Bsc"> Bsc</option>
              <option value="Mca">Mca</option>
            </select>
          </span>{" "}
        </div>
      </div>
      <div>
        <span>
          {" "}
          <h3> aditional comments</h3>
        </span>
        <span>
          {" "}
          <textarea
            name="comments"
            value={profile.comments}
            onChange={oninputchange}
            id=""
          ></textarea>
        </span>
      </div>
      <div>
        <button onClick={inputsubmit}> submit</button>
      </div>
      {profile.submitstatus && (
        <div>
          <h1>your details</h1>
          <p> firstname :- {profile.firstname} </p>
          <p> middlename :- {profile.middelname} </p>{" "}
          <p> lastname :- {profile.lastname} </p>
          <p> Birthdate :- {profile.birthdate} </p>
          <p> Gender :- {profile.gender} </p>
          <p> City :- {profile.city} </p>
          <p> streetaddress: {profile.streetaddressline2}</p>
          <p> streetaddressline2: {profile.streetaddressline2}</p>
          <p> city: {profile.firstname}</p>
          <p> state: {profile.firstname}</p>
          <p>postal: {profile.postal}</p>
          <p> studentemail:{profile.studentemail}</p>
          <p> mobilenumber: {profile.mobilenumber}</p>
          <p> phonenumeber: {profile.phonenumeber},</p>
          <p> worknumber: {profile.worknumber}</p>
          <p>courses: {profile.courses}</p>
          <p>company: {profile.company}</p>
          <p>comments: {profile.comments}</p>
        </div>
      )}
    </div>
  );
};
export default Form;
