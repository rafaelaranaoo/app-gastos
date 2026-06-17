// Serve para preencher as opcoes do formulario.
export const tipos = ['Despesa', 'Receita']

export const categorias = [
  'Alimentacao',
  'Moradia',
  'Transporte',
  'Educacao',
  'Saude',
  'Lazer',
  'Receita'
]

export const formasPagamento = [
  'Pix',
  'Cartao de debito',
  'Cartao de credito',
  'Dinheiro',
  'Transferencia'
]

export const statusTransacao = ['Pago', 'Pendente', 'Recebido']

// Serve como dados iniciais para o primeiro acesso.
const transacoesIniciais = [
  {
    id: 1,
    descricao: 'Salario mensal',
    tipo: 'Receita',
    categoria: 'Receita',
    valor: 5200,
    data: '2026-06-05',
    formaPagamento: 'Transferencia',
    status: 'Recebido',
    observacoes: 'Pagamento principal do mes'
  },
  {
    id: 2,
    descricao: 'Aluguel',
    tipo: 'Despesa',
    categoria: 'Moradia',
    valor: 1650,
    data: '2026-06-06',
    formaPagamento: 'Pix',
    status: 'Pago',
    observacoes: 'Contrato residencial'
  },
  {
    id: 3,
    descricao: 'Supermercado',
    tipo: 'Despesa',
    categoria: 'Alimentacao',
    valor: 438.9,
    data: '2026-06-08',
    formaPagamento: 'Cartao de debito',
    status: 'Pago',
    observacoes: 'Compras da semana'
  }
]

export default transacoesIniciais
