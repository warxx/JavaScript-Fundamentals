/**
 * Created by warXx_ on 5/27/2017.
 */
function colorNum(num) {
    let result = '<ul>\n';

    for (let i = 1; i <= num; i++) {
        let color = i % 2 == 0 ? 'blue' : 'green';
        result += `<li><span style='color:${color}'>${i}</span></li>\n`;
    }

    result += '</ul>';
    console.log(result)
}

colorNum(10)