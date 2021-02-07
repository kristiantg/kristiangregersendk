import React, { Component } from 'react';
import './hometext.css'

class Hometext extends Component {
    componentDidMount(){
        const element = document.querySelector('.hometext');

        element.addEventListener('animationend', () => {
            element.classList.remove('animate__animated', 'animate__bounce');
          });

        element.addEventListener('mouseover', function() {
            console.log('Event triggered');
            element.classList.add('animate__animated', 'animate__bounce');
          });
    }
    render() {
        return (
        <main>
            <span className="hometext">h</span>
            <span className="hometext">e</span>
            <h1 className="helloworld">
                hello world<br/>
                i am kristian, software developer<br/>
            </h1>
            <span className="helloworld"> 
                test
            </span>
        </main>
        );
    }
}

export default Hometext;


