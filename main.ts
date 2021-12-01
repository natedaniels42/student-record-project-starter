// import data from './students.json';


const students: HTMLElement = document.getElementById('students') as HTMLElement;
const add: HTMLElement = document.getElementById('add') as HTMLElement;
const addForm: HTMLElement = document.getElementById('add-form') as HTMLElement; 
const filter: HTMLElement = document.getElementById('filter') as HTMLElement;
const filterForm: HTMLElement = document.getElementById('filter-form') as HTMLElement;
const editForm: HTMLElement = document.getElementById('edit-form') as HTMLElement;
const cancel: HTMLElement = document.getElementById('cancel') as HTMLElement;
const inputs: HTMLCollectionOf<Element> = document.getElementsByClassName('input');
const first: HTMLElement = document.getElementById('first') as HTMLElement;
const last: HTMLElement = document.getElementById('last') as HTMLElement;
const courseCategory: HTMLElement = document.getElementById('course-category') as HTMLElement;
const gradeCategory: HTMLElement = document.getElementById('grade-category') as HTMLElement;
const firstName: HTMLInputElement = document.getElementById('firstName') as HTMLInputElement;
const lastName: HTMLInputElement = document.getElementById('lastName') as HTMLInputElement;
const course: HTMLInputElement = document.getElementById('course') as HTMLInputElement;
const grade: HTMLInputElement = document.getElementById('grade') as HTMLInputElement;
const isPassing: HTMLInputElement = document.getElementById('isPassing') as HTMLInputElement;
const firstName2: HTMLInputElement = document.getElementById('firstName2') as HTMLInputElement;
const lastName2: HTMLInputElement = document.getElementById('lastName2') as HTMLInputElement;
const course2: HTMLInputElement = document.getElementById('course2') as HTMLInputElement;
const grade2: HTMLInputElement = document.getElementById('grade2') as HTMLInputElement;
const isPassing2: HTMLInputElement = document.getElementById('isPassing2') as HTMLInputElement;
const firstName3: HTMLInputElement = document.getElementById('firstName3') as HTMLInputElement;
const lastName3: HTMLInputElement = document.getElementById('lastName3') as HTMLInputElement;
const course3: HTMLInputElement = document.getElementById('course3') as HTMLInputElement;
const grade3: HTMLInputElement = document.getElementById('grade3') as HTMLInputElement;
const isPassing3: HTMLInputElement = document.getElementById('isPassing3') as HTMLInputElement;
const firstNameError: HTMLElement = document.getElementById('firstNameError') as HTMLElement;
const lastNameError: HTMLElement = document.getElementById('lastNameError') as HTMLElement;
const courseError: HTMLElement = document.getElementById('courseError') as HTMLElement;
const gradeError: HTMLElement = document.getElementById('gradeError') as HTMLElement;
const isPassingError: HTMLElement = document.getElementById('isPassingError') as HTMLElement;
const firstNameError3: HTMLElement = document.getElementById('firstNameError3') as HTMLElement;
const lastNameError3: HTMLElement = document.getElementById('lastNameError3') as HTMLElement;
const courseError3: HTMLElement = document.getElementById('courseError3') as HTMLElement;
const gradeError3: HTMLElement = document.getElementById('gradeError3') as HTMLElement;
const isPassingError3: HTMLElement = document.getElementById('isPassingError3') as HTMLElement;

let firstNameAscend: boolean = false;
let lastNameAscend: boolean = false;
let courseAscend: boolean = false;
let gradeAscend: boolean = false;
let currentIndex = 0;

