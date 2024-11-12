# Sistema de Compra de Ingressos

Projeto do curso Alura, da formação "A partir do zero: iniciante em programação".

## Descrição

Este projeto é um sistema simples para compra de ingressos com verificação de tipo de ingresso e disponibilidade de estoque. A função `comprar()` valida a quantidade desejada e verifica o estoque disponível para os tipos de ingresso: pista, cadeiras inferior e superior. Com isso, o sistema atualiza o estoque conforme a compra e exibe mensagens de sucesso ou alerta caso o estoque não seja suficiente.

## Funcionalidades

- Validação da quantidade de ingressos (deve ser um número positivo e inteiro).
- Verificação de estoque disponível para cada tipo de ingresso.
- Atualização de estoque após a compra.
- Alertas de sucesso para compra realizada ou de erro para quantidade indisponível.

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura do Código

- `comprar()`: Função principal que valida o tipo e a quantidade de ingressos selecionada pelo usuário. Atualiza o estoque conforme a disponibilidade e exibe alertas informativos.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sistema-compra-ingressos.git
