// function findingBadData(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < 0) {
//         count++;
//       }
//     }
//     return count;
//   }

//   const input=[12, 54,59, -25]
//   const value=findingBadData(input);
//   console.log(value);


function findingBadData(array){
    let count=0;
    for(let i=0; i<array.length;i++){
        if(array[i]<0){
            count++;
        }
    }
    return count;
}


const input=[12, 54,59, -25, -58]
const value=findingBadData(input);
console.log(value);
