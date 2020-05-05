import React from 'react';
import './App.scss';
import Clock from "../Clock/Clock";
import Particles from 'react-particles-js';
import QuoteMachine from "../QuoteMachine/QuoteMachine";

function App() {
    return (
        <div className="app-wrapper">
            <Particles
                style={{position:"absolute", width:"100vh", height:"100vh", pointerEvents: 'none', top: 0, left: 0}}
                params={{
                    "particles": {
                        "number": {
                            "value": 289,
                            "density": {
                                "enable": true,
                                "value_area": 2683.1443294901214
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 8
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.25836993574089673,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 4,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "bounce",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 2417.009076285808,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 164.69594594594582,
                                "size": 11,
                                "duration": 1.2668918918918908,
                                "opacity": 0.6334459459459455,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
            />
            <div className="content-wrapper">
                <div className="left-column">
                   <QuoteMachine/>
                </div>

                <div className="right-column">
                    <div className="right-column-top">
                        <Clock/>
                    </div>

                    <div className="right-column-bottom">
                        <h1 className="social-header">
                            Follow me on
                        </h1>

                        <div className="social-icons-wrapper">
                            <a className="social-link" href="#" target="_blank">
                                <button className="social-btn" title="">
                                    <i className="fa fa-facebook"></i>
                                </button>
                            </a>
                            <a className="social-link" href="#" target="_blank">
                                <button className="social-btn" title="">
                                    <i className="fa fa-instagram"></i>
                                </button>
                            </a>
                            <a className="social-link" href="#" target="_blank">
                                <button className="social-btn" title="">
                                    <i className="fa fa-youtube"></i>
                                </button>
                            </a>
                            <a className="social-link" href="#" target="_blank">
                                <button className="social-btn" title="">
                                    <i className="fa fa-github"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;