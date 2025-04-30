# todo-cli-njs

A simple command-line interface (CLI) based To-Do application built with Node.js. This app allows you to manage your tasks efficiently by adding, listing, marking tasks as done, removing tasks, and clearing all tasks.

## Features

- Add new tasks to your to-do list.
- View all tasks with their completion status.
- Mark tasks as done.
- Remove specific tasks from the list.
- Clear all tasks.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xitesh/todo-cli-njs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-cli-njs
   ```

## Usage

Run the application using the following command:
```bash
node index.js <command> [arguments]
```

### Commands

1. **Add a task**
   ```bash
   node index.js add <task>
   ```
   Example:
   ```bash
   node index.js add "Buy groceries"
   ```
   Output:
   ```
   ✔️ Task added: "Buy groceries"
   ```

2. **List all tasks**
   ```bash
   node index.js list
   ```
   Example Output:
   ```
   📝 Your todos:
   1. [ ] Buy groceries
   2. [✔️] Complete homework
   ```

3. **Mark a task as done**
   ```bash
   node index.js done <task_number>
   ```
   Example:
   ```bash
   node index.js done 1
   ```
   Output:
   ```
   ✔️ Task 1 marked as done.
   ```

4. **Remove a task**
   ```bash
   node index.js remove <task_number>
   ```
   Example:
   ```bash
   node index.js remove 1
   ```
   Output:
   ```
   🗑️ Removed task 1: "Buy groceries"
   ```

5. **Clear all tasks**
   ```bash
   node index.js clear
   ```
   Output:
   ```
   🧹 All Todos Cleared.
   ```

6. **Unknown command**
   If an invalid command is entered, the app will display:
   ```
   ❓ Unknown Command. Use "add", "list", "done", "remove", "clear".
   ```

## File Structure

- index.js: Main application logic.
- `todo.json`: Stores the list of tasks (auto-generated when tasks are added).

## Notes

- The `todo.json` file is used to persist tasks and is created in the project directory.
- Ensure that the `todo.json` file is not deleted unless you want to reset your tasks.

## License

This project is licensed under the ISC License.

## Author

[Xitesh](https://github.com/xitesh)