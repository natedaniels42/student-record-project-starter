"use strict";
// import data from './students.json';
const students = document.getElementById('students');
const add = document.getElementById('add');
const addForm = document.getElementById('add-form');
const data = [
    {
        "firstName": "Patrick",
        "lastName": "Mahomes",
        "course": "English",
        "grade": 90,
        "isPassing": true
    },
    {
        "firstName": "Travis",
        "lastName": "Kelce",
        "course": "History",
        "grade": 88,
        "isPassing": true
    },
    {
        "firstName": "Tyreek",
        "lastName": "Hill",
        "course": "Band",
        "grade": 76,
        "isPassing": true
    },
    {
        "firstName": "Aaron",
        "lastName": "Rodgers",
        "course": "Literature",
        "grade": 85,
        "isPassing": true
    },
    {
        "firstName": "Aaron",
        "lastName": "Jones",
        "course": "English",
        "grade": 46,
        "isPassing": false
    },
    {
        "firstName": "Davante",
        "lastName": "Adams",
        "course": "History",
        "grade": 93,
        "isPassing": true
    },
    {
        "firstName": "Kyler",
        "lastName": "Murray",
        "course": "Art",
        "grade": 77,
        "isPassing": true
    },
    {
        "firstName": "James",
        "lastName": "Conner",
        "course": "Band",
        "grade": 50,
        "isPassing": false
    },
    {
        "firstName": "Deandre",
        "lastName": "Hopkins",
        "course": "History",
        "grade": 100,
        "isPassing": true
    },
    {
        "firstName": "Tom",
        "lastName": "Brady",
        "course": "Art",
        "grade": 70,
        "isPassing": true
    },
    {
        "firstName": "Leonard",
        "lastName": "Fournette",
        "course": "English",
        "grade": 86,
        "isPassing": true
    },
    {
        "firstName": "Mike",
        "lastName": "Evans",
        "course": "Literature",
        "grade": 23,
        "isPassing": false
    },
    {
        "firstName": "Chris",
        "lastName": "Godwin",
        "course": "English",
        "grade": 99,
        "isPassing": true
    },
    {
        "firstName": "Ben",
        "lastName": "Roethlisberger",
        "course": "Band",
        "grade": 76,
        "isPassing": true
    },
    {
        "firstName": "Najee",
        "lastName": "Harris",
        "course": "Art",
        "grade": 44,
        "isPassing": false
    },
    {
        "firstName": "Chase",
        "lastName": "Claypool",
        "course": "History",
        "grade": 62,
        "isPassing": true
    },
    {
        "firstName": "Kirk",
        "lastName": "Cousins",
        "course": "Literature",
        "grade": 82,
        "isPassing": true
    },
    {
        "firstName": "Dalvin",
        "lastName": "Cook",
        "course": "English",
        "grade": 94,
        "isPassing": true
    },
    {
        "firstName": "Adam",
        "lastName": "Thielen",
        "course": "Art",
        "grade": 99,
        "isPassing": true
    },
    {
        "firstName": "Justin",
        "lastName": "Jefferson",
        "course": "History",
        "grade": 70,
        "isPassing": true
    }
];
const studentArr = localStorage.students ? JSON.parse(localStorage.students) : data;
if (!localStorage.students) {
    localStorage.students = JSON.stringify(studentArr);
}
const populateStudentSection = (studentArr) => {
    if (students) {
        students.innerHTML = '';
    }
    studentArr.forEach(student => {
        if (students) {
            students.innerHTML += `<tr>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.course}</td>
                <td>${student.grade}</td>
                <td><img src=${student.isPassing ? './checkmark-24.png' : 'x-mark-24.png'}></td>`;
        }
    });
};
if (add && addForm) {
    add.addEventListener('click', (event) => {
        event.preventDefault();
        add.style.visibility = 'hidden';
        addForm.style.display = 'contents';
    });
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        studentArr.push(data);
        localStorage.setItem('students', JSON.stringify(studentArr));
        populateStudentSection(studentArr);
        addForm.style.display = 'none';
        add.style.visibility = 'visible';
    });
}
populateStudentSection(studentArr);
/* Create a function to add student data to an array as an array of
objects and render objects to the page

Be sure your function parameters are given strict types

*/
/* Define your data structure using a custom Type.
https://www.digitalocean.com/community/tutorials/how-to-create-custom-types-in-typescript

Student
    First name (string)
    Last name (string)
    Course  (string)
    Grade (number or string)
    isPassing (boolean value if grade is greater than a D)

    If student is passing, render a green symbol/icon next to their entry in the table
    If student is not passing, render a red symbol/icon next to their entry in the table

    It is up to you to calculate based on grade (numerical or letter) if student is passing or not


    Data should be rendered in the form of a table, i.e.,

    |First Name|Last Name|Course|Grade (as Letter)|Passing?|
    | Leon     |Kennedy  |RE-101|  B              |   :)   |


    Add a button that sorts the data based on Grade (ascending order)
    Add a button that sorts teh data based on Course (ascending order)
*/
