import pathlib
import re
from collections import OrderedDict

root = pathlib.Path(r'c:\Users\USER\OneDrive\Documentos\7º_Semestre\DevWeb\app_despesas\app-gastos')
js_files = sorted(root.glob('src/**/*.js'))

patterns = [
    re.compile(r'^\s*export function\s+(\w+)\s*\('),
    re.compile(r'^\s*function\s+(\w+)\s*\('),
]

comment_templates = OrderedDict([
    ('App', ['/**', ' * Componente: App', ' * Descrição: Componente raiz da aplicação.', ' */']),
    ('AppShell', ['/**', ' * Componente: AppShell', ' * Descrição: Estrutura de layout da aplicação.', ' */']),
    ('BudgetProgress', ['/**', ' * Componente: BudgetProgress', ' * Descrição: Progresso do orçamento mensal por categoria.', ' */']),
    ('CategoryBreakdown', ['/**', ' * Componente: CategoryBreakdown', ' * Descrição: Distribuição de despesas por categoria.', ' */']),
    ('ConfereEstado', ['/**', ' * Componente: ConfereEstado', ' * Descrição: Estado vazio mostrado quando não há lançamentos.', ' */']),
    ('ExcluirTransacao', ['/**', ' * Componente: ExcluirTransacao', ' * Descrição: Modal de confirmação de exclusão de transação.', ' */']),
    ('Formulario', ['/**', ' * Componente: Formulario', ' * Descrição: Formulário de lançamentos.', ' */']),
    ('MeioPagamento', ['/**', ' * Componente: MeioPagamento', ' * Descrição: Select de forma de pagamento.', ' */']),
    ('Menu', ['/**', ' * Componente: Menu', ' * Descrição: Item de navegação do menu lateral.', ' */']),
    ('MenuLateral', ['/**', ' * Componente: MenuLateral', ' * Descrição: Painel lateral de navegação.', ' */']),
    ('PageHeader', ['/**', ' * Componente: PageHeader', ' * Descrição: Cabeçalho das páginas.', ' */']),
    ('SpendingChart', ['/**', ' * Componente: SpendingChart', ' * Descrição: Visualização de despesas por categoria.', ' */']),
    ('StatCard', ['/**', ' * Componente: StatCard', ' * Descrição: Card de estatística.', ' */']),
    ('Status', ['/**', ' * Componente: Status', ' * Descrição: Select de status da transação.', ' */']),
    ('Tabela', ['/**', ' * Componente: Tabela', ' * Descrição: Tabela de transações.', ' */']),
    ('TipoContabil', ['/**', ' * Componente: TipoContabil', ' * Descrição: Cards resumo de receita, despesa e saldo.', ' */']),
    ('TipsPanel', ['/**', ' * Componente: TipsPanel', ' * Descrição: Painel de resumo do mês.', ' */']),
    ('Topbar', ['/**', ' * Componente: Topbar', ' * Descrição: Barra de topo com saldo atual.', ' */']),
    ('TopicosFormulario', ['/**', ' * Componente: TopicosFormulario', ' * Descrição: Campo de formulário reutilizável.', ' */']),
    ('TransactionRow', ['/**', ' * Componente: TransactionRow', ' * Descrição: Linha de transação na tabela.', ' */']),
    ('TypeToggle', ['/**', ' * Componente: TypeToggle', ' * Descrição: Toggle de tipo de transação.', ' */']),
    ('PaginaDashboard', ['/**', ' * Componente: PaginaDashboard', ' * Descrição: Página inicial de dashboard.', ' */']),
    ('PaginaTransacao', ['/**', ' * Componente: PaginaTransacao', ' * Descrição: Página de listagem de transações.', ' */']),
    ('PaginaOrcamento', ['/**', ' * Componente: PaginaOrcamento', ' * Descrição: Página de orçamento mensal.', ' */']),
    ('PaginaErro', ['/**', ' * Componente: PaginaErro', ' * Descrição: Página de erro 404.', ' */']),
    ('FormaTransacao', ['/**', ' * Componente: FormaTransacao', ' * Descrição: Página de criação/edição de transação.', ' */']),
    ('saveToLocalStorage', ['/**', ' * Função: saveToLocalStorage', ' * Descrição: Persiste transações no localStorage.', ' */']),
    ('createTransaction', ['/**', ' * Função: createTransaction', ' * Descrição: Adiciona nova transação.', ' */']),
    ('updateTransaction', ['/**', ' * Função: updateTransaction', ' * Descrição: Atualiza transação existente.', ' */']),
    ('deleteTransaction', ['/**', ' * Função: deleteTransaction', ' * Descrição: Remove transação pelo ID.', ' */']),
    ('findTransaction', ['/**', ' * Função: findTransaction', ' * Descrição: Busca transação pelo ID.', ' */']),
    ('handleDrawerToggle', ['/**', ' * Função: handleDrawerToggle', ' * Descrição: Alterna o estado do drawer.', ' */']),
    ('handleCloseModal', ['/**', ' * Função: handleCloseModal', ' * Descrição: Fecha o modal de exclusão.', ' */']),
    ('handleConfirm', ['/**', ' * Função: handleConfirm', ' * Descrição: Confirma exclusão de transação.', ' */']),
    ('handleSubmit', ['/**', ' * Função: handleSubmit', ' * Descrição: Envia o formulário após validação.', ' */']),
    ('validate', ['/**', ' * Função: validate', ' * Descrição: Valida dados do formulário.', ' */']),
    ('handleChange', ['/**', ' * Função: handleChange', ' * Descrição: Atualiza campos do formulário.', ' */']),
    ('updateField', ['/**', ' * Função: updateField', ' * Descrição: Atualiza valor de campo no formulário.', ' */']),
    ('handleTypeChange', ['/**', ' * Função: handleTypeChange', ' * Descrição: Ajusta campos ao mudar tipo.', ' */']),
])

def has_jsdoc_above(lines, index):
    j = index - 1
    while j >= 0 and lines[j].strip() == '':
        j -= 1
    if j >= 0 and lines[j].strip().startswith('/**'):
        return True
    return False

modified = []
for p in js_files:
    text = p.read_text(encoding='utf-8')
    lines = text.splitlines()
    new_lines = []
    changed = False
    i = 0
    while i < len(lines):
        line = lines[i]
        inserted = False
        for pat in patterns:
            m = pat.match(line)
            if m:
                name = m.group(1)
                if name == 'root':
                    break
                if has_jsdoc_above(lines, i):
                    break
                if name in comment_templates:
                    new_lines.extend(comment_templates[name])
                    changed = True
                    inserted = True
                break
        if inserted:
            new_lines.append(line)
        else:
            new_lines.append(line)
        i += 1
    if changed:
        p.write_text('\n'.join(new_lines) + ('\n' if text.endswith('\n') else ''), encoding='utf-8')
        modified.append(str(p.relative_to(root)))
print('Modified:', len(modified), 'files')
for f in modified:
    print(f)
