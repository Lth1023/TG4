const repo = require("../repositories/repository.js");

exports.validarQuadra = (req, res, next) => {
  const { cod_Quadra, nome, letra, cod_Unidade } = req.body;
  if (!cod_Quadra || cod_Quadra.trim() === "" ||
    !nome || nome.trim() === "" ||
    !letra || letra.trim() === "" ||
    !cod_Unidade || cod_Unidade.trim() === "") {
    console.log("nao");
    res.status(400).send({ error: 400, message: "Dados inválidos!" });
    return;
  }
  next();
}
exports.validarUnidade = (req, res, next) => {
  const { cod_Unidade
, nome_Unidade, times, quadras} = req.body;
  if (!cod_Unidade || cod_Unidade.trim() === "" ||
    !nome_Unidade || nome_Unidade.trim() === "" ||
    !times || times.trim() === "" ||
    !quadras || quadras.trim() === "") {
    res.status(400).send({ error: 400, message: "Dados inválidos!" });
    return;
  }
  next();
}

exports.validarId = (req, res, next) => {
  const id = req.params.id;
  if (repo.validarId(id)) {
    next();
  } else {
    res.status(400).send({ error: 400, message: "ID inválido" });
  }
}


//Quadras
exports.getQuadras = async (req, res) => {
  try {
    const dados = await repo.findAll("Quadra");
    res.json(dados);
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: 400, message: "Erro ao buscar dados" });
  }
}

exports.getQuadraById = async (req, res) => {
  const id = req.params.id;
  try {
    const dado = await repo.findById("Quadra",id);
    if (dado)
      res.json(dado);
    else
      res.status(404).send({ error: 404, message: "Dado não encontrado" })
  } catch (err) {
    res.status(400).send({ error: 400, message: `Erro ao buscar dado com id ${id}` });
    console.error(err);
  }
}

exports.postQuadra = async (req, res) => {
  try {
    let novo = await repo.create("Quadra",req.body);
    res.json(novo);
  } catch (err) {
    res.status(400).send("Erro ao criar novo dado");
    console.log(err);
  }
}

exports.putQuadra = async (req, res) => {
  const id = req.params.id;
  const { cod_Quadra, nome, letra, cod_Unidade } = req.body;
  let quadra = {
    cod_Quadra: cod_Quadra,
    nome: nome,
    letra: letra,
    cod_Unidade: cod_Unidade,
  };
  try {
    quadra = await repo.update(id, "Quadra", quadra);
    if (quadra)
      res.json(quadra);
    else
      res.status(404).send({ error: 404, message: "Quadra não encontrada" })
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: 400, message: `Erro ao atualizar dados de quadra com id ${id}!` });
  }
}

exports.deleteQuadra = async (req, res) => {
  const id = req.params.id;
  try {
    const quadra = await repo.delete("Quadra",id);
    if (quadra)
      res.json(quadra);
    else
      res.status(404).send({ error: 404, message: "Quadra não encontrada" })
  } catch (err) {
    res.status(400).send({ error: 400, message: `Erro ao apagar quadra com id ${id}` });
    console.error(err);
  }
}
//Unidades
exports.getUnidades = async (req, res) => {
  try {
    const dados = await repo.findAll("Unidade");
    res.json(dados);
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: 400, message: "Erro ao buscar dados" });
  }
}

exports.getUnidadeById = async (req, res) => {
  const id = req.params.id;
  try {
    const dado = await repo.findById("Unidade",id);
    if (dado)
      res.json(dado);
    else
      res.status(404).send({ error: 404, message: "Dado não encontrado" })
  } catch (err) {
    res.status(400).send({ error: 400, message: `Erro ao buscar dado com id ${id}` });
    console.error(err);
  }
}

exports.postUnidade = async (req, res) => {
  try {
    let novo = await repo.create("Unidade",req.body);
    res.json(novo);
  } catch (err) {
    res.status(400).send("Erro ao criar novo dado");
    console.log(err);
  }
}

exports.putUnidade = async (req, res) => {
  const id = req.params.id;
  const { cod_Unidade, nome_Unidade, times, quadras } = req.body;
  let quadra = {
    cod_Unidade: cod_Unidade,
    nome_Unidade: nome_Unidade,
    times: times,
    quadras: quadras,
  };
  try {
    unidade = await repo.update(id,"Unidade",unidade);
    if (unidade)
      res.json(unidade);
    else
      res.status(404).send({ error: 404, message: "Unidade não encontrado" })
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: 400, message: `Erro ao atualizar dados de unidade com id ${id}!` });
  }
}

exports.deleteUnidade = async (req, res) => {
  const id = req.params.id;
  try {
    const unidade = await repo.delete("Unidade",id);
    if (unidade)
      res.json(unidade);
    else
      res.status(404).send({ error: 404, message: "Unidade não encontrada" })
  } catch (err) {
    res.status(400).send({ error: 400, message: `Erro ao apagar unidade com id ${id}` });
    console.error(err);
  }
}