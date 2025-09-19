import * as readline from 'readline';
import Bhaskara from './bhaskara';
import Soma from './soma';
import Multiplicacao from './multiplicacao';
import Subtracao from './subtracao';
import Divisao from './divisao';
import Potenciacao from './potencia';
import Radiciacao from './radiciador';

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("=== CALCULADORA ===");
    console.log("[1] Soma");
    console.log("[2] Subtração");
    console.log("[3] Multiplicação");
    console.log("[4] Divisão");
    console.log("[5] Potenciação");
    console.log("[6] Radiciação");
    console.log("[7] Bhaskara");

    leitor.question("Escolha a operação (1-7): ", (opcaoStr) => {
        let opcao = parseInt(opcaoStr);

        if (opcao === 7) {
            leitor.question("Digite o valor de a: ", (aStr) => {
                leitor.question("Digite o valor de b: ", (bStr) => {
                    leitor.question("Digite o valor de c: ", (cStr) => {
                        let a = parseFloat(aStr);
                        let b = parseFloat(bStr);
                        let c = parseFloat(cStr);

                        let resultado = Bhaskara(a, b, c);
                        console.log("Resultado:", resultado);

                        leitor.close();
                    });
                });
            });
        } else {
            leitor.question("Digite o primeiro número: ", (num1Str) => {
                leitor.question("Digite o segundo número: ", (num2Str) => {
                    let num1 = parseFloat(num1Str);
                    let num2 = parseFloat(num2Str);
                    let resultado: number | string;

                    switch (opcao) {
                        case 1:
                            resultado = new Soma().calcular(num1, num2);
                            break;
                        case 2:
                            resultado = new Subtracao().calcular(num1, num2);
                            break;
                        case 3:
                            resultado = new Multiplicacao().calcular(num1, num2);
                            break;
                        case 4:
                            resultado = new Divisao().calcular(num1, num2);
                            break;
                        case 5:
                            resultado = new Potenciacao().calcular(num1, num2);
                            break;
                        case 6:
                            resultado = new Radiciacao().calcular(num1, num2);
                            break;
                        default:
                            resultado = "Opção inválida!";
                    }

                    console.log("Resultado:", resultado);
                    leitor.close();
                });
            });
        }
    });
};

iniciar();