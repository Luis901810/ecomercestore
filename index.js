const server = require("./src/server");
const { conn } = require("./src/db");

const port = process.env.PORT || 3002;



//Syncing all the models at once:
conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    
    console.log(`puerto escuchando en localhost:${port}`); // eslint-disable-line no-consol
  });
});
