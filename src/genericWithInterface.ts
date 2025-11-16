
interface Developer <T>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releasedYear:string
    };
    smartWatch: T
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


const poorDeveloper : Developer <BrandCharaWatch> = {
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