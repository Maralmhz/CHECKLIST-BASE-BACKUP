// CONFIG.JS - FASTCAR CENTRO AUTOMOTIVO
// Contagem, MG - Checklist de Entrada oficial

window.OFICINA_CONFIG = {
    nome: "Fast Car Centro Automotivo",
    endereco: "Av. Régulus, 248 - Jardim Riacho das Pedras, Contagem - MG, 32241-210",
    telefone: "(31) 99457-9274",  // WhatsApp principal
    telefoneFixo: "(31) 2342-1699",
    
    logo: "logo.png",  // Seu logo enviado (logo-1.jpg renomeado)
    
    // Cores extraídas do LOGO FASTCAR (preto/vermelho)
    corPrimaria: "#FF0000",      // Vermelho carro + texto
    corSecundaria: "#000000",    // Preto carro + fundo
    corFundo: "#FFFFFF",         // Branco clean
    corWhatsApp: "#25D366",      // Verde WhatsApp
    
    // Checklist otimizado para oficina (mantém sua estrutura)
    checklist: [
        {categoria: "Dados do Veículo", itens: ["Placa", "Modelo/Ano", "KM Entrada", "Combustível", "Chassi", "Cor"]},
        {categoria: "Externo", itens: ["Pneus (desgaste)", "Faróis/ Lanternas", "Retrovisores", "Lataria (amassados)", "Para-choque", "Vidros/Trincos"]},
        {categoria: "Interno", itens: ["Painel (alertas)", "Cintos de segurança", "Ar-condicionado", "Bateria (luzes)", "Itens pessoais do cliente"]},
        {categoria: "Mecânica", itens: ["Nível de óleo", "Freios (pastilhas)", "Suspensão/amortecedores", "Correias", "Fluídos (água/filtro)"]},
        {categoria: "Segurança", itens: ["Extintor válido", "Palhetas/limpa-vidros", "Escape (ruídos)", "Estepe calibrado"]}
    ]
};
