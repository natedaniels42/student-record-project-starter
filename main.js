"use strict";
// import data from './students.json';
const students = document.getElementById('students');
const add = document.getElementById('add');
const addForm = document.getElementById('add-form');
const filter = document.getElementById('filter');
const filterForm = document.getElementById('filter-form');
const editForm = document.getElementById('edit-form');
const cancel = document.getElementById('cancel');
const inputs = document.getElementsByClassName('input');
const first = document.getElementById('first');
const last = document.getElementById('last');
const courseCategory = document.getElementById('course-category');
const gradeCategory = document.getElementById('grade-category');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const course = document.getElementById('course');
const grade = document.getElementById('grade');
const isPassing = document.getElementById('isPassing');
const firstName2 = document.getElementById('firstName2');
const lastName2 = document.getElementById('lastName2');
const course2 = document.getElementById('course2');
const grade2 = document.getElementById('grade2');
const isPassing2 = document.getElementById('isPassing2');
const firstName3 = document.getElementById('firstName3');
const lastName3 = document.getElementById('lastName3');
const course3 = document.getElementById('course3');
const grade3 = document.getElementById('grade3');
const isPassing3 = document.getElementById('isPassing3');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const courseError = document.getElementById('courseError');
const gradeError = document.getElementById('gradeError');
const isPassingError = document.getElementById('isPassingError');
const firstNameError3 = document.getElementById('firstNameError3');
const lastNameError3 = document.getElementById('lastNameError3');
const courseError3 = document.getElementById('courseError3');
const gradeError3 = document.getElementById('gradeError3');
const isPassingError3 = document.getElementById('isPassingError3');
const errors = document.getElementsByClassName('error');
let firstNameAscend = false;
let lastNameAscend = false;
let courseAscend = false;
let gradeAscend = false;
let currentIndex = 0;
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
    studentArr.forEach((student, i) => {
        if (students) {
            students.innerHTML += `<tr>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.course}</td>
                <td>${student.grade}</td>
                <td><img src=${student.isPassing === true || student.isPassing === 'true' ? './checkmark-24.png' : 'x-mark-24.png'}></td>
                <td><button class="edit" id=${i}>Edit</button></td>
                <td><button class="delete" id=${i}>Delete</button>`;
        }
    });
    const deleteButtons = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (event) => {
            const target = event.target;
            studentArr.splice(Number(target.id), 1);
            populateStudentSection(studentArr);
            localStorage.setItem('students', JSON.stringify(studentArr));
        });
    }
    const editButtons = document.getElementsByClassName('edit');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (event) => {
            const current = event.target;
            currentIndex = Number(current.id);
            editForm.style.display = 'contents';
            firstName3.value = studentArr[currentIndex].firstName;
            lastName3.value = studentArr[currentIndex].lastName;
            course3.value = studentArr[currentIndex].course;
            grade3.value = String(studentArr[currentIndex].grade);
            isPassing3.value = String(studentArr[currentIndex].isPassing);
        });
    }
};
firstName.addEventListener('keydown', (event) => {
    firstNameError.style.display = 'none';
});
lastName.addEventListener('keydown', (event) => {
    lastNameError.style.display = 'none';
});
course.addEventListener('change', (event) => {
    courseError.style.display = 'none';
});
grade.addEventListener('change', (event) => {
    gradeError.style.display = 'none';
});
isPassing.addEventListener('change', (event) => {
    isPassingError.style.display = 'none';
});
firstName3.addEventListener('keydown', (event) => {
    firstNameError3.style.display = 'none';
});
lastName3.addEventListener('keydown', (event) => {
    lastNameError3.style.display = 'none';
});
course3.addEventListener('change', (event) => {
    courseError3.style.display = 'none';
});
grade3.addEventListener('change', (event) => {
    gradeError3.style.display = 'none';
});
isPassing3.addEventListener('change', (event) => {
    isPassingError3.style.display = 'none';
});
if (add && addForm && filter && inputs) {
    add.addEventListener('click', (event) => {
        event.preventDefault();
        if (add.innerHTML === 'Add Student') {
            addForm.style.display = 'contents';
            filter.style.visibility = 'hidden';
            add.innerHTML = 'Close Add';
        }
        else {
            addForm.style.display = 'none';
            filter.style.visibility = 'visible';
            add.innerHTML = 'Add Student';
            firstName.value = '';
            lastName.value = '';
            course.value = '';
            grade.value = '';
            isPassing.value = '';
        }
    });
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', (event) => {
            console.log(event.target);
        });
    }
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        if (!data.firstName || !data.lastName || !data.course || !data.grade || !data.isPassing) {
            if (!data.firstName && firstNameError) {
                firstNameError.style.display = 'contents';
            }
            if (!data.lastName && lastNameError) {
                lastNameError.style.display = 'contents';
            }
            if (!data.course && courseError) {
                courseError.style.display = 'contents';
            }
            if (!data.grade && gradeError) {
                gradeError.style.display = 'contents';
            }
            if (!data.isPassing && isPassingError) {
                isPassingError.style.display = 'contents';
            }
        }
        else {
            studentArr.push(data);
            localStorage.setItem('students', JSON.stringify(studentArr));
            populateStudentSection(studentArr);
            addForm.style.display = 'none';
            add.innerHTML = 'Add Student';
            filter.style.visibility = 'visible';
            firstName.value = '';
            lastName.value = '';
            course.value = '';
            grade.value = '';
            isPassing.value = '';
        }
    });
}
if (filter && filterForm && add) {
    filter.addEventListener('click', (event) => {
        if (filter.innerHTML === 'Filter Student Results') {
            filterForm.style.display = 'contents';
            add.style.visibility = 'hidden';
            filter.innerHTML = 'Close Filter';
        }
        else {
            filterForm.style.display = 'none';
            add.style.visibility = 'visible';
            filter.innerHTML = 'Filter Student Results';
            firstName2.value = '';
            lastName2.value = '';
            course2.value = '';
            grade2.value = '';
            isPassing2.value = '';
        }
    });
    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        let currentStudents = studentArr;
        console.log(currentStudents);
        for (let [key, value] of Object.entries(data)) {
            console.log([key, value]);
            if (key === 'grade' && value !== '') {
                currentStudents = currentStudents.filter(student => {
                    if (value === 'A' && Number(student.grade) >= 90) {
                        return student;
                    }
                    else if (value === 'B' && Number(student.grade) >= 80 && Number(student.grade < 90)) {
                        return student;
                    }
                    else if (value === 'C' && Number(student.grade) >= 70 && Number(student.grade < 80)) {
                        return student;
                    }
                    else if (value === 'D' && Number(student.grade) >= 60 && Number(student.grade < 70)) {
                        return student;
                    }
                    else if (value === 'F' && Number(student.grade) < 60) {
                        return student;
                    }
                });
            }
            else if (key === 'isPassing' && value !== '') {
                currentStudents = currentStudents.filter(student => {
                    if (value === 'true' && (student.isPassing === true || student.isPassing === 'true')) {
                        return student;
                    }
                    else if (value === 'false' && (student.isPassing === false || student.isPassing === 'false')) {
                        return student;
                    }
                });
            }
            else if (key === 'firstName' && value !== '') {
                currentStudents = currentStudents.filter(student => student.firstName === value);
            }
            else if (key === 'lastName' && value !== '') {
                currentStudents = currentStudents.filter(student => student.lastName === value);
            }
            else if (key === 'course' && value !== '') {
                currentStudents = currentStudents.filter(student => student.course === value);
            }
        }
        populateStudentSection(currentStudents);
        filterForm.style.display = 'none';
        filter.innerHTML = 'Filter Student Results';
        add.style.visibility = 'visible';
        firstName2.value = '';
        lastName2.value = '';
        course2.value = '';
        grade2.value = '';
        isPassing2.value = '';
    });
}
editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (!data.firstName || !data.lastName || !data.course || !data.grade || !data.isPassing) {
        if (!data.firstName) {
            firstNameError3.style.display = 'contents';
        }
        if (!data.lastName) {
            lastNameError3.style.display = 'contents';
        }
        if (!data.course) {
            courseError3.style.display = 'contents';
        }
        if (!data.grade) {
            gradeError3.style.display = 'contents';
        }
        if (!data.isPassing) {
            isPassingError3.style.display = 'contents';
        }
    }
    else {
        studentArr[currentIndex] = data;
        editForm.style.display = 'none';
        localStorage.setItem('students', JSON.stringify(studentArr));
        populateStudentSection(studentArr);
    }
});
cancel.addEventListener('click', (event) => {
    editForm.style.display = 'none';
});
if (first) {
    first.addEventListener('click', (event) => {
        console.log(firstNameAscend);
        if (firstNameAscend) {
            firstNameAscend = false;
            studentArr.sort((a, b) => {
                if (a.firstName < b.firstName) {
                    return 1;
                }
                else if (b.firstName < a.firstName) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        }
        else {
            firstNameAscend = true;
            studentArr.sort((a, b) => {
                if (b.firstName < a.firstName) {
                    return 1;
                }
                else if (a.firstName < b.firstName) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        }
    });
}
if (last) {
    last.addEventListener('click', (event) => {
        console.log(lastNameAscend);
        if (lastNameAscend) {
            lastNameAscend = false;
            studentArr.sort((a, b) => {
                if (a.lastName < b.lastName) {
                    return 1;
                }
                else if (b.lastName < a.lastName) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        }
        else {
            lastNameAscend = true;
            studentArr.sort((a, b) => {
                if (b.lastName < a.lastName) {
                    return 1;
                }
                else if (a.lastName < b.lastName) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        }
    });
}
if (courseCategory) {
    courseCategory.addEventListener('click', (event) => {
        console.log(courseAscend);
        if (courseAscend) {
            courseAscend = false;
            studentArr.sort((a, b) => {
                if (a.course < b.course) {
                    return 1;
                }
                else if (b.course < a.course) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        }
        else {
            courseAscend = true;
            studentArr.sort((a, b) => {
                if (b.course < a.course) {
                    return 1;
                }
                else if (a.course < b.course) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            populateStudentSection(studentArr);
        }
    });
}
if (gradeCategory) {
    gradeCategory.addEventListener('click', (event) => {
        console.log(gradeAscend);
        if (gradeAscend) {
            gradeAscend = false;
            studentArr.sort((a, b) => Number(a.grade) - Number(b.grade));
            populateStudentSection(studentArr);
        }
        else {
            gradeAscend = true;
            studentArr.sort((a, b) => Number(b.grade) - Number(a.grade));
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
