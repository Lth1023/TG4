# Casos de uso
## 1.Criar Unidade
**Ator Principal: Administrador**

**Descrição: Este caso de uso explica o processo que o administrador cria uma nova unidade no sistema, fornecendo um número e um nome únicos para identificá-la.**

**Pré-condições: O administrador está autenticado no sistema.**

**Fluxo Básico: O caso de uso começa quando o administrador acessa a funcionalidade de criação de unidades no sistema.**

1)O sistema exibe um formulário de criação de unidade, solicitando as informações necessárias.

2)O administrador preenche o formulário com código e nome da unidade.

3)O administrador confirma os dados inseridos.

4)O sistema valida se o número da unidade e o nome são únicos e válidos .

5)O sistema cria a nova unidade com as informações fornecidas pelo administrador.

6)O sistema exibe uma mensagem de confirmação da criação da unidade.

7)O caso de uso é finalizado.

**Fluxos Alternativos:**

5a)Se os dados preenchidos são inválidos(cadastro duplicado, combate com unidades existentes):

5b)O sistema exibe uma mensagem de erro.

5c)O caso de uso continua a partir do passo 3.
**Pós-condições:**

Uma nova unidade é criada e adicionada ao sistema, com o número e o nome fornecidos.
**Regras de Negócio:**

RN1: O número da unidade deve ser único no sistema.

RN2: O nome da unidade deve ser único no sistema.

---
---

## 2.Modificar Unidade
**Ator Principal: Administrador**

**Descrição: Este caso de uso explica o processo que o administrador modifica o nome ou o número de uma unidade existente no sistema.**

**Pré-condições: O administrador está autenticado no sistema. Pelo menos uma unidade já foi criada no sistema.**

**Fluxo Básico**

1)O caso de uso começa quando o administrador acessa a funcionalidade de modificação de unidades no sistema.

2)O sistema mostra uma lista de unidades existentes para seleção.

3)O administrador escolhe a unidade que deseja modificar.

4)O sistema mostra os detalhes atuais da unidade selecionada, incluindo o código, o nome e as quadras pertencentes.

5)O administrador modifica o número e o nome da unidade conforme necessário.

6)O administrador confirma os novos dados inseridos.

7)O sistema valida se o novo número e nome não estão em conflito com outros já existentes.

8)O sistema atualiza os dados da unidade com as informações modificadas.

9)O sistema exibe uma mensagem de confirmação da modificação da unidade.

10)O caso de uso é finalizado.

**Fluxos Alternativos:**

7a) Se os dados preenchidos são inválidos(cadastro duplicado, combate com unidades existentes):

7b)O sistema mostra uma mensagem de erro.

7c)O caso de uso continua a partir do passo 5.

**Pós-condições:**

Os dados da unidade selecionada são atualizados de acordo com as modificações feitas.
### Regras de Negócio:

RN1: O número da unidade após a modificação deve ser único no sistema.

RN2: O nome da unidade após a modificação deve ser único no sistema.

---
---

## 3.Criar Quadra
**Ator Principal: Administrador**

**Descrição: Este caso de uso explica o processo que o administrador cria uma nova quadra para uma unidade específica, atribuindo-lhe um nome ou uma letra.**

**Pré-condições:O administrador está autenticado no sistema. Pelo menos uma unidade já foi criada no sistema.**

**Fluxo Básico:**

1)O caso de uso começa quando o administrador escolhe a opção de criar uma nova quadra para uma unidade.

2)O sistema mostra uma lista de unidades existentes para seleção.

3)O administrador escolhe a unidade para a qual deseja criar a nova quadra.

4)O sistema mostra um formulário de criação de quadra, solicitando informações necessárias.

5)O administrador preenche nome ou letra da Quadra: Um nome descritivo ou uma letra para identificar a quadra.

6)O administrador confirma os dados inseridos.

7)O sistema valida se o nome ou letra da quadra é único dentro da unidade.

8)O sistema cria a nova quadra na unidade selecionada com as informações fornecidas.

9)O sistema mostra uma mensagem de confirmação da criação da quadra.

10)O caso de uso é finalizado.

**Fluxos Alternativos:**

7a) Se os dados preenchidos são inválidos:

7b)O sistema exibe uma mensagem de erro.

7c)O caso de uso continua a partir do passo 5.

**Pós-condições: Uma nova quadra é criada e atribuída à unidade selecionada, com o nome ou letra fornecidos.**

Regras de Negócio:
RN1: O nome ou letra da quadra deve ser único dentro da unidade.
RN2: O administrador só pode criar uma quadra para uma unidade que já existe no sistema.

