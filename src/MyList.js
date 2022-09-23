import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';

export default class MyList extends Component {
  render(){
  // map over props here
  const todoItems = this.props.theList.map((item, idx) => {
    return <ListItem key={`task-${idx}`} task={item}/>
  })

    return(
      <>
        <h1>Things I should stop procrastinating:</h1>
        {/* testing for props */}
        {/* {this.props.theList} */}
        {/* testing render */}
        {/* <ListItem 
          breakfast="bacon and eggs"
        /> */}
        <ul>
          {todoItems}
        </ul>
      </>
    )
  }
}