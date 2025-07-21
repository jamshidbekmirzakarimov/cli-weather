const getArgs = require("./helpers/args.js")
const startCli = () =>{
    const args = getArgs(process.argv)
    console.log(args);
    if(args.h){
        //help
    }
    if(args.s){
        //save
    }if(args.t){
        //save token
    }

    // response
}
startCli()