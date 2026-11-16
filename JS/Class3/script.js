// Control statements:
// 1. Conditional statements
// if

// let age = 17

// if(age > 18){
//     console.log("Eligible for voting");
// }

// if else

// let age = 17;

// if (age > 18) {
//     console.log("Eligible for voting");
// } else {
//     console.log("Not Eligible");
// }

// if else if

// let age = 18;

// if (age > 18) {
//   console.log("Eligible for voting");
// } else if(age == 18) {
//   console.log("Partially Eligible");
// } else {
//   console.log("Not Eligible");
// }

// switch case
// let day = 4

// switch (day) {
//     case 1:
//         console.log("It's a Monday");
//         break;
//     case 2:
//         console.log("It's a Tuesday");
//         break;
//     case 3:
//         console.log("It's a Wednesday");
//         break;
//     case 4:
//         console.log("It's a Thursday");
//         break;
//     case 5:
//         console.log("It's a Friday");
//         break;
//     case 6:
//         console.log("It's a Saturday");
//         break;
//     default:
//         console.log("Happy weekend");
// }

// 2. Looping statements
// 1. for loop

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// 2. while loop

// let i = 11;

// while(i <= 10){
//     console.log(i);
//     i++;
// }

// 3. do..while loop

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// 3. Jumping statements

// break

// let i = 1;

// while(i <= 5){

//     if(i == 3){
//         break;
//     }

//     console.log(i);
//     i++;
// }

// continue

let i = 0;

while (i < 5) {
  i++;

  if (i == 3) {
    continue;
  }

  console.log(i);
}
