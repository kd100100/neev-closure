import {
    filterCompletedTasks,
    filterNonPriorityTasks,
    filterPriorityTasks,
} from "./taskFilter";

const lastWeekGraphData = (tasks) => {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    const lastWeekTasks = tasks.filter((task) => Date.parse(task.createdAt) >= lastWeek);

    const lastWeekPriorityTasks = filterPriorityTasks(lastWeekTasks);
    const lastWeekPriorityCompletedTasks = filterCompletedTasks(
        lastWeekPriorityTasks
    );

    const lastWeekNonPriorityTasks = filterNonPriorityTasks(lastWeekTasks);
    const lastWeekNonPriorityCompletedTasks = filterCompletedTasks(
        lastWeekNonPriorityTasks
    );
    return {
        priority: {
            completed: lastWeekPriorityCompletedTasks.length,
            pending:
                lastWeekPriorityTasks.length -
                lastWeekPriorityCompletedTasks.length,
        },
        nonPriority: {
            completed: lastWeekNonPriorityCompletedTasks.length,
            pending:
                lastWeekNonPriorityTasks.length -
                lastWeekNonPriorityCompletedTasks.length,
        },
    };
};

const allTimeGraphData = (tasks) => {
    const allTimePriorityTasks = filterPriorityTasks(tasks);
    const allTimePriorityCompletedTasks =
        filterCompletedTasks(allTimePriorityTasks);

    const allTimeNonPriorityTasks = filterNonPriorityTasks(tasks);
    const allTimeNonPriorityCompletedTasks = filterCompletedTasks(
        allTimeNonPriorityTasks
    );
    return {
        priority: {
            completed: allTimePriorityCompletedTasks.length,
            pending:
                allTimePriorityTasks.length -
                allTimePriorityCompletedTasks.length,
        },
        nonPriority: {
            completed: allTimeNonPriorityCompletedTasks.length,
            pending:
                allTimeNonPriorityTasks.length -
                allTimeNonPriorityCompletedTasks.length,
        },
    };
};

export { lastWeekGraphData, allTimeGraphData };