const dbo = require("../db/conect.js");
const { ObjectId } = require("mongodb");
exports.validarId = (id) => {
  return ObjectId.isValid(id);
}

exports.create = async (collection,body) => {
  const dbConnect = dbo.getDb();
  if(collection=="Quadra"){
    const inserirQuadra = await dbConnect
    .collection("Quadra")
    .insertOne(body);
  return await this.findById("Quadra",inserirQuadra.insertedId)
}
  if(collection=="Unidade"){
    const inserirUnidade = await dbConnect
    .collection("Unidade")
    .insertOne(body);
  return await this.findById("Unidade",inserirUnidade.insertedId)
}
  }

exports.findById = async (collection,id) => {
  const consulta = { _id: new ObjectId(id)};
  const dbConnect = dbo.getDb();
  if(collection=="Quadra"){
    return await dbConnect
      .collection("Quadra")
      .findOne(consulta);
  }
  if(collection=="Unidade"){
    return await dbConnect
      .collection("Unidade")
      .findOne(consulta);
  }
}

exports.findAll = async (collection) => {
  const dbConnect = dbo.getDb();
  const dados = await dbConnect
    .collection(collection)
    .find({})
  return await dados.toArray();
}

exports.update = async (id, collection,dado) => {
  const query = { _id: new ObjectId(id) };
  const dbConnect = dbo.getDb();
  await dbConnect
    .collection(collection)
    .findOneAndUpdate(query, { $set: dado}, {upsert: true});
  dado.id=id;
  return dado;
}
exports.delete = async (collection,id) => {
  const consulta = { _id: new ObjectId(id)};
  const dbConnect = dbo.getDb();
  const quadra = await this.findById(id);
  await dbConnect
    .collection(collection)
    .deleteOne(consulta);
  return quadra;
}
