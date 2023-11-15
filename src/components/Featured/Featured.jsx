import React from "react";
import styles from "./Featured.module.scss"
import {convertDuration} from "../../utils/Utils";
import FeaturedTitleImage from "../../assets/images/FeaturedTitleImage.png"
import ReactPlayer from 'react-player'
import cn from "classnames";

const Featured = ({featuredData, playVideo, setPlayVideo}) => {
    return <div className={cn(styles.container, {[styles.disableCover]: playVideo})} >
        {!playVideo && <>
            <div className={styles.content}>
                <p className={styles.category}>{featuredData?.Category}</p>
                <img src={FeaturedTitleImage} alt={"FeaturedTitleImage"}/>
                <p className={styles.description}>{featuredData.ReleaseYear} {featuredData?.MpaRating} {convertDuration(featuredData?.Duration)}</p>
                <p className={styles.description}>{featuredData?.Description}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.playButton}>Play</button>
                    <button className={styles.infoButton}>More Info</button>
                </div>
            </div>
        </>}
        {playVideo &&<div className={styles.playerWrapper}>
            <ReactPlayer
                width="100%"
                height="100%"
                onEnded={() => setPlayVideo(false)}
                playing={true}
                url={featuredData?.VideoUrl}/>
        </div>}
    </div>
}

export default Featured
