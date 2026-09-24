# ONG Esperança

Projeto acadêmico Front-end desenvolvido com HTML, CSS e JavaScript. A aplicação utiliza SPA, ES6 Modules, localStorage, SweetAlert2, modo escuro e agora Vite para desenvolvimento e build de produção.

## Tecnologias

- HTML5
- CSS3
- JavaScript ES6
- ES6 Modules
- localStorage / JSON
- SweetAlert2 via CDN
- Vite

## Instalação

É necessário ter o Node.js instalado.

No terminal, dentro da pasta do projeto:

```bash
npm install
```

Esse comando instala o Vite definido no `package.json`.

## Executar em desenvolvimento

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado pelo Vite.

## Gerar a build de produção

```bash
npm run build
```

O Vite gera a pasta `dist/` com os arquivos preparados para produção. O JavaScript e o CSS são processados e minificados durante a build.

## Testar a build

Depois de gerar a build:

```bash
npm run preview
```

Esse comando permite visualizar localmente o conteúdo da pasta `dist`.

## Estrutura principal

```text
ong_esperanca_vite/
├── css/
├── html/
├── images/
├── js/
│   ├── main.js
│   └── modules/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Observação

O SweetAlert2 continua sendo carregado por CDN. Caso a biblioteca externa não carregue, o projeto possui uma alternativa com `alert()` e `confirm()` do navegador.


## Otimização de imagens

As imagens JPG/PNG utilizadas pela aplicação foram convertidas para WebP com qualidade 82.
Imagens de conteúdo muito largas foram redimensionadas para no máximo 900 px e a imagem hero para no máximo 1600 px, sem ampliar arquivos menores.
As imagens dos cards utilizam `loading="lazy"` e `decoding="async"`. A imagem principal não usa lazy loading porque aparece no início da página.

Tamanho total das imagens antes: 176.9 KB
Tamanho total depois: 117.8 KB
Redução total aproximada: 33.4%
