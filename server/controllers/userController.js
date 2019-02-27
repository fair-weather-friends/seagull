const db = require('../database');

function createUserTable(req, res, next) {

    const queryText =
        `CREATE TABLE IF NOT EXISTS
        users(
        "_id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "username" VARCHAR NOT NULL,
        "password" VARCHAR NOT NULL
        )`;

    db.query(queryText)
        .then(() => {
            next();
        })
        .catch((err) => {
            console.log('hit ' + err);
            db.end();
        });

}

function signIn(req, res, next) {

    const queryText = `
        INSERT into users ("name", "username", "password")
        VALUES ('${req.body.name}', '${req.body.username}', '${req.body.password}');
        `;

    db.query(queryText)
        .then((response) => {
            res.locals.name = req.body.name
            next();
        })
        .catch((err) => {
            console.log('hit ' + err);
            db.end();
        });

}

function setCookie(req, res, next) {

}

module.exports = { createUserTable, signIn };