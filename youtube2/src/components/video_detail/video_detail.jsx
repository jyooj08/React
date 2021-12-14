import React, { memo } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = memo(
    ({video}) => (
        <section className={styles.detail}>
            <iframe className={styles.video} title="youtube video player" type="text/html" width="100%" height="500px" 
            src={`https://www.youtube.com/embed/${video.id}`} allowFullScreen>
            </iframe>

            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            <pre className={styles.description}>{video.snippet.description}</pre>
        </section>
    )
);

export default VideoDetail;