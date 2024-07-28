let arr_1 = [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];
let Combine = [...arr_1, ...arr_2];
console.log(Combine);

function CombinesMin (...Combine) {
    let array = [...Combine];
    return Math.min(...array);
}
console.log(CombinesMin(...Combine));

let obj = {
    width : 100,
    height : 200,
}
let obj1 = {
    ...obj,
    area () {
        return obj.height * obj.width;
    }
}

console.log(obj1);
console.log(obj1.area());

function NumbersSummary (...Numbers) {
    return Numbers.reduce((x,y) => x + y , 0);
}
console.log(NumbersSummary(...Combine));

//Получить узел HTML 
let GetHtml = document.documentElement;
console.log(GetHtml);

// Поменять цвет фона
let ChangeColor = document.body.style.backgroundColor = "aqua";
console.log(ChangeColor);

// Получить узлы B и I 
let B = document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
console.log(B);
let i = document.body.firstChild.nextSibling.lastChild.previousSibling.lastChild.previousSibling;  
console.log(i);

//Поменять текст в обоих B и I
let ChangeTex = B.innerText = "Hello";
console.log(ChangeTex);
let ChangeTex1 = i.innerText = "World";
console.log(ChangeTex1);

//Задать тегу b класс bold и i класс cursive
let ChangeTag = B.className = "bold";
console.log(ChangeTag);
let ChangeClass = i.className = "cursive";
console.log(ChangeClass);

//Получить доступ к титлу и поменять его на Lincode

let ChangeTitle = document.title = "Lincode";
console.log(ChangeTitle);

//Удалить узел B 
let Delete = B.remove();


const getRandomNumber = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  resolve(randomNumber);
});

getRandomNumber.then((number) => {
  console.log(number);
});

function checknumber(number) {
    return new Promise ((resolve, reject) => {
        if (number < 10) {
            console.log("Успех");
        } else {
            reject("Неудача");
        }

    });
}
checknumber(11).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

let MyPromise = new Promise((resolve, reject) => {
    resolve("Success");
});
MyPromise.then((result) => {
    console.log(result);
});

let NewPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success1");
    }, 2000);
});

NewPromise.then((result) => {
    console.log(result);
});

let PromiseTime1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Success2");
    }, 2000);
});
let PromiseTime2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Success3");
    }, 3000);
});

Promise.all([PromiseTime1, PromiseTime2]).then((result) => {
    console.log(result);
});

let PromiseTime3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Success23");
    }, 2000);
});
let PromiseTime4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Success32");
    }, 3000);
});

Promise.race([PromiseTime3, PromiseTime4]).then((result) => {
    console.log(result);
});

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let Person = {
    Name: "John",
    age: 30,
    City: "New York",
}

let { Name, age, City } = Person;
console.log(Name, age, City);
console.log(Person);

let Letters = ['a' , 'b' , 'c' , 'd' , 'e'];
let [First , second , ...rest] = Letters;
console.log(First, second, rest);

let student = {
    name : "John",
    age1 : 30,
    adress : {
        City1 : "New York",
        Country : "USA",
    }
}
    let { name , age1 , adress : { City1 , Country } } = student;
    console.log(name, age, City, Country);