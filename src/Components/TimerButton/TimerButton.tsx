import React from 'react';
import '../Timer/Timer.css';

function TimerButton(props: any) {
    return (
        <div>
            <button className={props.classes} onClick={props.action}>{props.title}</button>
        </div>
    )
}

export default TimerButton;