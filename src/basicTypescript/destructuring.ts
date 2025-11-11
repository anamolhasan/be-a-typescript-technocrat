// object destructuring 
// array destructuring

const user = {
    id:123,
    name:{
        firstName:'anam',
        middleName:'hasan',
        lastName:'shakil'
    },
    gender:'male',
    favoriteColor:'black'
}

const {favoriteColor} = user

// name alias
const {favoriteColor: myFavoriteColor} = user

