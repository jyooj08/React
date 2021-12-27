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