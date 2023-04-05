import {Component} from "react";

class ClassComp extends Component {
  state = {
    count: 0,
  };

  setCount(num) {
    this.state({
      count: num,
    });
  }

  render() {
    return (
      <div className="bg-blue-100 w-1/2 min-h-screen flex flex-col">
        <div>{this.state.count}</div>
        <button
          className="bg-purple-300 px-4 py-2 rounded-md"
          onClick={() => this.setCount(this.state.count + 1)}
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComp;
