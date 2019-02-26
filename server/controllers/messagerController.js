const pool = require('../database');
const messagingController = {};


messagingController.getMessages = (req, res, next) => {

    const query = {
        text: `SELECT users.name, messages.content, messages.created_at
                    FROM messages
                    INNER JOIN users
                    ON (messages.author_id = users._id)
                    ORDER BY messages.created_at ASC`,
    }

    pool.query(query.text, (err, messages) => {
        if (err) {
            console.log(`Error when getting messages: ${err}`);
        } else {
            res.locals.messages = messages.rows;
            next();
        }
    });
}

messagingController.createMessage = (req, res, next) => {
    const query = {
        text: `INSERT INTO messages ("content", "author_id", "created_at")
        VALUES($1, $2, $3) RETURNING *`,
        values: [
            req.body.content,
            req.body.author_id,
            new Date()
        ]
    }

    pool.query(query.text, query.values, (err, messages) => {
        if (err) {
            console.log(`Error when creating message: ${err}`);
        } else {
            res.locals.message = messages.rows[0];
            next();
        }
    })

}

module.exports = messagingController;