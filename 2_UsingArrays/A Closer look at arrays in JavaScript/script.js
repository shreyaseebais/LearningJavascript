let students = [
    {name: 'John', username: 'john', pswd: '1111', gender:'Male', marks: [50, 67, 74, 32, 89], role: 'admin'},
    {name: 'Steve', username: 'steve', pswd: '2222', gender:'Male', marks: [28, 39, 32, 22, 79], role: 'student'},
    {name: 'Merry', username: 'merry', pswd: '3333', gender:'Female', marks: [78, 68, 43, 88, 32], role: 'student'},
    {name: 'Mike', username: 'mike', pswd: '4444', gender:'Male', marks: [44, 65, 34, 64, 54], role: 'student'},
    {name: 'Sarah', username: 'sarah', pswd: '5555', gender:'Female', marks: [34, 45, 23, 77, 28], role: 'student'}
];
//LOGIN LOGIC
let nameSpan = document.getElementById('name');
let genderSpan = document.getElementById('gender');
let totalMarksSpan = document.getElementById('totalMarks');
let percentageSpan = document.getElementById('percentage');
let messageDiv = document.getElementById('message');
let loginSection = document.getElementById('login-section');
let detailsSection = document.getElementById('details-section');
let adminSection = document.getElementById('admin-section');
let loginBtn = document.getElementById('login-btn');
let sortByNameBtn = document.getElementById('sort-by-name');
let sortByMarksBtn = document.getElementById('sort-by-marks');

loginBtn.addEventListener('click', function(){
    let userId = document.getElementById('username').value;
    let pswd = document.getElementById('Password').value;

    let student = students.find(function(student){
        return student.username === userId && student.pswd === pswd;
    });
    if(student.role === 'admin'){
        loginAdmin();
    }else {
        loginStudent(student);
    }
})

function loginAdmin(){
    loginSection.classList.add('hidden');
    adminSection.classList.remove('hidden');
}

function loginStudent(student){
    nameSpan.textContent = student.name;
    genderSpan.textContent = student.gender;
    totalMarksSpan.textContent = getTotalMarks(student.marks);
    percentageSpan.textContent = getPercentage(student.marks) + '%';
    messageDiv.innerHTML = getMessage(student);

    loginSection.classList.add('hidden');
    detailsSection.classList.remove('hidden');
}

function getMessage(student){
    let isPass = hasPass(student.marks);
    let percentage = getPercentage(student.marks);
    let message = '';

    if(isPass === 'Pass'){
        message = `<p><span class="message-type-pass">Congratulations!</span> You have cleared the exam with ${percentage}%.</p>`;
        document.getElementById('message').style.backgroundColor = '#D5F5E3';
    } else {
        message = `<p><span class="message-type-fail">We are sorry!</span> You have failed the exam and has scored ${percentage}%.</p>`;
        document.getElementById('message').style.backgroundColor = '#F5B7B1';
    }

    return message;
}
//HIDE STUDENT DETAIL SECTION AND ADMIN SECTION
detailsSection.classList.add('hidden');
adminSection.classList.add('hidden');

//MAXIMUM TOTAL MARKS
const maxMarks = 500;
let tBody = document.querySelector('tbody');

//CALCULATE TOTAL MARKS OBTAINED BY A STUDENT
function getTotalMarks(marks){
    return marks.reduce(function(acc, elem){
        return acc + elem;
    }, 0);
}

function getPercentage(marks){
    let totalMarks = getTotalMarks(marks)
    return ((totalMarks / maxMarks) * 100).toFixed(0)
}

function hasPass(marks){
    let percentage = getPercentage(marks);
    return percentage >= 45 ? 'Pass' : 'Fail';
}

//DISPLAY ALS STUDENTS IN ADMIN SECTION
function dispalayStudents(studentArray){
    studentArray.forEach(function(student){
        let totalMarks = getTotalMarks(student.marks);
        let percentage = getPercentage(student.marks);
        let isPass = hasPass(student.marks);

        let html = `<tr>
                        <td>${student.name}</td>
                        <td>${student.gender}</td>
                        <td>${totalMarks}</td>
                        <td>${percentage}%</td>
                        <td>${isPass}</td>
                        <td><button id="delete-${student.name}" value="${student.username}" class="delete-btn">Delete</button></td>
                    </tr>`;
        tBody.insertAdjacentHTML('beforeend', html);

        let deleteButton = document.getElementById(`delete-${student.name}`);
        deleteButton.addEventListener('click', function(){
            deleteStudent(deleteButton.value);
        });
    });
}

