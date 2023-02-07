function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    let total=firstFriend*21 + secondFriend*32 + thirdFriend*43;
    // console.log(total);
    if(total>2000){
        let back=total-2000;
        return back;
    }
    else{
        return total;
    }

}

const friends=[10, 10, 10];
const backs=gemsToDiamond(friends[0], friends[1], friends[2]);
console.log(backs);





// function gemsToDiamond(a, b, c) {
//     let total = a * 21 + b * 32 + c * 43;
//     return total > 2000 ? 2000 - total : total;
// }
// const friends=[15, 50, 10];
// const backs=gemsToDiamond(friends);
// console.log(backs);
