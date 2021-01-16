// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

//////instead we are going to keep track of task, task status, description etc in an object..

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }


//new task will now create an objecte called task with the following kvps taskName, taskDescription, taskStatus(false = incomplete)
function newTask(taskName,taskDescription) {

  let task = {

    taskName: taskName,
    taskDescription: taskDescription,
    taskStatus: false,
    logTaskState: function () {

      console.log(`${this.taskName} has${this.taskStatus ? "" : "not"} been completed.`)

    },
    completeTask: function () {
      this.taskStatus = true;
    }

  }

  return task;

}

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

///

// function logTaskState(task) {
//   console.log(`${task.taskName} has ${task.taskStatus ? " " : "not"} been completed.`)
// }

function completeTask (task){
  task.taskStatus = true;
}

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(1); // Clean Cat Litter has not been completed
// completeTask(1);
// logTaskState(1); // Clean Cat Litter has been completed


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed


task1.title
task1.completeTask();
