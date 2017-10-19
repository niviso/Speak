export class Room{
    constructor(){
        this.code = null;
    }

    activate(args){
        this.code = args.code;
    }
}