

const mapa = document.querySelector('.mapa img');
const container = document.querySelector('.container');
const periodo = document.getElementById('periodo');
const conteudo = document.getElementById('conteudo-historico');

mapa.addEventListener('click', function() {
    container.style.display = 'flex';
});

periodo.addEventListener('change', function() {
    const valor = this.value;

    if (valor === 'ultimo-ano') {
        conteudo.innerHTML = '<p>Últimos 12 meses: O total anual foi de 1.480 mm.</p>';
    } else if (valor === '6-meses') {
        conteudo.innerHTML = '<p>mês 1:Foram registrados 142 mm de chuva no mês<br>mês 2:Foram registrados 138 mm de chuva no mês<br>mês 3:Foram registrados 100 mm de chuva no mês<br>mês 4:Foram registrados 80 mm de chuva no mês</p><p>mês 5:Foram registrados 180 mm de chuva no mês<br><p>mês 6:Foram registrados 157 mm de chuva no mês<br> ';
    } else if (valor === '30-dias') {
        conteudo.innerHTML = '<p>Precipitação média: 80mm nos últimos 30 dias.</p>';
    }
});