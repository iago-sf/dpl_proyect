import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const portfolioController = {
    getPortfoliosWithCryptos: async (req, res) => {
        const portfolios = await prisma.portfolio
            .findUnique({
                where: {
                    portfolioId: parseInt(req.params.id),
                },

                include: {
                    Cryptos: true,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The portfolio could not be found.",
                });
            });

        if(portfolios){
            res.send(portfolios);

        } else {
            res.send({
                error: 'unkown',
                type: 'not-found',
                message: "The portfolio could not be found.",
            });
        }
    },
    getPortfoliosByUserId: async (req, res) => {
        const portfolios = await prisma.user
            .findUnique({
                where: {
                    userId: parseInt(req.params.id),
                },

                include: {
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

        if(portfolios){
            res.send(portfolios);
            
        } else {
            res.send({
                error: 'unkown',
                type: 'not-found',
                message: "The portfolio could not be found.",
            });
        }
    },
    create: async (req, res) => {
        if(req.body.name.trim() == "" || req.body.name == null || req.body.name.length > 20){
            res.send({error: "invalid-field", type: "invalid-name", message: "Invalid field name"});
        
        } else {
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

            if(portfolio){
                res.send(portfolio);
                
            } else {
                res.send({
                    error: 'unkown',
                    type: 'not-found',
                    message: "The portfolio could not be found.",
                });
            }
        }
    },
    update: async (req, res) => {
        if(req.body.description.trim() == "" || req.body.description == null || req.body.description.length > 255){
            res.send({error: "invalid-field", type: "invalid-description", message: "Invalid description"});
        
        }
        const portfolio = await prisma.portfolio
            .update({
                where: {
                    portfolioId: parseInt(req.params.id),
                },
                data: {
                    description: req.body.description,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The portfolio could not be updated.",
                });
            });

        if(portfolio){
            res.send(portfolio);
            
        } else {
            res.send({
                error: 'unkown',
                type: 'not-found',
                message: "The portfolio could not be found.",
            });
        }
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

        if(portfolio){
            res.send(portfolio);
            
        } else {
            res.send({
                error: 'unkown',
                type: 'not-found',
                message: "The portfolio could not be found.",
            });
        }
    },
};

export default portfolioController;
