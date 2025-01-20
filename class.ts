import{Login, Address, User} from './interfaces';

class Employee implements Login{
    // # means private mainly use this - runtime protector - protect all the time
    #id: number;

    // private keyword for private - don't use it possible - complie time protector
    private name: string;

    // ! can use for non-assign field to ignore error
    private age: number;

    protected position: string;

    private salary: number;

    #address: Address;

    static getEmployeeCount() {
        return 10;
    }

    constructor(id: number,name: string, age: number, position: string, salary: number, address: Address) {
        this.#id = id;
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
        this.#address = address;
    }
    login(): User {
        return {name: "User", id: 3, position: ""}
    }

    getNameWithPosition() {
        return this.name + " "+ this.position
    }

    getNameWithSalary() : string {
        return this. name + " earns "+ this.salary + " euros"
    }

    getNameWithAge() {
        return `${this.name} is ${this.age} years old`
    }

    get empId(): number {
        return this.#id
    }

    set empId(id: number) {
        this.#id = id
    }

    get empName() {
        return this.name
    }

    set empName(name: string) {
        this.name = name
    }
}

let emp1 = new Employee(1,"Kylian", 29, "Project Manager", 10000, {
    street:'',
    city: '',
    state: '',
    pin: 0
});

console.log(emp1);
console.log(emp1.getNameWithSalary())
console.log(emp1.getNameWithPosition())
console.log(emp1.getNameWithAge())
console.log(Employee.getEmployeeCount())
// console.log(emp1.postiton);

class Manager extends Employee {
    constructor(id: number,name: string, age: number, position: string, salary: number, address: Address) {
        super(id, name,age, position, salary, address);
    }

    getPosition() {
        console.log(this.position)
    }
}

let manag = new Manager(2,"Adrian", 31, "Senior Project Manager", 10000,{
    street:'',
    city: '',
    state: '',
    pin: 0
});
console.log(manag);
console.log(manag.getNameWithSalary())
console.log(manag.getNameWithPosition())
console.log(manag.getNameWithAge())
console.log(manag.getPosition())
// console.log(manag.position); error can't access because of access modifier