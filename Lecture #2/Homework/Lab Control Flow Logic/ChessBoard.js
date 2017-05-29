/**
 * Created by warXx_ on 5/27/2017.
 */
function chessBoard(num) {
    let result = '<div class="chessboard">\n';

    for (let row = 0; row < num; row++) {
        result += '<div>\n';
        let color = 'black';

        for (let col = 0; col < num; col++) {
            if(row % 2 == 0 && col % 2 == 0){
                color = 'black';
            }
            else if(row % 2 == 0 && col % 2 != 0 ){
                color = 'white';
            }
            else if(row % 2 != 0 && col % 2 == 0){
                color = 'white';
            }
            else if(row % 2 != 0 && col % 2 != 0){
                color = 'black';
            }

            result += `<span class="${color}"></span>\n`;
        }

        result += '</div>\n';
    }

    result += '</div>';
    return result;
}

console.log(chessBoard(5));