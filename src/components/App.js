import React, { Component } from 'react';
import { LayoutWindow } from "./layout";
import { Background } from "./background";
import '../style/decistyle.css';
import '../style/poliaStyle.css';

class App extends Component {
  render() {
    return (
      <div>
        <LayoutWindow>
          <Background img="../asset/img/cover01.jpg"></Background>
        </LayoutWindow>
      </div>
    );
  }
}

export default App;
