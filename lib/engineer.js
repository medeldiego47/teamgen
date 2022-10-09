const Employee = require("./employee")


class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github
    }

    getRole(){
        return 'Engineer';
    }
    
    getGithub(){
        return this.github
    }
}


const engineerQs =[
    {
        type:"input",
        name: 'name',
        message: 'what is the name of this engineer?'
    },
    {
        type:'input',
        name: 'id',
        message: 'what is the id number of this engineer?'
    },
    {
        type: 'input',
        name: 'email',
        message: ' what is the email for this engineer?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is the github username for this engineer?'
    }
]



module.exports = {Engineer, engineerQs} ;
