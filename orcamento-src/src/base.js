let valorHora = 8;

function semana(s){
    return dias(7) * s;
}
function horas(h){
    return valorHora * h;
}
function dias(d){
    return horas(8) * d;
}

export default {
    "base": 100,
    "title" : "Esta é um simulador de orçamento, com esta ferramenta você terá um valor aproximado do custo de desenvolvimento de seu aplicativo, para valores exatos entre em contato e faça um orçamentoconosco, ficaremos feliz em ajuda-lo.",
    "questions" :[
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Que tipo de aplicativo você precisa ?",
            "base" : semana(1),
            "answ" : [
                {"checked": false, "title": "Aplicativo Android", "consumo": 0.5},
                {"checked": false, "title": "Aplicativo IPhone", "consumo": 0.8},
                {"checked": false, "title": "Aplicativo Android e IPhone", "consumo": 0.9}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Qual design você deseja para o seu aplicativo ?",
            "base" : semana(1),
            "answ" : [
                {"checked": false, "title": "Apenas pequenas modificações, usarei o tema da plataforma.", "consumo": 0.8},
                {"checked": false, "title": "Preciso que meu aplicativo tenha uma temática e cores personalizadas.", "consumo": 1},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0.8}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Qual retorno financeiro você deseja ter?",
            "base" : horas(12),
            "answ" : [
                {"checked": false, "title": "Aplicativo Gratuito sem publicidade", "consumo": 0.2},
                {"checked": false, "title": "Aplicativo Gratuito com publicidade", "consumo": 0.5},
                {"checked": false, "title": "Aplicativo pago (sem publicidade)", "consumo": 0.7},
                {"checked": false, "title": "Compras dentro do aplicativo(Loja)", "consumo": 5.8},
                {"checked": false, "title": "Aplicativo Pessoal (Somente instala em meu celular)", "consumo": -0.5},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0.2}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Deseja que seu aplicativo tenha algum sistema de login ?",
            "base" : dias(3),
            "answ" : [
                {"checked": false, "title": "Não é necessário um sistema de login", "consumo": 0.2},
                {"checked": false, "title": "Login com redes sociais e email", "consumo": 1},
                {"checked": false, "title": "Apenas com email", "consumo": 0.8},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0.2}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Deseja que seu aplicativo integre com algum site ?",
            "base" : dias(2),
            "answ" : [
                {"checked": false, "title": "Sim", "consumo": 1.5},
                {"checked": false, "title": "Não", "consumo": 0},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 10,
            "question" : "O usuários que se cadastrarem no seu aplicativo devem ter seu perfil próprio ?",
            "base" : semana(1.2),
            "answ" : [
                {"checked": false, "title": "Sim", "consumo": 1},
                {"checked": false, "title": "Não", "consumo": 0},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 10,
            "question" : "Seu aplicativo precisa de integração com câmera/microfone ?",
            "base" : horas(8),
            "answ" : [
                {"checked": false, "title": "Sim", "consumo": 0.7},
                {"checked": false, "title": "Não", "consumo": 0},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 20,
            "question" : "O seu aplicativo precisa de um painel administrativo ? (Marque não para loja)",
            "base" : dias(10),
            "answ" : [
                {"checked": false, "title": "Sim", "consumo": 0.9},
                {"checked": false, "title": "Não", "consumo": 0},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 10,
            "question" : "O seu aplicativo precisa de suporte a multiplas línguas ?",
            "base" : dias(3),
            "answ" : [
                {"checked": false, "title": "Bilíngue", "consumo": 0.5},
                {"checked": false, "title": "Multilíngue", "consumo": 1},
                {"checked": false, "title": "Somente uma única língua.", "consumo": 0},
                {"checked": false, "title": "Ainda não sei.", "consumo": 0}
            ]
        },
        {
            "active" : false,
            "desconto_percent" : 0,
            "question" : "Em que estágio encontra-se o seu projeto ?",
            "base" : dias(2),
            "answ" : [
                {"checked": false, "title": "Apenas uma idéia", "consumo": 1.3},
                {"checked": false, "title": "Esboço pronto", "consumo": 0.25},
                {"checked": false, "title": "Em desenvolvimento", "consumo": 0.2}
            ]
        }
    ]
};