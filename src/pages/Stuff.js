import React, { Component } from "react";
import Button from '@mui/material/Button';

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>
          Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:
        </p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
          <Button variant="contained">你好，世界</Button>
        </ol>
      </div>
    );
  }
}

export default Stuff;
