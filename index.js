function criarTabela(nome){
    //Criando elementos principais
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //Criando cabeçalho
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;

    td_nome.colSpan = 5;

    const td_B = document.createElement("th");
    td_B.innerHTML = "B";

    const td_I = document.createElement("th");
    td_I.innerHTML = "I";

    const td_N = document.createElement("th");
    td_N.innerHTML = "N";

    const td_G = document.createElement("th");
    td_G.innerHTML = "G";

    const td_O = document.createElement("th");
    td_O.innerHTML = "O";



    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);
    thead.appendChild(td_B);
    thead.appendChild(td_I);
    thead.appendChild(td_N);
    thead.appendChild(td_G);
    thead.appendChild(td_O);


    let minFirstRow = 1
    let maxFirstRow = 15
    

    let minSecondRow = 16
    let maxSecondRow = 30
    

    let minThirdRow = 31
    let maxThirdRow = 45
    
    

    let minFourthRow = 46
    let maxFourthRow = 60
    

    let minFifthRow = 61
    let maxFifthRow = 75
    

    //console.log(randomSecondRow, randomThirdRow, randomFourthRow, randomFifthRow)


    //Inserindo os elementos no tbody
    for (let i = 0; i < 5; i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < 5; j++){
            const td = document.createElement("td");

            if (j == 0){
                let randomFirstRow = Math.floor(Math.random() * (+maxFirstRow + 1 - +minFirstRow)) + minFirstRow;
                td.innerHTML = randomFirstRow;
            }
            else if (j == 1){
                let randomSecondRow = Math.floor(Math.random() * (+maxSecondRow + 1 - +minSecondRow)) + minSecondRow;
                td.innerHTML = randomSecondRow;
            }
            else if (j == 2){
                let randomThirdRow = Math.floor(Math.random() * (+maxThirdRow + 1 - +minThirdRow)) + minThirdRow;
                td.innerHTML = randomThirdRow;

                if (i == 2){
                    td.innerHTML = "X";
                }
                console.log(randomThirdRow)
            }
            else if (j == 3){
                let randomFourthRow = Math.floor(Math.random() * (+maxFourthRow + 1 - +minFourthRow)) + minFourthRow;
                td.innerHTML = randomFourthRow;
            }
            else{
                let randomFifthRow = Math.floor(Math.random() * (+maxFifthRow + 1 - +minFifthRow)) + minFifthRow;
                td.innerHTML = randomFifthRow;
            }

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //Criando a tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);
}


function pedirNomeECriarTabela(){
    const nome = prompt("Digite o seu nome: ");

    if(nome?.length < 5){
        alert("Digite um nome com mais de 5 letras!")
        return;
    }

    criarTabela(nome);
}