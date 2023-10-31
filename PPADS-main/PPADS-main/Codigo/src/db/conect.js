const { MongoClient } = require("mongodb");
const connectionString = "mongodb+srv://Henrique:7539518462@cluster0.60sf1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function () {
    client.connect(function (err, db) {
      if (err || !db) {
        console.error("Erro ao tentar conectar no MongoDB.");
        console.error(err);
      } else {
        dbConnection = db.db("ChuteSal"); //Collection Nome
        console.log("Sucesso ao conectar no MongoDB.");
      }
    });
  },

  getDb: function () {
    return dbConnection;
  },
};