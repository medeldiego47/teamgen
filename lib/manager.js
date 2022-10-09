const Employee = require("./employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Manager';
    }
    
    getOfficeNumber(){
        return this.officeNumber
    }
}

const managerQs =[
    {
        type:"input",
        name: 'name',
        message: 'what is the name of this manager?'
    },
    {
        type:'input',
        name: 'id',
        message: 'what is the id number of this manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: ' what is the email for this manager?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'what is the office number for this manager?'
    }
]



module.exports = {Manager, managerQs}
