/**
 * Created by warXx_ on 5/28/2017.
 */
function calcGrads(grad) {
    grad %= 400;
    grad = grad < 0 ? grad + 400 : grad;

    let degrees = grad * 0.9;
    console.log(degrees);
}

calcGrads(-50)