const students = [
    { name: "Arun", maths: 85, science: 78, english: 90 },
    { name: "Bala", maths: 65, science: 72, english: 68 },
    { name: "Charan", maths: 92, science: 88, english: 95 },
    { name: "Deepa", maths: 35, science: 55, english: 60 },
    { name: "Ezhil", maths: 48, science: 52, english: 45 },
    { name: "Farhan", maths: 76, science: 82, english: 70 }
];
const total = (s) => s.maths + s.science + s.english;

const average = (s) => Number((total(s) / 3).toFixed(2));

const grade = (avg) =>
    avg >= 90 ? "A" :
        avg >= 75 ? "B" :
            avg >= 60 ? "C" :
                avg >= 40 ? "D" : "F";
console.log("Total:", total(students[0]));
console.log("Average:", average(students[0]));
console.log("Grade:", grade(average(students[0])));
const report = students.map((s) => ({
    name: s.name,
    total: total(s),
    average: average(s),
    grade: grade(average(s))
}));

console.table(report);
const passed = students.filter((s) =>
    s.maths >= 40 && s.science >= 40 && s.english >= 40
);

const failed = students.filter((s) =>
    ![s.maths, s.science, s.english].every((mark) => mark >= 40)
);

console.log("Passed Students:", passed);
console.log("Number of Failed Students:", failed.length);
const classAverage = students.reduce(
    (sum, s) => sum + average(s), 0
) / students.length;

const topper = students.reduce(
    (best, s) => total(s) > total(best) ? s : best
);

const subjectAverage = students.reduce(
    (acc, s) => {
        acc.maths += s.maths;
        acc.science += s.science;
        acc.english += s.english;
        return acc;
    },
    { maths: 0, science: 0, english: 0 }
);

console.log(`Class Average: ${classAverage.toFixed(2)}`);
console.log(`Topper: ${topper.name} - ${total(topper)}`);

console.log(
    `Maths Average: ${(subjectAverage.maths / students.length).toFixed(2)}`
);
console.log(
    `Science Average: ${(subjectAverage.science / students.length).toFixed(2)}`
);
console.log(
    `English Average: ${(subjectAverage.english / students.length).toFixed(2)}`
);
const sortedReport = [...report]
    .sort((a, b) => b.total - a.total)
    .map((s, i) => ({
        ...s,
        rank: i + 1
    }));

console.table(sortedReport);
const showTable = (list) => {
    const rows = list.map((s) => `
        <tr>
            <td>${s.name}</td>
            <td>${s.total}</td>
            <td>${s.average}</td>
            <td>${s.grade}</td>
        </tr>
    `).join("");

    document.getElementById("board").innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Total</th>
                <th>Average</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>${rows}</tbody>
    `;
};

document.getElementById("allBtn").addEventListener("click", () => {
    showTable(report);
});

document.getElementById("passedBtn").addEventListener("click", () => {
    showTable(passed.map((s) => ({
        name: s.name,
        total: total(s),
        average: average(s),
        grade: grade(average(s))
    })));
});

document.getElementById("sortBtn").addEventListener("click", () => {
    showTable(sortedReport);
});

showTable(report);
document.getElementById("json").textContent =
    JSON.stringify(report, null, 2);
document.getElementById("parseBtn").addEventListener("click", () => {
    const input = document.getElementById("jsonInput").value;
    const message = document.getElementById("message");

    try {
        const parsedData = JSON.parse(input);
        message.textContent = "Valid JSON! Successfully parsed.";
        console.log("Parsed JSON:", parsedData);
    } catch (error) {
        message.textContent = "Invalid JSON! Please check your input.";
        console.log("JSON Error:", error.message);
    }
});
