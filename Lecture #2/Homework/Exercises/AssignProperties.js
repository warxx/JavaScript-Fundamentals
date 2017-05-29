/**
 * Created by warXx_ on 5/28/2017.
 */
function func(arr) {
    let name = arr[0];
    let object = { [`${arr[0]}`]: `${arr[1]}`,[`${arr[2]}`]: `${arr[3]}`, [`${arr[4]}`]: `${arr[5]}`}

    console.log(object);
}

func(['ssid', '90127461', 'status', 'admin', 'expires', '600'])