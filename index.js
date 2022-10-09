//imported modules and questions for inquirer prompt
const inquirer =require('inquirer')
const fs = require('fs')
const template = require('./src/pagetemplate')
const {Manager, managerQs} = require('./lib/Manager')
const {Engineer, engineerQs} = require('./lib/engineer')
const {Intern, internQs} = require('./lib/intern')
//empty array for staff
const staff =[];
//write file function to create the actual page
const writeFile = (content) => {
    fs.writeFile('./dist/index.html',content,(err)=>{
        (err)?console.log(err):console.log('Staff list has been created.')
    })
}
//initial function to get things started
const init = () => {firstPrompt()}
//first prompt that asks what type of employee you would like to add or if you are finished
const firstPrompt = () =>{
    inquirer.prompt([{
        type:'list',
        name:'Type',
        message:' what type of employee would you like to add?',
        choices:[
            {name: 'Manager', value:"addManager"},
            {name: 'Engineer', value:"addEngineer"},
            {name: 'Intern', value:"addIntern"},
            {name: 'done', value: 'done'}
        ]
    }
    //shoots off proper function based on the value returned from the question
]).then( (data) =>{
    if (data.Type === "addManager"){
        managerInquirer()
    } else if (data.Type === "addEngineer"){
        engineerInquirer()
    } else if (data.Type === "addIntern"){
        internInquirer()
    }else {
        //if your done it will shoot off the template generator and create the new html file
        console.log("im hitting the done criteria")
       const html =template.generateHTML(staff)

        writeFile(html)
       
    }

})
}
//call inquirer prompts for respective roles
const managerInquirer = ()=> {
    inquirer.prompt(managerQs)
    .then((data)=>{
        data = new Manager (data.name,data.id,data.email,data.officeNumber)
        staff.push(data);
        return firstPrompt()
    })
}
const engineerInquirer = ()=> {
    inquirer.prompt(engineerQs)
    .then((data)=>{
        data = new Engineer (data.name,data.id,data.email,data.github)
        staff.push(data);
        return firstPrompt()
    })
}
const internInquirer = ()=> {
    inquirer.prompt(internQs)
    .then((data)=>{
        data = new Intern (data.name,data.id,data.email,data.school)
        staff.push(data);
        return firstPrompt()
    })
}
//start the code
init()