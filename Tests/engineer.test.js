const {Engineer, engineerQs} = require('../lib/engineer');

describe('engineer specific functions',()=>{
    
    it('expect github to be equal to inputed github',()=>{
        const githubTest ='medeldiego47';
        const employeeObject = new Engineer('Diego',1,'medeldiego47@yahoo.com',githubTest);
        expect(employeeObject.github).toBe(githubTest)
    })

    it('expect github function to pull inputed github',()=>{
        const githubTest ='medeldiego47';
        const employeeObject = new Engineer('Diego',1,'medeldiego47@yahoo.com',githubTest);
        expect(employeeObject.getGithub()).toBe(githubTest)
    })

    it('will return correct role when getRole function is called', ()=>{
        const roleTest = "Engineer"
        const employeeObject = new Engineer("Diego",1,"medeldiego47@gmail.com","medeldiego47")
        expect(employeeObject.getRole()).toBe(roleTest);
    })

    
})