---
---

## 4.Criar Campeonato
**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo que o Cup Manager cria um novo campeonato, especificando seu nome, unidade associada, período de inscrição, período dos jogos e data de início da divulgação.**

**Pré-condições: O Cup Manager está autenticado no sistema.**

**Fluxo Básico:**

1)O caso de uso começa quando o Cup Manager acessa a funcionalidade de criação de campeonato no sistema.

2)O sistema mostra um formulário de criação de campeonato, solicitando as informações necessárias.

3)O Cup Manager preenche os seguintes campos: nome do Campeonato, unidades envolvidas, período de inscrição, período dos jogos ,data de início da divulgação 

4)O Cup Manager confirma os dados inseridos.

5)O sistema valida as informações fornecidas, verificando se as datas estão dentro dos limites adequados.

6)O sistema cria o novo campeonato com as informações fornecidas pelo Cup Manager.

7)O sistema exibe uma mensagem de confirmação da criação do campeonato.

8)O caso de uso é finalizado.
**Fluxos Alternativos:**

5a)Se as datas de inscrição, período dos jogos ou data de início da divulgação estiverem inválidas (fora de ordem, conflitos etc.):

5b)O sistema mostra uma mensagem de erro indicando o problema.

5c)O caso de uso continua a partir do passo 3.

**Pós-condições: Um novo campeonato é criado no sistema com as informações fornecidas pelo Cup Manager.**

**Regras de Negócio:**

RN1: As datas do período de inscrição devem ser anteriores às datas dos jogos.
RN2: A data de início da divulgação deve ser anterior à data de início dos jogos.
RN3: Não pode haver conflitos de datas entre diferentes campeonatos da mesma unidade.

---
---

## 5-Gerenciar Campeonato em Andamento

**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo que o Cup Manager organiza um campeonato em andamento, incluindo a criação de jogos, o armazenamento dos registros dos placares e alocação de times.**

**Pré-condições: O Cup Manager deve estar autenticado no sistema.**

**Fluxo Básico:**

1)O Cup Manager escolhe a opção de gerenciar um campeonato em andamento no sistema.

2)O sistema mostra os campeonatos em andamento que estão disponíveis para seleção.

3)O Cup Manager escolhe o campeonato que quer gerenciar.

4)O sistema mostra as opções de gerenciamento disponíveis para o campeonato escolhido.

5)O Cup Manager realiza as ações de gerenciamento de acordo com a necessidade.

6)O Cup Manager confere as ações executadas.

7)O sistema valida as informações colocadas e atualiza no campeonato em andamento.

8)O sistema mostra uma mensagem de confirmação das ações de gerenciamento.

O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 7a: Se as informações colocadas forem inválidas ou inconsistentes:

b)O sistema mostra uma mensagem de erro apontando o problema.

c)O Cup Manager pode ajustar as informações e tentar novamente ou cancelar a operação.

d)O caso de uso continua a partir do passo 5.

**Pós-condições:**

As ações de gerenciamento (criação de jogos, registro de placares, etc) são atualizadas no campeonato em andamento.

**Regras de Negócio:**

RN1: Os jogos devem ser criados conforme as datas e times disponíveis.

RN2: Os placares registrados devem ser válidos para os jogos realizados.

RN3: As alocações de times devem ser realizadas de forma correta e justa.

---
---

## 6.Finalizar Campeonato: 

**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo pelo qual o Cup Manager encerra um campeonato, escolhendo os times vencedores e alterando seu status para "Executado".**

**Pré-condições: O Cup Manager está autenticado no sistema.**
**Um campeonato em andamento já foi criado no sistema e todos os jogos foram realizados.**

**Fluxo Básico:**

1)Cup Manager escolhe a opção de encerrar um campeonato no sistema.

2)O sistema mostra a lista de campeonatos em andamento que estão disponíveis para seleção.

3)O Cup Manager escolhe o campeonato que deseja encerrar.

4)O sistema mostra a lista de times participantes e seus resultados durante o campeonato.

5)O Cup Manager lista os times vencedores em ordem de classificação (1º, 2º, 3º lugar.).

6)O Cup Manager confirma as seleções dos times vencedores.

7)O sistema atualiza o status do campeonato para "Executado" e realiza o registro dos times vencedores.

8)O sistema mostra uma mensagem de confirmação do encerramento do campeonato.

O caso de uso é encerrado.

**Fluxos Alternativos:**

Passo 6a: Se o Cup Manager escolher times vencedores de forma errada (por exemplo, escolher times que estão ausentes ou inconsistentes com os resultados):

