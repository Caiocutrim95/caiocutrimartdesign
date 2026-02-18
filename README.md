
# Caio Cutrim - Portfólio Premium (GitHub Pages Ready)

Este projeto foi configurado para rodar perfeitamente no GitHub Pages utilizando `HashRouter` para evitar erros de rotas não encontradas (página branca) e scripts automáticos de build e deploy.

## 🚀 Como rodar localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/portfolio.git
    cd portfolio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

## 📦 Como fazer o Deploy (GitHub Pages)

1.  **Ajuste o package.json:**
    Substitua a propriedade `"homepage"` no arquivo `package.json` pela URL do seu repositório:
    `"homepage": "https://caioiakal.github.io/portfolio"`

2.  **Execute o comando de deploy:**
    ```bash
    npm run deploy
    ```
    *Este comando irá automaticamente gerar o build e subir para a branch `gh-pages`.*

## 📂 Estrutura de Imagens
As imagens estão configuradas para carregar de `/assets/`. Certifique-se de salvar suas imagens em `public/assets/` para que funcionem sem internet ou dependência de links externos.

## ✨ Tecnologias
- **React 19**
- **HashRouter** (Melhor compatibilidade com GitHub Pages)
- **Tailwind CSS**
- **Glassmorphism Design**
