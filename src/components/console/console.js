import React from 'react';
import './console.css'

const Console = () => {
    return (
        <div class='console'>
        <div class='console-inner'>
          <div id="outputs">
          </div>
          <div class='output-cmd'><textarea autofocus class='console-input' placeholder="Type command..."></textarea></div>
        </div>
      </div>
    );
};

export default Console;