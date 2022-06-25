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
];
