import React, { useState } from 'react';
import './AboutMe.scss';
import classNames  from 'classnames';

function AboutMe() {
    const [isCardOpen, setCardOpen] = useState(false);
    const cardClass = classNames({

        scene : true,
        'is-open': isCardOpen

    });
    const toggleCard = (e) => {
        setCardOpen(currentIsOpen => !currentIsOpen);
    };

    return (
        <>
            <div className={cardClass} onClick={toggleCard}>
                <div className="card">
                    <div className="card-front"></div>
                    <div className="card-back">
                        <h2 className="card-back-header">Mateusz Bianketti</h2>
                        <h3 className="card-back-text">
                            I’m a front-end developer, currently based in Warsaw. I describe myself as a code loving designer, open source enthusiast and web platform builder. In my spare time I like to learn about consciousness transcendence.<br/>Currently I'm available for hire.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
