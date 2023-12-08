import React from 'react';
import styles from './styles.module.css';


export default function SearchResult(){
    return(
        <div className={styles.container}>
            <ul>
                <li>
                    <div className={styles.songInfo}>
                        <h2>Daylight</h2>
                        <p>David Kushner</p>
                    </div>

                    <div className={styles.icon}>
                         <span>+</span>
                    </div>
                </li>
                <li>
                    <div className={styles.songInfo}>
                        <h2>Daylight</h2>
                        <p>David Kushner</p>
                    </div>

                    <div className={styles.icon}>
                         <span>+</span>
                    </div>
                </li>
                <li>
                    <div className={styles.songInfo}>
                        <h2>Daylight</h2>
                        <p>David Kushner</p>
                    </div>

                    <div className={styles.icon}>
                         <span>+</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}