b)O sistema mostra uma mensagem de erro apontando o problema.

c)O Cup Manager pode arrumar as seleções e tentar novamente ou cancelar a operação.

d)O caso de uso continua a partir do passo 5.

**Pós-condições:**

O campeonato é marcado como "Executado" e os times vencedores são registrados no sistema.

**Regras de Negócio:**

RN1: Os times vencedores devem ser escolhidos com base os resultados reais do campeonato.

RN2: Um campeonato só pode ser encerrado quando todos os jogos forem realizados.

---
---

## 7-Cancelar Campeonato: 

**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo que o Cup Manager cancela um campeonato, mudando seu status para "Cancelado" se necessário.**

**Pré-condições: O Cup Manager está autenticado no sistema.**

**Um campeonato foi criado no sistema, mas não foi finalizado.**

**Fluxo Básico:**

1)Cup Manager escolhe a opção de cancelar um campeonato no sistema.

2)O sistema mostra a lista de campeonatos em andamento que estão disponíveis para escolher.

3)O Cup Manager escolhe o campeonato que deseja cancelar.

4)O sistema mostra os detalhes do campeonato escolhido.

5)O Cup Manager confirma o cancelamento do campeonato.

6)O sistema atualiza o status do campeonato para "Cancelado".

7)O sistema mostra uma mensagem de confirmação do cancelamento do campeonato.

O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 5a: Se o Cup Manager escolher não cancelar o campeonato:

O caso de uso é finalizado.

**Pós-condições:**

O campeonato é marcado como "Cancelado" e não será mais realizado.

**Regras de Negócio:**

RN1: Um campeonato só pode ser cancelado antes de ser finalizado.

RN2: O status de "Cancelado" deve ser claramente visível para os usuários.

---
---

## 8-Alocar Inscritos em Times: 

**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo que o Cup Manager colocar os inscritos em times.**

**Pré-condições: O Cup Manager está autenticado no sistema.** 
**Um campeonato em andamento já foi criado no sistema.**

**As inscrições para o campeonato foram encerradas.**

**Fluxo Básico:**

1)Cup Manager escolhe a opção de colocar inscritos em times no sistema.

2)O sistema mostra a lista de campeonatos em andamento que estão disponíveis para seleção.

3)O Cup Manager escolhe o campeonato que quer colocar os inscritos em times.

4)O sistema mostra a lista de inscritos que vão participar do campeonato.

5)O Cup Manager decide a quantidade de times necessários para o campeonato e a quantidade de jogadores em cada time.

6)O Cup Manager coloca os inscritos nos times com base nas as regras do campeonato.

7)O Cup Manager confirma as alocações dos inscritos em times.

8)O sistema guarda os registros das alocações nos times e mostra uma mensagem de confirmação.

O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 6a: Se a alocação dos inscritos não puder ser realizado por causa das regras específicas do campeonato:

b)O sistema mostra uma mensagem falando que a ação não pode ser realizada.

c)O caso de uso continua a partir do passo 7.

**Pós-condições:**
Os inscritos são colocados em times de acordo com as decisões do Cup Manager.

**Regras de Negócio:**

RN1: A alocação deve ser realizada com base nas regras específicas do campeonato (se aplicável) e considerando o equilíbrio entre os times.

RN2: O número de inscritos deve ser suficiente para fazer a quantidade de times especificada pelo Cup Manager.

RN3: A alocação dos inscritos não pode ser feita depois do início dos jogos do campeonato.

---
---

## 9-Gerenciar Times: 

**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo que o Cup Manager cria, muda ou exclui times para um campeonato.**

**Pré-condições: O Cup Manager está autenticado no sistema.**

**Um campeonato já foi criado no sistema.**

**Fluxo Básico:**

1)Cup Manager escolhe a opção de organizar os times para um campeonato no sistema.

2)O sistema mostra a lista de campeonatos que estão disponíveis para seleção.

3)O Cup Manager escolhe o campeonato no qual deseja organizar os times.

4)O sistema mostra a lista de times que já existem para o campeonato.

5)O Cup Manager tem as seguintes opções:

6)O Cup Manager confirma as ações executadas (criação, alteração ou exclusão de time).

7)O sistema valida as informações colocadas e atualiza os times de acordo.

8)O sistema mostra uma mensagem de confirmação das ações de gerenciamento de times.

O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 5a: Se as informações colocadas forem incorretas ou inconsistentes:

b)O sistema mostra uma mensagem de erro apontando o problema.

c)O Cup Manager pode arrumar as informações e tentar novamente ou cancelar a operação.

O caso de uso continua a partir do passo 5.

**Pós-condições:**

