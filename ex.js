class Equipamento {
    constructor(nome, atividade, preco, descricao) {
        this.nome = nome;
        this.atividade = atividade;
        this.preco = preco;
        this.descricao = descricao;
    }

     criaCard() {
        let card = '<div class=" container card">' +
            "Nome: " + this.nome + "<br/>" +
            "Atividade:  " + this.atividade + "<br/>" +
            "Preço: R$" + this.preco + "<br/>" +
            "Descrição " + this.descricao + "<br/>" +
            '</div>';
    
        return card;
    }
}

var equipamentos = [];


function cadastrar() {

    let novoEquipamento = new Equipamento(
        document.getElementById("inputNome").value,
        document.getElementById("inputAt").value,
        document.getElementById("inputPreco").value,
        document.getElementById("textareaDesc").value);
   
         equipamentos.push(novoEquipamento);
         console.log(novoEquipamento)
         window.alert("Parabens! Agora você tem " + equipamentos.length + " equipamento cadastrados, Clique em Exibir para ver os produtos ja cadastrados")
         document.getElementById("form-Equipamentos").reset();
  

}

function exibir() {
    let card = ""
        for(let indice in equipamentos){
             card += equipamentos[indice].criaCard();
            
        }
        document.getElementById("resultadoEq").innerHTML = card;
        }
    
     
    
  






