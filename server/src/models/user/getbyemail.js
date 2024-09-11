import db from "../../config/db.js";
const database = await db();

const getByEmail = (email) => {
    const query = "SELECT * FROM users WHERE email = ?";
    return new Promise((resolve, reject) => {
        database.get(query, [email], (err, row) => {
            if (err) {
                return reject(err);
            }
            return resolve(row);
        });
    });
};

export default getByEmail;