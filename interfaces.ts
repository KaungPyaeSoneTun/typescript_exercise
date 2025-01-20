// export keywords to use outside of the class or file
export interface User {
    name: string;
    age?: number;
    id: number;
    position: string;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    pin: number;
    country?: string; // ? is for optional field in interface
}

let user: User = {name: "Harbe", id: 1, position: "Software Engineer"}

interface Employees extends User {
    salary: number;
}

let employee: Employees = {name: "Kaung", id: 2, position: "test", salary: 80}

// function behavours
// export keywords to use outside of the class or file
 export interface Login {
    login(): User;
 }

 // object destructuring

 let {name: userName, position: userLogin}: User = {name: "Nico",id: 4, position: ""}
 console.log(userName);
 console.log(userLogin)

 let users: User[] = [{
    name: "Charles",
    position: "",
    id: 5
 },{
    name: "Charles Adrien",
    position: "",
    id: 6
 },{
    name: "Charles Adrien 2",
    position: "",
    id: 7
 }]

 let [user1, user2, user3]: User[] = [{
    name: "Charles",
    position: "",
    id: 8
 },{
    name: "Charles Adrien",
    position: "",
    id: 9
 },{
    name: "Charles Adrien 2",
    position: "",
    id: 10
 }]

 let [user4,...restUsers]: User[] = [{
    name: "Charles",
    position: "",
    id: 11
 },{
    name: "Charles Adrien",
    position: "",
    id: 12
 },{
    name: "Charles Adrien 2",
    position: "",
    id: 13
 }]

 console.log("user arr: ", users)
 console.log("user1: ", user1, "user2: ",user2, "user3: ", user3)
 console.log("user4: ", user4, "Rest User: ", restUsers)

 let result = restUsers.filter( user => user.id >11);
 console.log("Result: ",result);

 // ESModules
 // every export/import keyword is ESmodules
 // if you wanna put the generated compiled js file in customer directory, go to tsconfig.json -> add the value in "outDir" field