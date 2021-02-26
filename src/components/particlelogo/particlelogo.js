import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particlelogo extends Component {
    render() {
        return (
            <Particles className={'dev'}
            params={{
              "particles": {
                "shape":{
                  "type":["image"],
                  "image": {
                    "src": "./tg_black.svg",
                    "width": 100,
                    "height": 100
                  }
                }
              },
              "number": {
                  "value": 200,
                  "density": {
                      "enable": true
                  }},
            }}
 />
        );
    }
}

export default Particlelogo;