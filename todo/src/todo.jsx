import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Todo extends Component {
  state = { newitem: " ", additems: [] };
  newitemchange = (e) => {
    this.setState({ newitem: e.target.value });
  };
  additems = () => {
    const { newitem, additems } = this.state;
    const newitemlower = newitem.toLowerCase();

    if (!newitem) {
      toast("Please enter a valid item!");
      j;
      return;
    }
    if (additems.includes(newitemlower)) {
      toast("item is already exist!");
      return;
    }
    this.setState({ additems: [newitemlower, ...additems], newitem: "" });
  };

  render() {
    const { newitem, additems } = this.state;
    console.log(" rerender", { newitem, additems });
    return (
      <div id="todolist">
        <div id="input">
          <input
            type="text"
            placeholder="Add items"
            value={newitem}
            onChange={this.newitemchange}
          />
        </div>
        <div id="addlist">
          <button onClick={this.additems} value={newitem}>
            <h5>Add </h5>
          </button>{" "}
          <ToastContainer />
        </div>

        <div id="list">
          <ol>
            {additems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Todo;