As ações de gerenciamento (criação, alteração ou exclusão de times) são atualizadas no campeonato em andamento.

**Regras de Negócio:**

RN1: O nome do time deve ser único no campeonato.

RN2: As ações de criação, alteração ou exclusão de times não podem ser executadas após o início dos jogos do campeonato.

---
---

## 10-Gerenciar Jogos: 

**Ator Principal: Cup Manager**

**Descrição: Este caso de uso explica o processo que o Cup Manager cria jogos, define as datas, os horários e as quadras, além de registrar os placares depois que os jogos terminam.**

**Pré-condições: O Cup Manager está autenticado no sistema.**

**Um campeonato em andamento já foi criado no sistema.**

**Os times estão alocados nos jogos do campeonato.**

**Fluxo Básico:**

1)O Cup Manager escolhe a opção de organizar jogos para um campeonato em andamento no sistema.

2)O sistema mostra a lista de campeonatos em andamento que estão disponíveis para seleção.

3)O Cup Manager escolhe o campeonato que deseja gerenciar os jogos.

4)O sistema mostra a lista de jogos que já foram criados para o campeonato.

5)O Cup Manager confirma as ações executadas (criação, alteração ou registro de placar).

6)O sistema valida as informações colocadas e atualiza os jogos de acordo.

7)O sistema mostra uma mensagem de confirmação das ações de gerenciamento de jogos.

O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 5a: Se as informações colocadas forem incorretas ou inconsistentes:

b)O sistema mostra uma mensagem de erro apontando o problema.

c)O Cup Manager pode arrumar as informações e tentar novamente ou cancelar a operação.

d) O caso de uso continua a partir do passo 5.

**Pós-condições:**

As ações de gerenciamento de jogos (criação, alteração ou registro de placar) são atualizadas no campeonato em andamento.

**Regras de Negócio:**

RN1: As datas e horários dos jogos devem ser definidos de acordo com o cronograma do campeonato e a disponibilidade das quadras.

RN2: O registro de placar só pode ser feito depois que o jogo terminar.

RN3: As ações de criação, alteração ou registro de placar de jogos não podem ser realizadas após o encerramento do campeonato.


---
---

## **11. Visualizar Informações do Campeonato**

**Ator Principal: Usuário**

**Descrição:** Este caso de uso explica o processo que os usuários acessam a página principal de campeonatos para ver uma listagem de todos os campeonatos com informações como nome, unidade, período de inscrição e período do campeonato.

**Pré-condições:**

O usuário acessou a plataforma e está autenticado no sistema.

**Fluxo Básico:**

1. Usuário acessa a página principal de campeonatos.

2. O sistema mostra uma lista de campeonatos disponíveis, com as respectivas informações.

3. O usuário visualiza a lista de campeonatos, e pode escolher um campeonato para ver detalhes ou participar, caso seja possível.

O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 3a: Se o usuário quiser selecionar um campeonato para ver mais detalhes:

3b.O sistema mostra uma página com informações mais detalhadas sobre o campeonato, incluindo jogos, times, resultados e outras informações relevantes.

3b.O usuário pode voltar à lista de campeonatos ou realizar outras ações relacionadas ao campeonato.

O caso de uso volta a partir do passo 3.

**Pós-condições:**

O usuário tem acesso às informações dos campeonatos listados na página principal.

---
---

## **12.Visualizar Detalhes do Campeonato**

**Ator Principal: Usuário**

**Descrição:** Este caso de uso explica o processo que os usuários escolhem um campeonato na página principal para acessar a página específica do campeonato e ver detalhes como times, jogos e placares.

**Pré-condições:** O usuário acessou a plataforma e está autenticado no sistema.

**Fluxo Básico:** Usuário acessa a página principal de campeonatos.

1.O sistema mostra uma lista de campeonatos disponíveis, incluindo suas informações.

2.O usuário escolhe um campeonato específico da lista para visualizar seus detalhes.

3.O sistema redireciona o usuário para a página do campeonato selecionado.

4.Na página do campeonato, o sistema mostra informações detalhadas e outras informações relevantes.

5.O usuário pode navegar pelos detalhes do campeonato para ver resultados e demais informações.

6.O caso de uso é finalizado.

**Fluxos Alternativos:**

Passo 6a: Se o usuário quiser ver informações detalhadas de um jogo específico:

6b. O usuário escolhe um jogo da lista de jogos na página do campeonato.

6c. O sistema mostra detalhes específicos desse jogo, como times participantes, horário, quadra, placar e outros detalhes relevantes.

6d. O usuário pode retornar à página do campeonato ou executar outras ações relacionadas ao jogo.

