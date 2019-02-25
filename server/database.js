const pg = require('pg');

const conString = "postgres://dwicftzb:K0biL61criGfG_Svf4dCUZPwsWuUhtxj@baasu.db.elephantsql.com:5432/dwicftzb";
const db = new pg.Client(conString);
db.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    };
    console.log('connected');
});

module.exports = db;