function deleteStudent(username){
    tBody.innerHTML = '';
    let index = students.findIndex(std => std.username === username);
    console.log(index);
    students.splice(index, 1);
    dispalayStudents(students);
}

dispalayStudents(students)

//FILTER STUDENS IN STUDENT TABLE
let filterBtn = document.getElementById('filter-btn');
let filterDD = document.getElementById('filter-selection');

function displayFilteredStudent(filterText){
    let filteredStudents = [];
    tBody.innerHTML = '';
    switch(filterText){
        case 'Male':
            filteredStudents = students.filter(std => std.gender === 'Male');
            break;
        case 'Female':
            filteredStudents = students.filter(std => std.gender === 'Female');
            break;
        case 'Pass':
            filteredStudents = students.filter(std => hasPass(std.marks) === 'Pass');
            break;
        case 'Fail':
            filteredStudents = students.filter(std => hasPass(std.marks) === 'Fail');
            break;
        default:
            filteredStudents = students;
    }
    dispalayStudents(filteredStudents);
}

filterBtn.addEventListener('click', function(){
    let filterText = filterDD.value;
    displayFilteredStudent(filterText);
});

//LOGIC FOR SORTING TABLE
sortByNameBtn.addEventListener('click', function(){
    sortByName();
})
sortByMarksBtn.addEventListener('click', function(){
    sortByMarks();
})

function sortByName(){
    tBody.innerHTML = '';
    students.sort(function(curr, next){
        if(curr.name < next.name)
            return -1;
        else 
            return 1;
    })
    dispalayStudents(students);
}

function sortByMarks(){
    tBody.innerHTML = '';
    students.sort(function(curr, next){
        if(getTotalMarks(curr.marks) < getTotalMarks(next.marks))
            return -1;
        else 
            return 1;
    })
    dispalayStudents(students);
}

/*let names = ['john', 'Mike', 'Sarah', 'Steve', 'Merry'];*/
//console.log(names);

//SLICE() - EXTRACTS THE PART OF AN ARRAY WITHOUT CHANGING THE ORIGINAL ARRAY
/*let slicedArray = names.slice(2);
console.log(slicedArray);
console.log(names);

let slicedArray2 = names.slice(1, 4);
console.log(slicedArray2);

console.log(names.slice(-3));
console.log(names.slice(1, -2));*/

//CREATING SHALLOW COPY OF AN ARRAY
// let shallowCopy = names.slice();
// console.log(shallowCopy);
// console.log(names);

//CREATING SHALOW COPY OF AN ARRAY USING SPREAD OPERATOR
// let shallowCopy2 = [...names];
// console.log(shallowCopy2);
// console.log(names);

//SPLICE()
/*let arr1 = names.splice(2);
console.log(arr1);
console.log(names);*/

//DELETE LAST ELEMENT FROM AN ARRAY USING SPLICE METHOD
// console.log(names.splice(-1));
// console.log(names);

//REVERSE - REVERSES THE ORDER OF AN ELEMENT IN THE ARRAY
/*let alphabet = ['a', 'b', 'c', 'd', 'e'];
console.log(alphabet);
console.log(alphabet.reverse());
console.log(alphabet);*/

//CONCAT() - JOINS TWO ARRAY INTO A SINGLE ARRAY
/*let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let arr = arr1.concat(arr2);
console.log(arr);

let arr3 = [...arr1, ...arr2];
console.log(arr3);*/

/*let str = ['Javascript', 'is', 'the', 'best'];
let num = [1234, 156, 345, 654]
let joinedString = str.join(' ');
console.log(joinedString);

console.log(num.join());
*/



/*********************************************************************
 * FOREACH METHODS IN JAVASCRIPT
 *********************************************************************/
// let names = ['john', 'Mike', 'Sarah', 'Steve', 'Merry'];
// console.log(names);

//USING FOR...OF LOOP TO LOOP OVER ARRAY
/*for(let name of names){
    if(name === 'Sarah') continue;
    console.log('Student name is ' + name);
}*/

