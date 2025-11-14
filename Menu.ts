import readlinesync = require("readline-sync");
import { colors } from "./src/util/MenuColors";
import { Estendida } from "./src/model/Estendida";
import { Controller } from "./src/controller/Controller";
import { Principal } from "./src/model/Principal";

const controller = new Controller();

controller.cadastrar(new Estendida(101, "Bracelete de Ouro Corrente de Elos e Esferas", 964.50, 101));
controller.cadastrar(new Estendida(102, "Brinco de Prata Pequeno Coração Vermelho", 324.50, 102));
controller.cadastrar(new Estendida(103, "Brinco Argola Prata Fila de Corações Brilhantes", 1014.50, 103));
controller.cadastrar(new Estendida(104, "Colar Rose Mini Elos Prata de Lei", 789.50, 104));
controller.cadastrar(new Estendida(105, "Anel Solitário Ouro Coração Elevado", 634.50, 105));


export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.pink,
            "***********************************************************************************************");
        console.log("                                                                                               ");
        console.log("                                    Gabrieli Martins Joias                                     ");
        console.log("                                                                                               ");
        console.log("***********************************************************************************************");
        console.log("                                                                                               ");
        console.log("                                    ♥ Seja bem-vindo(a)! ♥                                     ");
        console.log("                                                                                               ");
        console.log("***********************************************************************************************");
        console.log("                                                                                               ");
        console.log("                                     Conheça nossas joias:                                     ");
        console.log(" --------------------------------------------------------------------------------------------- ");
        console.log("                                                                                               ");
        console.log("               1 - Bracelete de Ouro Corrente de Elos e Esferas - R$ 964,50                    ");
        console.log("               2 - Brinco de Prata Pequeno Coração Vermelho - R$ 324,50                        ");
        console.log("               3 - Brinco Argola Prata Fila de Corações Brilhantes - R$ 1.014,50               ");
        console.log("               4 - Colar Rose Mini Elos Prata de Lei - R$ 789,50                               ");
        console.log("               5 - Anel Solitário Ouro Coração Elevado - R$ 634,50                             ");
        console.log(" --------------------------------------------------------------------------------------------- ");
        console.log("                                         Informações                                           ");
        console.log(" --------------------------------------------------------------------------------------------  ");
        console.log("                                                                                               ");
        console.log("               6 - Entre em contato conosco                                                    ");
        console.log("               7 - Meu gerenciamento                                                           ");
        console.log("               8 - Desistir da compra e sair =(                                                ");
        console.log("                                                                                               ",
            colors.reset);

        console.log("Escolha a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 8) {
            console.log("\n Esperamos você novamente por aqui! ♥ ");
            sobreNos();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {

                const codigos = { 1: 101, 2: 102, 3: 103, 4: 104, 5: 105 };
                const codigo = codigos[opcao];

                try {
                    const produto = controller.procurarProduto(codigo);

                    if (!produto) {
                        console.log("\nProduto não encontrado!");
                        keyPress();
                        break;
                    }

                    console.log("\n--- Produto Selecionado ---");
                    produto.visualizarProdutos();

                    console.log("\n1 - Comprar");
                    console.log("2 - Voltar ao menu");

                    let submenu = readlinesync.questionInt("");

                    switch (submenu) {

                        case 1:
                            console.log("\nDigite o valor pago:");
                            let valor = readlinesync.questionFloat("");

                            console.log("\nPossui cupom? (pressione Enter se não tiver)");
                            let cupom = readlinesync.question("");

                            produto.comprar(valor, cupom === "" ? undefined : cupom);
                            break;

                        case 2:
                            console.log("\nVoltando ao menu...");
                            break;

                        default:
                            console.log("\nOpção inválida!");
                    }

                } catch (err: any) {
                    console.log(`Erro: ${err.message || err}`);
                }

                keyPress();
                break;
            }

            case 6:
                console.log("Entre em contato conosco                   ");
                console.log("WhatsApp - 51 98590-3563                   ");
                console.log("Email - suporte@gabrielimartinsjoias.com.br");
                keyPress();
                break;

            case 7:
                menuGerenciamento();
                break;

            default:
                console.log("Opção inválida!");
                keyPress();
                break;
        }
    }
}

