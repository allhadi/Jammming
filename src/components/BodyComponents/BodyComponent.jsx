import React from 'react';
import SearchResult from './SearchResultComponent/SearchResult';
import PlayList from './PlayListComponent/PlayList';
import styles from './styles.module.css';

export default function BodyComponent(){
    return(
        <div className={styles.container}>
            <SearchResult/>
            <PlayList/>
        </div>
    )
}