//  type alias with object
 type User = {
    id:number,
    name:{
        firstName:string;
        lastName:string
    },
    gender:'male' | 'female',
    contactNo:string,
    address:{
        division:string;
        city:string
    }
 }

 const user1:User = {
    id:123,
    name:{
        firstName:'anam',
        lastName:'hasan'
    },
    gender:'male' ,
    contactNo:'01950029882',
    address:{
        division:'brahman-baria',
        city:"chattogram"
    }
 } 


//   type alias with function
type addFunc = (num1:number, num2:number) => number

const add: addFunc = (num1, num2) => num1 + num2