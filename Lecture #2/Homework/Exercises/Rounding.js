/**
 * Created by warXx_ on 5/28/2017.
 */
function roundFunc(arr) {
    let num = arr[0];
    let precision = arr[1];

    if(precision > 15){
        precision = 15;
    }

    console.log(Number(num.toFixed(precision)));
}

roundFunc([10.5, 3])