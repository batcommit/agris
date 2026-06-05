# Guia de Commits Semânticos
# Estrutura Padrão
Toda mensagem de commit deve seguir a estrutura rigorosa abaixo:

"tipo": "escopo (opcional)": "descrição curta"


# Tipos de Commit
O tipo define a natureza da mudança realizada. Para o nosso repositório, utilize os seguintes prefixos:

feat: Adição de uma nova funcionalidade ao projeto.
    Exemplo: feat: adiciona formulario de cadastro para doadores de alimentos

fix: Correção de um erro (bug) no código existente.
    Exemplo: fix: resolve falha de conexao com a API de mapeamento

docs: Alterações exclusivas na documentação do projeto (como o arquivo README.md).
    Exemplo: docs: atualiza instrucoes de inicializacao do projeto

style: Mudanças de formatação que não afetam o funcionamento do código (espaçamento, remoção de linhas em branco, indentação).
    Exemplo: style: padroniza recuo de linha nos componentes React

refactor: Modificação no código que não adiciona uma nova funcionalidade nem corrige um bug, mas melhora a estrutura ou a legibilidade interna.
    Exemplo: refactor: simplifica a logica de validacao de usuario

test: Adição de testes novos ou correção de testes existentes.
    Exemplo: test: adiciona testes unitarios para a listagem de itens

chore: Atualizações de tarefas de execução, configurações de sistema, dependências ou ferramentas de desenvolvimento.
    Exemplo: chore: atualiza dependencias do projeto no .NET

# Escopo (Opcional)
O escopo serve para indicar a qual parte estrutural do projeto o commit pertence, devendo ser escrito sempre entre parênteses.
    Exemplos: feat(frontend): ..., fix(api): ..., feat(banco-de-dados): ...


# Regras para a Descrição
A descrição deve ser um resumo conciso da alteração, seguindo estas regras de escrita:
    Use o verbo no imperativo: Escreva como se estivesse dando uma ordem direta ao sistema sobre o que aquele commit faz. Use "adiciona", "corrige", "remove", "atualiza".
        Incorreto: feat: adicionando botao de envio ou feat: adicionei botao de envio
        Correto: feat: adiciona botao de envio

    Sempre comece com letra minúscula.
    Não utilize ponto final no encerramento da frase.


# Exemplos Completos no Terminal
# Adicionando uma nova funcionalidade no escopo de front-end
git commit -m "feat(frontend): cria painel de controle para distribuicao de refeicoes"

# Corrigindo um erro geral sem escopo definido
git commit -m "fix: corrige erro de carregamento na tela inicial"

# Atualizando bibliotecas ou ferramentas
git commit -m "chore: adiciona biblioteca de icones ao projeto"