import readlinesync = require("readline-sync");
import { colors } from "./src/util/MenuColors";


export function main(){

    let opcao: number;

     while(true){
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

        if (opcao == 7) {
            console.log("\n Esperamos você novamente por aqui! ♥ ");
            sobreNos();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("Comprar Bracelete");

            break;
            case 2: 
                 console.log("Comprar Brinco");
            
            break;
            case 3: 
                 console.log("Comprar Brinco");

            break;
            case 4: 
                 console.log("Comprar Colar");

            break;
            case 5: 
                 console.log("Comprar Anel");

            break;
            case 6: 
                console.log("Entre em contato conosco");
                console.log("WhatsApp - 51 98590-3563");
                console.log("Email - suporte@gabrielimartinsjoias.com.br");

            break;
            default:
                console.log("Opção Inválida!");

            break;
        }
    }
}

export function sobreNos(): void{
    console.log("******************************************");
    console.log("Desenvolvido por Gabrieli Martins         ");
    console.log("email - gabrielidelimamartins@gmail.com   ");
    console.log("github.com/imgabrielimartins              ");
    console.log("******************************************");
}

main();