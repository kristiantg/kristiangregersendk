import React from 'react';
import Particles from 'react-particles-js';
import Hometext from '../hometext/hometext';
import './particle.css'

export default function ParticlesDiv (props){
    return (
        <div className="particles-js-canvas-el">
        <Particles 
          params={{
                particles: {
                    "number":{"value":10,"density":{"enable":true,"value_area":800}},
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 5
                        }
                    }
                }
            }}
        />
        </div>
    )
};