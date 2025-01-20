"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id, _Employee_address;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getEmployeeCount() {
        return 10;
    }
    constructor(id, name, age, position, salary, address) {
        // # means private mainly use this - runtime protector - protect all the time
        _Employee_id.set(this, void 0);
        _Employee_address.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
        __classPrivateFieldSet(this, _Employee_address, address, "f");
    }
    login() {
        return { name: "User", id: 3, position: "" };
    }
    getNameWithPosition() {
        return this.name + " " + this.position;
    }
    getNameWithSalary() {
        return this.name + " earns " + this.salary + " euros";
    }
    getNameWithAge() {
        return `${this.name} is ${this.age} years old`;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    get empName() {
        return this.name;
    }
    set empName(name) {
        this.name = name;
    }
}
_Employee_id = new WeakMap(), _Employee_address = new WeakMap();
let emp1 = new Employee(1, "Kylian", 29, "Project Manager", 10000, {
    street: '',
    city: '',
    state: '',
    pin: 0
});
console.log(emp1);
console.log(emp1.getNameWithSalary());
console.log(emp1.getNameWithPosition());
console.log(emp1.getNameWithAge());
console.log(Employee.getEmployeeCount());
// console.log(emp1.postiton);
class Manager extends Employee {
    constructor(id, name, age, position, salary, address) {
        super(id, name, age, position, salary, address);
    }
    getPosition() {
        console.log(this.position);
    }
}
let manag = new Manager(2, "Adrian", 31, "Senior Project Manager", 10000, {
    street: '',
    city: '',
    state: '',
    pin: 0
});
console.log(manag);
console.log(manag.getNameWithSalary());
console.log(manag.getNameWithPosition());
console.log(manag.getNameWithAge());
console.log(manag.getPosition());
// console.log(manag.position); error can't access because of access modifier
