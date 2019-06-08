import React, { Component } from 'react';

class Counter extends Component {

  state = {
    value: this.props.value,
    tags1: ['tag1', 'tag2', 'tag3'],
    tags: [ 'tag2']
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  // constructor() {
  //   // need the constructor
  //   // have access to This
  //   super();
  //   console.log('Constuructor', this)
  //   //  here I haev access to this  (I don't in handleIncrement)
  //   this.handleIncrement = this.handleIncrement.bind(this);    // creates a new instance of the handleIncrement funct ref the current counter object
  // }

  // handleIncrement() {
  //   console.log('Increment Clicked', this);
  //   // obj.method()   this returns ref to obj
  //   // function()  this returns undefined in strict mode
  //
  // }


  // OR use an arrow function (to bind the event handler)
  handleIncrement = (product) => {

    console.log('Increment Clicked', product);
    // obj.method()   this returns ref to obj
    // function()  this returns undefined in strict mode
    this.setState({value: this.state.value + 1});
  }

  // doHandleIncrement = () => {
  //   this.handleIncrement({id: 1});
  // }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }


  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes
  }

  render() {
    /*        <button onClick={this.doHandleIncrement} style={ { fontSize: 10 } } className="btn btn-secondary btn-sm">Increment</button> */
    console.log('props', this.props);

    return (
      <div>
        { this.props.children }
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={ () => this.handleIncrement({id:1})} style={ { fontSize: 10 } } className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }


renderTags() {
  if (this.state.tags.length === 0) return <p>There are no tags</p>;

  return (
    <ul>
      {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  );

}


  render2() {
    return (<div>{this.renderTags()}</div>);
  }

}

export default Counter;
