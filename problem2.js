function evenOdd(input){
   const abc=input.length;

    if(abc%2 ===0){
        return 'even';
    }
    else{
        return 'Odd';
    }
    return abc;
}
// console.log(evenOdd('Batch7'));

const names='sjgjsk';
const output=evenOdd(names);
console.log(output);

// const be=typeof (names);
// console.log(be);



// function evenOdd(input) {
//     if (typeof input !== 'string') {
//       throw new Error('Input must be a string');
//     }
//     if (input.length % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

//  const names=4;
//  const output=evenOdd(names);
// console.log(output);