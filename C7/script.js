// Console Program 1

const favouriteMovie = prompt(`What is your favourite movie ?`);
const age = Number(prompt(`How old are you ? `));

age >= 16
  ? alert(`You are eligible to watch`)
  : alert(
      `It seems you are ${age},you must be at least 16 years old to watch the movie`
    );

//Console Program 2

const operator = prompt(`Choose between : - + % * /`);
const firstN = Number(prompt(`Please enter the first number.`));
const secondN = Number(prompt(`Please enter the second number.`))

switch (operator) {
    case '-' : alert(`${firstN} - ${secondN} = ${firstN - secondN}`);
        break;
    case '+' : alert(`${firstN} + ${secondN} = ${firstN + secondN}`);
        break;
    case '%': alert(`${firstN} % ${secondN} = ${firstN % secondN}`);
        break;
    case '*': alert(`${firstN} * ${secondN} = ${firstN * secondN}`);
        break;
    case '/': alert(`${firstN} / ${secondN} = ${firstN / secondN}`);
        break;
    default: alert('Please select one of the 5 arithmetic operands')
}

//Console Program 3

const name = prompt("What is your name ?");
const years = Number(prompt("How old are you ? "));
const yearBirth = new Date().getFullYear() - years;


alert(`Hello , ${name}, I am only a console but it is nice to meet you. I have heard that you are ${years} years old,that means that you are born in ${yearBirth}`);