import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react'
import "./watch.css";
const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video
        className="video"
        autoPlay
        progress
        controls
        src="http://techslides.com/demos/sample-videos/small.mp4"
      />
        </div>
    )
}

export default Watch
