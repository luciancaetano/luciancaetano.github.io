
let title = `
Este é um simulador de orçamento, com esta ferramenta você terá um valor 
aproximado do custo de desenvolvimento de seu aplicativo, para valores exatos 
entre em contato e pelo (Telefone ou Whatsapp) (14) 98150-4024.
`;

export default {
    "base": 100,
    "title" : title,
    "questions" :[
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Que tipo de aplicativo você precisa ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Aplicativo Android", "valor": 300},
                {"checked": false, "title": "Aplicativo IPhone", "valor": 400},
                {"checked": false, "title": "Aplicativo Android e IPhone", "valor": 500}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Qual design você deseja para o seu aplicativo ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Apenas pequenas modificações, usarei o tema da plataforma.", "valor": 50},
                {"checked": false, "title": "Preciso que meu aplicativo tenha uma temática e cores personalizadas.", "valor": 100},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Qual retorno financeiro você deseja ter?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Aplicativo Gratuito sem publicidade", "valor": 0},
                {"checked": false, "title": "Aplicativo Gratuito com publicidade", "valor": 50},
                {"checked": false, "title": "Aplicativo pago (sem publicidade)", "valor": 100},
                {"checked": false, "title": "Compras dentro do aplicativo(Loja)", "valor": 1000},
                {"checked": false, "title": "Aplicativo Pessoal (Somente instala em meu celular)", "valor": 0},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 20,
            "question" : "O seu aplicativo precisa de um painel administrativo ? (Marque não para loja)",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Sim", "valor": 800},
                {"checked": false, "title": "Não", "valor": 0},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Deseja que seu aplicativo tenha algum sistema de login ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Não é necessário um sistema de login", "valor": 0},
                {"checked": false, "title": "Login com redes sociais e email", "valor": 200},
                {"checked": false, "title": "Apenas com email", "valor": 100},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Deseja que seu aplicativo integre com algum site ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Sim", "valor": 200},
                {"checked": false, "title": "Não", "valor": 0},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 10,
            "question" : "O usuários que se cadastrarem no seu aplicativo devem ter seu perfil próprio ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Sim", "valor": 200},
                {"checked": false, "title": "Não", "valor": 0},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 10,
            "question" : "Seu aplicativo precisa de integração com câmera/microfone ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Sim", "valor": 50},
                {"checked": false, "title": "Não", "valor": 0},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 10,
            "question" : "O seu aplicativo precisa de suporte a multiplas línguas ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Bilíngue", "valor": 200},
                {"checked": false, "title": "Multilíngue", "valor": 500},
                {"checked": false, "title": "Somente uma única língua.", "valor": 0},
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Em que estágio encontra-se o seu projeto ?",
            "base" : 0,
            "answ" : [
                {"checked": false, "title": "Apenas uma idéia", "valor": 300},
                {"checked": false, "title": "Esboço pronto", "valor": 100}
            ]
        }
    ]
};