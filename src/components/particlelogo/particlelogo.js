import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particlelogo extends Component {
    render() {
        return (
                <Particles
                params={{
                    "fps_limit": 28,
                    "particles": {
                        "collisions": {
                            "enable": false
                        },
                        "number": {
                            "value": 300,
                            "density": {
                                "enable": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 30,
                            "opacity": 0.4
                        },
                        "move": {
                            "speed": 1
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "opacity_min": 0.05,
                                "speed": 1,
                                "sync": false
                            },
                            "value": 0.4
                        }
                    },
                    "polygon": {
                        "enable": true,
                        "scale": 0.5,
                        "type": "inline",
                        "move": {
                            "radius": 10
                        },
                        "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Firefox_Logo%2C_2017.svg",
                        "inline": {
                            "arrangement": "equidistant"
                        },
                        "draw": {
                            "enable": true,
                            "stroke": {
                                "color": "rgba(255, 255, 255, .2)"
                            }
                        }
                    },
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 6,
                                "distance": 40
                            }
                        }
	    }
	}} />
        );
    }
}

export default Particlelogo;