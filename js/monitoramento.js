document.addEventListener('DOMContentLoaded', () => {

  const mapa = L.map('mapa', { scrollWheelZoom: true });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(mapa);

  setTimeout(() => mapa.invalidateSize(), 300);

  let marcador = null;
  let camadaAtiva = null;

  const dadosEstados = {
   'Mato Grosso': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '6.2',
    nitrogenio: '38.4 mg',
    agua: '62.1%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 98, descricao: 'Maior produtor nacional.' },
    { nome: 'Milho', compatibilidade: 96, descricao: 'Excelente segunda safra.' },
    { nome: 'Feijão', compatibilidade: 78, descricao: 'Boa produtividade regional.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 74, descricao: 'Cultivo em expansão.' }
  ]
},
    'Goiás': {
    agricolas: {
      fertilidade: 'Alta',
      ph: '5.8',
      nitrogenio: '28.0 mg',
      agua: '50.3%'
    },
    cultivos: [
      { nome: 'Cana-de-açúcar', compatibilidade: 95, descricao: 'Excelente adaptação ao clima.' },
      { nome: 'Soja', compatibilidade: 92, descricao: 'Grande importância econômica.' },
      { nome: 'Milho', compatibilidade: 90, descricao: 'Alta produtividade.' },
      { nome: 'Feijão', compatibilidade: 84, descricao: 'Produção significativa.' }
    ]
  },
    'Acre': {
      agricolas: { fertilidade: 'Média', ph: '5.3', nitrogenio: '24.1 mg/kg', agua: '78%' },
      cultivos: [
        { nome: 'Feijão', compatibilidade: 85, descricao: 'Boa adaptação ao clima quente e úmido.' },
        { nome: 'Milho', compatibilidade: 80, descricao: 'Desenvolvimento satisfatório em áreas corrigidas.' },
        { nome: 'Soja', compatibilidade: 65, descricao: 'Produção possível, porém não é a principal cultura.' },
      ]
    },
    'Alagoas': {
      agricolas: { fertilidade: 'Média', ph: '5.9', nitrogenio: '27.8 mg/kg', agua: '61%' },
      cultivos: [
        { nome: 'Cana-de-açúcar', compatibilidade: 98, descricao: 'Principal atividade agrícola do estado.' },
        { nome: 'Feijão', compatibilidade: 80, descricao: 'Produção tradicional no interior.' },
        { nome: 'Milho', compatibilidade: 75, descricao: 'Bom desempenho em áreas irrigadas.' },
      ]
    },

  'Amapá': {
    agricolas: {fertilidade: 'Média', ph: '5.2', nitrogenio: '23.5 mg',agua: '82%' },
    cultivos: [
      { nome: 'Feijão', compatibilidade: 84, descricao: 'Boa adaptação ao clima local.' },
      { nome: 'Milho', compatibilidade: 78, descricao: 'Produção moderada.' },
      { nome: 'Soja', compatibilidade: 65, descricao: 'Expansão gradual.' },
      { nome: 'Cana-de-açúcar', compatibilidade: 60, descricao: 'Potencial limitado.' }
    ]

  },

  'Amazonas': {
    agricolas: {
      fertilidade: 'Baixa',
      ph: '4.9',
      nitrogenio: '22.0 mg',
      agua: '85%'
    },
    cultivos: [
      { nome: 'Feijão', compatibilidade: 82, descricao: 'Melhor adaptação entre as culturas analisadas.' },
      { nome: 'Milho', compatibilidade: 75, descricao: 'Necessita manejo adequado.' },
      { nome: 'Soja', compatibilidade: 60, descricao: 'Pouca representatividade agrícola.' },
      { nome: 'Cana-de-açúcar', compatibilidade: 58, descricao: 'Cultivo restrito.' }
    ]
  },

  'Bahia': {
    agricolas: {
      fertilidade: 'Média',
      ph: '5.8',
      nitrogenio: '29.0 mg',
      agua: '48%'
    },
    cultivos: [
      { nome: 'Soja', compatibilidade: 95, descricao: 'Grande destaque no oeste baiano.' },
      { nome: 'Milho', compatibilidade: 90, descricao: 'Alta produtividade regional.' },
      { nome: 'Feijão', compatibilidade: 84, descricao: 'Importante para agricultura familiar.' },
      { nome: 'Cana-de-açúcar', compatibilidade: 82, descricao: 'Boa adaptação climática.' }
    ]
  },

  'Ceará': {
    agricolas: {
      fertilidade: 'Baixa',
      ph: '6.0',
      nitrogenio: '18.4 mg',
      agua: '34%'
    },
    cultivos: [
      { nome: 'Feijão', compatibilidade: 86, descricao: 'Tradicional na região semiárida.' },
      { nome: 'Milho', compatibilidade: 74, descricao: 'Dependente do regime de chuvas.' },
      { nome: 'Cana-de-açúcar', compatibilidade: 65, descricao: 'Cultivo localizado.' },
      { nome: 'Soja', compatibilidade: 50, descricao: 'Baixa expressão econômica.' }
    ]
  },

  'Distrito Federal': {
    agricolas: {
      fertilidade: 'Média',
      ph: '5.7',
      nitrogenio: '30.2 mg',
      agua: '45%'
    },
    cultivos: [
      { nome: 'Soja', compatibilidade: 92, descricao: 'Excelente adaptação ao cerrado.' },
      { nome: 'Milho', compatibilidade: 89, descricao: 'Alta produtividade.' },
      { nome: 'Feijão', compatibilidade: 86, descricao: 'Importante cultura regional.' },
      { nome: 'Cana-de-açúcar', compatibilidade: 80, descricao: 'Bom potencial produtivo.' }
    ]
  },

  'Espírito Santo': {
    agricolas: {
      fertilidade: 'Média',
      ph: '5.6',
      nitrogenio: '26.8 mg',
      agua: '67%'
    },
    cultivos: [
      { nome: 'Cana-de-açúcar', compatibilidade: 90, descricao: 'Boa adaptação climática.' },
      { nome: 'Feijão', compatibilidade: 84, descricao: 'Produção consistente.' },
      { nome: 'Milho', compatibilidade: 82, descricao: 'Boa produtividade regional.' },
      { nome: 'Soja', compatibilidade: 70, descricao: 'Menor relevância econômica.' }
    ]
  },
   'Maranhão': {
    agricolas: {
      fertilidade: 'Média',
      ph: '5.5',
      nitrogenio: '25.0 mg',
      agua: '59%'
    },
    cultivos: [
      { nome: 'Soja', compatibilidade: 91, descricao: 'Parte importante do MATOPIBA.' },
      { nome: 'Milho', compatibilidade: 88, descricao: 'Bom desempenho produtivo.' },
      { nome: 'Feijão', compatibilidade: 82, descricao: 'Cultivo tradicional.' },
      { nome: 'Cana-de-açúcar', compatibilidade: 74, descricao: 'Potencial moderado.' }
    ]
  },
  'Mato Grosso do Sul': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '6.0',
    nitrogenio: '34.0 mg',
    agua: '58%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 96, descricao: 'Excelente adaptação ao cerrado.' },
    { nome: 'Milho', compatibilidade: 94, descricao: 'Alta produtividade.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 89, descricao: 'Importante atividade econômica.' },
    { nome: 'Feijão', compatibilidade: 80, descricao: 'Bom desempenho regional.' }
  ]
},

'Minas Gerais': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '5.9',
    nitrogenio: '31.5 mg',
    agua: '57%'
  },
  cultivos: [
    { nome: 'Cana-de-açúcar', compatibilidade: 92, descricao: 'Ampla produção estadual.' },
    { nome: 'Soja', compatibilidade: 90, descricao: 'Grande importância econômica.' },
    { nome: 'Milho', compatibilidade: 91, descricao: 'Alta produtividade.' },
    { nome: 'Feijão', compatibilidade: 93, descricao: 'Referência nacional na produção.' }
  ]
},
'Pará': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.2',
    nitrogenio: '24.0 mg',
    agua: '80%'
  },
  cultivos: [
    { nome: 'Milho', compatibilidade: 84, descricao: 'Boa adaptação climática.' },
    { nome: 'Feijão', compatibilidade: 82, descricao: 'Cultivo tradicional.' },
    { nome: 'Soja', compatibilidade: 80, descricao: 'Expansão agrícola recente.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 65, descricao: 'Potencial moderado.' }
  ]
},

