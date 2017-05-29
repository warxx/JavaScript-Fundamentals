/**
 * Created by warXx_ on 5/26/2017.
 */

function filterByAge(age, name1, age1, name2, age2){
    let firstPerson = { name: name1, age: age1 }
    let secondPerson = { name: name2, age: age2 }

    if(firstPerson.age >= age){
        console.log(firstPerson);
    }

    if(secondPerson.age >= age){
        console.log(secondPerson);
    }
}

filterByAge(2, 'Ivan', 15, 'Asen', 9);