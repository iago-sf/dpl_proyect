import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const cryptoController = {
    list: async (req, res) => {
        const crypto = await prisma.crypto
            .findUnique({
                where: {
                    email: req.body.email,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The crypto could not be found.",
                });
            });

        res.send(crypto);
    },
    create: async (req, res) => {
        const crypto = await prisma.crypto
            .create({
                data: {
                    cryptoname: req.body.cryptoname,
                    email: req.body.email,
                    password: req.body.password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'duplicated',
                    message: "The crypto could not be created.",
                });
            });

        res.send(crypto);
    },
    update: async (req, res) => {
        const crypto = await prisma.crypto
            .update({
                where: {
                    cryptoId: parseInt(req.params.id),
                },
                data: {
                    password: password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The crypto could not be updated.",
                });
            });

        res.send(crypto);
    },
    deleted: async (req, res) => {
        const crypto = await prisma.crypto
            .delete({
                where: {
                    cryptoId: parseInt(req.params.id),
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The crypto could not be deleted.",
                });
            });

        res.send(crypto);
    },
};

export default cryptoController;
