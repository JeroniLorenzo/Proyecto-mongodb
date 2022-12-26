module.exports = {

    SECRET: process.env.AUTH_SECRET || "BaseDeDatosDeMongoDB", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10
};