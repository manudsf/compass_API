async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@localhost:3000/ex_db")
    console.log("Conectou no MySQL")
    global.connection = connection;
    return connection;
}

async function selectCostumers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM category;');
    return await rows;
}

module.exports = {selectCostumers}