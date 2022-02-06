import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const portfolioController = {
    list: async (req, res) => {
        const portfolio = await prisma.portfolio
            .findUnique({
                where: {
                    email: req.body.email,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The portfolio could not be found.",
                });
            });

        res.send(portfolio);
    },
    create: async (req, res) => {
        const portfolio = await prisma.portfolio
            .create({
                data: {
                    portfolioname: req.body.portfolioname,
                    email: req.body.email,
                    password: req.body.password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'duplicated',
                    message: "The portfolio could not be created.",
                });
            });

        res.send(portfolio);
    },
    update: async (req, res) => {
        const portfolio = await prisma.portfolio
            .update({
                where: {
                    portfolioId: parseInt(req.params.id),
                },
                data: {
                    password: password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The portfolio could not be updated.",
                });
            });

        res.send(portfolio);
    },
    deleted: async (req, res) => {
        const portfolio = await prisma.portfolio
            .delete({
                where: {
                    portfolioId: parseInt(req.params.id),
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The portfolio could not be deleted.",
                });
            });

        res.send(portfolio);
    },
};

export default portfolioController;
