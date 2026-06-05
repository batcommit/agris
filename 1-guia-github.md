# Preparação Inicial:
Abra o VS Code e inicie o terminal integrado. Você pode fazer isso acessando o menu superior em Terminal > New Terminal ou utilizando o atalho de teclado padrão (Ctrl + ` ou Ctrl + ').


# Passo 1: Clonar o Repositório:
Se for a primeira vez que você está trabalhando no projeto, precisará baixar o código para a sua máquina. 
Antes do download, lembre-se de entrar na pasta do em que deseja salvar projeto (crie ela pelo windows ou pelo terminal mesmo, e depois navegue até ela):

cd caminho-da-pasta-do-projeto


Agora você irá clonar todo o conteúdo do repositório. Execute:

git clone <url-do-repositorio>


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