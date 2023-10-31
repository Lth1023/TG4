const BASE_URL = '/quadra';

const listaQuadraId = 'quadras';
const cod_QuadraInput = 'cod_Quadra';
const nomeInput = 'nome';
const letraInput = 'letra';
const cod_UnidadeInput = 'cod_Unidade';

const listaUnidadeId = 'unidades';
const nome_UnidadeInput = 'nome_Unidade';
const timesInput = 'times';
const quadrasInput = 'quadras';

function criarQuadraCard(quadra, isUpdate = false) {
  let html = `<div class="quadras">`;
  html += `<p id="cod_Quadra"><label>cod_Quadra:</label> ${quadra.cod_Quadra}</p>`;
  html += `<p id="nome"><label>Nome:</label> ${quadra.nome}</p>`;
  html += `<p id="letra"><label>Letra:</label> ${quadra.letra}</p>`;
  html += `<p id="cod_Unidade"><label>cod_Unidade:</label> ${quadra.cod_Unidade}</p>`;
  if (isUpdate) {
    html += `<button onclick="carregarFormularioQuadra('${quadra._id}')">Editar</button>`;
  }
  html += `</div>`;
  return html;
}

async function readQuadra(isUpdate) {
  const url = "/quadra";
  const resp = await fetch(url);
  const quadras = await resp.json();
  console.log(quadras)

  let html = `<div class="quadras">`;
  for (let i = 0; i < quadras.length; i++) {
    html += criarQuadraCard(quadras[i], isUpdate);
  }
  html += `</div>`;
  document.getElementById(listaQuadraId).innerHTML = html;
}

async function carregarFormularioQuadra(quadraId) {
  const url = `/quadra/${quadraId}`;
  const resp = await fetch(url);
  const quadra = await resp.json();

  document.getElementById("idQuadra").value = quadra._id;
  document.getElementById(cod_QuadraInput).value = quadra.cod_Quadra;
  document.getElementById(nomeInput).value = quadra.nome;
  document.getElementById(letraInput).value = quadra.letra;
  document.getElementById(cod_UnidadeInput).value = quadra.cod_Unidade;
  document.getElementById(cod_QuadraInput).focus();
}

async function cadastrarQuadra() {
  event.preventDefault();  // para nao recarregar a pagina por causa do botao dentro do <form>
  const cod_Quadra = document.getElementById(cod_QuadraInput).value;
  const nome = document.getElementById(nomeInput).value;
  const letra = document.getElementById(letraInput).value;
  const cod_Unidade = document.getElementById(cod_UnidadeInput).value;

  if (!cod_Quadra || cod_Quadra.trim() == '' ||
    !nome || nome.trim() == '' ||
    !letra || letra.trim() == '' ||
    !cod_Unidade || cod_Unidade.trim() == '') {
    alert("Informe todos os dados");
    return;
  }

  let quadra = { cod_Quadra, nome, letra, cod_Unidade };
  const opt = {
    method: 'post',
    body: JSON.stringify(quadra),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }

  const url = BASE_URL;
  const resp = await fetch(url, opt);
  quadra = await resp.json();

  console.log(quadra)

  let html = `<div class="quadras">`;
  html += criarCard(quadra);
  html += `</div>`;

  document.getElementById(cod_QuadraInput).value = "";
  document.getElementById(nomeInput).value = "";
  document.getElementById(letraInput).value = "";
document.getElementById(cod_UnidadeInput).value = "";
document.getElementById(listaQuadraId).innerHTML = html;
}

async function updateQuadra() {

  const idQuadra = document.getElementById("idQuadra").value;
  const cod_Quadra = document.getElementById(cod_QuadraInput).value;
  const nome = document.getElementById(nomeInput).value;
  const letra = document.getElementById(letraInput).value;
  const cod_Unidade = document.getElementById(cod_UnidadeInput).value;
  if (!cod_Quadra || cod_Quadra.trim() === "" ||
    !nome || nome.trim() === "" ||
    !letra || letra.trim() === "" ||
    !cod_Unidade || cod_Unidade.trim() === ""){
    alert("Informe todos os dados");
    return;
  }

  let quadra = {cod_Quadra, nome, letra, cod_Unidade };
  const opt = {
    method: 'put',
    body: JSON.stringify(quadra),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }

  const url = `${BASE_URL}/${idQuadra}`;
  const resp = await fetch(url, opt);
  quadra = await resp.json();
  console.log(quadra)
  document.getElementById("idQuadra").value = "";
  document.getElementById(cod_QuadraInput).value = "";
  document.getElementById(nomeInput).value = "";
  document.getElementById(letraInput).value = "";
document.getElementById(cod_UnidadeInput).value = "";
  readQuadra(true);
}

