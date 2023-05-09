import { Student } from "./entities/student"

let students:Student[] = [];

function addStudent(){
let currentStudent:Student = {
    name: readHtml("nameStudent"),
    identification: parseInt(readHtml("identificationStudent")),
    address: readHtml("addressStudent"),
    registrationCode: parseInt(readHtml("registrationCodeStudent")),
    carrer: readHtml("carrerStudent"),
    level: readHtml("levelStudent"),
}
students.push(currentStudent);
console.log(students);
console.table(students);
}

function readHtml(id:string):string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}