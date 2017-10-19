export class Home{
    constructor(){
        this.stage = 1;
        this.selectedLanguage = null;
        this.code = "0000";
    }

    attached(){
        
    }
    changeLangugage(){
        console.log(this.selectedLanguage);
    }

    next(){
        this.stage++;
        if(this.stage == 3){
            this.create();
        }
    }

    create(){
        if(this.code){
            window.location ="/room/" + this.code;
        } else {
            this.code = this.generateNewRoom();
            window.location ="/room/" + this.code;

        }
    }

    generateNewRoom(){
        return 1000;
    }
}