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
                        <h3 className="card-back-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eos eum eveniet facilis fuga hic, iusto nesciunt nisi, optio quam tempore totam, velit voluptatibus voluptatum. Ad autem odit quisquam.</h3>

                    </div>
                </div>
            </div>
        </>

    )
}
export default AboutMe
