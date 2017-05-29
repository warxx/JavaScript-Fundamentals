/**
 * Created by warXx_ on 5/27/2017.
 */
function calcFunc(a, b, c) {
    let s = (a + b + c) / 2;
    let her = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return her;
}

console.log(calcFunc(2, 3.5, 4));