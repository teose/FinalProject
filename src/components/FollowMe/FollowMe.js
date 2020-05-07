import React from 'react';
import './FollowMe.scss';


function FollowMe() {
    return (
        <>
            <h1 className="social-header">
                Check my profiles
            </h1>

            <div className="social-icons-wrapper">
                <a className="social-link" href="#" target="_blank">
                    <button className="social-btn" title="">
                        <i className="fa fa-linkedin"></i>
                    </button>
                </a>
                <a className="social-link" href="https://github.com/teose" target="_blank">
                    <button className="social-btn" title="">
                        <i className="fa fa-github"></i>
                    </button>
                </a>
                <a className="social-link" href="https://www.facebook.com/mateusz.bianketti" target="_blank">
                    <button className="social-btn" title="">
                        <i className="fa fa-facebook"></i>
                    </button>
                </a>
                <a className="social-link" href="https://www.youtube.com/watch?v=kQ2zgg5GG2I" target="_blank">
                    <button className="social-btn" title="">
                        <i className="fa fa-youtube"></i>
                    </button>
                </a>

            </div>
        </>

    );
}

export default FollowMe;