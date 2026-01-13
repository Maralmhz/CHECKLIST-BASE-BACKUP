// CONFIG.JS - AUTOSERVICE
// Copacabana, MG - Checklist de Entrada (da sua base neutra)

window.OFICINA_CONFIG = {
    nome: "AutoService",
    endereco: "Rua das Oficinas, 123 - Copacabana, MG",
    cnpj: "12.345.678/0001-99",
    telefone: "(35) 99999-1234",
    email: "contato@autoservice.com.br",
    
    logo: "logo.png",  // Sua logo será subida
    
    // Cores extraídas da sua logo
    corPrimaria: "#FF6600",  // Laranja vibrante
    corSecundaria: "#C0C0C0", // Prata engrenagem
    corFundo: "#000000",     // Preto fundo
    
    // Checklist mantido (edite itens conforme necessidade)
    checklist: [
        {categoria: "Dados do Veículo", itens: ["Placa", "Modelo/Ano", "KM Entrada", "Combustível", "Chassi"]},
        {categoria: "Externo", itens: ["Pneus", "Faróis", "Retrovisores", "Lataria", "Para-choque", "Vidros"]},
        {categoria: "Interno", itens: ["Painel", "Cintos", "Ar-condicionado", "Bateria", "Itens pessoais"]},
        {categoria: "Mecânica", itens: ["Óleo", "Freios", "Suspensão", "Correias", "Fluídos"]},
        {categoria: "Segurança", itens: ["Extintor", "Palhetas", "Escape"]}
    ]
};
