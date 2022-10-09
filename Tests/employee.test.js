const Employee = require('../lib/employee')

describe('employee creation',()=>{
    it("should create a new object of the employee constructor when called with the new keyword",()=>{
    const employeeObject= new Employee();
    expect(typeof(employeeObject)).tobe("object")
    });

    it("should set name property to name entered",()=>{
        const name ="Diego";
        const employeeObject = new Employee(name)
        expect(employeeObject.name).toBe(name);
    })

    it("should set id property to id entered",()=>{
        const id = 1;
        const employeeObject = new Employee("Diego", id)
        expect(employeeObject.id).toBe(id);
    })

    it("should set email property to email entered",()=>{
        const email = "medeldiego47@gmail.com";
        const employeeObject = new Employee("Diego", 1, email);
        expect(employeeObject.email).toBe(email);
    })
})

describe('employee functions', ()=>{
    it('will get inputed name when getName function is called', ()=>{
        const nameTest = "Diego"
        const employeeObject = new Employee(nameTest)
        expect(employeeObject.getName()).toBe(nameTest);
    })

    it('will get inputed id when getId function is called', ()=>{
        const idTest = 3
        const employeeObject = new Employee("Diego",idTest)
        expect(employeeObject.getId()).toBe(idTest);
    })

    it('will get inputed email when getEmail function is called', ()=>{
        const emailTest = "medeldiego47@yahoo.com"
        const employeeObject = new Employee("Diego",1,emailTest)
        expect(employeeObject.getEmail()).toBe(emailTest);
    })

    it('will return correct role when getRole function is called', ()=>{
        const roleTest = "Employee"
        const employeeObject = new Employee("Diego",1,"medeldiego47@gmail.com")
        expect(employeeObject.getRole()).toBe(roleTest);
    })
})