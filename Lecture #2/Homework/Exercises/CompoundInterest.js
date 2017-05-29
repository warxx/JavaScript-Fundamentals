/**
 * Created by warXx_ on 5/28/2017.
 */
function calcIntereset(arr) {
    let sum = arr[0];
    let intRate = arr[1] / 100;
    let compFrequency = 12 / arr[2];
    let time = arr[3];

    let result = sum * (Math.pow((1 + (intRate/compFrequency)), compFrequency*time));
    return result;
}

console.log(calcIntereset([100000, 5, 12, 25]));