export function menuGerenciamento(): void {
    let subOpcao: number;
    
    while (true) {
        console.log(colors.fg.pink, "\n*** Menu de Gerenciamento de Produtos ***", colors.reset);
        console.log("1 - Cadastrar Novo Produto");
        console.log("2 - Listar Todos os Produtos");
        console.log("3 - Buscar Produto por ID");
        console.log("4 - Atualizar Produto");
        console.log("5 - Excluir Produto");
        console.log("6 - Voltar ao Menu Principal");

        console.log("\nEscolha a opção: ");
        subOpcao = readlinesync.questionInt("");

        if (subOpcao === 6) {
            console.log("\nVoltando ao Menu Principal...");
            keyPress();
            break;
        }

        switch (subOpcao) {
            case 1:
                console.log("\n*** Cadastrar Novo Produto ***");

                let id: number = readlinesync.questionInt("Digite o ID do produto: ");

                if (controller.procurarProdutoPorId(id)) {
                    console.log("ID já cadastrado. Por favor, use um ID diferente.");
                    keyPress();
                    break;
                }

                let nome: string = readlinesync.question("Digite o nome: ");
                let preco: number = readlinesync.questionFloat("Digite o preco: R$ ");
                let codigo: number = readlinesync.questionInt("Digite o codigo: ");

                const novoCadastro = new Estendida(id, nome, preco, codigo);
                controller.cadastrar(novoCadastro);
                keyPress();
                break;

            case 2:
                controller.listarTodos();
                keyPress();
                break;

            case 3:
                console.log("\n*** Buscar Produto por ID ***");
                let idBusca = readlinesync.questionInt("Digite o ID do produto: ");

                const produtoEncontrado = controller.procurarProdutoPorId(idBusca);

                if (produtoEncontrado) {
                    console.log("\nProduto encontrado:");
                    produtoEncontrado.visualizarProdutos();
                } else {
                    console.log(`\nProduto com ID ${idBusca} não foi encontrado.`);
                }
                keyPress();
                break;

            case 4:
                console.log(colors.fg.yellow, "\n*** Atualizar Produto ***", colors.reset);

                let idAtualizar = readlinesync.questionInt("Digite o ID do produto a ser atualizado: ");

                const produtoAntigo = controller.procurarProdutoPorId(idAtualizar);

                if (produtoAntigo) {
                    console.log("\nProduto atual:");
                    produtoAntigo.visualizarProdutos();

                    console.log("\nDigite as NOVAS informações:");

                    let novoNome = readlinesync.question(`Novo Nome (${produtoAntigo.getNome()}): `) || produtoAntigo.getNome();
                    let novoPreco = readlinesync.questionFloat(`Novo Preco (R$ ${produtoAntigo.getPreco().toFixed(2)}): `) || produtoAntigo.getPreco();

                    let novoCodigo = 0;
                    if (produtoAntigo instanceof Estendida) {
                         novoCodigo = readlinesync.questionInt(`Novo Codigo (${produtoAntigo.getCodigo()}): `) || produtoAntigo.getCodigo();
                    }

                    const produtoAtualizado = new Estendida(idAtualizar, novoNome, novoPreco, novoCodigo);

                    controller.atualizar(produtoAtualizado);

                } else {
                    console.log(`\nProduto com ID ${idAtualizar} não foi encontrado.`);
                }
                keyPress();
                break;

            case 5:
                console.log(colors.fg.red, "\n*** Excluir Produto ***", colors.reset);

                let idDeletar = readlinesync.questionInt("Digite o ID do produto a ser excluído: ");

                controller.deletar(idDeletar);
                keyPress();
                break;

            default:
                console.log("\nOpção inválida!");
                keyPress();
                break;
        }
    }
}

export function sobreNos(): void {
    console.log("******************************************");
    console.log("Desenvolvido por Gabrieli Martins         ");
    console.log("email - gabrielidelimamartins@gmail.com   ");
    console.log("github.com/imgabrielimartins              ");
    console.log("******************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();