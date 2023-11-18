const server = require("./src/server");
const { conn } = require("./src/db");

const port = process.env.PORT || 3002;

// Syncing all the models at once:
conn.sync({ alter: true }).then(() => {
  server.get("/", (req, res) => {
    res.send('Bienvenidos al Backend');
  });

  server.listen(port, () => {
    console.log(`Servidor escuchando en localhost:${port}`);
  });
});




