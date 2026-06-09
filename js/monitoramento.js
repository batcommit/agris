

const mapa = document.querySelector('.mapa img');
const container = document.querySelector('.container');
const containerPrevisao = document.querySelector('.container-previsao');
const periodo = document.getElementById('periodo');
const conteudo = document.getElementById('conteudo-historico');
const botaoPesquisarEndereco = document.querySelector('.botao-pesquisar-endereco');
const botaoPesquisarGeral = document.querySelector('.botao-pesquisar-geral');

function mostrarCards() {
    if (container.classList.contains('active')) {
        container.classList.remove('active');
    }
    container.classList.add('active');

    if (containerPrevisao) {
        if (containerPrevisao.classList.contains('active')) {
            containerPrevisao.classList.remove('active');
        }
        containerPrevisao.classList.add('active');
    }
}

mapa.addEventListener('click', mostrarCards);
botaoPesquisarEndereco.addEventListener('click', mostrarCards);
botaoPesquisarGeral.addEventListener('click', mostrarCards);

periodo.addEventListener('change', function() {
    const valor = this.value;

    if (valor === 'ultimo-ano') {
        conteudo.innerHTML = '<p>Últimos 12 meses: O total anual foi de 1.480 mm.</p>';
    } else if (valor === '6-meses') {
        conteudo.innerHTML = '<p>Mês 1: Foram registrados 142 mm de chuva no mês<br>Mês 2: Foram registrados 138 mm de chuva no mês<br>Mês 3: Foram registrados 100 mm de chuva no mês<br>Mês 4: Foram registrados 80 mm de chuva no mês<br>Mês 5: Foram registrados 180 mm de chuva no mês<br> Mês 6: Foram registrados 157 mm de chuva no mês<br></p>';
    } else if (valor === '30-dias') {
        conteudo.innerHTML = '<p>Precipitação média: 80mm nos últimos 30 dias.</p>';
    } else {
        conteudo.innerHTML = '<p>Mês 1: Foram registrados 142 mm de chuva no mês<br>Mês 2: Foram registrados 138 mm de chuva no mês<br>Mês 3: Foram registrados 100 mm de chuva no mês<br>Mês 4: Foram registrados 80 mm de chuva no mês<br>Mês 5: Foram registrados 180 mm de chuva no mês<br> Mês 6: Foram registrados 157 mm de chuva no mês<br></p>';
    }
});