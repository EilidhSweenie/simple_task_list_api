const tasks = [
    {
        id: "task-1",
        title: 'Task 1',
        completed: false,
        createdAt: "2024-05-11"
    },
    {
        id: "task-2",
        title: 'Task 2',
        completed: true,
        createdAt: "2024-05-11",
        updatedAt: "2024-05-15"
    },

]

const resolvers = {
    Query: {
        tasks: () => tasks,
    }
}

export default resolvers;