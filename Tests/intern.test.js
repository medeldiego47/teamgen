const Intern = require('../lib/intern');

describe('intern specific functions',()=>{
    
    it('expect school to be equal to inputed school',()=>{
        const schoolTest ='UT Austin';
        const employeeObject = new Intern('Diego',1,'medeldiego47@yahoo.com',schoolTest);
        expect(employeeObject.school).toBe(schoolTest)
    })

    it('expect school function to pull inputed school',()=>{
        const schoolTest ='UT Austin';
        const employeeObject = new Intern('Diego',1,'medeldiego47@yahoo.com',schoolTest);
        expect(employeeObject.getSchool()).toBe(schoolTest)
    })

    it('will return correct role when getRole function is called', ()=>{
        const roleTest = "Intern"
        const employeeObject = new Intern("Diego",1,"medeldiego47@gmail.com",'UT Austin')
        expect(employeeObject.getRole()).toBe(roleTest);
    })

    
})