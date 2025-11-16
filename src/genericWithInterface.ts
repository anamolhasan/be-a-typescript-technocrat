
interface Developer <T, X = null>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releasedYear:string
    };
    smartWatch: T;
    bike?:X
}

interface BrandCharaWatch {
 heartRate: string;
 stopWatch:boolean;
}

interface AppleWatch {
    heartRate:string;
    callSupport:boolean;
    calculator: boolean;
    AiFeature:boolean
}

interface Yamaha {
    bikeName:string
    price:number
    color?:string
}


const poorDeveloper : Developer <BrandCharaWatch, Yamaha> = {
    name:'Mr. Poor',
    salary:29,
    device: {
        brand:'lenovo',
        model:'A21',
        releasedYear:'2010'
    },
    smartWatch: {
        heartRate:'200',
        stopWatch:true,
    }
}


const richDeveloper : Developer <AppleWatch> = {
    name:'Mr. Poor',
    salary:29,
    device: {
        brand:'lenovo',
        model:'A21',
        releasedYear:'2060'
    },
    smartWatch: {
        heartRate:'200',
        
    }
}