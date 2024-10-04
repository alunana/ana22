import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Livros que os meus amigos mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Embora o <span>Terror</span> ocupe a primeira posição em termos de número total de pessoas que lêem livros, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Romance</span>, o livro mais lido pelos usuários, sendo a segunda opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo livros em comparação com a realidade`)
}

redesFavoritasMundo()