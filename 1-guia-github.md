# Preparação Inicial:
Abra o VS Code e inicie o terminal integrado. Você pode fazer isso acessando o menu superior em Terminal > New Terminal ou utilizando o atalho de teclado padrão (Ctrl + ` ou Ctrl + ').


# Passo 1: Clonar o Repositório:
Se for a primeira vez que você está trabalhando no projeto, precisará baixar o código para a sua máquina. 
Antes do download, lembre-se de entrar na pasta do em que deseja salvar projeto (crie ela pelo windows ou pelo terminal mesmo, e depois navegue até ela):

cd caminho-da-pasta-do-projeto


Agora você irá clonar todo o conteúdo do repositório. Execute:

git clone https://github.com/batcommit/agris.git


# Passo 2: Criar uma Branch de Trabalho:
A regra mais importante do Git em equipe é: nunca desenvolva diretamente na branch main ou master. Sempre crie uma ramificação (branch) isolada para a sua tarefa. Isso protege o código principal.

Para criar e já mudar para a nova branch, execute:

git checkout -b nome-da-sua-tarefa

Dica: Use nomes descritivos, sem espaços e em letras minúsculas (ex: funcionalidade-login ou correcao-botao-home).


# Passo 3: Escrever o Código e Verificar o Status:
Agora você pode programar normalmente no VS Code. Conforme for salvando os arquivos, o Git perceberá as alterações. Para visualizar quais arquivos foram modificados, use:

git status

Os arquivos alterados aparecerão em vermelho, indicando que o Git reconhece as mudanças, mas elas ainda não foram preparadas para salvamento.


# Passo 4: Adicionar as Alterações (Stage):
Para informar ao Git quais modificações você deseja incluir no seu próximo salvamento, você precisa adicioná-las à área de preparação (stage).

Para adicionar só um arquivo específico:

git add nome-do-arquivo.extensao

Ou para adicionar todos os arquivos modificados de uma vez:

git add .


# Passo 5: Salvar o Histórico (Commit):
Com os arquivos preparados (eles aparecerão em verde se você rodar git status novamente), é hora de registrar o salvamento no histórico do projeto.

git commit -m "Descreva de forma clara e objetiva o que foi alterado"

Evite mensagens genéricas como "atualizei o arquivo". Prefira algo como "adicionado validacao de email no formulario".


# Passo 6: Atualizar sua Branch (Pull):
Antes de enviar o seu código, é crucial garantir que a sua branch possui as atualizações mais recentes que outros membros da equipe possam ter enviado para a branch principal enquanto você programava.

git pull origin main

Nota: Se houver conflitos entre o código que a equipe fez e o seu, o VS Code destacará essas linhas no editor para que você escolha qual versão manter. Salve o arquivo, faça o git add . e o git commit -m "Resolvendo conflitos" se isso acontecer.


# Passo 7: Enviar para o Repositório Remoto (Push):
Com o código salvo e atualizado, envie a sua branch para o repositório online. Como é a primeira vez que você está enviando esta branch específica, use o comando:

git push -u origin nome-da-sua-tarefa

Nas próximas vezes que precisar enviar atualizações na mesma branch, basta digitar apenas git push.


# Passo 8: Abrir o Pull Request (PR):
Após o push, o trabalho no terminal termina. Você deve acessar a página do repositório no navegador (GitHub, GitLab, etc.) e abrir um "Pull Request" ou "Merge Request".



### Complemento: Rotina e Comandos do Dia a Dia
Para garantir que o desenvolvimento flua sem problemas e para evitar os temidos conflitos de código
complexos, sigam este roteiro prático no dia a dia do projeto:

1. Começando o Dia de Trabalho (Atualizar a Main local)
Antes de começar a programar uma nova tarefa ou funcionalidade, você precisa garantir que sua base local
está atualizada com o trabalho mais recente de toda a equipe. Sempre faça isso a partir da branch main:

2. Iniciando uma Nova Tarefa (Criar Branch a partir da Main atualizada)
Imediatamente após atualizar a sua main local (no passo anterior), crie a sua nova ramificação de trabalho:

3. Mantendo sua Branch Atualizada durante o Desenvolvimento
Se você está trabalhando em uma tarefa que leva mais de um dia ou se sabe que algum colega de equipe
acabou de finalizar e enviar um PR importante para a main, não espere o fim da sua tarefa para atualizar
seu código. Traga as novidades da main para dentro da sua branch atual:
git push -u origin nome-da-sua-tarefa


# 1. Mude para a branch principal
git checkout main
# 2. Baixe e mescle as alterações mais recentes do GitHub
git pull origin main
# 3. Crie e mude para a nova branch específica da sua atividade
git checkout -b nome-da-nova-funcionalidade


# Certifique-se de que está na sua branch de trabalho
git checkout nome-da-sua-tarefa
# Puxe as atualizações da main diretamente para a sua branch ativa
git pull origin main


# Guia de Git - Equipe de Desenvolvimento 3
Vantagem desta prática: Se houver algum conflito de código com a alteração do seu colega, você
resolve um conflito pequeno imediatamente, em vez de acumular dezenas de conflitos complexos no
momento de entregar o Pull Request final.

# 4. Ciclo Contínuo de Trabalho (O Loop de Codificação)
Enquanto estiver desenvolvendo a sua tarefa, repita esse ciclo de comandos de forma incremental (evite
fazer um commit gigante apenas no final do dia):

# Resumo das Boas Práticas para o Time
Commits Pequenos e Frequentes: É muito melhor fazer 5 commits explicando passos isolados (ex:
"Criado layout do card", "Implementada função de clique") do que um único commit escrito "Tudo
pronto" com 30 arquivos modificados.

Nunca use git add . sem checar antes: Rode um git status antes de adicionar tudo para
garantir que você não está enviando arquivos temporários ou de configuração pessoal para o
repositório.

Comunicação: Se o comando git pull origin main gerar um conflito em uma linha que você
não mexeu, chame a pessoa que escreveu aquele código para resolverem o conflito juntos.