type Student = {
    firstName: string;
    lastName: string;
    course: string;
    grade: number | string;
    isPassing: string | boolean;
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

const studentArr: Student[] = localStorage.students ? JSON.parse(localStorage.students) :data;

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
                <td><img src=${student.isPassing === true || student.isPassing === 'true' ? './checkmark-24.png' : 'x-mark-24.png'}></td>
                <td><button class="edit" id=${i}>Edit</button></td>
                <td><button class="delete" id=${i}>Delete</button>`;
        }
     
    })

    const deleteButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('delete') as HTMLCollectionOf<Element>;

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (event) => {
            const target: HTMLElement = event.target as HTMLElement;
            studentArr.splice(Number(target.id), 1);

            populateStudentSection(studentArr);
            localStorage.setItem('students', JSON.stringify(studentArr));
        })
    }

    const editButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('edit') as HTMLCollectionOf<Element>;

    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (event) => {
            const current: HTMLElement = event.target as HTMLElement;
            currentIndex = Number(current.id);
            editForm.style.display = 'contents';
            addForm.style.display = 'none';
            filterForm.style.display = 'none';
            add.style.visibility = 'hidden';
            filter.style.visibility = 'hidden';
            filter.innerHTML = 'Filter Student Results';
            add.innerHTML = 'Add Student';
            firstName3.value = studentArr[currentIndex].firstName;
            lastName3.value = studentArr[currentIndex].lastName;
            course3.value = studentArr[currentIndex].course;
            grade3.value = String(studentArr[currentIndex].grade);
            isPassing3.value = String(studentArr[currentIndex].isPassing);
        })
    }
}

firstName.addEventListener('keydown', (event) => {
    firstNameError.style.display = 'none';
})

lastName.addEventListener('keydown', (event) => {
    lastNameError.style.display = 'none';
})

course.addEventListener('change', (event) => {
    courseError.style.display = 'none';
})

grade.addEventListener('change', (event) => {
    gradeError.style.display = 'none';
})

isPassing.addEventListener('change', (event) => {
    isPassingError.style.display = 'none';
})

firstName3.addEventListener('keydown', (event) => {
    firstNameError3.style.display = 'none';
})

lastName3.addEventListener('keydown', (event) => {
    lastNameError3.style.display = 'none';
})

course3.addEventListener('change', (event) => {
    courseError3.style.display = 'none';
})

grade3.addEventListener('change', (event) => {
    gradeError3.style.display = 'none';
})

isPassing3.addEventListener('change', (event) => {
    isPassingError3.style.display = 'none';
})

add.addEventListener('click', (event) => {
    event.preventDefault();

    if (add.innerHTML === 'Add Student') {
        addForm.style.display = 'contents';
        filter.style.visibility = 'hidden';
        add.innerHTML = 'Close Add';
    } else {
        addForm.style.display = 'none';
        filter.style.visibility = 'visible';
        add.innerHTML = 'Add Student';
        firstName.value = '';
        lastName.value = '';
        course.value = '';
        grade.value = '';
        isPassing.value = '';
    }
})

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', (event) => {
        console.log(event.target);
    })
}

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const data: Student = Object.fromEntries(formData) as Student;

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
    } else {
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
})

filter.addEventListener('click', (event) => {
    if (filter.innerHTML === 'Filter Student Results') {
        filterForm.style.display = 'contents';
        add.style.visibility = 'hidden';
        filter.innerHTML = 'Close Filter';
    } else {
        filterForm.style.display = 'none';
        add.style.visibility = 'visible';
        filter.innerHTML = 'Filter Student Results';
        firstName2.value = '';
        lastName2.value = '';
        course2.value = '';
        grade2.value = '';
        isPassing2.value = '';
    }
    
})

filterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const data: {
        firstName?: string,
        lastName?: string,
        course?: string,
        grade?: string | number,
        isPassing?: boolean
    } = Object.fromEntries(formData);
    let currentStudents: Student[] = studentArr;
    console.log(currentStudents);
    for (let [key, value] of Object.entries(data)) {
        console.log([key, value]);
        if (key === 'grade' && value !== '') {
            currentStudents = currentStudents.filter(student => {
                if (value === 'A' && Number(student.grade) >= 90) {
                    return student;
                } else if (value === 'B' && Number(student.grade) >= 80 && Number(student.grade < 90)) {
                    return student;
                } else if (value === 'C' && Number(student.grade) >= 70 && Number(student.grade < 80)) {
                    return student;
                } else if (value === 'D' && Number(student.grade) >= 60 && Number(student.grade < 70)) {
                    return student;
                } else if (value === 'F' && Number(student.grade) < 60) {
                    return student;
                }
            })
        } else if (key === 'isPassing' && value !== '') {
            currentStudents = currentStudents.filter(student => {
                if (value === 'true' && (student.isPassing === true || student.isPassing === 'true')) {
                    return student;
                } else if (value === 'false' && (student.isPassing === false || student.isPassing === 'false')) {
                    return student;
                }
            })
        } else if (key === 'firstName' && value !== '') {
            currentStudents = currentStudents.filter(student  => student.firstName === value);
        } else if (key === 'lastName' && value !== '') {
            currentStudents = currentStudents.filter(student  => student.lastName === value);
        } else if (key === 'course' && value !== '') {
            currentStudents = currentStudents.filter(student  => student.course === value);
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
})

editForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.target as HTMLFormElement);
    const data: Student = Object.fromEntries(formData) as Student;

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
    } else {
        studentArr[currentIndex] = data;
        editForm.style.display = 'none';
        localStorage.setItem('students', JSON.stringify(studentArr));
        populateStudentSection(studentArr);
        add.style.visibility = 'visible';
        filter.style.visibility = 'visible';
    }
})

cancel.addEventListener('click', (event) => {
    editForm.style.display = 'none';
})


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

courseCategory.addEventListener('click', (event) => {
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

gradeCategory.addEventListener('click', (event) => {
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

populateStudentSection(studentArr);
