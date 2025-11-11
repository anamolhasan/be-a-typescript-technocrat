// function
// arrow function, normal function

// normal function
function adding (num1: number, num2 : number):number{
   return num1 + num2
}

adding(2, 3)

// arrow function
const addArrow = (num1:number, num2:number):number => num1 + num2

addArrow(4, 6)

// object => function => method
const poorUser = {
    name: 'anam',
    balance:0,
    addBalance(value:number):number{
        const totalBalance = this.balance + value;
        return totalBalance
    }
}
poorUser.addBalance(100000)


// array
const arr:number[] = [1,3,6,7]

const sqrArray = arr.map((elem: number) :number => elem * elem)
