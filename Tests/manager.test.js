const Manager = require('../lib/manager')

describe('manager specific functions',()=>{
    
    it('expect office number to be equal to inputed office number',()=>{
        const officeNumberTest =123;
        const employeeObject = new Manager =('Diego',1,'medeldiego47@yahoo.com',officeNumberTest);
        expect(employeeObject.officeNumber).toBe(officeNumberTest)
    })

    it('will return correct role when getRole function is called', ()=>{
        const roleTest = "Manager"
        const employeeObject = new Manager("Diego",1,"medeldiego47@gmail.com",1)
        expect(employeeObject.getRole()).toBe(roleTest);
    })

    
})