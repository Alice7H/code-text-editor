# Style Guide

## Layout

Os designs foram criados com os seguintes tamanhos:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

## Cores

- menu-color: #2d415b
- main-text: #ffff
- second-text: #c4c4c4
- third-text: #0000
- dark-text: #000000

- blue: #5081fb;
- darkBlue: #051d3b
- lightBlue1: #7ba4fc
- lightBlue2: #96b9fd
- blue-8: rgba(80, 129, 251, 0.08)
- blue-16: rgba(80, 129, 251, 0.16)
- blue-24: rgba(80, 129, 251, 0.24)
- blue-64: rgba(80, 129, 251, 0.64)
- blue-72: rgba(80, 129, 251, 0.72)

- white-8: rgba(255, 255, 255, 0.08)
- white-16: rgba(255, 255, 255, 0.16)
- white-24: rgba(255, 255, 255, 0.24)
- white-56: rgba(255, 255, 255, 0.56)
- white-72: rgba(255, 255, 255, 0.72)
- black-16: rgba(0, 0, 0, 0.16)

- mac-red: #ff5f56
- mac-yellow: #ffbd2e
- mac-gree: #27c93f

## Tipografia

### Title

- Font size: 21px
- Line Height: 32px
- Fonte: Inter, 700

### Body

- Font size: 16px
- Line Height: 24px
- Fonte: Inter, 400

### SideBar Title

- Font size: 12px
- Line Height: 18px
- Fonte: Inter, 400
- Text Transform: uppercase

### Fonte

- Family: [Inter](https://fonts.google.com/specimen/Inter?)
- Weights: 400, 700

## Sombras

- x=0 y= 16
- rgba(0,0,0,0.24)

## Componentes de formulário

### Input de Texto e Select

#### Normal:

- Border-radius: 8px
- Color: main-text
- Background: white-16

#### Hover:

- Border-radius: 8px
- Color: main-text
- Background: white-24

## Botões

### Filled

- Border-radius: 8px
- Color: dark-blue
- Estado Normal: background-color: blue
- Estado Hover: background-color: lightBlue1
- Estado Pressed: background-color: lightBlue1; outline: 4px solid blue-72
- Estado Focus: background-color: lightBlue2

### Outlined

- Border-radius: 8px
- Color: main-text
- Estado Normal: background-color: blue-8
- Estado Hover: background-color: blue-16
- Estado Pressed: background-color: blue-16; outline: 4px solid blue-24
- Estado Focus: background-color: blue-24

### Icon Button

- Width: 48px
- Height: 48px
- Color: main-text
- Estado Normal: background-color: transparent
- Estado Hover: background-color: blue-8
- Estado Pressed: background-color: blue-16

### Item de Menu

- Color: second-text
- Altura e largura do ícone: 24px
- Border-radius: 16px;
- Estado Normal: background-color do ícone: blue-16
- Estado Hover: background-color: blue-64
- Estado Pressed: background-color: blue

### Comentário

- Color: main-text
- Border-radius: 16px
- Estado Normal: background-color: transparent;
- Estado Hover: background-color: white-8
- Estado Pressed: background-color: white-16

### Favorito

- Color: main-text
- Border-radius: 16px
- Estado Normal: background-color: transparent;
- Estado Hover: background-color: white-8
- Estado Pressed: background-color: white-16
- Estado Active: cor do ícone: mac-red

### Usuário

- Botão normal: width: 106px; height: 56px
- Botão pequeno: width: 90px; height: 40px
- Altura e largura do ícone: 32px
- Border-radius do ícone: 50%
- Color: main-text
- Estado Normal: background-color: transparent
- Estado Hover: background-color: white-8

## Card de Projeto

- Estado Normal: Borda, Código, Título e Descrição do projeto.
- Estado Hover: Borda, Código, Título e Descrição do projeto, Botão de quantidade de comentários, quantidade de favoritos e autor do projeto
- Comentários, favoritos e o autor devem aparecer na mesma linha
- Comentários e favoritos alinhados à esquerda
- Autor alinhado à direita

## Menu para tablets

- O botão de usuário deve ser substituído pelo menu hambúrguer
- Ao clicar no menu hambúrguer, o ícone deve mudar para um x (fechar)
- Quando o menu for clicado, deve-se exibir os itens do menu lateral e o botão de usuário
- O menu deve ocupar 1/3 da largura da tela.
- O botão de usuário deve estar abaixo dos itens do menu lateral, com um
  separador (linha).

## Menu para smartphones

- O campo de busca deve ser substituído pelo botão com ícone de lupa
- O menu deve ocupar 70% da tela
- Ao clicar no ícone de lupa, o campo de busca deve ser exibido na parte inferior da tela junto com o ícone x (fechar).
