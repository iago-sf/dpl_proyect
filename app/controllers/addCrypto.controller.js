import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const addCryptoController = {
    list: async (req, res) => {
        const addCrypto = await prisma.addCrypto
            .findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The addCrypto could not be found.",
                });
            });

        if(addCrypto){
            res.send(addCrypto);
            
        } else {
            res.send({
                error: 'unkown',
                type: 'not-found',
                message: "The crypto could not be found.",
            });
        }
    },
    create: async (req, res) => {
        if(req.body.coin.trim() == "" || req.body.coin == null || req.body.coin.length > 30){
            res.send({error: "invalid-field", type: "invalid-coin", message: "Invalid coin"});
        
        } else if(req.body.cuantity.trim() == "" || req.body.cuantity == null || req.body.cuantity.length > 17){
            res.send({error: "invalid-field", type: "invalid-cuantity", message: "Invalid cuantity"});
        
        } else {
            const addCrypto = await prisma.addCrypto
                .create({
                    data: {
                        coin: req.body.coin,
                        cuantity: parseFloat(req.body.cuantity),
                        addedPrice: parseFloat(req.body.addedPrice),
                        portfolioId: parseInt(req.body.portfolioId),
                    },
                })
                .catch((err) => {
                    res.send({
                        error: err,
                        type: 'duplicated',
                        message: "The addCrypto could not be created.",
                    });
                });

            if(addCrypto){
                res.send(addCrypto);
                
            } else {
                res.send({
                    error: 'unkown',
                    type: 'not-found',
                    message: "The crypto could not be found.",
                });
            }
        }
    },
    update: async (req, res) => {
        if(req.body.cuantity.trim() == "" || req.body.cuantity == null || req.body.cuantity.length > 17){
            res.send({error: "invalid-field", type: "invalid-cuantity", message: "Invalid cuantity"});
        
        } else {
            const addCrypto = await prisma.addCrypto
                .update({
                    where: {
                        id: parseInt(req.params.id),
                    },
                    data: {
                        cuantity: parseFloat(req.body.cuantity)
                    },
                })
                .catch((err) => {
                    res.send({
                        error: err,
                        message: "The addCrypto could not be updated.",
                    });
                });

            if(addCrypto){
                res.send(addCrypto);
                
            } else {
                res.send({
                    error: 'unkown',
                    type: 'not-found',
                    message: "The crypto could not be found.",
                });
            }
        }
    },
    deleted: async (req, res) => {
        const addCrypto = await prisma.addCrypto
            .delete({
                where: {
                    id: parseInt(req.params.id),
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The crypto could not be deleted.",
                });
            });

        if(addCrypto){
            res.send(addCrypto);
            
        } else {
            res.send({
                error: 'unkown',
                type: 'not-found',
                message: "The crypto could not be found.",
            });
        }
    },
};

export default addCryptoController;
