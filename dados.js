const bancoAquarela = {
  comidas: [
    {
      nome: "Feijoada",
      tipo: "Tradicional / Salgado",
      regiao: "Sudeste",
      descricao:
        "Clássico prato brasileiro feito com feijão-preto e carnes variadas, servido com arroz, couve e laranja.",
      imagem: "assets-recomendacoes/feijoada-culinaria.png",
    },
    {
      nome: "Baião de dois",
      tipo: "Tradicional / Salgado",
      regiao: "Nordeste",
      descricao:
        "Prato típico nordestino preparado com arroz, feijão-verde e carne seca, representando a união de sabores regionais.",
      imagem: "assets-recomendacoes/baiao-culinaria.png",
    },
    {
      nome: "Barreado",
      tipo: "Tradicional / Salgado",
      regiao: "Sul",
      descricao:
        "Prato paranaense feito com carne cozida lentamente em panela de barro, servido com farinha e banana.",
      imagem: "assets-recomendacoes/barreado-culinaria.png",
    },
    {
      nome: "Biscoito de polvilho",
      tipo: "Tradicional / Salgado",
      regiao: "Sudeste",
      descricao:
        "Biscoito crocante e leve, feito com polvilho azedo, típico de Minas Gerais e ideal para lanches.",
      imagem: "assets-recomendacoes/biscoito-culinária.png",
    },
    {
      nome: "Bolo de rolo",
      tipo: "Tradicional / Doce",
      regiao: "Nordeste",
      descricao:
        "Doce pernambucano em camadas finas de massa e goiabada, considerado patrimônio cultural do Brasil.",
      imagem: "assets-recomendacoes/bolo-culinaria.png",
    },
    {
      nome: "Cartola",
      tipo: "Tradicional / Doce",
      regiao: "Nordeste",
      descricao:
        "Sobremesa feita com banana frita, queijo coalho e canela, típica da culinária pernambucana.",
      imagem: "assets-recomendacoes/cartola-culinária.png",
    },
    {
      nome: "Cocada",
      tipo: "Tradicional / Doce",
      regiao: "Nordeste",
      descricao:
        "Doce popular feito com coco ralado e açúcar, com versões brancas, queimadas e de colher.",
      imagem: "assets-recomendacoes/cocada-culinaria.png",
    },
    {
      nome: "Goiabada",
      tipo: "Tradicional / Doce",
      regiao: "Sudeste",
      descricao:
        "Doce em pasta ou barra feito com goiaba e açúcar, muito consumido com queijo minas.",
      imagem: "assets-recomendacoes/goiabada-culinaria.png",
    },
    {
      nome: "Paçoquinha",
      tipo: "Tradicional / Doce",
      regiao: "Sudeste",
      descricao:
        "Doce feito com amendoim torrado e açúcar, símbolo das festas juninas e do sabor caseiro brasileiro.",
      imagem: "assets-recomendacoes/paçoca-culinaria.png",
    },

    {
      nome: "Acarajé",
      tipo: "Tradicional / Fusão / Salgado",
      regiao: "Nordeste",
      descricao:
        "Bolinho de massa de feijão frito no azeite de dendê, recheado com vatapá e camarão, símbolo da Bahia.",
      imagem: "assets-recomendacoes/acaraje-culinaria.png",
    },
    {
      nome: "Pamonha",
      tipo: "Tradicional / Doce ou Salgado",
      regiao: "Centro-Oeste / Nordeste",
      descricao:
        "Massa de milho verde cozido na própria palha, típica das festas juninas.",
      imagem: "assets-recomendacoes/pamonha-culinaria.png",
    },
    {
      nome: "Tapioca",
      tipo: "Tradicional / Funcional / Doce ou Salgado",
      regiao: "Nordeste",
      descricao:
        "Feita da goma de mandioca, recheio a gosto, porém geralmente as salgadas são rechedas com algum tipo de carne ou queijo e as doces geralmente são recehadas com geléias, ou frutas com leite condensado ou chocolate",
      imagem: "assets-recomendacoes/tapioca-culinaria.png",
    },
    {
      nome: "Burger de Picanha Artesanal",
      tipo: "Moderna / Salgado",
      regiao: "Sudeste",
      descricao:
        "Versão gourmet do clássico hambúrguer, com ingredientes regionais e molhos brasileiros.",
      imagem: "assets-recomendacoes/burger artesanal-culinaria.png",
    },
    {
      nome: "Escondidinho de Cupim com Purê de Mandioquinha",
      tipo: "Moderna / Salgado",
      regiao: "Centro-Oeste",
      descricao:
        "Releitura moderna da culinária nordestina, com sabores brasileiros sofisticados.",
      imagem: "assets-recomendacoes/escondidinhocupim-culinaria.png",
    },
    {
      nome: "Sushi Nordestino",
      tipo: "Fusão / Salgado",
      regiao: "Nordeste",
      descricao:
        "Combinação criativa entre a culinária japonesa e ingredientes regionais como carne de sol e queijo coalho.",
      imagem: "assets-recomendacoes/sushi nordestino-culinaria.png",
    },
    {
      nome: "Pizza de Açaí",
      tipo: "Fusão / Doce",
      regiao: "Norte",
      descricao:
        "Pizza feita com massa leve e creme de açaí, coberta com frutas brasileiras.",
      imagem: "assets-recomendacoes/pizza acai-culinaria.png",
    },
    {
      nome: "Moqueca Vegana",
      tipo: "Sustentável / Vegana / Salgado",
      regiao: "Sudeste",
      descricao:
        "Versão sem peixe da moqueca capixaba, feita com banana-da-terra, leite de coco e legumes orgânicos.",
      imagem: "assets-recomendacoes/moqueca vegana -culinaria.png",
    },
    {
      nome: "Arroz com Casca de Banana",
      tipo: "Sustentável / Vegana / Salgado",
      regiao: "Nordeste",
      descricao:
        "Receita popularizada por chefs brasileiros, aproveitando partes não convencionais dos alimentos.",
      imagem: "assets-recomendacoes/arroz casca banana- culinaria.png",
    },
    {
      nome: "Açaí Bowl",
      tipo: "Funcional / Tradicional / Doce",
      regiao: "Norte",
      descricao:
        "Tigela com açaí natural, frutas e granola, cheia de energia e sabor.",
      imagem: "assets-recomendacoes/acai - culinaria.png",
    },
    {
      nome: "Tapioca Proteica com Chia",
      tipo: "Funcional / Salgado",
      regiao: "Nordeste",
      descricao:
        "Versão saudável da tapioca, com adição de chia e recheio leve de frango ou tofu.",
      imagem: "assets-recomendacoes/tapioca chia - culinaria.png",
    },
    {
      nome: "Feijoada Vegana",
      tipo: "Plant-based / Salgado",
      regiao: "Sudeste",
      descricao:
        "Feijoada feita sem carne, com legumes e tofu defumado, mantendo o sabor autêntico.",
      imagem: "assets-recomendacoes/feijoada vegana-culinaria.png",
    },
    {
      nome: "Strogonoff de Cogumelos",
      tipo: "Plant-based / Salgado",
      regiao: "Sul",
      descricao:
        "Prato clássico em versão vegetal, com creme de castanha e cogumelos frescos.",
      imagem: "assets-recomendacoes/strogonoff cogumelos- culinaria.png",
    },
    {
      nome: "Brigadeiro",
      tipo: "Tradicional / Doce",
      regiao: "Sudeste (Geralmente associado, mas popular em todo o Brasil)",
      descricao:
        "Um dos doces mais clássicos e tradicionais do Brasil, feito à base de leite condensado, chocolate em pó e manteiga. É um ícone da culinária brasileira, presente em todas as festas.",
      imagem: "assets-recomendacoes/brigadeiro-culinaria.png",
    },
  ],
  artesanatos: [
    {
      nome: "Cerâmica de Caruaru",
      tipo: "Cerâmica",
      regiao: "Pernambuco",
      descricao:
        "Esculturas e peças decorativas em barro, símbolo da arte popular nordestina.",
      imagem: "assets-recomendacoes/ceramica caruaru- artesanato.png",
    },
    {
      nome: "Renda de Bilro",
      tipo: "Tricô / Crochê",
      regiao: "Ceará",
      descricao:
        "Trabalho artesanal com fios e bilros, tradicional no litoral nordestino.",
      imagem: "assets-recomendacoes/renda de bilro - artesanato.png",
    },
    {
      nome: "Patchwork Mineiro",
      tipo: "Patchwork",
      regiao: "Minas Gerais",
      descricao:
        "Retalhos coloridos costurados em colchas e almofadas, típicos do artesanato mineiro.",
      imagem: "assets-recomendacoes/patchwork mineiro - artesanato.png",
    },
    {
      nome: "Bonecas de Pano do Vale do Jequitinhonha",
      tipo: "Biscuit / Costura",
      regiao: "Minas Gerais",
      descricao:
        "Bonecas de pano e barro com trajes regionais, representando o povo do interior.",
      imagem: "assets-recomendacoes/bonecas de pano-artesanato.png",
    },
    {
      nome: "Velas Aromáticas de Coco",
      tipo: "Velas",
      regiao: "Bahia",
      descricao: "Produzidas com óleo de coco e essências tropicais.",
      imagem: "assets-recomendacoes/velas aromaticas- artesanato.png",
    },
    {
      nome: "Sabonetes Artesanais de Cupuaçu",
      tipo: "Sabonetes",
      regiao: "Amazônia",
      descricao: "Feitos à mão com frutas típicas da região Norte.",
      imagem: "assets-recomendacoes/sabao cupuaçu- artesanato.png",
    },
    {
      nome: "Macramê Boho Brasileiro",
      tipo: "Macramê",
      regiao: "Sul",
      descricao:
        "Trabalhos manuais com fios e nós, usados para decoração e moda artesanal.",
      imagem: "assets-recomendacoes/boho - artesanato.png",
    },
  ],
  filmesSeries: [
    {
      nome: "Central do Brasil",
      genero: "Drama / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 1998,
      descricao:
        "Dora, uma ex-professora que escreve cartas para pessoas analfabetas, embarca numa emocionante viagem pelo Brasil com o menino Josué, que procura pelo pai que nunca conheceu.",
      imagem: "assets-recomendacoes/central do brasil - imagem.png",
    },
    {
      nome: "Coisa Mais Linda",
      genero: "Drama / Musical",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2019,
      descricao:
        "Mulheres desafiam normas sociais e buscam sucesso no Rio de Janeiro, abrindo um clube de música e mostrando força e independência.",
      imagem: "assets-recomendacoes/coisa-mais-linda.png",
    },
    {
      nome: "Que Horas Ela Volta?",
      genero: "Drama",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2015,
      descricao:
        "Val, empregada doméstica, vê sua vida transformada quando sua filha vem morar com ela em São Paulo, desafiando barreiras de classe.",
      imagem: "assets-recomendacoes/que-horas-ela-volta.png",
    },
    {
      nome: "O Homem do Futuro",
      genero: "Ficção / Comédia",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2011,
      descricao:
        "Um cientista cria uma máquina do tempo e tenta corrigir erros do passado, misturando romance, humor e ficção científica.",
      imagem: "assets-recomendacoes/o-homem-do-futuro.png",
    },
    {
      nome: "Lisbela e o Prisioneiro",
      genero: "Romance / Comédia",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2003,
      descricao:
        "O jovem Leléu se apaixona por Lisbela, mas precisa conquistar seu coração enquanto enfrenta situações engraçadas e inusitadas no sertão nordestino.",
      imagem: "assets-recomendacoes/lisbela-e-o-prisioneiro.png",
    },
    {
      nome: "O Menino Maluquinho",
      genero: "Comédia / Aventura",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 1995,
      descricao:
        "As aventuras de um menino travesso e criativo, mostrando a vida escolar, a amizade e situações engraçadas do cotidiano infantil.",
      imagem: "assets-recomendacoes/o-menino-maluquinho.png",
    },
    {
      nome: "Show da Luna",
      genero: "Animação / Fantasia",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2014,
      descricao:
        "Luna, uma curiosa garotinha, explora o mundo ao seu redor junto com seu irmão e seu furão, aprendendo sobre ciência e descobertas de forma divertida.",
      imagem: "assets-recomendacoes/show-da-luna.png",
    },
    {
      nome: "Sítio do Picapau Amarelo",
      genero: "Aventura",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 1977,
      descricao:
        "As aventuras de Narizinho, Pedrinho e Dona Benta no Sítio do Picapau Amarelo, explorando fantasia, magia e lições de amizade e coragem.",
      imagem: "assets-recomendacoes/sitio-do-picapau-amarelo.png",
    },
    {
      nome: "Meu Passado Me Condena",
      genero: "Comédia / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Casal recém-casado enfrenta situações hilárias e inesperadas durante a lua de mel na Europa, testando seu relacionamento e mostrando que o amor vem acompanhado de desafios e muitas risadas.",
      imagem: "assets-recomendacoes/meu-passado-me-condena.png",
    },
    {
      nome: "Peixonauta",
      genero: "Animação / Fantasia",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2009,
      descricao:
        "Peixonauta, um peixe detetive, vive aventuras investigando mistérios e problemas ambientais, ensinando valores de amizade e preservação da natureza.",
      imagem: "assets-recomendacoes/peixonauta.png",
    },
    {
      nome: "Meu Amigãozão",
      genero: "Animação / Fantasia",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2010,
      descricao:
        "As aventuras de Yuri, Lili e Matt com seus amigos imaginários gigantes, explorando amizade, criatividade e aprendizado em situações mágicas e divertidas.",
      imagem: "assets-recomendacoes/meu-amigaozao.png",
    },
    {
      nome: "S.O.S. Mulheres ao Mar",
      genero: "Comédia / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2014,
      descricao:
        "Três amigas embarcam em um cruzeiro para tentar reconquistar os ex-namorados, vivendo situações engraçadas e inesperadas, com muito romance e diversão.",
      imagem: "assets-recomendacoes/sos-mulheres-ao-mar.png",
    },
    {
      nome: "Hoje Eu Quero Voltar Sozinho",
      genero: "Romance / LGBTQIA+",
      formato: "Filme",
      regiao: "Centro-Oeste",
      lancamento: 2014,
      descricao:
        "Leonardo, um adolescente cego, enfrenta desafios de independência e descobre o primeiro amor quando seu colega Gabriel entra em sua vida.",
      imagem: "assets-recomendacoes/hoje eu quero voltar sozinho - filmes.png",
    },
    {
      nome: "O Animal Cordial",
      genero: "Terror / Suspense",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2017,
      descricao:
        "Um jantar de luxo em um restaurante se transforma em um pesadelo quando criminosos invadem o local, desencadeando uma sequência de violência e tensão psicológica.",
      imagem: "assets-recomendacoes/o animal cordial - filmes.png",
    },
    {
      nome: "Minha Mãe é uma Peça",
      genero: "Comédia",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Dona Hermínia, uma mãe superprotetora e hilária, entra em conflito com os filhos adolescentes e decide repensar sua vida, rendendo momentos cômicos e emocionantes.",
      imagem: "assets-recomendacoes/minha mae e uma peca- filmes.png",
    },
    {
      nome: "O Auto da Compadecida",
      genero: "Aventura / Comédia",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2000,
      descricao:
        "João Grilo e Chicó vivem diversas aventuras no sertão nordestino, enfrentando o cangaceiro, o padeiro e até o próprio Diabo, com muito humor e astúcia.",
      imagem: "assets-recomendacoes/o auto da compadecida - filmes.png",
    },
    {
      nome: "Democracia em Vertigem",
      genero: "Documentário",
      formato: "Filme (Documentário)",
      regiao: "Nacional",
      lancamento: 2019,
      descricao:
        "Documentário que analisa a política brasileira contemporânea, mostrando a ascensão e queda da presidente Dilma Rousseff e os impactos sociais e históricos do período.",
      imagem: "assets-recomendacoes/democracia em vertigem- filmes.png",
    },
    {
      nome: "Turma da Mônica: Laços",
      genero: "Fantasia / Animação",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2019,
      descricao:
        "Mônica, Cebolinha, Cascão e Magali embarcam em uma aventura para resgatar o cachorro Floquinho, enfrentando obstáculos e aprendendo sobre amizade e coragem.",
      imagem: "assets-recomendacoes/Turma-da-Monica-Lacos- filmes.png",
    },
    {
      nome: "O Lobo Atrás da Porta",
      genero: "Suspense",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Um triângulo amoroso termina em tragédia, com um suspense psicológico envolvendo adultério, ciúmes e assassinato, baseado em fatos reais.",
      imagem: "assets-recomendacoes/o lobo atras da porta - filmes.png",
    },
    {
      nome: "Ó Paí, Ó",
      genero: "Musical / Comédia",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2007,
      descricao:
        "A vida cotidiana e as dificuldades de moradores do Pelourinho em Salvador são retratadas com humor, música e cultura afro-brasileira.",
      imagem: "assets-recomendacoes/o pai o - filmes.png",
    },
    {
      nome: "Besouro",
      genero: "Ação / Dança ",
      formato: "Filme",
      regiao: "Bahia",
      lancamento: 2009,
      descricao:
        "A história do lendário capoeirista Besouro Mangangá, que luta contra opressão e injustiça enquanto exibe sua incrível habilidade em capoeira.",
      imagem: "assets-recomendacoes/besouro - filmes.png",
    },
    {
      nome: "Bacurau",
      genero: "Faroeste / Ficção",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2019,
      descricao:
        "Uma pequena comunidade no sertão brasileiro descobre que seu vilarejo foi apagado do mapa, e os moradores unem forças para se defender de ameaças externas, misturando faroeste com crítica social.",
      imagem: "assets-recomendacoes/bacurau-filmes.png",
    },
  ],
  livros: [
    {
      nome: "Quarto de Despejo",
      autor: "Carolina Maria de Jesus",
      genero: "História",
      regiao: "Minas Gerais (MG)",
      editora: "Francisco Alves",
      ano: 1960,
      descricao:
        "Diário real de Carolina, moradora de uma favela em São Paulo, que relata o cotidiano da pobreza, da fome e da desigualdade social com uma voz poderosa e autêntica.",
      imagem: "assets-recomendacoes/quarto - livros.png",
    },
    {
      nome: "Raízes do Brasil",
      autor: "Sérgio Buarque de Holanda",
      genero: "História",
      regiao: "São Paulo (SP)",
      editora: "José Olympio",
      ano: 1936,
      descricao:
        "Obra clássica de sociologia e história que analisa a formação do povo brasileiro, destacando o 'homem cordial' e as influências ibéricas na sociedade.",
      imagem: "assets-recomendacoes/raizes - livros.png",
    },
    {
      nome: "Romanceiro da Inconfidência",
      autor: "Cecília Meireles",
      genero: "Poesia",
      regiao: "Rio de Janeiro (RJ)",
      editora: "José Olympio",
      ano: 1953,
      descricao:
        "Poema épico-lírico que recria, de forma simbólica e emocional, os eventos e personagens da Inconfidência Mineira.",
      imagem: "assets-recomendacoes/romanceiro -livro.png",
    },
    {
      nome: "Poema Sujo",
      autor: "Ferreira Gullar",
      genero: "Poesia",
      regiao: "Maranhão (MA)",
      editora: "Civilização Brasileira",
      ano: 1976,
      descricao:
        "Poema intenso escrito no exílio, no qual o autor revisita memórias pessoais e a realidade política do Brasil durante a ditadura militar.",
      imagem: "assets-recomendacoes/poema -livros.png",
    },
    {
      nome: "A Hora da Estrela",
      autor: "Clarice Lispector",
      genero: "Romance",
      regiao: "Rio de Janeiro (RJ)",
      editora: "José Olympio",
      ano: 1977,
      descricao:
        "A história de Macabéa, uma jovem nordestina ingênua que tenta sobreviver no Rio de Janeiro, narrada com reflexões sobre a existência e o sofrimento humano.",
      imagem: "assets-recomendacoes/a hora - livros.png",
    },
    {
      nome: "A Falência",
      autor: "Júlia Lopes de Almeida",
      genero: "Romance",
      regiao: "Rio de Janeiro (RJ)",
      editora: "Garnier",
      ano: 1897,
      descricao:
        "Retrata a decadência moral e financeira de uma família burguesa carioca, explorando o papel da mulher e as contradições da elite da época.",
      imagem: "assets-recomendacoes/a falencia-livros.png",
    },
    {
      nome: "Noite na Taverna",
      autor: "Álvares de Azevedo",
      genero: "Mistério",
      regiao: "São Paulo (SP)",
      editora: "Tipografia de Paula Brito",
      ano: 1855,
      descricao:
        "Obra do ultrarromantismo brasileiro, com contos sombrios narrados por jovens decadentes sobre amor, morte e loucura.",
      imagem: "assets-recomendacoes/noite na - livros.png",
    },
    {
      nome: "A Causa Secreta",
      autor: "Machado de Assis",
      genero: "Mistério",
      regiao: "Rio de Janeiro (RJ)",
      editora: "Garnier (Várias Histórias)",
      ano: 1896,
      descricao:
        "Conto sobre o médico Fortunato, que sente prazer no sofrimento alheio — uma análise psicológica e moral do sadismo humano.",
      imagem: "assets-recomendacoes/a causa-livros.png",
    },
    {
      nome: "O Tempo e o Vento",
      autor: "Erico Verissimo",
      genero: "Ficção",
      regiao: "Rio Grande do Sul (RS)",
      editora: "Globo",
      ano: 1949,
      descricao:
        "Saga épica que narra a formação do Rio Grande do Sul e de uma família ao longo de gerações, misturando história e ficção.",
      imagem: "assets-recomendacoes/o tempo -livros.png",
    },
    {
      nome: "Doramar ou a Odisseia",
      autor: "Itamar Vieira Junior",
      genero: "Ficção",
      regiao: "Bahia (BA)",
      editora: "Todavia",
      ano: 2021,
      descricao:
        "Reúne contos poéticos sobre personagens marginalizados que buscam dignidade e afeto em meio às dores e desigualdades do Brasil contemporâneo.",
      imagem: "assets-recomendacoes/doramar-livros.png",
    },
    {
      nome: "Ou Isto ou Aquilo",
      autor: "Cecília Meireles",
      genero: "Infantil",
      regiao: "Rio de Janeiro (RJ)",
      editora: "Civilização Brasileira",
      ano: 1964,
      descricao:
        "Coletânea de poemas infantis que encantam pela musicalidade e leveza, com reflexões simples sobre o cotidiano e a imaginação.",
      imagem: "assets-recomendacoes/ou -livros.png",
    },
    {
      nome: "Pluft, o Fantasminha",
      autor: "Maria Clara Machado",
      genero: "Infantil",
      regiao: "Minas Gerais (MG)",
      editora: "Agir",
      ano: 1955,
      descricao:
        "Peça teatral infantil sobre um fantasminha medroso que descobre a coragem ao fazer amizade com uma menina humana.",
      imagem: "assets-recomendacoes/pluft -livros.png",
    },
  ],
  musicas: [
    {
      nome: "Foi Amor",
      genero: "Piseiro",
      artista: "Zé Vaqueiro",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/zé vaqueiro-musica.png",
    },
    {
      nome: "Vai Malandra",
      genero: "Funk / Pop",
      artista: "Anitta",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/anitta - musica.png",
    },
    {
      nome: "Trenzinho Caipira",
      genero: "MPB / Clássico",
      artista: "Heitor Villa-Lobos",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/heitor villa lobos - musica.png",
    },
    {
      nome: "Filho da Noite",
      genero: "Trap / Hip Hop",
      artista: "Matuê",
      regiao: "Fortaleza, Ceará",
      imagem: "assets-recomendacoes/matue - musica.png",
    },
    {
      nome: "Mulher",
      genero: "Trap / Rap",
      artista: "Dfideliz",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/dfideliz - musicas.png",
    },
    {
      nome: "Rebolation",
      genero: "Axé / Dança",
      artista: "Parangolé",
      regiao: "Bahia",
      imagem: "assets-recomendacoes/parangolé - musica.png",
    },
    {
      nome: "O Canto da Cidade",
      genero: "Axé / Pop",
      artista: "Daniela Mercury",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/daniela mercury- musica.png",
    },
    {
      nome: "Cê tá bem?",
      genero: "Trap / Rap",
      artista: "Dfideliz",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/dfideliz - musicas.png",
    },
    {
      nome: "Eu navegarei",
      genero: "Gospel",
      artista: "Gabriela Rocha",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/gabriela rocha - musica.png",
    },
    {
      nome: "Rap da Felicidade",
      genero: "Trap / Hip Hop",
      artista: "Cidinho e Doca",
      regiao: "Rio de Janeiro",
      imagem: "assets-recomendacoes/cidinho e doca - musica.png",
    },
    {
      nome: "Kenny G",
      genero: "Trap / Hip Hop",
      artista: "Matuê",
      regiao: "Fortaleza, Ceará",
      imagem: "assets-recomendacoes/matue - musica.png",
    },
    {
      nome: "Eu Não Sou Tão Bom Assim",
      genero: "R&B / MPB / Rap",
      artista: "Delacruz",
      regiao: "Rio de Janeiro",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
    },
    {
      nome: "Novo Balanço",
      genero: "Trap / R&B",
      artista: "Veigh",
      regiao: "São Paulo, SP",
      imagem: "assets-recomendacoes/veigh-musica.png",
    },
    {
      nome: "Desabafo Freestyle",
      genero: "Trap",
      artista: "Cjota",
      regiao: "São Paulo, SP",
      imagem: "assets-recomendacoes/cjota-musica.jpg",
    },
    {
      nome: "Se Quiser Voltar",
      genero: "R&B / Rap / MPB",
      artista: "Delacruz",
      regiao: "Rio de Janeiro",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
    },
    {
      nome: "Púrpura",
      genero: "R&B / MPB",
      artista: "Budah",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/budah-musica.jpg",
    },
    {
      nome: "Aladdin",
      genero: "Rap / R&B",
      artista: "Delacruz",
      regiao: "Rio de Janeiro",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
    },
    {
      nome: "Mas Que Nada",
      genero: "Jazz / Samba",
      artista: "Jorge Ben Jor",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/jorge ben jor - musica.png",
    },
    {
      nome: "Exagerado",
      genero: "MPB",
      artista: "Cazuza",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/cazuza - musica.png",
    },
    {
      nome: "Mania de Você",
      genero: "Pop/ MPB",
      artista: "Rita Lee",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/rita lee- musicas.png",
    },
    {
      nome: "João e Maria",
      genero: "MPB",
      artista: "Chico Buarque",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/chico buarque- musica.png",
    },
    {
      nome: "Tudo Aconteceu",
      genero: "R&B / MPB",
      artista: "Delacruz",
      regiao: "Rio de Janeiro",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
    },
    {
      nome: "Flor de Lis",
      genero: "MPB / Pop",
      artista: "Djavan",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/djavan - muisca.png",
    },
    {
      nome: "Lancinho",
      genero: "Pagode / Samba",
      artista: "Turma do Pagode",
      regiao: "São Paulo, SP",
      imagem: "assets-recomendacoes/turma do pagode -musica.png",
    },
    {
      nome: "Asa Branca",
      genero: "Forró / Tradicional",
      artista: "Luiz Gonzaga",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/luiz gonzaga - musica.png",
    },
    {
      nome: "Alma Livre",
      genero: "MPB / Rap / R&B",
      artista: "Delacruz",
      regiao: "Rio de Janeiro",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
    },
    {
      nome: "Eu Só Quero um Xodó",
      genero: "Forró / MPB",
      artista: "Dominguinhos",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/dominguinhos - musica.png",
    },
    {
      nome: "Tá Escrito",
      genero: "Pagode / Samba",
      artista: "Revelação",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/revelação- musica.png",
    },
    {
      nome: "Tempo Perdido",
      genero: "Pop / Rock",
      artista: "Legião Urbana",
      regiao: "Centro-Oeste",
      imagem: "assets-recomendacoes/legiao urbana - musica.png",
    },
    {
      nome: "Boa Sorte",
      genero: "MPB / Pop",
      artista: "Vanessa da Mata",
      regiao: "Centro-Oeste",
      imagem: "assets-recomendacoes/vanessa da mata - musicas.png",
    },
  ],
};
