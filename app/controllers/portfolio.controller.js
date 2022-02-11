import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const portfolioController = {
    getPortfoliosByUserEmail: async (req, res) => {
        const portfolios = await prisma.user
            .findUnique({
                where: {
                    userId: parseInt(req.params.id),
                },

                inlcude: {
                    portfolios: true,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The portfolio could not be found.",
                });
            });

        res.send(portfolios);
    },
    create: async (req, res) => {
        const portfolio = await prisma.portfolio
            .create({
                data: {
                    name: req.body.name,
                    description: req.body.description,
                    ownerId: req.body.ownerId
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
