import React, { Component } from 'react';
import './hometext.css'

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

class Hometext extends Component {
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
                <div className="bouncer">h</div>
                <div className="bouncer">e</div>
                <div className="bouncer">l</div>
                <div className="bouncer">l</div>
                <div className="bouncer">o</div>
                <div className="bouncer"> </div>
                <div className="bouncer">w</div>
                <div className="bouncer">o</div>
                <div className="bouncer">r</div>
                <div className="bouncer">l</div>
                <div className="bouncer">d</div>
                <div className="bouncer">.</div>
                <div className="break"></div>
                <div className="bouncer">i</div>
                <div className="bouncer">m</div>
                <div className="bouncer"> </div>
                <div className="bouncer">k</div>
                <div className="bouncer">r</div>
                <div className="bouncer">i</div>
                <div className="bouncer">s</div>
                <div className="bouncer">t</div>
                <div className="bouncer">i</div>
                <div className="bouncer">a</div>
                <div className="bouncer">n</div>
                <div className="bouncer">,</div>
                <div className="break"></div>
                <div className="bouncer">s</div>
                <div className="bouncer">o</div>
                <div className="bouncer">f</div>
                <div className="bouncer">t</div>
                <div className="bouncer">w</div>
                <div className="bouncer">a</div>
                <div className="bouncer">r</div>
                <div className="bouncer">e</div>
                <div className="bouncer"> </div>
                <div className="bouncer">d</div>
                <div className="bouncer">e</div>
                <div className="bouncer">v</div>
                <div className="bouncer">e</div>
                <div className="bouncer">l</div>
                <div className="bouncer">o</div>
                <div className="bouncer">p</div>
                <div className="bouncer">e</div>
                <div className="bouncer">r</div>
            </div>
        </main>
        );
    }
}

export default Hometext;


