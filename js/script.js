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
    <li
    ${task.done ? " style=\"text-decoration: line-through\"" : ""}
    >
    <button class="js-done">✅</button>
    <button class="js-remove">🗑</button>
${task.content}
    </li>
    `;
}

document.querySelector(".js-tasks").innerHTML = htmlString;
};

const addNewTask = (newTaskContent) => {
    tasks.push({
        content: newTaskContent,
    });

    render();
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
   
    if(newTaskContent === "") {
        return;
    }

   addNewTask(newTaskContent);
};

    const init = () => {
render();

const form = document.querySelector(".js-form");

form.addEventListener("submit", onFormSubmit);
    };

    init();
}