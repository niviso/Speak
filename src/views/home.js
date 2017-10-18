export class Home{
    constructor(){
        this.stage = 1;
        this.selectedLanguage = null;
    }

    attached(){
        
    }
    changeLangugage(){
        console.log(this.selectedLanguage);
    }

    next(){
        this.stage++;
    }
}