const filterPriorityTasks = (tasks) => {
    return tasks.filter((task) => task.isPriority);
};

const filterNonPriorityTasks = (tasks) => {
    return tasks.filter((task) => !task.isPriority);
}

const filterNonCompletedTasks = (tasks) => {
    return tasks.filter((task) => !task.isCompleted);
}

const filterCompletedTasks = (tasks) => {
    return tasks.filter((task) => task.isCompleted);
}

export { filterPriorityTasks, filterNonPriorityTasks, filterNonCompletedTasks, filterCompletedTasks };