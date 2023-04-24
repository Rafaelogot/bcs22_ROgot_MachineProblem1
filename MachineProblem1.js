// ITCS227 Source Code Template for 2T AY 2022-2023
/*
    Program: Computation of Grades using Function
    Programmer: Rafael Archie C. Ogot   
    Section: BCS22
    Start Date: April 17, 2023
    End Date: April 25, 2023
*/




let students = [];

for (let i = 0; i < 5; i++) {
  let studentName = prompt(`Enter the name of student ${i + 1}:`);
  let enablingAssessment = [];
  let summativeAssessment = [];

  for (let j = 0; j < 5; j++) {
    enablingAssessment.push(parseInt(prompt(`Enter Enabling Assessment ${j + 1} for ${studentName}: `)));
  }

  for (let j = 0; j < 3; j++) {
    summativeAssessment.push(parseInt(prompt(`Enter Summative Assessment ${j + 1} for ${studentName}: `)));
  }

  let classParticipation = enablingAssessment.reduce((a, b) => a + b) / enablingAssessment.length;
  let summativeGrade = summativeAssessment.reduce((a, b) => a + b) / summativeAssessment.length;
  let finalGrade = (classParticipation * 0.3) + (summativeGrade * 0.3) + (parseInt(prompt(`Enter Final Examination for ${studentName}: `)) * 0.4);

  let letterGrade;
  if (finalGrade >= 90) {
    letterGrade = "A";
  } else if (finalGrade >= 80 && finalGrade < 90) {
    letterGrade = "B";
  } else if (finalGrade >= 70 && finalGrade < 80) {
    letterGrade = "C";
  } else if (finalGrade >= 60 && finalGrade < 70) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  students.push({
    "Name of Students": studentName,
    "Class Participation": classParticipation.toFixed(2),
    "Summative Grade": summativeGrade.toFixed(2),
    "Final Grade": finalGrade.toFixed(2),
    "Letter Grade": letterGrade
  });
}

console.table(students);