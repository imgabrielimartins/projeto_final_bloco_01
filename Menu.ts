import readlinesync = require("readline-sync");
import { colors } from "./src/util/MenuColors";
import { Principal } from "./src/model/Principal";
import { Estendida } from "./src/model/Estendida";
import { Repository as IRepository } from "./src/repository/Repository";
import { Controller } from "./src/controller/Controller";

export function main() {

    const controller = new Controller();

    // Produtos cadastrados automaticamente
    controller.cadastrar(new Estendida("Bracelete de Ouro Corrente de Elos e Esferas", 964.50, 1, 101));
    controller.cadastrar(new Estendida("Brinco de Prata Pequeno Coração Vermelho", 324.50, 2, 102));
    controller.cadastrar(new Estendida("Brinco Argola Prata Fila de Corações Brilhantes", 1014.50, 3, 103));
    controller.cadastrar(new Estendida("Colar Rose Mini Elos Prata de Lei", 789.50, 4, 104));
    controller.cadastrar(new Estendida("Anel Solitário Ouro Coração Elevado", 634.50, 5, 105));

    let opcao: number;

    while (true) {

        // MENU PRINCIPAL
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
        console.log("               6 - Entre em contato conosco                                                    ");
        console.log("               7 - Desistir da compra e sair =(                                                ");
        console.log("                                                                                               ");
        console.log("***********************************************************************************************");
        console.log("                                                                                               ",
            colors.reset);

        console.log("Escolha a opção desejada: ");
        opcao = readlinesync.questionInt("");

        // SAIR
        if (opcao === 7) {
            console.log("\n Esperamos você novamente por aqui! ♥ ");
            sobreNos();
            process.exit(0);
        }

        switch (opcao) {

            // ======================================================================================
            // PRODUTOS 1 A 5 — SUBMENU DE COMPRA
            // ======================================================================================
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

                    let sub = readlinesync.questionInt("");

                    switch (sub) {

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

            // ======================================================================================
            case 6:
                console.log("Entre em contato conosco");
                console.log("WhatsApp - 51 98590-3563");
                console.log("Email - suporte@gabrielimartinsjoias.com.br");
                keyPress();
                break;

            // ======================================================================================
            default:
                console.log("Opção inválida!");
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