'Paraíba': {
  agricolas: {
    fertilidade: 'Baixa',
    ph: '5.8',
    nitrogenio: '19.5 mg',
    agua: '38%'
  },
  cultivos: [
    { nome: 'Feijão', compatibilidade: 88, descricao: 'Tradicional no semiárido.' },
    { nome: 'Milho', compatibilidade: 76, descricao: 'Dependente das chuvas.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 74, descricao: 'Presente na zona da mata.' },
    { nome: 'Soja', compatibilidade: 48, descricao: 'Pouco expressiva.' }
  ]
},

'Paraná': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '6.1',
    nitrogenio: '36.8 mg',
    agua: '65%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 97, descricao: 'Um dos maiores produtores do país.' },
    { nome: 'Milho', compatibilidade: 95, descricao: 'Altíssima produtividade.' },
    { nome: 'Feijão', compatibilidade: 90, descricao: 'Grande relevância econômica.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 82, descricao: 'Boa adaptação regional.' }
  ]
},

'Pernambuco': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.7',
    nitrogenio: '25.6 mg',
    agua: '48%'
  },
  cultivos: [
    { nome: 'Cana-de-açúcar', compatibilidade: 94, descricao: 'Cultura histórica do estado.' },
    { nome: 'Feijão', compatibilidade: 84, descricao: 'Importante para agricultura familiar.' },
    { nome: 'Milho', compatibilidade: 80, descricao: 'Boa adaptação regional.' },
    { nome: 'Soja', compatibilidade: 58, descricao: 'Produção limitada.' }
  ]
},

