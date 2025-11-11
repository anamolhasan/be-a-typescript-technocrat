// spread operator


// spread operator in array
const friends = ['Rahim', 'Karim']

const schoolFriends = ['pintu', 'chintu', 'bulbul']

const collegeFriend = ['Mr. Smart', 'Mr. very very']

friends.push(...schoolFriends)
friends.push(...collegeFriend)



// spread operator using in object 
const user = {name:"Anam", phoneNo:"01900000000000"}
const otherInfo = {hobby: 'outing', favoriteColor:'Black'}
const userInfo = {...user, ...otherInfo}



// rest operator

const sendInvite = (...friends:string[]) => {

    friends.forEach((friend:string) => {
        console.log(`Send invitation to ${friend}`)
    })

}

sendInvite("pintu", "Cintu", 'bulbul')