//FOREACH IS A HIGHER ORDER FUNCTION IN JAVASCRIPT
//FOR EACH ITTERATION, FOREACH METHOD WILL PASS THE VALUE FOR ELEM, INDEX & ARR PARAMETER
//FOREACH METHOD WILL EXECUTE THE CALLBACK FUNCTION FOR EACH ITTERATION
//CONTINUE & BREAK DOES NOT WORK IN FOREACH METHOD
/*names.forEach(function(elem, index, arr){
    //if(elem === 'Sarah') break;
    console.log('Student name is ' + elem + ' at index ' + index);
})*/


/*********************************************************************
 * FOREACH METHODS ON MAPS & SETS JAVASCRIPT
 *********************************************************************/
 /*let names = ['john', 'Mike', 'Sarah', 'Steve', 'Merry'];

 //EMPLOYEE MAP
 let employee = new Map([
     ['empId', 101],
     ['Name', 'Steve'],
     ['Gender', 'Male'],
     ['Salary', 20000],
 ]);
 console.log(employee);

 //ROLES SET
 let roles = new Set(['Admin', 'ReadOnly', 'ReadWrite']);

 //LOOPING OVER AN ARRAY
 /*names.forEach(function(elem, index, arr){

 })
*/

 //LOOPING OVER A MAP
 /*employee.forEach(function(value, key, map){
    console.log('Value of ' + key + ' is ' + value);
 })*/

 //LOOPING OVER A SET
 /*roles.forEach(function(entry, key, set){
    console.log(entry +' : ' + key);
 })*/



 /*********************************************************************
 * MAP METHODS IN JAVASCRIPT
 *********************************************************************/
//let birthYears = [1990, 1998, 2007, 1999, 2003];
//console.log(birthYears);

/*let ages = [];
for(let year of birthYears){
    let age = 2021 - year;
    ages.push(age);
}
console.log(ages);*/

//MAP IS A HIGHER ORDER FUNCTION IN JAVASCRIPT
//MAP METHOD RETURNS AN ARRAY WITH THE TRANSFORMED DATA
/*let ages = birthYears.map(function(elem, index, arr){
    //WRITE THE LOGIC FOR EACH ITTEARATION
    return 2021 - elem;
})
console.log(ages);
console.log(birthYears);*/

//RETURN TYPE OF FOREACH METHOD IS VOID
/*let ages = birthYears.forEach(function(elem){
    return 2021 - elem;
});
console.log(ages);*/



 /*********************************************************************
 * FILTER METHODS IN JAVASCRIPT
 *********************************************************************/
/*let transactions = [100, -20, -30, 60, 120, -100, 80, 20];
console.log(transactions);

//FILTER METHOD IS A HIGHER ORDER FUNCTION IN JAVASCRIPT
let deposites = transactions.filter(function(elem){
    return elem > 0;
});
console.log(deposites);

let withdrawls = transactions.filter(function(elem){
    return elem < 0
});
console.log(withdrawls);*/





/*********************************************************************
 * REDUCE METHODS IN JAVASCRIPT
 *********************************************************************/
/*let numbers = [20, 5, 30, 10];
console.log(numbers);

//REDUCE METHOD IS A FIRST CLASS FUNCTION IN JAVASCRIPT
let sum = numbers.reduce(function(acc, elem){
    return acc + elem;
}, 0)
console.log(sum);
//ELEM - 5
//ACC - 65
//RETURN VALUE - 65

let max = numbers.reduce(function(acc, elem){
    if(acc > elem) 
        return acc;
    else
        return elem;

}, numbers[0]);
console.log(max);
//ELEM - 10
//ACC - 30
//RETURN VALUE - 30
*/

/*********************************************************************
 * FIND METHODS IN JAVASCRIPT
 *********************************************************************/
/*let birthYears = [1990, 1989, 2007, 2001, 2006, 1998];
console.log(birthYears);

//FIND METHOD IS A HIGHER ORDER FUNCTION IN JAVASCRIPT
let year = birthYears.find(function(elem){
    return elem > 2000
});
console.log(year);

let years = birthYears.filter(function(elem){
    return elem > 2000
});
console.log(years);*/