async function cancelarQuadra() {
  const idQuadra = document.getElementById("idQuadra").value;
  const url = `${BASE_URL}/${idQuadra}`;
  const resp = await fetch(url, { method: 'DELETE' });
  let quadra = await resp.json();
  console.log(quadra)
  document.getElementById("idQuadra").value = "";
  readQuadra(true);

}
//Unidade

async function carregarFormularioUnidade(unidadeId) {
  const url = `/unidade/${unidadeId}`;
  const resp = await fetch(url);
  const unidade = await resp.json();

document.getElementById("idUnidade").value = unidade._id;
document.getElementById(cod_UnidadeInput).value = unidade.cod_Unidade;
document.getElementById(nome_UnidadeInput).value = unidade.nome_Unidade;
  document.getElementById(timesInput).value = unidade.times;
document.getElementById(quadrasInput).value = unidade.quadras;
  document.getElementById(cod_UnidadeInput).focus();
}

function criarUnidadeCard(unidade, isUpdate = false) {
  let html = `<div class="unidades">`;
  html += `<p id="cod_Unidade"><label>cod_Unidade:</label> ${unidade.cod_Unidade}</p>`;
  html += `<p id="nome_Unidade"><label>Nome:</label> ${unidade.nome_Unidade}</p>`;
  html += `<p id="times"><label>Times:</label> ${unidade.times}</p>`;
  html += `<p id="quadras"><label>Quadras:</label> ${unidade.quadras}</p>`;
  if (isUpdate) {
    html += `<button onclick="carregarFormularioUnidade('${unidade._id}')">Editar</button>`;
  }
  html += `</div>`;
  return html;
}

async function readUnidade(isUpdate) {
  const url = "/unidade";
  const resp = await fetch(url);
  const unidades = await resp.json();
  console.log(unidades)

  let html = `<div class="unidades">`;
  for (let i = 0; i < unidades.length; i++) {
    html += criarUnidadeCard(unidades[i], isUpdate);
  }
  html += `</div>`;
  document.getElementById(listaUnidadeId).innerHTML = html;
}

async function cadastrarUnidade() {
  event.preventDefault();  // para nao recarregar a pagina por causa do botao dentro do <form>
  const cod_Unidade = document.getElementById(cod_UnidadeInput).value;
  const nome_Unidade = document.getElementById(nome_UnidadeInput).value;
  const times = document.getElementById(timesInput).value;
  const quadras = document.getElementById(quadrasInput).value;

  if (!quadras || quadras.trim() == '' ||
    !nome_Unidade || nome_Unidade.trim() == '' ||
    !times || times.trim() == '' ||
    !quadras || quadras.trim() == '') {
    alert("Informe todos os dados");
    return;
  }

  let unidade = { cod_Unidade, nome_Unidade, times, quadras };
  const opt = {
    method: 'post',
    body: JSON.stringify(unidade),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }

  const url = "/unidade";
  const resp = await fetch(url, opt);
  unidade = await resp.json();

  console.log(unidade)

  let html = `<div class="unidades">`;
  html += criarCard(unidade);
  html += `</div>`;

document.getElementById(cod_UnidadeInput).value = "";
document.getElementById(nomeInput).value = "";
document.getElementById(letraInput).value = "";
document.getElementById(cod_UnidadeInput).value = "";
document.getElementById(listaUnidadeId).innerHTML = html;
}

async function updateUnidade() {
const idQuadra = document.getElementById("idUnidade").value;
  const cod_Unidade = document.getElementById(cod_UnidadeInput).value;
  const nome_Unidade = document.getElementById(nome_UnidadeInput).value;
  const times = document.getElementById(timesInput).value;
  const quadras = document.getElementById(quadrasInput).value;

  if (!quadras || quadras.trim() == '' ||
    !nome_Unidade || nome_Unidade.trim() == '' ||
    !times || times.trim() == '' ||
    !quadras || quadras.trim() == '') {
    alert("Informe todos os dados");
    return;
  }

  let unidade = { cod_Unidade, nome_Unidade, times, quadras };
  const opt = {
    method: 'put',
    body: JSON.stringify(unidade),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }

  const url = `unidade/${idUnidade}`;
  const resp = await fetch(url, opt);
  unidade = await resp.json();
  console.log(unidade)
  document.getElementById("idUnidade").value = "";
  document.getElementById(cod_UnidadeInput).value = "";
  document.getElementById(nomeInput).value = "";
  document.getElementById(letraInput).value = "";
  document.getElementById(cod_UnidadeInput).value = "";
  readUnidade(true);
}

async function cancelarUnidade() {
  const idUnidade = document.getElementById("idUnidade").value;
  const url = `unidade/${idUnidade}`;
  const resp = await fetch(url, { method: 'DELETE' });
  let unidade = await resp.json();
  console.log(unidade)
  document.getElementById("idUnidade").value = "";
  readUnidade(true);
}
