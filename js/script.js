{
const tasks = [
{
    content: "przerobić lekcje",
    done: false,
},
{
    content: "przepisać notatki",
    done: true,
},
];

const render = () => {
let htmlString = "";

for(const task of tasks) {
    htmlString += `
    <li>
${task.content}
    </li>
    `;
}

document.querySelector(".js-tasks").innerHTML = htmlString;
};

    const init = () => {
render();
    };

    init();
}