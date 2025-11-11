//  nullable types

const getUser = (input: string | null) => {
    if(input){
        console.log(`From DB: ${input}`)
    } else {
        console.log(`From DB: ALL USER`)
    }
}
getUser('anam')


// unKnow

const productDiscountCalculator = (input:unknown)=> {
   if(typeof input === 'number'){
    const discountedPrice = input * 0.1;
    console.log(discountedPrice)
   } else if(typeof input === 'string'){
    const [discountedPrice] = input.split(' ')
    console.log(Number(discountedPrice) * 0.1)
   } else {
    console.log('wrong input')
   }
}
productDiscountCalculator(100)
productDiscountCalculator('100')
productDiscountCalculator(null)

// void
const throwError = (msg: string): never => {
    throw new Error (msg)
}
throwError('Error....')
