import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const userController = {
    list: async (req, res) => {
        if(req.body.email.trim() == "" || req.body.email == null || req.body.email.length > 25) {
            res.send({error: "invalid-field", type: "invalid-email", message: "Invalid email"});

        } else {
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

            if(user){
                res.send(user);
            } else {
                res.send({
                    error: 'unknown',
                    type: 'not-found',
                    message: "The user could not be found.",
                });
            }
        }
        
    },
    create: async (req, res) => {
        if(req.body.email.trim() == "" || req.body.email == null || req.body.email.length > 25) {
            res.send({error: "invalid-field", type: "invalid-email", message: "Invalid email"});

        } else if(req.body.username.trim() == "" || req.body.username == null || req.body.username.length > 30) {
            res.send({error: "invalid-field", type: "invalid-username", message: "Invalid username"});
        
        } else {
            const user = await prisma.user
                .create({
                    data: {
                        username: req.body.username,
                        email: req.body.email
                    },
                })
                .catch((err) => {
                    res.send({
                        error: err,
                        type: 'duplicated',
                        message: "The user could not be created.",
                    });
                });

            if(user){
                res.send(user);
            } else {
                res.send({
                    error: 'unknown',
                    type: 'not-found',
                    message: "The user could not be found.",
                });
            }
        }
    },
    update: async (req, res) => {
        if(req.body.username.trim() == "" || req.body.username == null || req.body.username.length > 30) {
            res.send({error: "invalid-field", type: "invalid-username", message: "Invalid username"});
        
        } else {
            const user = await prisma.user
                .update({
                    where: {
                        userId: parseInt(req.params.id),
                    },
                    data: {
                        username: req.body.username,
                    },
                })
                .catch((err) => {
                    res.send({
                        error: err,
                        message: "The user could not be updated.",
                    });
                });

            if(user){
                res.send(user);
            } else {
                res.send({
                    error: 'unknown',
                    type: 'not-found',
                    message: "The user could not be found.",
                });
            }
        }
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

        if(user){
            res.send(user);
        } else {
            res.send({
                error: 'unknown',
                type: 'not-found',
                message: "The user could not be found.",
            });
        }
    },
    all: async (req, res) => {
        const users = await prisma.user
            .findMany({})
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The user could not be deleted.",
                });
            });

        if(users){
            res.send(users);
        } else {
            res.send({
                error: 'unknown',
                type: 'not-found',
                message: "The user could not be found.",
            });
        }
    },
};

export default userController;
