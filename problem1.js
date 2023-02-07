/* 
function mindGame(input) {
    const gon=input*3;
    const jog=gon+10;
    const bag=jog/2;
    const biyog=bag-5;
    return biyog;
}

const total=10;
const abcd=mindGame(total);
console.log(abcd);
*/

function mindGame(number){
    return (number*3+10)/2-5
}
const numbers=10;
const input=mindGame(numbers);
console.log(input);