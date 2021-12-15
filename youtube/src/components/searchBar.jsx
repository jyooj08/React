import React, { Component } from 'react';
import styles from '../app.module.css';

class SearchBar extends Component {
    inputRef = React.createRef();

    search = () => {
        this.props.search(this.inputRef.current.value);
        this.inputRef.current.select();
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.search();
        }
    }

    render() {
        return (
            <nav className={styles.searchbar}> 
                <img src="images/logo.png" alt="logo" className={styles.youtubeLogo}/>
                <span>Youtube</span>
                <input ref={this.inputRef} type="text" onKeyPress={this.onKeyPress} />
                <button onClick={this.search}><img src="images/search.png" alt="search" className={styles.searchLogo}/></button>

            </nav>
        );
    }
}

export default SearchBar;