// =============================================
//  1. Type ASSertion
// =============================================

/* 
Type Assertion কি ? 

TypeScript কে বলা হয় যে : 
 ” আমি এই ভ্যারিয়েবলের টাইপ জানি - তুমি চিন্তা করো না !”

  মানে typescript আমাদের কথায় বিশ্বাস করে 
  এবং value আসলে  যে টাইপ বলেছি সেটাই ধরে নেবে 
*/

// =============== Basic Example =====================
let data: any = 'Hello';

// এখানে আমরা Typescript কে বলছি যে - data হচ্ছে  string 
let length = (data as string).length

// console.log(length)

/* 
ব্যাখ্যা : 
data এর টাইপ any, তাই Typescript জানে  না এটি string কিনা 
(data as string) দিয়ে আমরা typescript কে বোজালাম এটা string
ফলে  `.length` property ব্যাবহার করা এখন নিরাপদ
*/

// ========== Function Example ============

const checkStudentInfo = (value: any):any => {
//   Type Checking সহ কাজ 
 if(typeof value === 'string'){
    return `Student name is ${(value as string).toUpperCase()}`
 } else if (typeof value === 'number'){
    // Type Assertion ব্যাবহার করেও value কে number ধরেছি 
    if((value as number) >= 80){
        return `Grade: A+`
    }else {
        return `Grade B`
    }
 }else {
    return 'Invalid input type'
 }
}


// ============ function call ==========
checkStudentInfo('Anamol' as string); // assertion: string হিসেবে নিচ্ছে 
// console.log(checkStudentInfo(85 as number)) // Assertion: number হিসেবে নিচ্ছে

/**
 * এখানে আমরা manually Type Assertion ব্যবহার করেছি 
 * 'Anamol' as string  -> TypeScript কে বলেছি যে  এটা string
 * 85 as number        ->  TypeScript কে বলেছি যে এটা number
 *
 */

/** ======== Wrong Assertion ========== */

/**
 * TypeScript compile-time এ বিশ্বাস  করে , 
 * কিন্তু runtime এ error দিতে পারে যদি Assertion ভুল হয়
 */

let value: any = 123

// নিচের লাইনটা uncomment করলে runtime এ crash করবে
// console.log((value as string).toUpperCase())

// কারন :
// Typescript ভাবছে value একটা string 
// কিন্তু আসলে সেটা number - তাই toUpperCase() নেই

// =========== কখন ব্যবহার করবেন =============

/**
 * Type Assertion ব্যবহার করবেন যখন :
 * ১. আপনি আসলে টাইপ ১০০% নিশ্চিত
 * ২. TypeScript  ভুলভাবে টাইপ infer করছে
 * ৩. আপনি DOM / third-party API data নিয়ে  কাজ করছেন (dynamic data)
 */

// =========== Bonus Example (DOM) ===================

// const inputElement = document.querySelector('#username') as HTMLInputElement
// console.log(inputElement)

const converter = (input:number | string): number | string | undefined => {
    if(typeof input === 'number'){
        return input * 1000
    }

    if(typeof input === 'string'){
        const [value] = input.split(' ')
        return `converted ${Number(value) * 1000}`
    }
}