import React, { useState, useEffect } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import './Timer.css'

function Timer() {
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [isOn, setIsOn] = useState<boolean>(false);

    const startTimer = () => {
        setIsOn(true);
    }

    const stopTimer = () => {
        setIsOn(false);
    }

    const resetTimer = () => {
        setSeconds(0);
        setMinutes(0);
        setIsOn(false);
    }

    useEffect(() => {
        let interval: any;
        if (isOn) {
            interval = setInterval(() => {
                if (minutes === 59) {
                    resetTimer();
                }
                if (seconds === 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                } else {
                    setSeconds(seconds + 1)
                }
            }, 1000)
        } else if (!isOn && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isOn, minutes, seconds]);

    return (
        <div>
            <div className="myTimer">
                <div className="myTime minutesBox">{("0" + minutes).slice(-2)}</div>
                <div className="myTime secondsBox"> {("0" + seconds).slice(-2)}</div>
            </div>
            <div className="myButtonsContainer">
                <TimerButton classes="myButton myStartButton" action={startTimer} title="START" />
                <TimerButton classes="myButton myStopButton" action={stopTimer} title="STOP" />
                <TimerButton classes="myButton myresetButton" action={resetTimer} title="RESET" />
            </div>
        </div>
    )
}

export default Timer;