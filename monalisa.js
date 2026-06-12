// ===================================================
// MONALISA INTERATIVA - Projeto Alura
// Reprodução digital da famosa obra de Leonardo da Vinci
// Com interatividade: olhos que acompanham o mouse
// ===================================================

/**
 * PALETA DE CORES ORIGINAIS
 * Cores cuidadosamente selecionadas para refletir
 * a paleta renascentista da obra original
 */
const colors = {
    // Tons de pele - Renascentismo italiano
    skinLight: '#e8c4a0',      // Luz nos pontos altos
    skinMid: '#d4a574',        // Tom médio principal
    skinDark: '#b8956a',       // Sombras suaves
    
    // Sombras - Profundidade e volume
    shadowDark: '#8b6f47',     // Sombra forte
    shadowDeep: '#5c4a38',     // Sombra muito profunda
    
    // Cabelo - Tons naturais escuros
    hairDark: '#3d2817',       // Preto com tons quentes
    hairMid: '#5c3d28',        // Marrom queimado
    
    // Olhos - Detalhes importantes
    eyeWhite: '#f5f1e8',       // Branco leitoso (não puro)
    iris: '#6b5344',           // Marrom acinzentado
    pupil: '#2c1810',          // Preto muito escuro
    
    // Boca - Cor característica
    lips: '#a85c5c',           // Vermelho acastanhado
    
    // Fundo - Paisagem ao fundo
    background: '#a89968',     // Tom terroso neutro
    
    // Roupas - Tecidos da época
    clothDark: '#4a3d2a',      // Marrom escuro do véu
    clothMid: '#6b5a42',       // Tom médio do vestido
    
    // Nariz
    noseShade: '#c9986b'       // Sombra delicada no nariz
};

// ===================================================
// INICIALIZAÇÃO - Canvas e Variáveis Globais
// ===================================================

const canvas = document.getElementById('monalisaCanvas');
const ctx = canvas.getContext('2d');

// Posição do mouse - inicializa no centro
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// ===================================================
// EVENT LISTENERS - Detecção de Mouse
// ===================================================

// Quando a página carrega, desenha a Monalisa
window.addEventListener('load', () => {
    drawMonalisa();
});

// Quando o mouse se move, atualiza posição e redesenha
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    drawMonalisa();
});

// Quando mouse sai da tela, volta para o centro
document.addEventListener('mouseleave', () => {
    mouseX = canvas.width / 2;
    mouseY = canvas.height / 2;
    drawMonalisa();
});

// ===================================================
// FUNÇÃO PRINCIPAL - Desenha a Monalisa Completa
// ===================================================

/**
 * Função principal que coordena o desenho de todos os elementos
 * Chamada a cada movimento do mouse (60fps)
 */
function drawMonalisa() {
    // Limpar canvas com cor de fundo
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar fundo e paisagem primeiro (atrás)
    drawBackground();
    
    // Depois desenhar o corpo
    drawClothing();
    drawHands();
    
    // Depois a cabeça (rosto)
    drawHair();
    drawFace();
    
    // Detalhes do rosto (ordem importante)
    drawNose();
    drawMouth();
    
    // Olhos por último (mais à frente)
    drawLeftEye();
    drawRightEye();
}

// ===================================================
// DESENHO DO CABELO
// ===================================================

/**
 * Desenha o cabelo característico da Monalisa
 * Com mechas, sombras e texturas
 */
function drawHair() {
    // Cabelo principal - forma geral (elipse)
    ctx.fillStyle = colors.hairDark;
    ctx.beginPath();
    ctx.ellipse(400, 280, 180, 200, 0, 0, Math.PI * 2);
    ctx.fill();

    // Mechas de cabelo no lado esquerdo
    ctx.fillStyle = colors.hairMid;
    ctx.beginPath();
    ctx.bezierCurveTo(250, 250, 220, 350, 240, 450);
    ctx.bezierCurveTo(260, 380, 280, 360, 270, 300);
    ctx.fill();

    // Mechas de cabelo no lado direito
    ctx.fillStyle = colors.hairMid;
    ctx.beginPath();
    ctx.bezierCurveTo(550, 250, 580, 350, 560, 450);
    ctx.bezierCurveTo(540, 380, 520, 360, 530, 300);
    ctx.fill();

    // Detalhes de sombra no cabelo (profundidade)
    ctx.fillStyle = 'rgba(60, 40, 23, 0.3)';
    ctx.beginPath();
    ctx.ellipse(380, 300, 150, 120, -0.3, 0, Math.PI * 2);
    ctx.fill();
}

