/**
 * Created by warXx_ on 5/27/2017.
 */
function isEvenOrOdd(num) {
    if(Number(num) === num && num % 1 === 0
        && num % 2 == 0){
        console.log('even');
    }
    else if(Number(num) === num && num % 1 === 0
        && num % 2 != 0){
        console.log('odd');
    }
    else{
        console.log('invalid')
    }
}

isEvenOrOdd('32131')