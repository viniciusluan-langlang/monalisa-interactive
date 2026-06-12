# 🎨 Monalisa Interativa - Projeto Alura

Uma reprodução digital e interativa da famosa obra **"Monalisa"** de Leonardo da Vinci, com um diferencial: **os olhos acompanham o movimento do seu mouse**!

## ✨ Características

- 🖼️ **Reprodução fiel das cores originais** - Utiliza a paleta renascentista original
- 👀 **Olhos interativos** - Os olhos seguem o cursor do mouse em tempo real
- 🎨 **Desenho usando Canvas HTML5** - Toda a imagem é gerada programaticamente
- 📱 **Design responsivo** - Funciona em dispositivos móveis e desktops
- ✅ **Sem dependências externas** - Apenas HTML, CSS e JavaScript vanilla

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido durante o curso da Alura com os seguintes objetivos:

1. Praticar manipulação do Canvas HTML5
2. Trabalhar com trigonometria para acompanhamento de mouse
3. Implementar animações suaves e interativas
4. Entender eventos do DOM
5. Reproduzir uma obra de arte digitalmente

## 🚀 Como Usar

### Localmente

1. Clone este repositório:
```bash
git clone https://github.com/viniciusluan-langlang/monalisa-interactive.git
cd monalisa-interactive
```

2. Abra o arquivo `index.html` em seu navegador:
```bash
open index.html
```

Ou use um servidor local (recomendado):
```bash
python3 -m http.server 8000
```

Então acesse `http://localhost:8000` no seu navegador.

## 📁 Estrutura do Projeto

```
monalisa-interactive/
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos e layout
├── monalisa.js     # Lógica da Monalisa e interatividade
└── README.md       # Este arquivo
```

## 🎨 Cores Utilizadas

As cores foram cuidadosamente selecionadas para refletir a paleta da obra original:

- **Pele**: `#d4a574` (tons quentes renascentistas)
- **Sombras**: `#8b6f47` (marrom profundo)
- **Cabelo**: `#3d2817` (preto com tons quentes)
- **Olhos**: Detalhados com íris, pupila e brilhos
- **Fundo**: `#a89968` (tons terrosos harmônicos)

## 🖱️ Interatividade

Mova seu mouse sobre a imagem e observe os olhos acompanharem! A matemática por trás:

- **Cálculo de ângulo**: `Math.atan2(dy, dx)` - Determina a direção do mouse
- **Deslocamento limitado**: A íris não sai do branco do olho
- **Atualização contínua**: 60fps com `mousemove` events

## 💡 Conceitos Técnicos

### Canvas 2D API
- `ctx.beginPath()` - Iniciar novo caminho
- `ctx.arc()` - Desenhar círculos
- `ctx.bezierCurveTo()` - Curvas suaves
- `ctx.ellipse()` - Formas ovaladas
- `ctx.quadraticCurveTo()` - Curvas quadráticas

### JavaScript Moderno
- Event listeners para mouse
- Funções de desenho reutilizáveis
- Cálculos trigonométricos (Math.atan2, Math.cos, Math.sin)
- Manipulação de contexto Canvas

## 📚 Referências

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Leonardo da Vinci - Monalisa](https://pt.wikipedia.org/wiki/Monalisa)
- [Trigonometria em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## 🎓 Aprendizados

Este projeto nos ensinou:
- Como trabalhar com Canvas HTML5
- Matemática aplicada em programação (trigonometria)
- Detecção de eventos do mouse
- Como estruturar código reusável
- Boas práticas em CSS e estrutura HTML
- Renderização de gráficos em tempo real

## 🤝 Contribuindo

Sinta-se livre para:
- Melhorar a fidelidade da imagem
- Adicionar mais interatividades
- Otimizar o código
- Sugerir novas features

## 📝 Licença

Este projeto é educacional e foi desenvolvido como parte do curso Alura.

## 👨‍💻 Autor

Desenvolvido com ❤️ para o curso Alura

---

**Divirta-se interagindo com a Monalisa!** 🎨✨