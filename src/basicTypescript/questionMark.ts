//  ? : ternary operator : decision making
//  ?? : nullish coalescing operator : null/undefined
//  ?. optional chaining



const biyerJonnoEligable = (age:number) => {
    // if(age >= 21) {
    //     console.log('You are eligible')
    // } else {
    //     console.log('You are not eligible')
    // }

    const result = age >= 21 ? 'You are eligible' : 'You are not eligible'
    console.log(result)
}

biyerJonnoEligable(34)


const userTheme = undefined

const selectedTheme = userTheme ?? 'light theme'





const isAuthenticated = null

const resultWithTernary = isAuthenticated ? isAuthenticated :  'You are guest !'

const resultWithNullish = isAuthenticated ?? 'You are guest'



// optional chining

const user : {
    address: {
        city: string;
        town: string;
        postalCode?:string;
    }
} = {
    address : {
        city: 'Dhaka',
        town: 'Banani'
    }
}
const postalCode = user?.address?.postalCode
console.log(postalCode)