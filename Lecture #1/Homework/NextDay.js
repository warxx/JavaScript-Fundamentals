/**
 * Created by warXx_ on 5/26/2017.
 */

function nextDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let tomorrow = new Date((date.getTime() + 24*60*60*1000));
    return `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;
}

console.log(nextDay(2016, 12, 30));