// union |
type UserRole = 'admin' | 'user'

const getDashboard = (role:UserRole ) => {
    if(role === 'admin'){
        return 'Admin Dashboard'
    } else if (role === 'user'){
        return "User Dashboard"
    } else {
        return 'guest Dashboard'
    }
}
getDashboard('admin')


// intersection &

type Employee = {
    id:string;
    name:string;
    phoneNo:string
}

type Manager = {
    designation: string;
    teamSize: number
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager = {
    id:'324',
    name:'Chowdhury Shaheb',
    phoneNo:'9839524',
    designation:'manager',
    teamSize:43
}