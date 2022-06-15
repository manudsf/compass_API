(async () => {
    const db = require("./db");
    console.log('Começou!');
    console.log('SELECT * FROM CATEGORY');
    const category = await db.selectCostumers();
    console.log(category);
    })();