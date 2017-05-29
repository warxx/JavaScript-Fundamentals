/**
 * Created by warXx_ on 5/27/2017.
 */
function calcFunc(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        let result = Math.log2(numArray[i]);
        console.log(result)
    }
}

calcFunc([1024, 1048576, 256, 1, 2, 50, 100]);