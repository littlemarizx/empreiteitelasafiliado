/* Gerado por scripts/showcase/build.js — não editar à mão. */
window.__DEMO_DATA = {
  "sections": [
    {
      "title": "Autenticação",
      "description": "Fluxo de entrada, criação de conta e recuperação de acesso.",
      "screens": 3,
      "planned": 8,
      "captured": 8,
      "implemented": 3
    },
    {
      "title": "Home",
      "description": "Painel com saldo, evolução das comissões e últimas indicações.",
      "screens": 1,
      "planned": 3,
      "captured": 3,
      "implemented": 1
    },
    {
      "title": "Indicar",
      "description": "Links de indicação, histórico de indicados e rede formada.",
      "screens": 5,
      "planned": 12,
      "captured": 12,
      "implemented": 5
    },
    {
      "title": "Comissões",
      "description": "Ganhos, saldos e solicitação de saque com Nota Fiscal.",
      "screens": 3,
      "planned": 9,
      "captured": 9,
      "implemented": 3
    },
    {
      "title": "Conta",
      "description": "Dados pessoais, bancários, segurança e preferências.",
      "screens": 5,
      "planned": 11,
      "captured": 11,
      "implemented": 5
    },
    {
      "title": "Suporte",
      "description": "Central de ajuda, contato e acompanhamento de solicitações.",
      "screens": 3,
      "planned": 12,
      "captured": 12,
      "implemented": 3
    }
  ],
  "screens": [
    {
      "id": "login",
      "sectionTitle": "Autenticação",
      "screenTitle": "Tela de Login",
      "documentOrder": 1,
      "screenOrder": 1,
      "route": "AffiliateLogin",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "login-v1",
          "label": "Acesso do afiliado",
          "state": "Entrada com e-mail, senha, lembrar-me e recuperação de acesso.",
          "viewOrder": 1,
          "image": "assets/screens/01-login-v1.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "tela inicial (sem login)",
          "params": null
        },
        {
          "id": "login-v2",
          "label": "Erro de credenciais",
          "state": "Feedback quando o e-mail ou a senha não conferem.",
          "viewOrder": 2,
          "image": "assets/screens/02-login-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "preencher E-mail → preencher Senha → tocar em “Entrar”",
          "params": null
        }
      ]
    },
    {
      "id": "register",
      "sectionTitle": "Autenticação",
      "screenTitle": "Tela de Cadastro",
      "documentOrder": 1,
      "screenOrder": 2,
      "route": "AffiliateRegister",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 4,
      "capturedViews": 4,
      "views": [
        {
          "id": "register-v1",
          "label": "Pessoa Física",
          "state": "Cadastro com CPF, contatos e os dois aceites obrigatórios.",
          "viewOrder": 1,
          "image": "assets/screens/03-register-v1.png",
          "fullImage": "assets/screens/03-register-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "tocar em “Cadastre-se”",
          "params": null
        },
        {
          "id": "register-v2",
          "label": "Pessoa Jurídica",
          "state": "Variação com razão social e CNPJ.",
          "viewOrder": 2,
          "image": "assets/screens/04-register-v2.png",
          "fullImage": "assets/screens/04-register-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "tocar em “Cadastre-se” → tocar em “Pessoa Jurídica”",
          "params": null
        },
        {
          "id": "register-v3",
          "label": "Validação dos campos",
          "state": "Erros exibidos abaixo de cada campo obrigatório.",
          "viewOrder": 3,
          "image": "assets/screens/05-register-v3.png",
          "fullImage": "assets/screens/05-register-v3-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "tocar em “Cadastre-se” → tocar em “Criar minha conta”",
          "params": null
        },
        {
          "id": "register-v4",
          "label": "Cadastro preenchido",
          "state": "Formulário completo com CPF e telefone mascarados.",
          "viewOrder": 4,
          "image": "assets/screens/06-register-v4.png",
          "fullImage": "assets/screens/06-register-v4-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "tocar em “Cadastre-se” → preencher Nome completo → preencher CPF → preencher E-mail → preencher Telefone → tocar em “Aceitar Termos de Uso e Política de Privacidade” → tocar em “Aceitar Contrato de Afiliação”",
          "params": null
        }
      ]
    },
    {
      "id": "forgot",
      "sectionTitle": "Autenticação",
      "screenTitle": "Recuperação de Senha",
      "documentOrder": 1,
      "screenOrder": 3,
      "route": "AffiliateForgotPassword",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "forgot-v1",
          "label": "Informar e-mail",
          "state": "Envio do link de recuperação para o e-mail cadastrado.",
          "viewOrder": 1,
          "image": "assets/screens/07-forgot-v1.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "tocar em “Esqueci minha senha”",
          "params": null
        },
        {
          "id": "forgot-v2",
          "label": "Link enviado",
          "state": "Confirmação com instrução para verificar a caixa de entrada.",
          "viewOrder": 2,
          "image": "assets/screens/08-forgot-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "tocar em “Esqueci minha senha” → preencher E-mail → tocar em “Enviar link de recuperação”",
          "params": null
        }
      ]
    },
    {
      "id": "dashboard",
      "sectionTitle": "Home",
      "screenTitle": "Dashboard",
      "documentOrder": 2,
      "screenOrder": 1,
      "route": "AffiliateDashboard",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 3,
      "capturedViews": 3,
      "views": [
        {
          "id": "dashboard-v1",
          "label": "Visão geral",
          "state": "Saudação, métricas, saldo disponível e pendente.",
          "viewOrder": 1,
          "image": "assets/screens/09-dashboard-v1.png",
          "fullImage": "assets/screens/09-dashboard-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "navegação direta",
          "params": null
        },
        {
          "id": "dashboard-v2",
          "label": "Evolução e link principal",
          "state": "Gráfico dos últimos 6 meses e ações do link de indicação.",
          "viewOrder": 2,
          "image": "assets/screens/10-dashboard-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "rolar até “Evolução das comissões”",
          "params": null
        },
        {
          "id": "dashboard-v3",
          "label": "Últimas indicações",
          "state": "As três indicações mais recentes com status e valor.",
          "viewOrder": 3,
          "image": "assets/screens/11-dashboard-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "rolar até “Últimas indicações”",
          "params": null
        }
      ]
    },
    {
      "id": "links",
      "sectionTitle": "Indicar",
      "screenTitle": "Meus Links",
      "documentOrder": 3,
      "screenOrder": 1,
      "route": "AffiliateMyLinks",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 4,
      "capturedViews": 4,
      "views": [
        {
          "id": "links-v1",
          "label": "Links de indicação",
          "state": "Criação de link e lista com cliques, cadastros e status.",
          "viewOrder": 1,
          "image": "assets/screens/12-links-v1.png",
          "fullImage": "assets/screens/12-links-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar",
          "params": null
        },
        {
          "id": "links-v2",
          "label": "Novo link preenchido",
          "state": "Campo com o nome da campanha, pronto para gerar.",
          "viewOrder": 2,
          "image": "assets/screens/13-links-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → preencher Ex.: Feira de julho",
          "params": null
        },
        {
          "id": "links-v3",
          "label": "Ações do link",
          "state": "Menu com copiar, compartilhar, editar e desativar.",
          "viewOrder": 3,
          "image": "assets/screens/14-links-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Mais ações para”",
          "params": null
        },
        {
          "id": "links-v4",
          "label": "Confirmar desativação",
          "state": "Diálogo antes de tirar um link do ar.",
          "viewOrder": 4,
          "image": "assets/screens/15-links-v4.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Mais ações para” → tocar em “Desativar link”",
          "params": null
        }
      ]
    },
    {
      "id": "historico",
      "sectionTitle": "Indicar",
      "screenTitle": "Histórico de Indicações",
      "documentOrder": 3,
      "screenOrder": 2,
      "route": "AffiliateReferralHistory",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 3,
      "capturedViews": 3,
      "views": [
        {
          "id": "historico-v1",
          "label": "Todas as indicações",
          "state": "Resumo, busca, filtros por status e período.",
          "viewOrder": 1,
          "image": "assets/screens/16-historico-v1.png",
          "fullImage": "assets/screens/16-historico-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Histórico”",
          "params": null
        },
        {
          "id": "historico-v2",
          "label": "Filtro Aprovadas",
          "state": "Somente indicações já validadas pelo Empreitei.",
          "viewOrder": 2,
          "image": "assets/screens/17-historico-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Histórico” → tocar em “Filtro Aprovadas”",
          "params": null
        },
        {
          "id": "historico-v3",
          "label": "Busca sem resultado",
          "state": "Estado vazio com atalho para limpar os filtros.",
          "viewOrder": 3,
          "image": "assets/screens/18-historico-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Histórico” → preencher Buscar por nome ou código",
          "params": null
        }
      ]
    },
    {
      "id": "indicacao",
      "sectionTitle": "Indicar",
      "screenTitle": "Detalhe da Indicação",
      "documentOrder": 3,
      "screenOrder": 3,
      "route": "AffiliateReferralDetail",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "indicacao-v1",
          "label": "Indicação aprovada",
          "state": "Dados do indicado, origem, comissão e linha do tempo.",
          "viewOrder": 1,
          "image": "assets/screens/19-indicacao-v1.png",
          "fullImage": "assets/screens/19-indicacao-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Histórico” → tocar em “Fazenda Santa Helena”",
          "params": null
        },
        {
          "id": "indicacao-v2",
          "label": "Indicação rejeitada",
          "state": "Motivo da rejeição informado ao afiliado.",
          "viewOrder": 2,
          "image": "assets/screens/20-indicacao-v2.png",
          "fullImage": "assets/screens/20-indicacao-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Histórico” → tocar em “Marina Castro Agro”",
          "params": null
        }
      ]
    },
    {
      "id": "rede",
      "sectionTitle": "Indicar",
      "screenTitle": "Minha Rede",
      "documentOrder": 3,
      "screenOrder": 4,
      "route": "AffiliateNetwork",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "rede-v1",
          "label": "Rede de indicados",
          "state": "Total, ativos e taxa de ativação da rede.",
          "viewOrder": 1,
          "image": "assets/screens/21-rede-v1.png",
          "fullImage": "assets/screens/21-rede-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Minha rede”",
          "params": null
        },
        {
          "id": "rede-v2",
          "label": "Filtro Prestadores",
          "state": "Apenas prestadores cadastrados pelos seus links.",
          "viewOrder": 2,
          "image": "assets/screens/22-rede-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Minha rede” → tocar em “Filtro Prestadores”",
          "params": null
        }
      ]
    },
    {
      "id": "indicado",
      "sectionTitle": "Indicar",
      "screenTitle": "Detalhe do Indicado",
      "documentOrder": 3,
      "screenOrder": 5,
      "route": "AffiliateNetworkMember",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 1,
      "capturedViews": 1,
      "views": [
        {
          "id": "indicado-v1",
          "label": "Perfil do indicado",
          "state": "Atividade, transações válidas e comissões relacionadas.",
          "viewOrder": 1,
          "image": "assets/screens/23-indicado-v1.png",
          "fullImage": "assets/screens/23-indicado-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Indicar → tocar em “Minha rede” → tocar em “Joaquim Ferreira Lima”",
          "params": null
        }
      ]
    },
    {
      "id": "comissoes",
      "sectionTitle": "Comissões",
      "screenTitle": "Minhas Comissões",
      "documentOrder": 4,
      "screenOrder": 1,
      "route": "AffiliateCommissions",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 3,
      "capturedViews": 3,
      "views": [
        {
          "id": "comissoes-v1",
          "label": "Saldo e métricas",
          "state": "Saldo disponível, pendente, acumulado e já sacado.",
          "viewOrder": 1,
          "image": "assets/screens/24-comissoes-v1.png",
          "fullImage": "assets/screens/24-comissoes-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões",
          "params": null
        },
        {
          "id": "comissoes-v2",
          "label": "Filtro Liberadas",
          "state": "Somente comissões prontas para saque.",
          "viewOrder": 2,
          "image": "assets/screens/25-comissoes-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → rolar até “Movimentações” → tocar em “Filtro Liberadas”",
          "params": null
        },
        {
          "id": "comissoes-v3",
          "label": "Filtro Canceladas",
          "state": "Comissão cancelada, com valor riscado.",
          "viewOrder": 3,
          "image": "assets/screens/26-comissoes-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → rolar até “Movimentações” → tocar em “Filtro Canceladas”",
          "params": null
        }
      ]
    },
    {
      "id": "comissao",
      "sectionTitle": "Comissões",
      "screenTitle": "Detalhe da Comissão",
      "documentOrder": 4,
      "screenOrder": 2,
      "route": "AffiliateCommissionDetail",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 1,
      "capturedViews": 1,
      "views": [
        {
          "id": "comissao-v1",
          "label": "Comissão liberada",
          "state": "Valor bruto, descontos, líquido e acompanhamento.",
          "viewOrder": 1,
          "image": "assets/screens/27-comissao-v1.png",
          "fullImage": "assets/screens/27-comissao-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → tocar em “Primeiro contrato concluído”",
          "params": null
        }
      ]
    },
    {
      "id": "saque",
      "sectionTitle": "Comissões",
      "screenTitle": "Solicitar Saque",
      "documentOrder": 4,
      "screenOrder": 3,
      "route": "AffiliateWithdraw",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 5,
      "capturedViews": 5,
      "views": [
        {
          "id": "saque-v1",
          "label": "Formulário",
          "state": "Saldo, valor, conta de destino e Nota Fiscal.",
          "viewOrder": 1,
          "image": "assets/screens/28-saque-v1.png",
          "fullImage": "assets/screens/28-saque-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → tocar em “Solicitar saque”",
          "params": null
        },
        {
          "id": "saque-v2",
          "label": "Valor preenchido",
          "state": "Saldo total aplicado e saldo restante calculado.",
          "viewOrder": 2,
          "image": "assets/screens/29-saque-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → tocar em “Solicitar saque” → tocar em “Usar saldo total”",
          "params": null
        },
        {
          "id": "saque-v3",
          "label": "Valor abaixo do mínimo",
          "state": "Bloqueio quando o valor não atinge R$ 100,00.",
          "viewOrder": 3,
          "image": "assets/screens/30-saque-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → tocar em “Solicitar saque” → preencher 0,00",
          "params": null
        },
        {
          "id": "saque-v4",
          "label": "Saldo insuficiente",
          "state": "Bloqueio quando o valor excede o saldo disponível.",
          "viewOrder": 4,
          "image": "assets/screens/31-saque-v4.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → tocar em “Solicitar saque” → preencher 0,00",
          "params": null
        },
        {
          "id": "saque-v5",
          "label": "Nota Fiscal obrigatória",
          "state": "Revisão bloqueada enquanto a NF não é anexada.",
          "viewOrder": 5,
          "image": "assets/screens/32-saque-v5.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Comissões → tocar em “Solicitar saque” → tocar em “Usar saldo total” → tocar em “Revisar solicitação” → rolar até “Nota Fiscal”",
          "params": null
        }
      ]
    },
    {
      "id": "conta",
      "sectionTitle": "Conta",
      "screenTitle": "Minha Conta",
      "documentOrder": 5,
      "screenOrder": 1,
      "route": "AffiliateAccount",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "conta-v1",
          "label": "Identidade e menu",
          "state": "Hero com avatar, status da conta e grupos de opções.",
          "viewOrder": 1,
          "image": "assets/screens/33-conta-v1.png",
          "fullImage": "assets/screens/33-conta-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta",
          "params": null
        },
        {
          "id": "conta-v2",
          "label": "Confirmar saída",
          "state": "Diálogo de logout em duas etapas.",
          "viewOrder": 2,
          "image": "assets/screens/34-conta-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Sair da conta”",
          "params": null
        }
      ]
    },
    {
      "id": "dados",
      "sectionTitle": "Conta",
      "screenTitle": "Meus Dados",
      "documentOrder": 5,
      "screenOrder": 2,
      "route": "AffiliatePersonalData",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 3,
      "capturedViews": 3,
      "views": [
        {
          "id": "dados-v1",
          "label": "Dados pessoais",
          "state": "Foto, contatos e informações somente leitura da conta.",
          "viewOrder": 1,
          "image": "assets/screens/35-dados-v1.png",
          "fullImage": "assets/screens/35-dados-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Meus dados”",
          "params": null
        },
        {
          "id": "dados-v2",
          "label": "Alterar foto",
          "state": "Opções de câmera, galeria e remoção.",
          "viewOrder": 2,
          "image": "assets/screens/36-dados-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Meus dados” → tocar em “Alterar foto de perfil”",
          "params": null
        },
        {
          "id": "dados-v3",
          "label": "Validação",
          "state": "Erro ao tentar salvar sem o nome completo.",
          "viewOrder": 3,
          "image": "assets/screens/37-dados-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Meus dados” → preencher Seu nome → tocar em “Salvar alterações”",
          "params": null
        }
      ]
    },
    {
      "id": "bancarios",
      "sectionTitle": "Conta",
      "screenTitle": "Dados Bancários",
      "documentOrder": 5,
      "screenOrder": 3,
      "route": "AffiliateBankData",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "bancarios-v1",
          "label": "Conta cadastrada",
          "state": "Dados mascarados e aviso sobre a titularidade.",
          "viewOrder": 1,
          "image": "assets/screens/38-bancarios-v1.png",
          "fullImage": "assets/screens/38-bancarios-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Dados bancários”",
          "params": null
        },
        {
          "id": "bancarios-v2",
          "label": "Edição",
          "state": "Forma de recebimento, conta e titular com máscaras.",
          "viewOrder": 2,
          "image": "assets/screens/39-bancarios-v2.png",
          "fullImage": "assets/screens/39-bancarios-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Dados bancários” → tocar em “Editar dados bancários”",
          "params": null
        }
      ]
    },
    {
      "id": "senha",
      "sectionTitle": "Conta",
      "screenTitle": "Alterar Senha",
      "documentOrder": 5,
      "screenOrder": 4,
      "route": "AffiliateChangePassword",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "senha-v1",
          "label": "Formulário",
          "state": "Senha atual, nova senha e confirmação.",
          "viewOrder": 1,
          "image": "assets/screens/40-senha-v1.png",
          "fullImage": "assets/screens/40-senha-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Alterar senha”",
          "params": null
        },
        {
          "id": "senha-v2",
          "label": "Força da senha",
          "state": "Barras e checklist das regras exigidas.",
          "viewOrder": 2,
          "image": "assets/screens/41-senha-v2.png",
          "fullImage": "assets/screens/41-senha-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Alterar senha” → preencher Crie uma nova senha",
          "params": null
        }
      ]
    },
    {
      "id": "notificacoes",
      "sectionTitle": "Conta",
      "screenTitle": "Notificações",
      "documentOrder": 5,
      "screenOrder": 5,
      "route": "AffiliateNotifications",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 2,
      "capturedViews": 2,
      "views": [
        {
          "id": "notificacoes-v1",
          "label": "Preferências ativas",
          "state": "Switch mestre e avisos por grupo.",
          "viewOrder": 1,
          "image": "assets/screens/42-notificacoes-v1.png",
          "fullImage": "assets/screens/42-notificacoes-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Notificações,”",
          "params": null
        },
        {
          "id": "notificacoes-v2",
          "label": "Notificações desativadas",
          "state": "Aviso e controles desabilitados.",
          "viewOrder": 2,
          "image": "assets/screens/43-notificacoes-v2.png",
          "fullImage": "assets/screens/43-notificacoes-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Notificações,” → tocar em “Receber notificações push, ativado”",
          "params": null
        }
      ]
    },
    {
      "id": "ajuda",
      "sectionTitle": "Suporte",
      "screenTitle": "Ajuda e FAQ",
      "documentOrder": 6,
      "screenOrder": 1,
      "route": "AffiliateHelp",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 4,
      "capturedViews": 4,
      "views": [
        {
          "id": "ajuda-v1",
          "label": "Central de ajuda",
          "state": "Busca, categorias e perguntas frequentes.",
          "viewOrder": 1,
          "image": "assets/screens/44-ajuda-v1.png",
          "fullImage": "assets/screens/44-ajuda-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Central de ajuda”",
          "params": null
        },
        {
          "id": "ajuda-v2",
          "label": "Pergunta expandida",
          "state": "Resposta aberta no acordeão.",
          "viewOrder": 2,
          "image": "assets/screens/45-ajuda-v2.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Central de ajuda” → tocar em “Preciso enviar Nota Fiscal?”",
          "params": null
        },
        {
          "id": "ajuda-v3",
          "label": "Busca no FAQ",
          "state": "Resultados filtrados em tempo real.",
          "viewOrder": 3,
          "image": "assets/screens/46-ajuda-v3.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Central de ajuda” → preencher Como podemos ajudar?",
          "params": null
        },
        {
          "id": "ajuda-v4",
          "label": "Sem resultados",
          "state": "Estado vazio com atalho para o suporte.",
          "viewOrder": 4,
          "image": "assets/screens/47-ajuda-v4.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Central de ajuda” → preencher Como podemos ajudar?",
          "params": null
        }
      ]
    },
    {
      "id": "contato",
      "sectionTitle": "Suporte",
      "screenTitle": "Fale Conosco",
      "documentOrder": 6,
      "screenOrder": 2,
      "route": "AffiliateContact",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 5,
      "capturedViews": 5,
      "views": [
        {
          "id": "contato-v1",
          "label": "Formulário",
          "state": "Categoria, assunto, descrição e anexo.",
          "viewOrder": 1,
          "image": "assets/screens/48-contato-v1.png",
          "fullImage": "assets/screens/48-contato-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco”",
          "params": null
        },
        {
          "id": "contato-v2",
          "label": "Validação",
          "state": "Erros nos campos obrigatórios.",
          "viewOrder": 2,
          "image": "assets/screens/49-contato-v2.png",
          "fullImage": "assets/screens/49-contato-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → tocar em “Enviar solicitação”",
          "params": null
        },
        {
          "id": "contato-v3",
          "label": "Formulário preenchido",
          "state": "Categoria escolhida e contadores de caracteres.",
          "viewOrder": 3,
          "image": "assets/screens/50-contato-v3.png",
          "fullImage": "assets/screens/50-contato-v3-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → tocar em “Comissão” → preencher Resuma sua solicitação → preencher Explique com detalhes o que aconteceu",
          "params": null
        },
        {
          "id": "contato-v4",
          "label": "Anexar arquivo",
          "state": "Opções de foto, galeria e documento.",
          "viewOrder": 4,
          "image": "assets/screens/51-contato-v4.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → tocar em “Adicionar anexo”",
          "params": null
        },
        {
          "id": "contato-v5",
          "label": "Minhas solicitações",
          "state": "Histórico com protocolo, status e resposta.",
          "viewOrder": 5,
          "image": "assets/screens/52-contato-v5.png",
          "fullImage": null,
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → rolar até “Minhas solicitações”",
          "params": null
        }
      ]
    },
    {
      "id": "solicitacao",
      "sectionTitle": "Suporte",
      "screenTitle": "Detalhe da Solicitação",
      "documentOrder": 6,
      "screenOrder": 3,
      "route": "AffiliateSupportRequestDetail",
      "implementationStatus": "implemented",
      "captureMethod": "playwright",
      "viewCount": 3,
      "capturedViews": 3,
      "views": [
        {
          "id": "solicitacao-v1",
          "label": "Respondida",
          "state": "Mensagem enviada e resposta da equipe.",
          "viewOrder": 1,
          "image": "assets/screens/53-solicitacao-v1.png",
          "fullImage": "assets/screens/53-solicitacao-v1-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → tocar em “SUP-2026-0117”",
          "params": null
        },
        {
          "id": "solicitacao-v2",
          "label": "Aberta",
          "state": "Solicitação ainda na fila de atendimento.",
          "viewOrder": 2,
          "image": "assets/screens/54-solicitacao-v2.png",
          "fullImage": "assets/screens/54-solicitacao-v2-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → tocar em “SUP-2026-0108”",
          "params": null
        },
        {
          "id": "solicitacao-v3",
          "label": "Envio concluído",
          "state": "Confirmação com o protocolo gerado.",
          "viewOrder": 3,
          "image": "assets/screens/55-solicitacao-v3.png",
          "fullImage": "assets/screens/55-solicitacao-v3-full.png",
          "captured": true,
          "captureError": null,
          "reachedBy": "aba Conta → tocar em “Fale conosco” → tocar em “Comissão” → preencher Resuma sua solicitação → preencher Explique com detalhes o que aconteceu → tocar em “Enviar solicitação”",
          "params": null
        }
      ]
    }
  ],
  "coverage": {
    "screens": 20,
    "planned": 55,
    "implemented": 20,
    "captured": 55,
    "pending": 0,
    "captureErrors": 0,
    "generatedAt": "2026-07-15T19:23:20.558Z",
    "updatedLabel": "julho de 2026"
  }
};
