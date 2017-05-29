/**
 * Created by warXx_ on 5/26/2017.
 */

function occurencies(word, letter){
    let count = 0;

    for(i = 0; i < word.length; i++){
        if(word[i] == letter){
            count++;
        }
    }

    return count;
}

console.log(occurencies('panther', 'n'));