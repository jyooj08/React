class Card{
    constructor(){
        this.id = Date.now();
        this.name = '';
        this.company = '';
        this.color = 'LightPink';
        this.title = '';
        this.email = '';
        this.message = '';
        this.fileName = '';
        this.fileURL = '';
    }

    getCardObj = () =>{
        return {
            id: this.id,
            name: this.name,
            company: this.company,
            color: this.color,
            title: this.title,
            email: this.email,
            message: this.message,
            fileName: this.fileName,
            fileURL: this.fileURL
        };
    }

    set(id, obj){
        this.id = id;
        this.name = obj.name;
        this.company = obj.company;
        this.color = obj.color;
        this.title = obj.title;
        this.email = obj.email;
        this.message = obj.message;
        this.fileName = obj.fileName;
        this.fileURL = obj.fileURL;
    }

    isEmpty = () => {
        if(this.name !== '') return false;
        if(this.company !== '') return false;
        if(this.title !== '') return false;
        if(this.email !== '') return false;
        if(this.message !== '') return false;
        if(this.fileName !== '') return false;
        if(this.fileURL !== '') return false;

        return true;
    }

}

export default Card;