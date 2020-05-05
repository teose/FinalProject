import React , { useRef, useEffect } from 'react';
import './Clock.scss';
import clockBg from "../../img/clock_bg3.png"
function Clock() {
    const secondHand = useRef(null);
    const minsHand = useRef(null);
    const hourHand = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;
            const mins = now.getMinutes();
            const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
            minsHand.current.style.transform = `rotate(${minsDegrees}deg)`;

            const hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
            hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;

        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="clock" style={{ backgroundImage: `url(${clockBg})`}}>
            <div className="clock-face">
                <div ref={hourHand} className="hand hour-hand"></div>
                <div ref={minsHand} className="hand min-hand"></div>
                <div ref={secondHand} className="hand second-hand"></div>
            </div>
        </div>
    );
}

export default Clock;