import React from 'react';

// import CSS
import './Counter.scss';

interface CounterProps {
    counter: number;
};

const Counter: React.FC<CounterProps> = ({ counter }) => (  
    <div className="counter">
       <p className="counter-content">Vous avez <span className="counter-content-count">4 taches</span> en cours</p>
    </div>
)

export default Counter;
