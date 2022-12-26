module.exports = {

    SECRET: process.env.AUTH_SECRET || "tic tac toe ho ho ho", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10
};