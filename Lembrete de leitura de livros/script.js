


class CadastroDeLivros {


    constructor() {

        this.livros = [];
        this.livro = {};
        this.contador = 0;
        this.IdEdicao = null;

    }

    lerDados() {

        let nome = document.getElementById("nome").value;
        let pagina = document.getElementById("pagina").value;



        this.livro = {};

        this.livro.nome = nome;
        this.livro.pagina = pagina;


    }

    salvar() {

        this.lerDados();
        if (this.validar()) {

            if (this.IdEdicao != null) {

                for (let i = 0; i < this.livros.length; i++) {

                    if (this.livros[i].id == this.IdEdicao) {


                        this.livros[i].nome == this.livro.nome;
                        this.livros[i].pagina == this.livro.pagina;
                        this.IdEdicao = null;


                    }
                }
            }else {
                this.livro.id = this.contador;
                this.livros.push(this.livro);
                this.contador++;

            }
            this.criarTabela();

        }

        this.limpar();


    }

    validar() {
        let mensagem = "";
        if (this.livro.nome == "") {
            mensagem += "O nome do livro deve ser preenchido."
        }
        if (this.livro.pagina== "") {
            mensagem += "A quantidade de paginas do livro devem ser preenchidas!!"
        }

        if (mensagem == "") {
            return true;
        }

        alert(mensagem + " ");
        return false;


    }


    limpar() {

        document.getElementById("nome").value = "";
        document.getElementById("pagina").value = "";

    }



    editar(id) {

        for (let i = 0; i < this.livros.length; i++) {
            if (id == this.livros[i].id) {
                this.IdEdicao = id;
                document.getElementById("nome").value = this.livros[i].nome;
                document.getElementById("pagina").value = this.livros[i].pagina;

            }
        }

    }
    excluir(id) {

        if (window.confirm("Tem certeza que deseja excluir?!")) {
            for (let i = 0; i < this.livros.length; i++) {
                if (this.livros[i].id == id) {
                    this.livros.splice(i, 1);
                    this.criarTabela();

                }
            }
        }


    }




    criarTabela() {

        let tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        for (let i = 0; i < this.livros.length; i++) {

            let linha = tabela.insertRow();

            let celulaNome = linha.insertCell(0);
            let celulaPagina = linha.insertCell(1);
            let celulaImgEditar = linha.insertCell(2);
            let celulaImgExcluir = linha.insertCell(3);


            let imagemEditar = document.createElement("img");
            let imagemExcluir = document.createElement("img");


            imagemEditar.setAttribute("src", "img/edit.svg");
            imagemEditar.setAttribute("onclick", `biblioteca.editar(${this.livros[i].id})`);

            imagemExcluir.setAttribute("src", "img/delete.svg");
            imagemExcluir.setAttribute("onclick", `biblioteca.excluir(${this.livros[i].id})`);


            celulaNome.innerHTML = this.livros[i].nome;
            celulaPagina.innerHTML = this.livros[i].pagina;

            celulaImgEditar.appendChild(imagemEditar);
            celulaImgExcluir.appendChild(imagemExcluir);





        }

    }

}

let biblioteca = new CadastroDeLivros();
