// import data from './students.json';

const students: HTMLElement | null = document.getElementById('students');
const add: HTMLElement | null = document.getElementById('add');
const addForm: HTMLElement | null = document.getElementById('add-form'); 
const first: HTMLElement | null = document.getElementById('first');
const last: HTMLElement | null = document.getElementById('last');
const course: HTMLElement | null = document.getElementById('course');
const grade: HTMLElement | null = document.getElementById('grade');
let firstNameAscend: boolean = false;
let lastNameAscend: boolean = false;
let courseAscend: boolean = false;
let gradeAscend: boolean = false;

type Student = {
    firstName: string;
    lastName: string;
    course: string;
    grade: number | string;
    isPassing: boolean;
}

const data: Student[] = [
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
]

const studentArr: Student[] = localStorage.students ? JSON.parse(localStorage.students) : data;

if (!localStorage.students) {
    localStorage.students = JSON.stringify(studentArr);
}

const populateStudentSection = (studentArr: Student[]): void => {
    if (students) {
        students.innerHTML = '';
    }

    studentArr.forEach((student, i) => {
        if (students) {
            students.innerHTML += `<tr>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.course}</td>
                <td>${student.grade}</td>
                <td><img src=${student.isPassing ? './checkmark-24.png' : 'x-mark-24.png'}></td>
                <td><button class="delete" id=${i}>Delete</button>`;
        }
     
    })

    const deleteButtons: HTMLCollectionOf<Element> | null = document.getElementsByClassName('delete');

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (event) => {
            studentArr.splice(Number(event.target.id), 1);

            populateStudentSection(studentArr);
            localStorage.setItem('students', JSON.stringify(studentArr));
        })
    }
}

if (add && addForm) {
    add.addEventListener('click', (event) => {
        event.preventDefault();

        add.style.visibility = 'hidden';
        addForm.style.display = 'contents';
    })

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData: FormData = new FormData(event.target);
        const data: Student = Object.fromEntries(formData);
       
        studentArr.push(data);  
        localStorage.setItem('students', JSON.stringify(studentArr));
        populateStudentSection(studentArr);
        addForm.style.display = 'none';
        add.style.visibility = 'visible';
    })
}

if (first) {
    first.addEventListener('click', (event) => {
        console.log(firstNameAscend);
        if (firstNameAscend) {
            firstNameAscend = false;
            studentArr.sort((a,b) => {
                if (a.firstName < b.firstName) {
                    return 1;
                } else if (b.firstName < a.firstName) {
                    return -1;
                } else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        } else {
            firstNameAscend = true;
            studentArr.sort((a,b) => {
                if (b.firstName < a.firstName) {
                    return 1;
                } else if (a.firstName < b.firstName) {
                    return -1;
                } else {
                    return 0;
                }
            })
            populateStudentSection(studentArr);
        }
    });
}

if (last) {
    last.addEventListener('click', (event) => {
        console.log(lastNameAscend);
        if (lastNameAscend) {
            lastNameAscend = false;
            studentArr.sort((a,b) => {
                if (a.lastName < b.lastName) {
                    return 1;
                } else if (b.lastName < a.lastName) {
                    return -1;
                } else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        } else {
            lastNameAscend = true;
            studentArr.sort((a,b) => {
                if (b.lastName < a.lastName) {
                    return 1;
                } else if (a.lastName < b.lastName) {
                    return -1;
                } else {
                    return 0;
                }
            })
            populateStudentSection(studentArr);
        }
    });
}

if (course) {
    course.addEventListener('click', (event) => {
        console.log(courseAscend);
        if (courseAscend) {
            courseAscend = false;
            studentArr.sort((a,b) => {           
                if (a.course < b.course) {
                    return 1;
                } else if (b.course < a.course) {
                    return -1;
                } else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        } else {
            courseAscend = true;
            studentArr.sort((a,b) => {
                if (b.course < a.course) {
                    return 1;
                } else if (a.course < b.course) {
                    return -1;
                } else {
                    return 0;
                }
            })
            populateStudentSection(studentArr);
        }
    });
}

if (grade) {
    grade.addEventListener('click', (event) => {
        console.log(gradeAscend);
        if (gradeAscend) {
            gradeAscend = false;
            studentArr.sort((a,b) => Number(a.grade) - Number(b.grade));
            populateStudentSection(studentArr);
        } else {
            gradeAscend = true;
            studentArr.sort((a,b) => Number(b.grade) - Number(a.grade));
            populateStudentSection(studentArr);
        }
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

