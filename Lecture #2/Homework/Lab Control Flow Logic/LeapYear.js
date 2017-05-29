/**
 * Created by warXx_ on 5/27/2017.
 */
function leapYear(year) {
    if((year % 4 == 0 && year % 100 != 0) ||
        year % 400 == 0){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

leapYear(1900)