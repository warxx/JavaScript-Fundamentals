/**
 * Created by warXx_ on 5/28/2017.
 */
function calcDistance(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let t = arr[2] / 3600;

    let s1 = (v1 * t) * 1000;
    let s2 = (v2 * t) * 1000;

    let delta = Math.abs(s1 - s2);

    return delta;
}

console.log(calcDistance([5, -5, 40]));