/**
 * Created by warXx_ on 5/26/2017.
 */
function stringOfNumbers(number) {
    let n = Number(number);
    let result = '';

    for(i = 0; i < n; i++){
        result += i+1;
    }

    return result;
}

console.log(stringOfNumbers('11'));