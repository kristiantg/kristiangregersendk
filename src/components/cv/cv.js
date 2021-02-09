import React, { Component } from 'react';
import './cv.css'

class Cv extends Component {
    componentDidMount(){
        const elements = document.querySelectorAll('.bouncer');
        
        fadeIn(elements);

        Array.from(elements).forEach(function(element) {
            element.addEventListener('mouseover', function() {
                element.style.setProperty('--animate-duration', '1s');
                element.classList.add('animate__animated', 'animate__headShake');
              });
          });

          Array.from(elements).forEach(function(element) {
            element.addEventListener('animationend', () => {
                element.classList.remove('animate__animated', 'animate__headShake');
              });
          });
    }

    render() {
        return (
            <main>
            <div class="flex-container">
                <div className="bouncer">a</div>
                <div className="bouncer">b</div>
                <div className="bouncer">o</div>
                <div className="bouncer">u</div>
                <div className="bouncer">t</div>
                <div className="bouncer"> </div>
                <div className="bouncer">m</div>
                <div className="bouncer">e</div>
                <div className="breaker"></div>
            </div>
            <div><hr className="about_me_title animate__animated animate__fadeIn"></hr></div>
        </main>
        );
    }
}

async function fadeIn(elements){
    let duration = 0.4;
    Array.from(elements).forEach(function(element) {
        duration += 0.1;
        let durationdelay = duration.toString() + 's';
        element.style.setProperty('--animate-duration', durationdelay);
        element.classList.add('animate__animated', 'animate__fadeInLeft');


        element.addEventListener('animationend', () => {
            element.classList.remove('animate__animated', 'animate__fadeInLeft');
          });
  });
}

export default Cv;