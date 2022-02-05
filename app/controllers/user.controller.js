import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const userController = {
    list: async (req, res) => {
        const user = await prisma.user
            .findUnique({
                where: {
                    email: req.body.email,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The user could not be found.",
                });
            });

        res.send(user);
    },
    create: async (req, res) => {
        const user = await prisma.user
            .create({
                data: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'duplicated',
                    message: "The user could not be created.",
                });
            });

        res.send(user);
    },
    update: async (req, res) => {
        const user = await prisma.user
            .update({
                where: {
                    userId: parseInt(req.params.id),
                },
                data: {
                    password: password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The user could not be updated.",
                });
            });

        res.send(user);
    },
    deleted: async (req, res) => {
        const user = await prisma.user
            .delete({
                where: {
                    userId: parseInt(req.params.id),
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The user could not be deleted.",
                });
            });

        res.send(user);
    },
};

export default userController;
