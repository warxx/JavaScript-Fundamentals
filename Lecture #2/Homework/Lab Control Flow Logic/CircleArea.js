/**
 * Created by warXx_ on 5/27/2017.
 */
function calcArea(num) {
    let area = Math.PI * num ** 2;
    let areaRound = area.toFixed(2);

    console.log(area);
    console.log(areaRound);
}

calcArea(5);