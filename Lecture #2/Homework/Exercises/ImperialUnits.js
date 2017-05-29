/**
 * Created by warXx_ on 5/28/2017.
 */
function calcFunc(input) {
    let feet = parseInt(input/12);
    let inches = input % 12;
    console.log(`${feet}'-${inches}"`)
}

calcFunc(36);