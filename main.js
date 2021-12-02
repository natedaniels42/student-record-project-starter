"use strict";
// import data from './students.json';
const students = document.getElementById('students');
const addForm = document.getElementById('add-form');
const filter = document.getElementById('filter');
const filterForm = document.getElementById('filter-form');
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
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const courseError = document.getElementById('courseError');
const gradeError = document.getElementById('gradeError');
const isPassingError = document.getElementById('isPassingError');
let firstNameAscend = false;
let lastNameAscend = false;
let courseAscend = false;
let gradeAscend = false;
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
                <td><img src=${student.isPassing === true || student.isPassing === 'true' ? 'smile.png' : 'poop.png'} width="24px"></td>
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
    const editListener = (event) => {
        const currentIndex = Number(event.target.id);
        const currentStudent = studentArr[currentIndex];
        const current = event.target.closest('tr');
        current.innerHTML = `<form id="edit-form">
            <td>
                <label for="firstName">First Name:</label>
                <p class="error" id="firstNameError3">First name is required</p>
                <input class="input" value=${currentStudent.firstName} name="firstName" id="firstName3" type="text"><br>
            </td>
            <td>
                <label for="lastName">Last Name:</label>
                <p class="error" id="lastNameError3">Last name is required</p>
                <input class="input" value=${currentStudent.lastName} name="lastName" id="lastName3" type="text"><br>
            </td>
            <td>
                <label for="course">Course:</label>
                <p class="error" id="courseError3">Course is required</p>
                <select class="input" id="course3" value=${currentStudent.course} name="course">
                    <option value=""></option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Art">Art</option>
                    <option value="Band">Band</option>
                    <option value="Literature">Literature</option>
                </select>
            </td>
            <td>
                <label for="grade">Grade:</label>
                <p class="error" id="gradeError3">Grade is required</p>
                <input class="input" name="grade" value=${currentStudent.grade} id="grade3" type="number" min="0" max="100"><br>
            </td>
            <td>
                <label for="isPassing">Is Passing?</label>
                <p class="error" id="isPassingError3">Is passing is required</p>
                <select class="input" id="isPassing3" value=${currentStudent.isPassing} name="isPassing">
                    <option value=""></option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </td>
            <td>
                <button type="submit" id="edit-submit">Edit Student</button>
            </td>
            <td>
                <button id="cancel">Cancel Edit</button>
            </td>
        </form>`;
        const editSubmit = document.getElementById('edit-submit');
        const cancel = document.getElementById('cancel');
        const firstName3 = document.getElementById('firstName3');
        const lastName3 = document.getElementById('lastName3');
        const course3 = document.getElementById('course3');
        const grade3 = document.getElementById('grade3');
        const isPassing3 = document.getElementById('isPassing3');
        const firstNameError3 = document.getElementById('firstNameError3');
        const lastNameError3 = document.getElementById('lastNameError3');
        const courseError3 = document.getElementById('courseError3');
        const gradeError3 = document.getElementById('gradeError3');
        const isPassingError3 = document.getElementById('isPassingError3');
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
        editSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            const data = {
                firstName: firstName3.value,
                lastName: lastName3.value,
                course: course3.value,
                grade: grade3.value,
                isPassing: isPassing3.value
            };
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
                localStorage.setItem('students', JSON.stringify(studentArr));
                populateStudentSection(studentArr);
                filter.style.visibility = 'visible';
            }
        });
        cancel.addEventListener('click', (event) => {
            current.innerHTML = `<td>${currentStudent.firstName}</td>
            <td>${currentStudent.lastName}</td>
            <td>${currentStudent.course}</td>
            <td>${currentStudent.grade}</td>
            <td><img src=${currentStudent.isPassing === true || currentStudent.isPassing === 'true' ? 'smile.png' : 'poop.png'} width="24px"></td>
            <td><button class="edit" id=${currentIndex}>Edit</button></td>
            <td><button class="delete" id=${currentIndex}>Delete</button>`;
            const editButton = document.getElementsByClassName('edit')[currentIndex];
            const deleteButton = document.getElementsByClassName('delete')[currentIndex];
            editButton.addEventListener('click', editListener);
            deleteButton.addEventListener('click', (event) => {
                const target = event.target;
                studentArr.splice(Number(target.id), 1);
                populateStudentSection(studentArr);
                localStorage.setItem('students', JSON.stringify(studentArr));
            });
        });
    };
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', editListener);
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
        studentArr.unshift(data);
        localStorage.setItem('students', JSON.stringify(studentArr));
        populateStudentSection(studentArr);
        addForm.style.display = 'none';
        filter.style.visibility = 'visible';
        firstName.value = '';
        lastName.value = '';
        course.value = '';
        grade.value = '';
        isPassing.value = '';
    }
});
filter.addEventListener('click', (event) => {
    if (filter.innerHTML === 'Filter Student Results') {
        filterForm.style.display = 'contents';
        filter.innerHTML = 'Close Filter';
    }
    else {
        filterForm.style.display = 'none';
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
    for (let [key, value] of Object.entries(data)) {
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
    firstName2.value = '';
    lastName2.value = '';
    course2.value = '';
    grade2.value = '';
    isPassing2.value = '';
});
// editForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData: FormData = new FormData(event.target as HTMLFormElement);
//     const data: Student = Object.fromEntries(formData) as Student;
//     if (!data.firstName || !data.lastName || !data.course || !data.grade || !data.isPassing) {
//         if (!data.firstName) {
//             firstNameError3.style.display = 'contents';
//         }
//         if (!data.lastName) {
//             lastNameError3.style.display = 'contents';
//         }
//         if (!data.course) {
//             courseError3.style.display = 'contents';
//         }
//         if (!data.grade) {
//             gradeError3.style.display = 'contents';
//         }
//         if (!data.isPassing) {
//             isPassingError3.style.display = 'contents';
//         }
//     } else {
//         studentArr[currentIndex] = data;
//         editForm.style.display = 'none';
//         localStorage.setItem('students', JSON.stringify(studentArr));
//         populateStudentSection(studentArr);
//         filter.style.visibility = 'visible';
//     }
// })
// cancel.addEventListener('click', (event) => {
//     editForm.style.display = 'none';
// })
first.addEventListener('click', (event) => {
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
last.addEventListener('click', (event) => {
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
courseCategory.addEventListener('click', (event) => {
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
gradeCategory.addEventListener('click', (event) => {
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
populateStudentSection(studentArr);
