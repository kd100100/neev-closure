import { rest } from "msw";

export const handlers = [
    rest.post("http://localhost:8080/api/todos", (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json({
                id: "1",
                title: "Todo Task",
                isPriority: true,
                isCompleted: false,
                isEdited: false,
                createdAt: new Date(),
            })
        );
    }),

    rest.get("http://localhost:8080/api/todos", (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: "1",
                    title: "Todo Task 1",
                    isPriority: true,
                    isCompleted: false,
                    isEdited: false,
                    createdAt: new Date(),
                },
                {
                    id: "2",
                    title: "Todo Task 2",
                    isPriority: false,
                    isCompleted: false,
                    isEdited: false,
                    createdAt: new Date(),
                },
                {
                    id: "3",
                    title: "Todo Task 3",
                    isPriority: false,
                    isCompleted: true,
                    isEdited: false,
                    createdAt: new Date(),
                },
            ])
        );
    }),

    rest.put("http://localhost:8080/api/todos/:id", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                id: "1",
                title: "Todo Task",
                isPriority: true,
                isCompleted: true,
                isEdited: true,
                createdAt: new Date(),
            })
        );
    }),

    rest.delete("http://localhost:8080/api/todos/:id", (req, res, ctx) => {
        return res(ctx.status(200), ctx.text("Todo Deleted Successfully"));
    }),
];
