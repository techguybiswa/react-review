import React from "react";

class SomeListComponent extends React.Component {
  constructor(props) {
    super();
    //super must be called from subclasses
    this.state = { items: props.items };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.items.length !== state.items.length) {
      //if there is a change of props (props is different from state) set state to latest props
      // or else return null if there is no change
      console.log("Inside getDerivedStateFromProps ")
      return {
        items: props.items
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps) {
    //here we check that if the data we are getting is same as previous then do not re render.
    //PS: The comparism should be shallow comparism as deep comparism will affect the performance.
    //so I simply compared the lengths of the props 
    console.log("shouldComponentUpdate ", nextProps.items.length !== this.props.items.length);
    return nextProps.items.length !== this.props.items.length;
  }

  renderElement(item, index) {
    //key should be unique key
    // data-index refers to the index of the li element
    //use event delegation instead of individually attaching event listeners
    return (
      <li key={item.id} data-index={index}> 
        {item.text}
      </li>
    );
  }

  render() {
    console.log("Rendering...", this.state.items);
    return (
      // <ul
      //   style={{ backgroundColor: "red", height: "100%" }}
      //   onClick={e => this.props.handleClickOnItem(e)}
      // >
      //   {this.props.items.map((item, i) => this.renderElement(item, i))}
      // </ul>
      //use the above code when "state is lifted up to the parent"
      // the height should be 100% not 100px or 100 so as to accomodate any number of <li> elements
      <ul
        style={{ backgroundColor: "red", height: "100%" }}
        onClick={e => this.props.handleClickOnItem(e)}
      >
        {this.state.items.map((item, i) => this.renderElement(item, i))}
      </ul>
      //use the above code when state is not lifted up
    );
  }
}

export default SomeListComponent;
