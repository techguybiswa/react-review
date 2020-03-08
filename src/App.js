import React from "react";
import SomeListComponent from "./SomeListComponent";

var count = 2
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfItems: [
        { id: 0, text: "Hi" },
        { id: 1, text: "Hello" }
      ]
    };
  }
  addItem = () => {
    this.setState({
      listOfItems: [...this.state.listOfItems, { id: count, text: "This is a new test element" }]
    });
    count += 1;
  };
  sendInitialProps = () => {
    this.setState({
      listOfItems: [
        { id: 0, text: "Hi" },
        { id: 1, text: "Hello" }
      ]
    })
  }
  handleClickOnItem = event => {
    var value = event.target.getAttribute("data-index")
    alert("Clicked on  " + value)
  };
  render() {
    return (
      <div>
        <h1>Parent of SomeListComponent | Check the console as well</h1>
        <SomeListComponent
          items={this.state.listOfItems}
          handleClickOnItem={this.handleClickOnItem}
        />
        <button onClick={this.addItem}>Add new item</button>
        <button onClick={this.sendInitialProps}>send initial props</button>
      </div>
    );
  }
}

export default App;
