import React, { Component } from 'react';
import ImageUploader from '../../service/imageUploader';
import styles from './card.module.css';

class Card extends Component {
    state = {
        loading: false
    }

    fileRef = React.createRef();
    imageRef = React.createRef();
    imageUploader = new ImageUploader();

    onChange = (event) => {
        const card = this.props.card;
        
        switch(event.target.id){
            case 'name':
                card.name = event.target.value; break;
            case 'company':
                card.company = event.target.value; break;
            case 'color':
                card.color = event.target.value; break;
            case 'title':
                card.title = event.target.value; break;
            case 'email':
                card.email = event.target.value; break;
            case 'message':
                card.message = event.target.value; break;
            case card.name+'image':
                this.postImage();
                break;
            default:
                break;
        }
        this.props.onChange(card);
    }

    postImage = () => {
        const file = this.fileRef.current.files[0];
        const card = this.props.card;
        const name = file.name.split('.')[0];

        this.setState({loading: true});
        this.imageUploader.upload(file, name)
        .then(result => {
            card.fileName = name;
            card.fileURL = result.url;
            this.props.onChange(card);
            this.setState({loading: false});
        })
        .catch(error => console.log('error', error));
    }

    deleteCard = () => {
        this.props.deleteCard(this.props.card);
    }

    render() {
        const card = this.props.card;

        return (
            <li className={styles.card}>
                <div className={styles.row}>
                    <input type="text" className={styles.name} placeholder='Name' id='name' onChange={this.onChange} value={card.name}/>
                    <input type="text" className={styles.company} placeholder='Company' id='company' onChange={this.onChange} value={card.company}/>
                    <select name="color" id='color' className={styles.color}  onChange={this.onChange} value={card.color}>
                        <option value="Lightpink">Pink</option>
                        <option value="LightGray">Gray</option>
                        <option value="Ivory">Ivory</option>
                        <option value="PowderBlue">Blue</option>
                        <option value="LightGreen">Green</option>
                    </select>
                </div>
                <div className={styles.row}>
                    <input type="text" className={styles.title} placeholder='Title' id='title' onChange={this.onChange} value={card.title}/>
                    <input type="email" className={styles.email} placeholder='Email' id='email' onChange={this.onChange} value={card.email}/>
                </div>
                <div className={styles.row}>
                <input type="text" className={styles.message} placeholder='Message' id='message' onChange={this.onChange} value={card.message}/>
                </div>
                <div className={styles.row}>
                    <input type="file" className={styles.file} ref={this.fileRef} id={`${card.name}image`} onChange={this.onChange}/>
                    {!this.state.loading && <label htmlFor={`${card.name}image`} className={styles.imageBtn}>{card.fileName === '' ? 'Image' : card.fileName}</label>}
                    {this.state.loading && <div className={styles.loading}><i className="fas fa-spinner"></i></div>}
                    <button className={styles.deleteBtn} onClick={this.deleteCard}>Delete</button>
                </div>
            </li>
        );
    }
}

export default Card;