'Piauí': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.6',
    nitrogenio: '26.0 mg',
    agua: '44%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 92, descricao: 'Importante estado do MATOPIBA.' },
    { nome: 'Milho', compatibilidade: 88, descricao: 'Boa produtividade.' },
    { nome: 'Feijão', compatibilidade: 82, descricao: 'Cultivo tradicional.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 70, descricao: 'Potencial moderado.' }
  ]
},

'Rio de Janeiro': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.5',
    nitrogenio: '24.5 mg',
    agua: '70%'
  },
  cultivos: [
    { nome: 'Cana-de-açúcar', compatibilidade: 86, descricao: 'Boa adaptação climática.' },
    { nome: 'Feijão', compatibilidade: 78, descricao: 'Produção regional.' },
    { nome: 'Milho', compatibilidade: 76, descricao: 'Cultivo moderado.' },
    { nome: 'Soja', compatibilidade: 55, descricao: 'Baixa relevância econômica.' }
  ]
},

'Rio Grande do Norte': {
  agricolas: {
    fertilidade: 'Baixa',
    ph: '6.1',
    nitrogenio: '18.8 mg',
    agua: '32%'
  },
  cultivos: [
    { nome: 'Feijão', compatibilidade: 86, descricao: 'Bem adaptado ao semiárido.' },
    { nome: 'Milho', compatibilidade: 72, descricao: 'Dependente de chuvas.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 70, descricao: 'Produção localizada.' },
    { nome: 'Soja', compatibilidade: 45, descricao: 'Pouca expressão econômica.' }
  ]
},

'Rio Grande do Sul': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '6.3',
    nitrogenio: '37.5 mg',
    agua: '68%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 96, descricao: 'Uma das principais culturas.' },
    { nome: 'Feijão', compatibilidade: 90, descricao: 'Boa produtividade.' },
    { nome: 'Milho', compatibilidade: 88, descricao: 'Cultivo tradicional.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 52, descricao: 'Limitada pelo clima.' }
  ]
},

'Rondônia': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.4',
    nitrogenio: '25.5 mg',
    agua: '74%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 88, descricao: 'Produção em crescimento.' },
    { nome: 'Milho', compatibilidade: 86, descricao: 'Boa adaptação regional.' },
    { nome: 'Feijão', compatibilidade: 84, descricao: 'Cultivo tradicional.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 72, descricao: 'Potencial produtivo.' }
  ]
},

'Roraima': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.3',
    nitrogenio: '23.8 mg',
    agua: '72%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 82, descricao: 'Expansão recente do cultivo.' },
    { nome: 'Milho', compatibilidade: 80, descricao: 'Boa adaptação regional.' },
    { nome: 'Feijão', compatibilidade: 78, descricao: 'Produção moderada.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 65, descricao: 'Potencial limitado.' }
  ]
},

