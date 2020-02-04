import React, { Component } from 'react';
import {LikeButton} from "../Components/LikeButton";

export class Home extends Component {
  render() {
    return (<>
      <div style={{ padding: '20px' }}>Este es el home.</div>
      <LikeButton/>
    </>);
  }
}
