require('dotenv').config()
const app = require("./src/app")
const dbConnection = require("./src/config/dbConnection")

const PORT = process.env.PORT || 3000;

dbConnection()
.then(() => {
    app.listen(3000, () => console.log(`server is listening on port ${PORT}`));
}).catch((err) => console.log("tenemos problemas con la conexion a la DB", err.message));



