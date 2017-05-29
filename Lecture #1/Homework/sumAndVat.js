/**
 * Created by warXx_ on 5/26/2017.
 */

function sumAndVat(input) {
    let sum = 0;

    for( i = 0; i < input.length; i++) {
        sum += input[i];
    }

    let vat = sum * 0.2;
    let total = vat + sum;

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.2);
    console.log("total = " + sum * 1.2);
}

sumAndVat([1.20, 2.60, 3.50]);