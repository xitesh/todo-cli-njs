const fs = require('fs');
const file = './todo.json';

//Read from File
function loadTodos() {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return JSON.parse(data); // turning json string into js array
    } catch {
        return []; // fallback if the file dosen't exist!
    }
}

// Write to file
function saveTodos(todos) {
    fs.writeFileSync(file, JSON.stringify(todos, null, 4));
}



// get command and args
const command = process.argv[2];
const args = process.argv.slice(3);


// command handler
if(command.toLowerCase() === 'add') {
    const task = args.join(' ');
    if(!task) {
        console.log('❌ Please Provide a Task To Add.');
        process.exit(1);
    }

    const todos = loadTodos();
    todos.push({task, done: false});
    saveTodos(todos);
    console.log(`✔️ Task added: "${task}"`);
} else if (command.toLowerCase() === 'list') {
    const todos =  loadTodos();
    if(todos.length === 0) {
        console.log('📫 No todos yet.');
    } else {
        console.log('📝 Your todos: ');
        todos.forEach((todo, i) => {
            const status = todo.done ? '[✔️]' : '[ ]';
            console.log(`${i+1}. ${status} ${todo.task}`);
        });
    }
} else if(command.toLowerCase() === 'done'){
    const todos = loadTodos();
    
    const index = parseInt(args[0]) -1;
    if (isNaN(index) || index < 0 || index >= todos.length) {
        console.log('❌ Invalid task number.');
        process.exit(1);
    }
    if(todos[index].done){
        console.log(`🚫 Task ${index + 1} is already marked as done.`);
    } else {
        todos[index].done = true;
        saveTodos(todos);
        console.log(`✔️ Task ${index +1} marked as done.`);
    }
    
} else if(command.toLowerCase() === 'remove'){
    const todos = loadTodos();
    
    const index = parseInt(args[0]) -1;
    if (isNaN(index) || index < 0 || index >= todos.length) {
        console.log('❌ Invalid task number.');
        process.exit(1);
    } 

    const removed = todos.splice(index, 1); // remove 1 item from index 
    saveTodos(todos);
    console.log(`🗑️ Removed task ${index + 1}: "${removed[0].task}"`);

} else if(command.toLowerCase() === 'clear') {
    saveTodos([]); // overwrite file with empty array
    console.log('🧹 All Todos Cleared.');
} else {
    console.log('❓ Unknown Command. Use "add", "list", "done", "remove", "clear".');
}
