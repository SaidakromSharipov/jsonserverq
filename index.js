"use strict";


let person={
name: 'Saidakrom',
age: '24',
jobs: 'programmer',

hobbies:{
hobbiOne: 'type coding',
hobbiTwo: 'play csgo',
hobbiThree: 'watch youtube'

}
};


const jsonFile=JSON.stringify(person);

const obj=JSON.parse(jsonFile);

obj.nick='pro';

console.log(person);

console.log(jsonFile);

console.log(obj);


