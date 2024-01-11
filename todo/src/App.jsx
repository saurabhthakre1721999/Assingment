import { Component } from "react";

class HobbiesFiller extends Component {
  state = {
    newHobby: "",
    hobbies: [],
  };

  onNewHobbyChange = (e) => {
    this.setState({ newHobby: e.target.value });
  };

  onAddNewHobby = () => {
    const { newHobby, hobbies } = this.state;
    const newHobbyLC = newHobby.toLowerCase();
    if (!newHobbyLC) {
      toast("Please enter a valid hobby!");
      return;
    }

    if (hobbies.includes(newHobbyLC)) {
      toast("This hobby already exists!");
      return;
    }

    this.setState({ hobbies: [newHobbyLC, ...hobbies], newHobby: "" });
    toast(`${newHobby} added successfully!`);
  };

  render() {
    const { newHobby, hobbies } = this.state;
    console.log("Re-Render: ", { newHobby, hobbies });
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="form-element">
          <p style={{ fontWeight: 600 }}>New Hobby</p>
          <div style={{ display: "flex" }}>
            <input
              style={{ outline: "none", width: "100%", padding: "12px" }}
              type="text"
              placeholder="Enter a hobby"
              value={newHobby}
              onChange={this.onNewHobbyChange}
            />
            <button
              style={{ width: "200px", fontWeight: 600 }}
              onClick={this.onAddNewHobby}
            >
              Add Hobby
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HobbiesFiller;