/*********************************************************************
 * FINDINDEX METHODS IN JAVASCRIPT
 *********************************************************************/
 /*let birthYears = [1990, 1989, 2007, 2001, 2006, 1998];
 console.log(birthYears);

 //FINDINDEX METHOD IS A HIGHER ORDER FUNCTION IN JAVASCRIPT
 let index = birthYears.findIndex(function(elem){
    return elem > 2000;
 });
 console.log(index);

 let year = birthYears.find(function(elem){
     return elem > 2000;
 });
 console.log(year);*/




 /*********************************************************************
 * SOME & EVERY METHOD IN JAVASCRIPT
 *********************************************************************/
  /*let birthYears = [1990, 1989, 2007, 2001, 2006, 1998];
  console.log(birthYears);

  let isAvailable = birthYears.includes(2020);
  console.log(isAvailable);

  //SOME METHOD IN JAVASCRIPT - HIGHER ORDER FUNCTION
  let x = birthYears.some(function(elem){
        return elem > 2010;
  });
  console.log(x);

  //EVERY METHOD IN JAVASCRIPT - HIGHER ORDER FUNCTION
  let y = birthYears.every(function(elem){
        return elem >= 1989;
  });
  console.log(y);*/





/*********************************************************************
* FLAT & FLAT METHOD IN JAVASCRIPT
*********************************************************************/
/*let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100];
let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100];

let employee = [
    {id: 101, name: 'John', skills: ['HTML', 'CSS', 'JAVASCRIPT']},
    {id: 101, name: 'John', skills: ['C#', 'SQL']},
    {id: 101, name: 'John', skills: ['ANGULAR', 'REACT']}
];

//FLAT METHOD - FLAT METHOD FLATENS A NESTED ARRAY
let flatenedArray1 = arr1.flat();
console.log(flatenedArray1);
let flatenedArray2 = arr2.flat(2);
console.log(flatenedArray2);
console.log(arr3.flat(3));

//FLAT METHOD USECASE
let skillsArray = employee.map(function(elem){
    return elem.skills
}).flat();
//let skills = skillsArray.flat();
console.log(skillsArray);

//FLATMAP 
let skillsArray2 = employee.flatMap(function(elem, index, arr){
    return elem.skills;
});
console.log(skillsArray2);*/




/*********************************************************************
* SORT METHOD IN JAVASCRIPT
*********************************************************************/
/*let names =['John', 'Bob', 'Adam', 'Casey', 'Damien'];
let numbers = [7, 22, 11, 9, 15, 25, 101, 205];
let animals = ['cat', 'Dog', 'Horse', 'elephant', 'bee', 'ant'];

//SORTING STRING ARRAYS
let sorted = names.sort().reverse();
console.log(sorted);
console.log(names);*/

//SORTING ARRAYS WITH NUMERIC VALUES
//RETURN -1 : DO NOT SWAP
//RETURN +1 : SWAP VALUES
//RETURN 0 : DO NOTHING

//SORTING ARRAY IN ACCENDING ORDER
/*let sortedNum = numbers.sort(function(curr, next){
    if(curr < next)
        return -1;
    else
        return 1;
});
console.log(sortedNum);*/

//SORTING ARRAY IN ACCENDING ORDER USING ARROW FUNCTION
//console.log(numbers.sort((curr, next) => curr - next));

//SORTING ARRAY IN DESCENDING ORDER
/*let sortedNum2 = numbers.sort(function(curr, next){
    if(curr < next)
        return 1;
    else
        return -1;
});
console.log(sortedNum2);*/

//SORTING ARRAY IN DECENDING ORDER USING ARROW FUNCTION
//console.log(numbers.sort((curr, next) => next - curr));

/*console.log(animals.sort(function(curr, next){
    let x = curr.toLowerCase();
    let y = next.toLowerCase()
    if(x < y)
        return -1;
    else
        return 1;
}));*/


/*********************************************************************
* AT METHOD IN JAVASCRIPT
*********************************************************************/
let points = [13, 45, 63, 22, 36];
let str = 'Welcome';
console.log(points);

console.log(points[2]);
console.log(points.at(2));
console.log(str.at(3));

console.log(points[points.length - 1]);
console.log(points.slice(-1));
console.log(points.at(-3));