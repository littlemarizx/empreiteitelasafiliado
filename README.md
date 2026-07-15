# Showcase — App do Afiliado

Página estática com as telas do aplicativo, capturadas do app em execução.

## Abrir

Abra `showcase/index.html` no navegador (duplo clique). Não precisa de servidor:
os dados ficam em `data.js` e são carregados por `<script>`, não por `fetch`.

Para hospedar, publique a pasta `showcase/` inteira em qualquer host estático.

## Regerar

```bash
npm run showcase:generate
```

O comando encadeia quatro etapas:

| Etapa | O que faz |
| --- | --- |
| `expo export --platform web` | gera o `dist/` |
| `showcase:capture` | serve o `dist/`, faz login com a conta demonstrativa e captura cada tela |
| `showcase:verify` | falha se duas capturas da mesma tela forem idênticas |
| `showcase:build` | escreve o `data.js` lido pela página |

Para recapturar apenas algumas telas:

```bash
node scripts/showcase/capture.js --only=saque,conta-v2
```

## Como funciona

`scripts/showcase/screens-map.js` é a fonte da verdade: módulo → tela → view.
Cada view declara um roteiro de ações (tocar, preencher, rolar) que o capturador
reproduz **na interface real** — não há ponte de automação dentro do app, então
o que aparece na página é o aplicativo de verdade.

Cada view parte do zero (recarrega e limpa o storage) para que nenhuma captura
herde filtro, modal ou campo preenchido da anterior.

O `showcase:verify` existe porque um roteiro pode "passar" e ainda assim
fotografar a tela errada: se um clique cair no lugar errado, nada muda e a
captura sai idêntica à anterior — sem o teste de hash, o erro passaria batido.

## Dados

Tudo é demonstrativo: conta mock `afiliado@empreitei.com`, valores e nomes
fictícios. Nenhum dado real de cliente, prestador ou pagamento.
