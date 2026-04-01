// Task A
// Print all odd numbers - using filter method
const arr = [3, 7, 2, 8, 1, 9, 4, 6];
const oddNumbers = (arr) => arr.filter(n => n % 2 !== 0) ;
console.log(`Odd Numbers of Array :` ,oddNumbers(arr)) ;

// triple of each numbers in arary - using map method
const triplenumber = arr.map(n => n * 3) ;
console.log(` Triple Numbers  : `,triplenumber);

// sum of all number of array - using reduce method
const sum = arr.reduce((start,curr) => start + curr , 0) ;
console.log(`Sum of Array  :`,sum);

// Task B 
// create student object
let student = {
    name : "Riya",
    age : 21 ,
    marks : [90,97,90,88,87]
}
const getAverage = (marks) => {
    const total = marks.reduce((start, curr) => start + curr, 0);
    return total / marks.length;
};
const average = getAverage(student.marks);
console.log(`Average of Marks : `,average) ;
console.log("Student Name:", student.name);
console.log("Average Marks:", average);

// Task C 

const { name , age } = student ; console.log(name , age) ;

// Task D 
let str = "hello" ; 
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1) ;
console.log("Capitalize String : ",capitalize(str)) ;

// Task E 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(`Merge Array : `,merged);

// Task F
// Array of student objects
const students = [
    { 
        name: "Sushmita",
        age: 20, 
        marks: [80, 75, 90, 85, 70] 
    },
    { 
        name: "Siya", 
        age: 21, 
        marks: [60, 65, 58, 62, 64] 
    },
    { 
        name: "Ram", 
        age: 22, 
        marks: [72, 78, 75, 80, 74] }
];

// Function to calculate average marks
const getAverages = (marks) => {
    const total = marks.reduce((acc, curr) => acc + curr, 0);
    return total / marks.length;
};

// Function to filter students with average > 70
const getTopStudents = (students) => {
    return students.filter(student => getAverages(student.marks) > 70);
};

const result = getTopStudents(students);

console.log("Students with average > 70:");
result.forEach(student => {
    console.log(student.name, "- Avg:", getAverages(student.marks));
});