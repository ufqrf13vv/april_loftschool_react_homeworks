import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {

    handlerPlay = () => {
        const {refs:{ video }} = this;

        video.play();
    };

    handlerStop = () => {
        const {refs:{ video }} = this;

        video.pause();
    };

    render() {
        const { handlerPlay, handlerStop } = this;

        return (
            <div className="video-player">
                <video ref='video' className="video-player__source">
                    <source src={videoFile} type="video/mp4"/>
                </video>
                <div>
                    <button onClick={handlerPlay}>Play</button>
                    <button onClick={handlerStop}>Stop</button>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;
