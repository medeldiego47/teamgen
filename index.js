//imported modules and questions for inquirer prompt
const inquirer =require('inquirer')
const fs = require('fs')
const template = require('./src/pagetemplate')
const {Manager, managerQs} = require('./lib/Manager')
const {Engineer, engineerQs} = require('./lib/engineer')
const {Intern, internQs} = require('./lib/intern')

const staff =[]

const writeFile = (content) => {
    fs.writeFile('./dist/index.html',content,(err)=>{
        (err)?console.log(err):console.log('Staff list has been created.')
    })
}
const init = () => {firstPrompt()}

const firstPrompt = () =>{
    inquirer.prompt([{
        type:'list',
        name:'Type',
        message:' what type of employee would you like to add?',
        choices:[
            {name: 'Manager', value:"addManager"},
            {name: 'Engineer', value:"addEngineer"},
            {name: 'Intern', value:"addIntern"},
            {name: 'finished', value: 'finished'}
        ]
    }
    
]).then( (data) =>{
    if (data.Type === "addManager"){
        managerInquirer()
    } else if (data.Type === "addEngineer"){
        engineerInquirer()
    } else if (data.Type === "addIntern"){
        internInquirer()
    }else if (data.type === "finished"){
        let markup = template(staff);
        writeFile(markup);
    }

})}

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

init()