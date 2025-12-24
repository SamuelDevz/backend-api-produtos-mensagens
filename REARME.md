# Backend API - Produtos e Mensagens

Uma API REST simples desenvolvida com Node.js e Express.js para gerenciamento de produtos e envio de mensagens. Este projeto foi criado como parte de um curso de backend, demonstrando conceitos fundamentais de APIs REST, roteamento, middleware e integração com Express.

## 📋 Descrição

Este backend fornece endpoints para:
- **Produtos**: Listagem, busca por ID e criação de produtos
- **Mensagens**: Envio e recebimento de mensagens
- **CORS**: Configurado para permitir requisições de origens específicas
- **Middleware**: Logging de requisições e parsing de JSON

A aplicação utiliza Express.js como framework web, implementa rotas modulares e está preparada para desenvolvimento com hot-reload através do Nodemon.

> **Curso de Referência**: Desenvolvido a partir do curso disponível em: https://www.youtube.com/watch?v=ha_leEpnT30&list=WL&index=5

## Como Usar

Para clonar e rodar esta aplicação, você vai precisar do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org/en/download/) (que já inclui o [npm](http://npmjs.com)) instalados em seu computador. No seu terminal, execute:

```bash
# Clone este repositório
$ git clone https://github.com/SamuelDevz/backend-api-produtos-mensagens

# Entre no diretório do repositório
$ cd backend-api-produtos-mensagens

# Instale as dependências
$ npm install

# Rode o aplicativo
$ npm start
```

> **Nota**
> Se você estiver usando o Linux Bash no Windows, [veja este guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use `node` diretamente no prompt de comando.

## 🤝 Como Contribuir

Contribuições são bem-vindas! Se você tem ideias para novas funcionalidades, melhorias de performance ou correções de bugs, por favor, siga estes passos:

1. Faça um "Fork" do repositório.
2. Crie uma nova branch para sua feature (`git checkout -b feature/minha-feature`).
3. Faça o commit de suas alterações (`git commit -m 'Adiciona minha-feature'`).
4. Envie para a sua branch (`git push origin feature/minha-feature`).
5. Abra um "Pull Request".

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.