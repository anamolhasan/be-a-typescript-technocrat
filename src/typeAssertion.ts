let anything : any;

anything = 'anam';

const kgToGMConverter = (input: string | number) : string | number | undefined => {
  if(typeof input === 'number'){
    return input* 1000
  } else if (typeof input === 'string'){
    const [value] = input.split(' ')
    return `Converted output is: ${Number(value)}`
  }
}

const result1 = kgToGMConverter(2)
console.log({result1})
const result2 = kgToGMConverter('2 kg')

type CustomError = {
  message: string;
}


// ------------
try {
  
} catch (error) {
  console.log((error as CustomError).message)
}