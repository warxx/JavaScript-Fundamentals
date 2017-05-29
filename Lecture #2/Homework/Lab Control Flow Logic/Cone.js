/**
 * Created by warXx_ on 5/27/2017.
 */
function calcFunc(r, h) {
    let s = Math.sqrt((r ** 2) + (h ** 2));
    let volume = (1/3) * Math.PI * h * r * r;
    let area = Math.PI * r * (r + s);

    console.log(`volume = ${volume}\n`);
    console.log(`area = ${area}`);
}

calcFunc(3, 5)