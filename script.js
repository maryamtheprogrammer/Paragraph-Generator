function run() {
    alert("Are you ready?");
    let fullName = prompt("What is your name?");
    let fatherName = prompt("What is your father's name?");
    let living = prompt("Where do you live?");
    let job = prompt("What do you do?");
    let age = prompt("What is your age?");
    alert("Congrats, Paragraph is ready!");

    let paragraph = `
        Hello! My name is ${fullName}. My father name is ${fatherName}. 
        I live in ${living} and I work as a ${job}. I am ${age} years old.
    `;

    document.getElementById('intro-paragraph').innerText = paragraph;
}
