export const transactionTypes = ['Despesa', 'Receita']

export const categories = [
  'Alimentação',
  'Moradia',
  'Transporte',
  'Educação',
  'Saúde',
  'Lazer',
  'Investimentos',
  'Receita'
]

export const paymentMethods = [
  'Pix',
  'Cartão de débito',
  'Cartão de crédito',
  'Dinheiro',
  'Transferência'
]

export const transactionStatus = ['Pago', 'Pendente', 'Recebido']

const initialTransactions = [
  {
    id: 1,
    description: 'Salário mensal',
    type: 'Receita',
    category: 'Receita',
    amount: 5200,
    date: '2026-06-05',
    paymentMethod: 'Transferência',
    status: 'Recebido',
    notes: 'Pagamento principal do mês'
  },
  {
    id: 2,
    description: 'Aluguel',
    type: 'Despesa',
    category: 'Moradia',
    amount: 1650,
    date: '2026-06-06',
    paymentMethod: 'Pix',
    status: 'Pago',
    notes: 'Contrato residencial'
  },
  {
    id: 3,
    description: 'Supermercado',
    type: 'Despesa',
    category: 'Alimentação',
    amount: 438.9,
    date: '2026-06-08',
    paymentMethod: 'Cartão de débito',
    status: 'Pago',
    notes: 'Compras da semana'
  },
  {
    id: 4,
    description: 'Curso online',
    type: 'Despesa',
    category: 'Educação',
    amount: 189.9,
    date: '2026-06-09',
    paymentMethod: 'Cartão de crédito',
    status: 'Pendente',
    notes: 'Parcela única'
  },
  {
    id: 5,
    description: 'Transporte por aplicativo',
    type: 'Despesa',
    category: 'Transporte',
    amount: 76.4,
    date: '2026-06-10',
    paymentMethod: 'Cartão de crédito',
    status: 'Pago',
    notes: 'Deslocamentos da semana'
  },
  {
    id: 6,
    description: 'Freelance design',
    type: 'Receita',
    category: 'Receita',
    amount: 820,
    date: '2026-06-11',
    paymentMethod: 'Pix',
    status: 'Recebido',
    notes: 'Projeto de identidade visual'
  }
]

export default initialTransactions
