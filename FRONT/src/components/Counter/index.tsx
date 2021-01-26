import React from 'react';

// import CSS
import './Counter.scss';

const Counter = () => (  
    <div className="counter">
       <p className="counter-content">Vous avez <span className="counter-content-count">4 taches</span> en cours</p>
    </div>
)

export default Counter;