**Pós-condições:**

O usuário tem acesso aos detalhes do campeonato selecionado, incluindo times, jogos e placares.

---
---

## **13.Preencher Formulário de Inscrição**

**Ator Principal:** Interessados (Jogadores, Times)

**Descrição:** Este caso de uso explica o processo pelo qual os interessados preenchem o formulário de inscrição durante o período de inscrição de um campeonato que ainda vai ocorrer.

**Pré-condições:**

O campeonato está na parte de inscrição.

O interessado tem que acessar a plataforma/site.

**Fluxo Básico:**

1.O interessado acessa a página do campeonato.

2.O sistema mostra informações relevantes sobre o campeonato.

3.O interessado encontra um botão ou link para se inscrever no campeonato.

4.O sistema redireciona o interessado para o formulário de inscrição.

5.O interessado preenche o formulário, fornecendo as informações necessárias.

6.O interessado confirma as informações inseridas no formulário.

7.O sistema valida as informações preenchidas.

8.O interessado envia o formulário de inscrição.

9.O sistema registra a inscrição do interessado e exibe uma mensagem de confirmação.

O caso de uso é encerrado.

Fluxos Alternativos:

Passo 7a: Se alguma informação obrigatória não for preenchida corretamente:

7b.O sistema mostra uma mensagem de erro apontando o campo que precisa ser corrigido.

7c. O interessado pode arrumar as informações e tentar novamente ou cancelar a inscrição.

7d. O caso de uso continua a partir do passo 5.

Pós-condições:

O interessado tem sua inscrição registrada no campeonato, sujeita a revisão e aprovação pelos organizadores.

---
---

## **14.Visualizar Times/Jogadores**

**Ator Principal:** Usuário

**Descrição:** Este caso de uso explica o processo que os usuários podem ver os times e jogadores de um campeonato na página específica do campeonato.

**Pré-condições:** O usuário acessou a plataforma e está autenticado no sistema.

Um campeonato está em andamento ou agendado.

**Fluxo Básico:**

1.Usuário acessa a página principal de campeonatos.

2.O sistema mostra uma lista de campeonatos disponíveis.

3.O usuário escolhe um campeonato específico da lista para visualizar seus detalhes.

4.O sistema redireciona o usuário para a página do campeonato selecionado.

5.Na página do campeonato, o sistema exibe informações detalhadas sobre os times participantes, nomes e jogadores de cada time.

O caso de uso é finalizado.


**Fluxos Alternativos:**

Passo 5a: Se o usuário quiser ver informações detalhadas de um time específico:

5b.O usuário seleciona um time da lista de times na página do campeonato.

5c.O sistema mostra detalhes específicos desse time, incluindo a lista completa de jogadores, posições, histórico e outras informações relevantes.

**Pós-condições:**

O usuário tem acesso às informações sobre times e jogadores do campeonato selecionado.

## 15.Gerenciar Vencedores

**Ator Principal: Cup Manager** 

**Descrição:**
Após a conclusão de um campeonato, o Cup Manager tem a capacidade de selecionar os times que ficaram em 1º, 2º e 3º lugares no campeonato. Essa ação ocorre na página de configuração do campeonato e marca o campeonato como "EXECUTADO". A seleção dos vencedores é crucial para reconhecer e premiar os times que obtiveram melhor desempenho durante o campeonato.

**Pré-condições:**
O Cup Manager deve estar autenticado no sistema.
O Cup Manager deve ter acessado a página de configuração do campeonato.
Campeonato deve ter terminado.

**Fluxo Básico:**

1.O Cup Manager acessa a página de configuração do campeonato que foi marcado como "Terminado".

2.Na página de configuração, o Cup Manager encontra a seção para "Gerenciar Vencedores".

3.O Cup Manager seleciona o time que ficou em 1º lugar no campeonato.

4.O Cup Manager seleciona o time que ficou em 2º lugar no campeonato.

5.O Cup Manager seleciona o time que ficou em 3º lugar no campeonato.

6.O Cup Manager confirma as seleções e salva as informações.

7.O sistema atualiza o status do campeonato para "EXECUTADO" e exibe os times vencedores na página do campeonato.

**Fluxo Alternativo:**

Se o Cup Manager não selecionar todos os três times vencedores, uma mensagem de erro é exibida, instruindo-o a selecionar os times corretamente.
**Pós-condições:**

O status do campeonato é atualizado para "EXECUTADO".

Os times vencedores são exibidos na página do campeonato.

Os detalhes dos times vencedores são registrados no sistema para fins de relatórios e histórico.
