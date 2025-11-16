//  ব্যাবহার এর ক্ষেত্রে  best হলো function, array = type alias 
//    boject = type interface
// type alias

type User = {
    name: string;
    age: number
}

// interface : only use object type : array, object, function
interface IUser {
    name: string;
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

// type -> intersection
type UserWithRole = User & Role

// interface -> extends
interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}


const user1 : UserWithRole = {
    name: 'Mr.x',
    age: 100,
    role: 'admin'
}
const user3 : IUserWithRole = {
    name: 'Mr.x',
    age: 100,
    role: 'admin'
}

const user2 : IUser = {
    name: 'Mr.y',
    age: 190
}


// type alias and interface with function

// type alias
type Add = (num1: number, num2: number) => number


const add : Add = (num1, num2) => num1 + num2


type Friends = string[]
const friends : Friends = ['A', 'B', 'C']


interface IFriends {
    [index: number]: string
}
const friends2 : IFriends = ['A', 'B', 'C']