'Santa Catarina': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '6.2',
    nitrogenio: '35.4 mg',
    agua: '72%'
  },
  cultivos: [
    { nome: 'Milho', compatibilidade: 94, descricao: 'Alta produtividade.' },
    { nome: 'Feijão', compatibilidade: 91, descricao: 'Importante cultura estadual.' },
    { nome: 'Soja', compatibilidade: 90, descricao: 'Bom desempenho produtivo.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 60, descricao: 'Menor relevância econômica.' }
  ]
},

'São Paulo': {
  agricolas: {
    fertilidade: 'Alta',
    ph: '6.1',
    nitrogenio: '34.8 mg',
    agua: '60%'
  },
  cultivos: [
    { nome: 'Cana-de-açúcar', compatibilidade: 99, descricao: 'Maior produtor nacional.' },
    { nome: 'Milho', compatibilidade: 88, descricao: 'Alta produtividade.' },
    { nome: 'Soja', compatibilidade: 86, descricao: 'Cultivo consolidado.' },
    { nome: 'Feijão', compatibilidade: 82, descricao: 'Boa produção regional.' }
  ]
},

'Sergipe': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.8',
    nitrogenio: '24.8 mg',
    agua: '55%'
  },
  cultivos: [
    { nome: 'Cana-de-açúcar', compatibilidade: 90, descricao: 'Principal cultura agrícola.' },
    { nome: 'Feijão', compatibilidade: 82, descricao: 'Cultivo tradicional.' },
    { nome: 'Milho', compatibilidade: 78, descricao: 'Bom desempenho regional.' },
    { nome: 'Soja', compatibilidade: 55, descricao: 'Baixa representatividade.' }
  ]
},

'Tocantins': {
  agricolas: {
    fertilidade: 'Média',
    ph: '5.7',
    nitrogenio: '28.5 mg',
    agua: '52%'
  },
  cultivos: [
    { nome: 'Soja', compatibilidade: 94, descricao: 'Importante estado do MATOPIBA.' },
    { nome: 'Milho', compatibilidade: 90, descricao: 'Alta produtividade.' },
    { nome: 'Feijão', compatibilidade: 84, descricao: 'Boa adaptação regional.' },
    { nome: 'Cana-de-açúcar', compatibilidade: 76, descricao: 'Potencial produtivo crescente.' }
  ]
}

  };

  function estadoStyle(ativo = false) {
    return {
      color: '#03b81b',
      weight: 1,
      fillColor: ativo ? '#FFD700' : '#cddfd1',
      fillOpacity: ativo ? 0.7 : 0.4
    };
  }

  function clicarEstado(e, feature, layer) {
    const nome = feature.properties.name;
     document.getElementById('titulo-terreno').textContent = `Terrenos — ${nome}`;
  document.getElementById('desc-terreno').textContent = `Estado: ${nome}`;
    if (camadaAtiva) camadaAtiva.setStyle(estadoStyle(false));
    layer.setStyle(estadoStyle(true));
    camadaAtiva = layer;

    if (marcador) mapa.removeLayer(marcador);
    marcador = L.marker(e.latlng).addTo(mapa).bindPopup(`<b>${nome}</b>`).openPopup();

    const dados = dadosEstados[nome];
    if (dados) {
      atualizarDadosAgricolas(dados.agricolas);
      atualizarCompatibilidade(nome, dados.cultivos);
    } else {
      atualizarDadosAgricolas(null);
      atualizarCompatibilidade(nome, []);
    }
    
 
  }

  function atualizarDadosAgricolas(dados) {
    document.getElementById('fertilidade').textContent = dados ? dados.fertilidade : '—';
    document.getElementById('ph').textContent          = dados ? dados.ph          : '—';
    document.getElementById('nitrogenio').textContent  = dados ? dados.nitrogenio  : '—';
    document.getElementById('agua').textContent        = dados ? dados.agua        : '—';
  }

  function atualizarCompatibilidade(estado, cultivos) {
    const container = document.getElementById('compatibilidade');
    container.innerHTML = '';

    if (cultivos.length === 0) {
      container.innerHTML = `<p style="color:var(--card-color)">Sem dados para ${estado}.</p>`;
      return;
    }

    cultivos.forEach(c => {
      const cor = c.compatibilidade >= 85 ? '#04831f'
                : c.compatibilidade >= 65 ? '#e6a817'
                : '#970707';

      container.innerHTML += `
        <div class="card-cultivo">
          <h3>${c.nome}</h3>
          <p>${c.descricao}</p>
          <div class="barra-fundo">
            <div class="barra-fill" style="width:${c.compatibilidade}%; background:${cor}"></div>
          </div>
          <span>${c.compatibilidade}% compatível</span>
        </div>
      `;
    });
  }

  fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        style: estadoStyle(),
        onEachFeature: (feature, layer) => {
          layer.bindTooltip(feature.properties.name);
          layer.on('click', (e) => clicarEstado(e, feature, layer));
        }
      }).addTo(mapa);

      mapa.fitBounds(L.geoJSON(data).getBounds());
    });
      window.desmarcar = function() {
    if (camadaAtiva) camadaAtiva.setStyle(estadoStyle(false));
    camadaAtiva = null;

    if (marcador) mapa.removeLayer(marcador);
    marcador = null;

    document.getElementById('titulo-terreno').textContent = 'Terrenos Brasil(-)';
    document.getElementById('desc-terreno').textContent = 'O plantio adequado para cada estado do Brasil';
    document.getElementById('btn-desmarcar').addEventListener('click', window.desmarcar);
    atualizarDadosAgricolas(null);
    document.getElementById('compatibilidade').innerHTML =
      '<p style="color:var(--card-color)"></p>';
    
  };
}); // fim do DOMContentLoaded

