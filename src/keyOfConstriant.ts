// keyof : type operator

type RichPeoplesVehicle = {
    car:string;
    bike:string;
    cng:string
}

type MyVehicle1 = 'bike' | 'car' | 'cng'
type MyVehicle2 = keyof RichPeoplesVehicle

const myVehicle : MyVehicle1 = 'car' 


const user = {
    id:535,
    name:'Anam',
    address:{
        city:'ctg'
    }
}
// const myId = user.id
const myId = user['id']
const myName = user['name']
const address = user['address']

console.log({myId, myName, address})