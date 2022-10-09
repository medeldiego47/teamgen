const Employee = require("./employee")
//creating extension of employee
class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school
    }

    getRole(){
        return 'Intern';
    }
    
    getSchool(){
        return this.school
    }
}
//inquirer prompts
const internQs =[
    {
        type:"input",
        name: 'name',
        message: 'what is the name of this intern?'
    },
    {
        type:'input',
        name: 'id',
        message: 'what is the id number of this intern?'
    },
    {
        type: 'input',
        name: 'email',
        message: ' what is the email for this intern?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'what school does the intern come from?'
    }
]


module.exports = { Intern , internQs}