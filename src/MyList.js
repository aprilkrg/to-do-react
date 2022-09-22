import React, { Component } from 'react'
import './App.css'
import ListItem from "./ListItem"

export default class MyList extends Component {
  render() {
    return (
      <div>
        <h1>This I should stop procrastinating: </h1>
        <ul>
          <ListItem />
        </ul>
      </div>
    )
  }
}

