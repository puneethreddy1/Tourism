import React from 'react';

export default function Home() {
    return (
        <section classNameName="home" id="home">

            <div className="content">
                <h3>adventure is worthwhile</h3>
                <p>dicover new places with us, adventure awaits</p>
                <a href="#" className="btn">discover more</a>
            </div>

            <div className="controls">
                <span className="vid-btn active" data-src="images/vid-1.mp4"></span>
                <span className="vid-btn" data-src="images/vid-2.mp4"></span>
                <span className="vid-btn" data-src="images/vid-3.mp4"></span>
                <span className="vid-btn" data-src="images/vid-4.mp4"></span>
                <span className="vid-btn" data-src="images/vid-5.mp4"></span>
            </div>

            <div className="video-container">
                <video src="images/vid-1.mp4" id="video-slider" loop autoplay muted></video>
            </div>

        </section>




    )

}