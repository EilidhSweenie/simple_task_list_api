import { builder } from "../builder.js";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Declare the task object type 
builder.prismaObject('Task', {
    fields: (t) => ({
        id: t.exposeID('id'),
        title: t.exposeString('title'),
        completed: t.exposeBoolean('completed'),
        createdAt: t.expose('createdAt', {type: 'Date'}),
        updatedAt: t.expose('updatedAt', {type: 'Date'}),

    }),
});

// Queries on Prisma data
builder.queryType({
    fields: (t) => ({
        // Return all tasks with optional search argument to filter by title
        tasks: t.prismaField({
            type: ['Task'],
            args: {
              search: t.arg.string(),
            },
            resolve: (query, _parent, args, _ctx, _info) => {
              return prisma.task.findMany({
                ...query,
                where: args.search
                  ? {
                      title: {
                        contains: args.search,
                      },
                    }
                  : {},
              }).then((tasks) => {
                return tasks.length > 0 ? tasks : null; // Return null if no tasks found
              });  
            },
          }),
        // Returns a single task by its ID. Returns null if not found
        task: t.prismaField({
            type: 'Task',
            nullable: true,
            args:{
                id: t.arg.id({required:true}),
            },
            resolve: (query, _parent, args, _ctx, _info)=>
                prisma.task.findUnique({
                    ...query,
                    where: {id: Number(args.id)},
                })
        }),
    }),
});

// Mutations on Prisma data
builder.mutationType({
    fields: (t) => ({
      // Add a new task 
      addTask: t.prismaField({
        type: 'Task', 
        args: {
          title: t.arg.string({ required: true }), 
        },
        resolve: async (_query, _parent, args, _ctx, _info) => {
          const newTask = await prisma.task.create({
            data: {
              title: args.title, 
              completed: false,  
              createdAt: new Date(), 
              updatedAt: new Date(), 
            },
          });
  
          return newTask;
        },
      }),
      // Toggle tasks
      toggleTask: t.prismaField({
        type: 'Task',
        nullable: true, 
        args: {
          id: t.arg.id({ required: true }), 
        },
        resolve: async (_query, _parent, args, _ctx, _info) => {
          const task = await prisma.task.findUnique({
            where: { id: Number(args.id) }, 
          });
  
          if (!task) {
            return null; 
          }
  
          const updatedTask = await prisma.task.update({
            where: { id: Number(args.id) },
            data: {
              completed: !task.completed, 
              updatedAt: new Date(),
            },
          });
  
          return updatedTask; 
        },
        }),
        // Delete a task
        deleteTask: t.prismaField({
            type: "Task",
            nullable: true,
            args: {
              id: t.arg.id({ required: true }),
            },
            resolve: async (_query, _parent, args, _ctx, _info) => {
              const task = await prisma.task.findUnique({
                where: { id: Number(args.id) },
              });
        
              if (!task) {
                return null;
              }
        
              return prisma.task.delete({
                where: { id: Number(args.id) },
              });
            },
          })
    }),
});



