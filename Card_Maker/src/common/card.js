class Card{
    constructor(){
        this.id = Date.now();
        this.name = '';
        this.company = '';
        this.color = 'red';
        this.title = '';
        this.email = '';
        this.message = '';
    }

    set(id, obj){
        this.id = id;
        this.name = obj.name;
        this.company = obj.company;
        this.color = obj.color;
        this.title = obj.title;
        this.email = obj.email;
        this.message = obj.message;
    }

    isEmpty = () => {
        if(this.name !== '') return false;
        if(this.company !== '') return false;
        if(this.title !== '') return false;
        if(this.email !== '') return false;
        if(this.message !== '') return false;

        return true;
    }
}

export default Card;