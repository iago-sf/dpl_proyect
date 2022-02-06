import prismaClient from "@prisma/client";
const prisma = new prismaClient.PrismaClient();

const addCryptoController = {
    list: async (req, res) => {
        const addCrypto = await prisma.addCrypto
            .findUnique({
                where: {
                    email: req.body.email,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'not-found',
                    message: "The addCrypto could not be found.",
                });
            });

        res.send(addCrypto);
    },
    create: async (req, res) => {
        const addCrypto = await prisma.addCrypto
            .create({
                data: {
                    addCryptoname: req.body.addCryptoname,
                    email: req.body.email,
                    password: req.body.password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    type: 'duplicated',
                    message: "The addCrypto could not be created.",
                });
            });

        res.send(addCrypto);
    },
    update: async (req, res) => {
        const addCrypto = await prisma.addCrypto
            .update({
                where: {
                    addCryptoId: parseInt(req.params.id),
                },
                data: {
                    password: password,
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The addCrypto could not be updated.",
                });
            });

        res.send(addCrypto);
    },
    deleted: async (req, res) => {
        const addCrypto = await prisma.addCrypto
            .delete({
                where: {
                    addCryptoId: parseInt(req.params.id),
                },
            })
            .catch((err) => {
                res.send({
                    error: err,
                    message: "The addCrypto could not be deleted.",
                });
            });

        res.send(addCrypto);
    },
};

export default addCryptoController;
