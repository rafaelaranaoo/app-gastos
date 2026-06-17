// Serve para formatar valores em reais.
export const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

// Serve para transformar numero em moeda brasileira.
export function formatarMoeda(valor) {
  return formatadorMoeda.format(Number(valor || 0))
}

// Serve para mostrar a data no formato dia/mes/ano.
export function formatarData(valor) {
  if (!valor) {
    return ''
  }

  const [ano, mes, dia] = valor.split('-')
  return `${dia}/${mes}/${ano}`
}

// Serve para calcular receitas, despesas e saldo.
export function calcularResumo(transacoes) {
  const receitas = transacoes
    .filter((transacao) => transacao.tipo === 'Receita')
    .reduce((total, transacao) => total + Number(transacao.valor), 0)

  const despesas = transacoes
    .filter((transacao) => transacao.tipo === 'Despesa')
    .reduce((total, transacao) => total + Number(transacao.valor), 0)

  return {
    receitas,
    despesas,
    saldo: receitas - despesas,
    totalLancamentos: transacoes.length
  }
}
