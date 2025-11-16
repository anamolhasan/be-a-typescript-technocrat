// dynamically generalize


type GenericArray<T> = Array<T>

// const friends: string[] = ['Mr.X,', 'Mr.Y', 'Mr.Z']
// const friends: Array<string> = ['Mr.X,', 'Mr.Y', 'Mr.Z']
const friends: GenericArray<string> = ['Mr.X,', 'Mr.Y', 'Mr.Z']


// const rollNumber : number[] = [2, 4,  5, 6]
// const rollNumber : Array<number> = [2, 4,  5, 6]
const rollNumber : GenericArray<number> = [2, 4,  5, 6]

// const isEligibleList : boolean[] = [true, false]
// const isEligibleList : Array<boolean> = [true, false]
const isEligibleList : GenericArray<boolean> = [true, false]


type User = {name:string, rollNo:number}

const userList:GenericArray<User> = [
    {
        name:'Mr.Z',
        rollNo:13
    },
    {
        name:'Mr.X',
        rollNo:34
    },
    {
        name:'Mr.E',
        rollNo:3
    }
]


// const sqrFunc = (value: number) => {
//     return value * value
// }

// sqrFunc(3)


// type Coordinates <X, Y> = [X, Y]

// const coordinates1: Coordinates<number, number> = [20, 40]

// const coordinates2: Coordinates<string, string> = ['30', '49']