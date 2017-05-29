/**
 * Created by warXx_ on 5/26/2017.
 */

function calcDistance(x1, y1, x2, y2){
    let a = { x: x1, y: y1 };
    let b = { x: x2, y: y2 };

    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}

console.log(calcDistance(2.34, 15.66, -13.55, -2.9985));