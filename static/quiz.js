import {add_item} from '/script'
document.getElementById('quiz-form').addEventListener('submit', function (e) {


    e.preventDefault()
    let score = 0;
    const correct = {
        q1: ["luffy", "saturn", "bonney"],
        q2: "luffy",
        q3: ["ice", "light"],
        q4: "kaku",
        q5: ["garp", "hina"],
        q6: "alvida",
        q7: "0",
        q8: ["hunt", "rox"],
        q9: ["oda", "eiichiro", "eiichiro oda"],
        q10: "10",
        q11: "parameicia",
    }

    const q1Checked = Array.from(document.querySelectorAll('input[name="q1"]:checked')).map(e => e.value);
    const correctQ1 = correct.q1;
    const q1correct = q1Checked.length === correctQ1.length && correctQ1.every(value => q1Checked.includes(value));
    if (q1correct) score++;

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === correct.q2) score++; 5

    const q3Checked = Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(e => e.value);
    const correctQ3 = correct.q3;
    const q3correct = q3Checked.length === correctQ3.length && correctQ3.every(value => q3Checked.includes(value));
    if (q3correct) score++;

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === correct.q4) score++;

    const q5Checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(e => e.value);
    const correctQ5 = correct.q5;
    const q5correct = q5Checked.length === correctQ5.length && correctQ5.every(value => q5Checked.includes(value));
    if (q5correct) score++;

    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === correct.q6) score++;

    const q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === correct.q7) score++;

    const q8Checked = Array.from(document.querySelectorAll('input[name="q8"]:checked')).map(e => e.value);
    const correctQ8 = correct.q8;
    const q8correct = q8Checked.length === correctQ8.length && correctQ8.every(value => q8Checked.includes(value));
    if (q8correct) score++;

    const q9Checked = document.querySelector('input[name="q9"]').value.trim().toLowerCase();
    if (correct.q9.includes(q9Checked)) score++;

    const q10 = document.querySelector('input[name="q10"]').value.trim();
    if (q10 === correct.q10) score++;

    const q11 = document.querySelector('select[name="q11"]').value;
    if (q11 === correct.q11) score++;

    const q12 = document.querySelector('input[name="q12"]').value;

    const username = document.querySelector('input[name="username"]').value.trim();

    if (score <= 4) {
        var color = "red";
    } else if (score <= 7) {
        var color = "yellow";
        add_item('🏴‍☠️ Pirate flag')
    } else {
        var color = "green";
        add_item('🏴‍☠️ Pirate flag')
        add_item('💰 gold sack')

    }

    if (q12 === 10) {
        add_item('🍶 Bottle of sake')
    }

    const result = document.getElementById("result");
    result.innerHTML = `
    <div style="color:${color}">
        <p> ${username} your score is ${score} </p>
        <p> You rated Zoro ${q12} </p>
        </div>
    `;
});