// ===================================================
// DESENHO DO ROSTO
// ===================================================

/**
 * Desenha o rosto da Monalisa
 * Com iluminação, sombras e volume
 */
function drawFace() {
    // Face principal - forma ovalada
    ctx.fillStyle = colors.skinMid;
    ctx.beginPath();
    ctx.ellipse(400, 350, 140, 180, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombra no queixo (define a mandíbula)
    ctx.fillStyle = colors.shadowDark;
    ctx.beginPath();
    ctx.ellipse(400, 480, 120, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Iluminação suave no lado esquerdo (luz frontal)
    ctx.fillStyle = colors.skinLight;
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.ellipse(320, 350, 80, 150, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Sombra suave no lado direito (profundidade)
    ctx.fillStyle = colors.shadowDark;
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.ellipse(480, 350, 80, 150, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// ===================================================
// DESENHO DO NARIZ
// ===================================================

/**
 * Desenha o nariz delicado da Monalisa
 * Com linha central e sombras sutis
 */
function drawNose() {
    // Linha central do nariz
    ctx.strokeStyle = colors.noseShade;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(400, 280);
    ctx.lineTo(400, 380);
    ctx.stroke();

    // Ponta do nariz (elipse pequena)
    ctx.fillStyle = colors.shadowDark;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.ellipse(400, 380, 15, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Sombra do lado esquerdo do nariz
    ctx.fillStyle = colors.shadowDark;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.ellipse(385, 330, 10, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// ===================================================
// DESENHO DA BOCA - O SORRISO FAMOSO
// ===================================================

/**
 * Desenha a boca com o sorriso misterioso
 * Característica mais icônica da obra
 */
function drawMouth() {
    // Linha do lábio superior
    ctx.strokeStyle = colors.lips;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(350, 410);
    ctx.quadraticCurveTo(400, 400, 450, 410);
    ctx.stroke();

    // Linha do lábio inferior - curva característica
    ctx.strokeStyle = colors.lips;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(350, 410);
    ctx.quadraticCurveTo(400, 430, 450, 410);
    ctx.stroke();

    // Preenchimento suave dos lábios
    ctx.fillStyle = colors.lips;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.moveTo(350, 410);
    ctx.quadraticCurveTo(400, 425, 450, 410);
    ctx.quadraticCurveTo(400, 420, 350, 410);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// ===================================================
// DESENHO DO OLHO ESQUERDO COM ACOMPANHAMENTO
// ===================================================

/**
 * Desenha o olho esquerdo
 * A íris segue a posição do mouse em tempo real
 */
function drawLeftEye() {
    const eyeX = 340;
    const eyeY = 310;

    // Branco do olho
    ctx.fillStyle = colors.eyeWhite;
    ctx.beginPath();
    ctx.ellipse(eyeX, eyeY, 30, 38, 0, 0, Math.PI * 2);
    ctx.fill();

    // Contorno do olho
    ctx.strokeStyle = colors.shadowDark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(eyeX, eyeY, 30, 38, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Calcular posição da íris acompanhando o mouse
    const irisPos = calculateIrisPosition(eyeX, eyeY);

    // Íris (parte colorida do olho)
    ctx.fillStyle = colors.iris;
    ctx.beginPath();
    ctx.arc(irisPos.x, irisPos.y, 18, 0, Math.PI * 2);
    ctx.fill();

    // Pupila (ponto preto no centro da íris)
    ctx.fillStyle = colors.pupil;
    ctx.beginPath();
    ctx.arc(irisPos.x, irisPos.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Brilho do olho (efeito de luz)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(irisPos.x - 4, irisPos.y - 5, 4, 0, Math.PI * 2);
    ctx.fill();

    // Cílios superiores
    ctx.strokeStyle = colors.hairDark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(320, 280);
    ctx.quadraticCurveTo(330, 270, 340, 275);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(340, 275);
    ctx.quadraticCurveTo(350, 268, 360, 275);
    ctx.stroke();

    // Cílios inferiores
    ctx.beginPath();
    ctx.moveTo(320, 340);
    ctx.quadraticCurveTo(330, 350, 340, 345);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(340, 345);
    ctx.quadraticCurveTo(350, 352, 360, 345);
    ctx.stroke();
}

// ===================================================
// DESENHO DO OLHO DIREITO COM ACOMPANHAMENTO
// ===================================================

/**
 * Desenha o olho direito
 * Espelho do esquerdo, também segue o mouse
 */
function drawRightEye() {
    const eyeX = 460;
    const eyeY = 310;

    // Branco do olho
    ctx.fillStyle = colors.eyeWhite;
    ctx.beginPath();
    ctx.ellipse(eyeX, eyeY, 30, 38, 0, 0, Math.PI * 2);
    ctx.fill();

    // Contorno do olho
    ctx.strokeStyle = colors.shadowDark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(eyeX, eyeY, 30, 38, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Calcular posição da íris acompanhando o mouse
    const irisPos = calculateIrisPosition(eyeX, eyeY);

    // Íris
    ctx.fillStyle = colors.iris;
    ctx.beginPath();
    ctx.arc(irisPos.x, irisPos.y, 18, 0, Math.PI * 2);
    ctx.fill();

    // Pupila
    ctx.fillStyle = colors.pupil;
    ctx.beginPath();
    ctx.arc(irisPos.x, irisPos.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Brilho do olho
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(irisPos.x - 4, irisPos.y - 5, 4, 0, Math.PI * 2);
    ctx.fill();

    // Cílios superiores
    ctx.strokeStyle = colors.hairDark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(440, 280);
    ctx.quadraticCurveTo(450, 270, 460, 275);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(460, 275);
    ctx.quadraticCurveTo(470, 268, 480, 275);
    ctx.stroke();

    // Cílios inferiores
    ctx.beginPath();
    ctx.moveTo(440, 340);
    ctx.quadraticCurveTo(450, 350, 460, 345);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(460, 345);
    ctx.quadraticCurveTo(470, 352, 480, 345);
    ctx.stroke();
}

// ===================================================
// CÁLCULO DA POSIÇÃO DA ÍRIS (MATEMÁTICA)
// ===================================================

/**
 * Calcula a posição da íris baseada no mouse
 * Utiliza trigonometria para determinar a direção
 * 
 * @param {number} eyeX - Coordenada X do olho no canvas
 * @param {number} eyeY - Coordenada Y do olho no canvas
 * @returns {Object} Posição {x, y} da íris
 * 
 * EXPLICAÇÃO DA MATEMÁTICA:
 * 1. Math.atan2(dy, dx) calcula o ângulo entre o olho e o mouse
 * 2. Math.cos/sin(angle) converte o ângulo em coordenadas
 * 3. maxDistance limita quanto a íris pode se mover
 */
function calculateIrisPosition(eyeX, eyeY) {
    // Obter posição do canvas na página
    const canvasRect = canvas.getBoundingClientRect();
    const canvasX = canvasRect.left;
    const canvasY = canvasRect.top;

    // Calcular posição do mouse relativa ao canvas
    const mouseCanvasX = mouseX - canvasX;
    const mouseCanvasY = mouseY - canvasY;

    // Escalar as coordenadas (importante para diferentes tamanhos de tela)
    const scaleX = canvas.width / canvasRect.width;
    const scaleY = canvas.height / canvasRect.height;

    const scaledMouseX = mouseCanvasX * scaleX;
    const scaledMouseY = mouseCanvasY * scaleY;

    // Calcular diferença (delta)
    const dx = scaledMouseX - eyeX;
    const dy = scaledMouseY - eyeY;

    // Calcular ângulo usando arctangente
    const angle = Math.atan2(dy, dx);

    // Distância máxima que a íris pode se mover
    // = raio do branco do olho - raio da íris
    const maxDistance = 30 - 18;

    // Calcular nova posição da íris
    const irisX = eyeX + Math.cos(angle) * maxDistance;
    const irisY = eyeY + Math.sin(angle) * maxDistance;

    return { x: irisX, y: irisY };
}

// ===================================================
// DESENHO DAS ROUPAS
// ===================================================

/**
 * Desenha o véu e o vestido da Monalisa
 * Características importantes da obra
 */
function drawClothing() {
    // Véu/xale sobre os ombros
    ctx.fillStyle = colors.clothDark;
    ctx.beginPath();
    ctx.bezierCurveTo(250, 450, 200, 550, 280, 650);
    ctx.bezierCurveTo(350, 700, 450, 700, 520, 650);
    ctx.bezierCurveTo(600, 550, 550, 450, 400, 480);
    ctx.fill();

    // Detalhes do tecido (rugas e texturas)
    ctx.strokeStyle = colors.shadowDeep;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.5;

    // Rugas do tecido do véu
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const startX = 280 + i * 40;
        const startY = 480;
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(startX + 15, 550, startX + 20, 620);
        ctx.stroke();
    }

    ctx.globalAlpha = 1;

    // Corpo/vestido principal
    ctx.fillStyle = colors.clothMid;
    ctx.beginPath();
    ctx.moveTo(300, 480);
    ctx.lineTo(500, 480);
    ctx.lineTo(520, 800);
    ctx.lineTo(280, 800);
    ctx.closePath();
    ctx.fill();

    // Sombra no vestido (profundidade)
    ctx.fillStyle = colors.shadowDark;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.ellipse(400, 600, 80, 150, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// ===================================================
// DESENHO DAS MÃOS
// ===================================================

/**
 * Desenha as mãos da Monalisa
 * Posicionadas em primeiro plano
 */
function drawHands() {
    drawLeftHand();
    drawRightHand();
}

/**
 * Desenha a mão esquerda
 */
function drawLeftHand() {
    const handX = 300;
    const handY = 650;

    // Palma
    ctx.fillStyle = colors.skinMid;
    ctx.beginPath();
    ctx.ellipse(handX, handY, 35, 55, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Sombra na palma
    ctx.fillStyle = colors.shadowDark;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.ellipse(handX + 10, handY + 20, 20, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Dedos
    ctx.fillStyle = colors.skinMid;
    const fingerPositions = [
        { x: handX - 20, y: handY - 40 },
        { x: handX - 5, y: handY - 50 },
        { x: handX + 15, y: handY - 45 },
        { x: handX + 25, y: handY - 30 }
    ];

    fingerPositions.forEach(pos => {
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y, 8, 20, -0.2, 0, Math.PI * 2);
        ctx.fill();
    });
}

/**
 * Desenha a mão direita
 */
function drawRightHand() {
    const handX = 500;
    const handY = 650;

    // Palma
    ctx.fillStyle = colors.skinMid;
    ctx.beginPath();
    ctx.ellipse(handX, handY, 35, 55, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Sombra na palma
    ctx.fillStyle = colors.shadowDark;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.ellipse(handX - 10, handY + 20, 20, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Dedos
    ctx.fillStyle = colors.skinMid;
    const fingerPositions = [
        { x: handX + 20, y: handY - 40 },
        { x: handX + 5, y: handY - 50 },
        { x: handX - 15, y: handY - 45 },
        { x: handX - 25, y: handY - 30 }
    ];

    fingerPositions.forEach(pos => {
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y, 8, 20, 0.2, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ===================================================
// DESENHO DO FUNDO E PAISAGEM
// ===================================================

/**
 * Desenha o fundo com paisagem ao estilo Leonardo da Vinci
 * Montanhas, rio e atmosfera renascentista
 */
function drawBackground() {
    // Montanha esquerda
    ctx.fillStyle = '#9b8863';
    ctx.beginPath();
    ctx.moveTo(0, 600);
    ctx.lineTo(250, 250);
    ctx.lineTo(350, 750);
    ctx.closePath();
    ctx.fill();

    // Montanha direita
    ctx.fillStyle = '#a89968';
    ctx.beginPath();
    ctx.moveTo(450, 750);
    ctx.lineTo(550, 300);
    ctx.lineTo(800, 600);
    ctx.closePath();
    ctx.fill();

    // Sombra nas montanhas (profundidade)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(350, 750);
    ctx.lineTo(320, 750);
    ctx.lineTo(240, 300);
    ctx.closePath();
    ctx.fill();

    // Rio ou paisagem média
    ctx.fillStyle = '#b5a582';
    ctx.beginPath();
    ctx.bezierCurveTo(100, 700, 300, 750, 500, 700);
    ctx.lineTo(500, 1000);
    ctx.lineTo(0, 1000);
    ctx.closePath();
    ctx.fill();

    // Reflexo de luz na paisagem (efeito atmosférico)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.ellipse(400, 850, 150, 80, 0, 0, Math.PI * 2);
    ctx.fill();
}

// ===================================================
// INICIALIZAÇÃO FINAL
// ===================================================

// Desenhar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    drawMonalisa();
});