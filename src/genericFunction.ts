

// const createArrayWithString = (value:string) => [value]

// const createArrayWithNumber = (value: number) => [value]

// const createArrayWithUserObj = (value:{id:number; name:string}) => {
//     return [value]
// }

const createArrayWithGeneric = <T> (value: T) => {
    return [value]
}


const arrString = createArrayWithGeneric('Apple')
const arrNum = createArrayWithGeneric(2222)
const arrObj = createArrayWithGeneric({
    id:434,
    name:'Next Level'
})



// tuple
const createArrayWithTuple = (param1:string, param2:string) => [param1, param1]


const createArrayTupleWithGeneric = <X, Y> (param1:X, param2:Y) => [param1, param2]

const res1 = createArrayTupleWithGeneric('Anam', false)

const res2 = createArrayTupleWithGeneric(222,{name:'anam'})