function getIconePorCondicao(condicao) {
  const c = condicao.toLowerCase();
  if (c.includes('tempestade') || c.includes('temporal')) return 'fa-solid fa-cloud-bolt';
  if (c.includes('chuva forte'))                          return 'fa-solid fa-cloud-showers-heavy';
  if (c.includes('chuva moderada') || c.includes('pancadas')) return 'fa-solid fa-cloud-rain';
  if (c.includes('nublado') && !c.includes('parcialmente')) return 'fa-solid fa-cloud';
  if (c.includes('parcialmente'))                         return 'fa-solid fa-cloud-sun';
  if (c.includes('ensolarado'))                           return 'fa-solid fa-sun';
  return 'fa-solid fa-cloud';
}

function atualizarClima(estado) {
  const semana = document.querySelectorAll('.dia');
  const dados = dadosClimaticos[estado];

  semana.forEach((card, i) => {
    if (dados && dados[i]) {
      const dia = dados[i];

      // pega só o primeiro nome do dia (Segunda, Terça...)
      const nomeDia = dia.diaSemana.split('-')[0].trim();

      card.querySelector('span').textContent = nomeDia;
      card.querySelector('.max').textContent  = `${dia.temperatura}°`;
      card.querySelector('.min').textContent  = `${dia.sensacaoTermica}°`;
      card.querySelector('i').className       = getIconePorCondicao(dia.condicao);

      // alerta visual no card se houver alerta
      if (dia.alerta) {
        card.style.outline = '2px solid #e6a817';
        card.title = dia.alerta; // tooltip ao passar o mouse
      } else {
        card.style.outline = 'none';
        card.title = '';
      }

    } else {
      card.querySelector('span').textContent = '—';
      card.querySelector('.max').textContent  = '—';
      card.querySelector('.min').textContent  = '—';
      card.querySelector('i').className       = 'fa-solid fa-cloud';
      card.style.outline = 'none';
      card.title = '';
    }
  });
  window.desmarcar = function() {
  // ... seu código atual ...

  const padrao = [
    { dia: 'Segunda', max: '28°', min: '18°', icone: 'fa-solid fa-sun' },
    { dia: 'Terça',   max: '28°', min: '18°', icone: 'fa-solid fa-cloud-bolt' },
    { dia: 'Quarta',  max: '28°', min: '18°', icone: 'fa-solid fa-cloud' },
    { dia: 'Quinta',  max: '28°', min: '18°', icone: 'fa-solid fa-cloud-sun' },
    { dia: 'Sexta',   max: '28°', min: '18°', icone: 'fa-solid fa-cloud-rain' },
    { dia: 'Sábado',  max: '28°', min: '18°', icone: 'fa-solid fa-cloud-bolt' },
    { dia: 'Domingo', max: '30°', min: '27°', icone: 'fa-solid fa-sun' },
  ];

  document.querySelectorAll('.dia').forEach((card, i) => {
    card.querySelector('span').textContent = padrao[i].dia;
    card.querySelector('.max').textContent  = padrao[i].max;
    card.querySelector('.min').textContent  = padrao[i].min;
    card.querySelector('i').className       = padrao[i].icone;
    card.style.outline = 'none';
    card.title = '';
  });
};
}

