function transformDiaSemana (diaSemana) {
    switch (diaSemana) {
        case 0:
            diaSemana = 'domingo';
            return diaSemana;
        case 1:
            diaSemana = 'segunda-feira';
            return diaSemana;
        case 2:
            diaSemana = 'terça-feira';
            return diaSemana;
        case 3:
            diaSemana = 'quarta-feira';
            return diaSemana;
        case 4:
            diaSemana = 'quinta-feira';
            return diaSemana;
        case 5:
            diaSemana = 'sexta-feira';
            return diaSemana;
        case 6:
            diaSemana = 'sábado';
            return diaSemana;
        default:
            diaSemana = 'dia inválido';
            return diaSemana;
    }
}


function transformMes (mes) {
    switch (mes) {
        case 0:
            mes = 'janeiro';
            return mes;
        case 1:
            mes = 'fevereiro';
            return mes;
        case 2:
            mes = 'março';
            return mes;
        case 3:
            mes = 'abril';
            return mes;
        case 4:
            mes = 'maio';
            return mes;
        case 5:
            mes = 'junho';
            return mes;
        case 6:
            mes = 'julho';
            return mes;
        case 7:
            mes = 'agosto';
            return mes;
        case 8:
            mes = 'setembro';
            return mes;
        case 9:
            mes = 'outubro';
            return mes;
        case 10:
            mes = 'novembro';
            return mes;
        case 11:
            mes = 'dezembro';
            return mes;
        default:
            mes = 'mês inválido';
            return mes;
    }
}

function zeroAEsquerda (num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

const text = document.querySelector('.title');

let data = new Date();

let diaSemana = data.getDay();
diaSemana = transformDiaSemana(diaSemana);

let diaMes = data.getDate();

let mes = data.getMonth();
mes = transformMes(mes);

let ano = data.getFullYear();

let hora = zeroAEsquerda(data.getHours());

let minuto = zeroAEsquerda(data.getMinutes());

text.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano}<br>${hora}:${minuto}`;