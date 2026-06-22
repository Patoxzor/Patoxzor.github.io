/* =========================================================
   Portfólio — Carlos Azevedo
   Conteúdo bilíngue (PT/EN), render de skills/projetos e modal.
   ========================================================= */

/* ---------- 1. Textos da interface (chrome) ---------- */
const I18N = {
  pt: {
    "nav.about": "Sobre", "nav.skills": "Skills", "nav.projects": "Projetos", "nav.contact": "Contato",
    "hero.eyebrow": "Backend / Python Developer",
    "hero.tagline": "Desafiador, sempre em busca de transformar problemas em soluções por meio da programação.",
    "hero.loc": "Maceió/AL — Brasil", "hero.exp": "2 anos de experiência", "hero.remote": "Aberto a remoto",
    "hero.contact": "Entrar em contato",
    "stat.projects": "projetos reais", "stat.langs": "linguagens", "stat.db": "bancos de dados", "stat.platforms": "plataformas",
    "about.title": "Sobre mim",
    "about.p1": "Sou desenvolvedor com foco em <strong>backend e Python</strong>, com experiência prática construindo sistemas que vão do desktop à nuvem: APIs REST, automações, integrações de pagamento e aplicações full-stack que rodam em produção e atendem usuários reais.",
    "about.p2": "Meus projetos nasceram de problemas concretos — gerenciar contas com 2FA, importar folhas de pagamento para SQL Server, entregar contracheques a servidores públicos, verificar pagamentos automaticamente. Em cada um cuidei do ciclo completo: modelagem de dados, segurança, testes, build e deploy.",
    "about.p3": "Gosto de desafios e de resolver problemas de verdade em forma de código — o que me levou a aprender múltiplas stacks, quatro bancos de dados diferentes e a montar do zero pipelines de CI/CD e sistemas de auto-atualização.",
    "about.facts": "Resumo rápido",
    "about.f1k": "Foco", "about.f1v": "Backend & Python",
    "about.f2k": "Local", "about.f2v": "Maceió/AL — Brasil",
    "about.f3k": "Idiomas", "about.f3v": "Português · Inglês técnico",
    "about.f4k": "Modelo", "about.f4v": "Remoto / Híbrido",
    "skills.title": "Habilidades técnicas",
    "projects.title": "Projetos",
    "projects.sub": "Clique em um projeto para ver o problema, a arquitetura e as decisões técnicas. Código-fonte privado — descrições detalhadas no lugar.",
    "contact.title": "Vamos conversar",
    "contact.lead": "Aberto a oportunidades de backend, Python e full-stack — no Brasil ou remotas internacionais.",
    "footer.built": "Construído com HTML, CSS e JavaScript",
    "modal.problem": "Problema", "modal.solution": "Solução", "modal.arch": "Arquitetura",
    "modal.decisions": "Decisões técnicas", "modal.challenges": "Desafios", "modal.more": "Ver detalhes"
  },
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",
    "hero.eyebrow": "Backend / Python Developer",
    "hero.tagline": "A problem-solver at heart — I turn real-world problems into software.",
    "hero.loc": "Maceió/AL — Brazil", "hero.exp": "2 years of experience", "hero.remote": "Open to remote",
    "hero.contact": "Get in touch",
    "stat.projects": "real projects", "stat.langs": "languages", "stat.db": "databases", "stat.platforms": "platforms",
    "about.title": "About me",
    "about.p1": "I'm a developer focused on <strong>backend and Python</strong>, with hands-on experience building systems that span desktop to cloud: REST APIs, automation, payment integrations and full-stack apps running in production for real users.",
    "about.p2": "My projects come from concrete problems — managing accounts with 2FA, importing payrolls into SQL Server, delivering payslips to public servants, verifying payments automatically. In each one I owned the full cycle: data modeling, security, testing, build and deploy.",
    "about.p3": "I enjoy challenges and solving real problems through code — which led me to learn multiple stacks, four different databases, and to build CI/CD pipelines and auto-update systems from scratch.",
    "about.facts": "Quick facts",
    "about.f1k": "Focus", "about.f1v": "Backend & Python",
    "about.f2k": "Location", "about.f2v": "Maceió/AL — Brazil",
    "about.f3k": "Languages", "about.f3v": "Portuguese · Technical English",
    "about.f4k": "Model", "about.f4v": "Remote / Hybrid",
    "skills.title": "Technical skills",
    "projects.title": "Projects",
    "projects.sub": "Click a project to see the problem, architecture and technical decisions. Source code is private — detailed write-ups instead.",
    "contact.title": "Let's talk",
    "contact.lead": "Open to backend, Python and full-stack roles — in Brazil or international remote.",
    "footer.built": "Built with HTML, CSS and JavaScript",
    "modal.problem": "Problem", "modal.solution": "Solution", "modal.arch": "Architecture",
    "modal.decisions": "Technical decisions", "modal.challenges": "Challenges", "modal.more": "View details"
  }
};

/* ---------- 2. Skills ---------- */
const SKILLS = [
  { t: { pt: "Linguagens", en: "Languages" }, items: ["Python", "PHP", "Dart", "JavaScript", "SQL"] },
  { t: { pt: "Backend & APIs", en: "Backend & APIs" }, items: ["Flask", "Laravel 13", "Express.js", "REST APIs", "SQLAlchemy", "Sanctum"] },
  { t: { pt: "Frontend & UI", en: "Frontend & UI" }, items: ["PyQt5", "Tkinter", "Flutter", "Blade", "Livewire", "Tailwind"] },
  { t: { pt: "Bancos de dados", en: "Databases" }, items: ["MySQL", "PostgreSQL", "SQL Server", "SQLite"] },
  { t: { pt: "DevOps & Tooling", en: "DevOps & Tooling" }, items: ["Git", "GitHub Actions", "CI/CD", "Nginx / VPS", "PyInstaller", "Puppeteer"] },
  { t: { pt: "Áreas & conceitos", en: "Domains & concepts" }, items: [{ pt: "Pagamentos (Stripe/PIX)", en: "Payments (Stripe/PIX)" }, "2FA / TOTP", { pt: "Criptografia", en: "Cryptography" }, "Multi-tenancy", "Web scraping", "ETL", { pt: "Automação", en: "Automation" }] }
];

/* ---------- 3. Projetos ---------- */
const PROJECTS = [
  {
    id: "portal_mix",
    feat: true,
    tag: { pt: "Full-stack · SaaS", en: "Full-stack · SaaS" }, tagAlt: false,
    name: { pt: "Portal de Contracheque & DIRF (multi-tenant)", en: "Payslip & Tax-Report Portal (multi-tenant)" },
    desc: {
      pt: "Plataforma SaaS multi-tenant que entrega contracheques e informes de rendimento (DIRF) a servidores públicos de várias prefeituras, com um agente ETL próprio que extrai os dados na origem.",
      en: "Multi-tenant SaaS platform delivering payslips and annual income reports (DIRF) to public servants across many municipalities, with a custom ETL agent that extracts data at the source."
    },
    tech: ["Laravel 13", "Livewire", "Tailwind", "Python (ETL)", "PostgreSQL", "Sanctum", "GitHub Actions", "Nginx"],
    problem: {
      pt: "Cada prefeitura tinha sistemas isolados e processos manuais para entregar contracheque e informe de rendimento. Era preciso uma plataforma única, segura e isolada por município, sem expor o banco da folha à internet.",
      en: "Each municipality had isolated systems and manual processes to deliver payslips and income reports. A single, secure platform was needed — isolated per municipality and without exposing the payroll database to the internet."
    },
    solution: {
      pt: "Construí um portal web (admin / RH / servidor) onde o servidor público acessa e imprime seus documentos. Um agente ETL roda na máquina do município, lê as fontes locais e envia os dados para a API do portal por HTTPS com token por município.",
      en: "I built a web portal (admin / HR / employee) where each public servant views and prints their documents. An ETL agent runs on the municipality's machine, reads the local sources and pushes data to the portal API over HTTPS with a per-municipality token."
    },
    arch: {
      pt: "SQL Server (folha) + PostgreSQL local (informe) → Agente ETL em Python → API Laravel (Sanctum, Bearer por município) → PostgreSQL multi-tenant na nuvem → Portal Laravel (render de PDF via DomPDF). Deploy em VPS Linux + Nginx.",
      en: "SQL Server (payroll) + local PostgreSQL (reports) → Python ETL agent → Laravel API (Sanctum, per-municipality Bearer) → multi-tenant PostgreSQL in the cloud → Laravel portal (PDF rendering via DomPDF). Deployed on a Linux VPS + Nginx."
    },
    decisions: {
      pt: [
        "<strong>Multi-tenancy</strong> por <em>global scopes</em> (TenantScope + ServidorCpfScope): toda query já nasce isolada por município e por CPF, evitando vazamento de dados entre prefeituras.",
        "<strong>RBAC</strong> com três papéis (admin, RH, servidor), cada um com visão e permissões próprias.",
        "<strong>Migrations compatíveis com dois bancos</strong> (SQLite nos testes, PostgreSQL em produção) para o CI rodar idêntico ao deploy.",
        "<strong>CI/CD</strong> no GitHub Actions com matriz SQLite + PostgreSQL e um job que ensaia o deploy num banco zerado antes de liberar a produção."
      ],
      en: [
        "<strong>Multi-tenancy</strong> via <em>global scopes</em> (TenantScope + ServidorCpfScope): every query is isolated by municipality and CPF by default, preventing cross-tenant leaks.",
        "<strong>RBAC</strong> with three roles (admin, HR, employee), each with its own views and permissions.",
        "<strong>Migrations compatible with two databases</strong> (SQLite in tests, PostgreSQL in production) so CI mirrors the real deploy.",
        "<strong>CI/CD</strong> on GitHub Actions with a SQLite + PostgreSQL matrix and a job that dry-runs the deploy on a clean database before shipping."
      ]
    },
    challenges: {
      pt: "Garantir o isolamento de dados sensíveis (nomes e CPFs reais), manter o schema portável entre SQLite e PostgreSQL, e fazer um deploy seguro em que toda mudança de banco passa obrigatoriamente por migration versionada.",
      en: "Ensuring isolation of sensitive data (real names and tax IDs), keeping the schema portable between SQLite and PostgreSQL, and a safe deploy where every DB change must go through a versioned migration."
    }
  },
  {
    id: "patxoken",
    feat: false,
    tag: { pt: "Full-stack · Python", en: "Full-stack · Python" }, tagAlt: false,
    name: { pt: "Patxoken — Gerenciador de Contas", en: "Patxoken — Account Manager" },
    desc: {
      pt: "Aplicação full-stack em Python: cliente desktop (PyQt5, distribuído como .exe) + API backend (Flask/MySQL). Gerencia contas e 2FA, com autologin, licenciamento, sincronização em nuvem e pagamentos integrados.",
      en: "Full-stack Python app: desktop client (PyQt5, shipped as .exe) + backend API (Flask/MySQL). Manages accounts and 2FA, with autologin, licensing, cloud sync and integrated payments."
    },
    tech: ["Python", "PyQt5", "Flask", "SQLAlchemy", "MySQL", "SQLite", "PyInstaller", "pytest"],
    problem: {
      pt: "Usuários que mantêm muitas contas com autenticação de dois fatores perdiam tempo com login manual e corriam risco ao guardar credenciais de forma insegura.",
      en: "Users who keep many accounts with two-factor authentication wasted time on manual login and risked storing credentials insecurely."
    },
    solution: {
      pt: "Um app desktop que guarda as contas localmente, gera os códigos TOTP (2FA), faz autologin automatizado e sincroniza licença, grupos e avisos com uma API na nuvem. Inclui modo trial, auto-atualização e exportação por QR para o app mobile.",
      en: "A desktop app that stores accounts locally, generates TOTP (2FA) codes, performs automated login and syncs license, groups and notices with a cloud API. Includes trial mode, auto-update and QR export to the mobile app."
    },
    arch: {
      pt: "App PyQt5 (.exe) ↔ API Flask/MySQL (produção em PythonAnywhere). Os dados sensíveis (contas) ficam num SQLite local no %APPDATA%; licença, grupos, avisos e pagamentos ficam no servidor. Autologin via automação de janela (pyautogui).",
      en: "PyQt5 app (.exe) ↔ Flask/MySQL API (production on PythonAnywhere). Sensitive data (accounts) lives in a local SQLite under %APPDATA%; license, groups, notices and payments live on the server. Autologin via window automation (pyautogui)."
    },
    decisions: {
      pt: [
        "<strong>Separação de dados</strong>: credenciais sensíveis só no dispositivo (SQLite), metadados na nuvem.",
        "<strong>Licenciamento por máquina</strong> com SystemID no registro do Windows + fingerprint de hardware validado na API.",
        "<strong>Pagamentos reais</strong> integrados (Stripe, Woovi/PIX e moeda in-game) para renovação automática da licença.",
        "<strong>Suíte anti-crash</strong> (compileall, pyflakes, smoke de import e pytest) rodada antes de cada build .exe, mais auditoria automática de chaves de tradução pt/en."
      ],
      en: [
        "<strong>Data separation</strong>: sensitive credentials stay on-device (SQLite), metadata in the cloud.",
        "<strong>Per-machine licensing</strong> with a Windows-registry SystemID + hardware fingerprint validated by the API.",
        "<strong>Real payments</strong> integrated (Stripe, Woovi/PIX and in-game currency) for automatic license renewal.",
        "<strong>Anti-crash suite</strong> (compileall, pyflakes, import smoke and pytest) run before every .exe build, plus automated pt/en translation-key auditing."
      ]
    },
    challenges: {
      pt: "Autologin confiável via automação de janela, evitar crashes em produção (onde não há telemetria) e manter a interface em dois idiomas sem KeyError em tempo de execução.",
      en: "Reliable autologin via window automation, preventing crashes in production (with no telemetry) and keeping the UI bilingual without runtime KeyErrors."
    }
  },
  {
    id: "zedrin",
    feat: false,
    tag: { pt: "Backend · Pagamentos", en: "Backend · Payments" }, tagAlt: true,
    name: { pt: "Zedrin Pagamentos (PIX)", en: "Zedrin Payments (PIX)" },
    desc: {
      pt: "Sistema web de pagamentos via PIX com cotação dinâmica, painel multiusuário e forte ênfase em segurança de aplicação.",
      en: "Web payment system via PIX with dynamic pricing, multi-user dashboard and a strong emphasis on application security."
    },
    tech: ["Python", "Flask", "SQLAlchemy", "MySQL", "Flask-WTF", "Werkzeug"],
    problem: {
      pt: "Era necessário receber e controlar pagamentos por PIX com segurança, com diferentes níveis de usuário e proteção contra ataques comuns de aplicações web.",
      en: "The goal was to receive and manage PIX payments securely, with different user levels and protection against common web-app attacks."
    },
    solution: {
      pt: "Uma aplicação Flask com cadastro/login, painéis por perfil de usuário, registro de pagamentos e cotação de preço dinâmica, endurecida com várias camadas de segurança.",
      en: "A Flask application with sign-up/login, role-based dashboards, payment records and dynamic pricing, hardened with multiple security layers."
    },
    arch: {
      pt: "Flask + SQLAlchemy + MySQL, com camada de segurança dedicada (headers, sessão, proxy) e serviço de e-mail para recuperação de senha. Configuração separada por ambiente (dev/produção).",
      en: "Flask + SQLAlchemy + MySQL, with a dedicated security layer (headers, session, proxy) and an e-mail service for password recovery. Environment-separated configuration (dev/production)."
    },
    decisions: {
      pt: [
        "<strong>Hardening de segurança</strong>: proteção CSRF, rate limiting de login, hash de senhas (Werkzeug), HSTS e cookies seguros.",
        "<strong>Reset de senha por e-mail</strong> com token aleatório e expiração curta.",
        "<strong>Sessão endurecida</strong>: regeneração de sessão no login e suporte a proxy reverso (ProxyFix) para HTTPS correto.",
        "<strong>RBAC</strong> com níveis de usuário e painéis distintos (usuário / master)."
      ],
      en: [
        "<strong>Security hardening</strong>: CSRF protection, login rate limiting, password hashing (Werkzeug), HSTS and secure cookies.",
        "<strong>Email password reset</strong> with a random, short-lived token.",
        "<strong>Hardened sessions</strong>: session regeneration on login and reverse-proxy support (ProxyFix) for correct HTTPS handling.",
        "<strong>RBAC</strong> with user levels and distinct dashboards (user / master)."
      ]
    },
    challenges: {
      pt: "Aplicar boas práticas de segurança de ponta a ponta em produção e implementar um fluxo de recuperação de senha que fosse seguro e à prova de reuso de token.",
      en: "Applying end-to-end security best practices in production and implementing a password-recovery flow that was secure and resistant to token reuse."
    }
  },
  {
    id: "tibiacoin",
    feat: false,
    tag: { pt: "Backend · Node.js", en: "Backend · Node.js" }, tagAlt: true,
    name: { pt: "Tibia Coin Monitoring (verificação de pagamento)", en: "Tibia Coin Monitoring (payment verification)" },
    desc: {
      pt: "API em Node.js que confirma automaticamente se um pagamento foi feito em moeda in-game, fazendo scraping do histórico oficial da conta com navegador real anti-bot.",
      en: "Node.js API that automatically confirms whether a payment was made in in-game currency by scraping the account's official history with an anti-bot real browser."
    },
    tech: ["Node.js", "Express", "SQLite", "Puppeteer", "proxy-chain"],
    problem: {
      pt: "Confirmar manualmente cada transferência de moeda in-game era lento e sujeito a fraude (reuso do mesmo pagamento para liberar serviços diferentes).",
      en: "Manually confirming each in-game currency transfer was slow and fraud-prone (reusing the same payment to unlock different services)."
    },
    solution: {
      pt: "Uma API que, ao receber o pedido, faz login na conta, lê o histórico de transferências e procura uma compatível dentro de uma janela de 1 hora. Ao encontrar, gera uma chave única para impedir o reuso daquele pagamento.",
      en: "An API that, upon a request, logs into the account, reads the transfer history and looks for a matching one within a 1-hour window. When found, it generates a unique key to prevent reuse of that payment."
    },
    arch: {
      pt: "Express expõe rotas protegidas por API key; cada verificação dispara um Puppeteer (real-browser + proxy-chain) que faz login e scraping; o resultado é persistido em SQLite com uma transferKey (hash SHA-256).",
      en: "Express exposes API-key-protected routes; each verification triggers Puppeteer (real-browser + proxy-chain) that logs in and scrapes; the result is persisted in SQLite with a transferKey (SHA-256 hash)."
    },
    decisions: {
      pt: [
        "<strong>Idempotência de pagamento</strong>: cada transferência vira um hash SHA-256 único, gravado no banco para nunca ser aceito duas vezes.",
        "<strong>Scraping anti-bot</strong> com puppeteer-real-browser + proxy-chain para passar pelas proteções do site oficial.",
        "<strong>Janela temporal</strong> de 1 hora entre o clique do usuário e a transferência, reduzindo falsos positivos.",
        "<strong>Autenticação por API key</strong> (header X-API-Key / Bearer) em todas as rotas sensíveis, com health check público."
      ],
      en: [
        "<strong>Payment idempotency</strong>: each transfer becomes a unique SHA-256 hash, stored in the DB so it can never be accepted twice.",
        "<strong>Anti-bot scraping</strong> with puppeteer-real-browser + proxy-chain to pass the official site's protections.",
        "<strong>Time window</strong> of 1 hour between the user's click and the transfer, reducing false positives.",
        "<strong>API-key authentication</strong> (X-API-Key / Bearer header) on all sensitive routes, with a public health check."
      ]
    },
    challenges: {
      pt: "Scraping confiável contra proteções anti-bot, lidar com o tempo de execução (1–3 minutos por verificação) e garantir que nenhum pagamento pudesse ser usado mais de uma vez.",
      en: "Reliable scraping against anti-bot protections, handling execution time (1–3 minutes per check) and guaranteeing no payment could be used more than once."
    }
  },
  {
    id: "importa_igps",
    feat: false,
    tag: { pt: "Desktop · ETL", en: "Desktop · ETL" }, tagAlt: false,
    name: { pt: "Importa IGPS — ETL de folha de pagamento", en: "Importa IGPS — Payroll ETL" },
    desc: {
      pt: "Aplicação desktop (PyQt5) que importa e atualiza dados de funcionários e eventos de folha em SQL Server a partir de planilhas Excel, criando os registros relacionados automaticamente.",
      en: "Desktop app (PyQt5) that imports and updates employee and payroll-event data into SQL Server from Excel spreadsheets, creating related records automatically."
    },
    tech: ["Python", "PyQt5", "pyodbc", "SQL Server", "pandas", "rapidfuzz", "PyInstaller"],
    problem: {
      pt: "Cadastrar funcionários e lançar eventos de folha manualmente no sistema era demorado e propenso a erro, especialmente ao casar funções/CBOs escritos de formas diferentes.",
      en: "Registering employees and posting payroll events manually was slow and error-prone, especially when matching job titles/codes written in different ways."
    },
    solution: {
      pt: "Uma ferramenta que lê a planilha, valida os campos, casa funções por similaridade (fuzzy match), cria os códigos de referência que faltam e insere cada funcionário com seus registros vinculados em várias tabelas.",
      en: "A tool that reads the spreadsheet, validates fields, matches job titles by similarity (fuzzy match), creates missing reference codes and inserts each employee with their linked records across several tables."
    },
    arch: {
      pt: "Acesso ao banco centralizado num módulo (pyodbc), interface PyQt5, e auto-atualização que checa o último release público no GitHub e troca o .exe na inicialização. Distribuída como executável único.",
      en: "DB access centralized in a single module (pyodbc), PyQt5 interface, and auto-update that checks the latest public GitHub release and swaps the .exe at startup. Shipped as a single executable."
    },
    decisions: {
      pt: [
        "<strong>Segurança em escrita</strong>: todo teste de INSERT/UPDATE roda dentro de transação com ROLLBACK, conferindo a contagem das tabelas antes e depois — nunca contra dados reais.",
        "<strong>Respeito ao schema real</strong>: inspeção de colunas IDENTITY, chaves estrangeiras e triggers antes de qualquer escrita.",
        "<strong>Idempotência</strong>: insere se não existe, atualiza só se o valor mudou.",
        "<strong>Fuzzy matching</strong> (rapidfuzz) para reconhecer funções já cadastradas escritas de forma diferente."
      ],
      en: [
        "<strong>Write safety</strong>: every INSERT/UPDATE test runs inside a transaction with ROLLBACK, checking table counts before and after — never against real data.",
        "<strong>Respect for the real schema</strong>: inspecting IDENTITY columns, foreign keys and triggers before any write.",
        "<strong>Idempotency</strong>: insert if missing, update only when the value changed.",
        "<strong>Fuzzy matching</strong> (rapidfuzz) to recognize already-registered titles written differently."
      ]
    },
    challenges: {
      pt: "Manter a integridade referencial ao inserir em múltiplas tabelas com triggers e colunas IDENTITY no SQL Server, e garantir que nenhum teste tocasse o banco de produção.",
      en: "Keeping referential integrity when inserting across multiple tables with triggers and IDENTITY columns in SQL Server, and ensuring no test ever touched the production database."
    }
  },
  {
    id: "appesocial",
    feat: false,
    tag: { pt: "Desktop · Dados fiscais", en: "Desktop · Tax data" }, tagAlt: false,
    name: { pt: "AppeSocial — Processador de eSocial", en: "AppeSocial — eSocial Processor" },
    desc: {
      pt: "Ferramenta desktop que processa arquivos do eSocial (INSS, IRRF, FGTS), cruza os dados com bancos corporativos e gera planilhas Excel formatadas para conferência.",
      en: "Desktop tool that processes eSocial files (INSS, IRRF, FGTS), cross-references the data with corporate databases and generates formatted Excel sheets for review."
    },
    tech: ["Python", "Tkinter", "openpyxl", "psycopg2", "pyodbc", "PostgreSQL", "SQL Server"],
    problem: {
      pt: "Conferir os valores dos eventos do eSocial (folha e impostos) contra o sistema da empresa era um trabalho manual, repetitivo e sujeito a divergências difíceis de achar.",
      en: "Reconciling eSocial event amounts (payroll and taxes) against the company system was a manual, repetitive task with hard-to-spot discrepancies."
    },
    solution: {
      pt: "Um app que lê os arquivos do eSocial, mapeia os campos de cada evento (S-5001/INSS, S-5002/IRRF, S-5003/FGTS), busca os valores correspondentes nos bancos e exporta um Excel formatado pronto para conferência.",
      en: "An app that reads eSocial files, maps each event's fields (S-5001/INSS, S-5002/IRRF, S-5003/FGTS), pulls matching values from the databases and exports a formatted, review-ready Excel file."
    },
    arch: {
      pt: "Interface Tkinter, parsing dos arquivos do eSocial via dicionários de mapeamento de campos, integração simultânea com PostgreSQL e SQL Server, e geração de Excel com openpyxl. Distribuída como .exe.",
      en: "Tkinter interface, eSocial parsing via field-mapping dictionaries, simultaneous integration with PostgreSQL and SQL Server, and Excel generation with openpyxl. Shipped as an .exe."
    },
    decisions: {
      pt: [
        "<strong>Dicionários de mapeamento</strong> por tipo de evento, isolando as regras do leiaute do eSocial do resto do código.",
        "<strong>Integração multi-banco</strong> (PostgreSQL + SQL Server) na mesma operação de conferência.",
        "<strong>Saída formatada</strong> em Excel, pensada para o fluxo de quem confere os valores.",
        "<strong>Empacotamento</strong> com recursos (ícone, imagem) embutidos para rodar como aplicativo único."
      ],
      en: [
        "<strong>Mapping dictionaries</strong> per event type, isolating eSocial layout rules from the rest of the code.",
        "<strong>Multi-database integration</strong> (PostgreSQL + SQL Server) within the same reconciliation operation.",
        "<strong>Formatted output</strong> in Excel, designed around the reviewer's workflow.",
        "<strong>Packaging</strong> with bundled resources (icon, image) to run as a single application."
      ]
    },
    challenges: {
      pt: "Interpretar corretamente o leiaute dos arquivos governamentais do eSocial e conciliar valores vindos de fontes diferentes para apontar divergências com confiança.",
      en: "Correctly interpreting the layout of government eSocial files and reconciling values from different sources to flag discrepancies confidently."
    }
  },
  {
    id: "patxoken_mobile",
    feat: false,
    tag: { pt: "Mobile · Flutter", en: "Mobile · Flutter" }, tagAlt: true,
    name: { pt: "Patxoken Mobile (Android/iOS)", en: "Patxoken Mobile (Android/iOS)" },
    desc: {
      pt: "App mobile multiplataforma, companheiro do Patxoken desktop: gera códigos 2FA, importa contas por QR code e protege tudo com biometria e armazenamento seguro.",
      en: "Cross-platform mobile companion to the Patxoken desktop app: generates 2FA codes, imports accounts via QR code and protects everything with biometrics and secure storage."
    },
    tech: ["Flutter", "Dart", "flutter_secure_storage", "local_auth", "mobile_scanner", "Fernet"],
    problem: {
      pt: "Os usuários queriam acessar seus códigos 2FA também no celular, de forma segura e sincronizada com o app desktop, sem digitar tudo de novo.",
      en: "Users wanted their 2FA codes on their phone too — securely and in sync with the desktop app — without re-typing everything."
    },
    solution: {
      pt: "Um app Flutter que importa as contas do desktop lendo um QR code, gera os códigos TOTP localmente, exige biometria para abrir e guarda os dados criptografados no dispositivo.",
      en: "A Flutter app that imports desktop accounts by scanning a QR code, generates TOTP codes locally, requires biometrics to open and stores data encrypted on the device."
    },
    arch: {
      pt: "Flutter (Android/iOS) com state via Provider, armazenamento seguro (flutter_secure_storage), biometria (local_auth), leitura de QR (mobile_scanner) e criptografia Fernet compatível com o lado Python para interoperar com o desktop.",
      en: "Flutter (Android/iOS) with Provider state, secure storage (flutter_secure_storage), biometrics (local_auth), QR scanning (mobile_scanner) and Fernet encryption compatible with the Python side to interoperate with the desktop."
    },
    decisions: {
      pt: [
        "<strong>Interoperabilidade de criptografia</strong>: Fernet usado de forma compatível entre o desktop (Python) e o mobile (Dart).",
        "<strong>Importação por QR</strong> para transferir contas do desktop sem digitação manual.",
        "<strong>Biometria + secure storage</strong> para proteger os tokens em repouso e no acesso.",
        "<strong>Merge de tokens</strong> para combinar contas existentes com as importadas sem duplicar."
      ],
      en: [
        "<strong>Encryption interoperability</strong>: Fernet used compatibly between desktop (Python) and mobile (Dart).",
        "<strong>QR import</strong> to transfer accounts from desktop without manual typing.",
        "<strong>Biometrics + secure storage</strong> to protect tokens at rest and on access.",
        "<strong>Token merge</strong> to combine existing accounts with imported ones without duplicates."
      ]
    },
    challenges: {
      pt: "Fazer a criptografia falar a mesma língua entre Python e Dart, e construir um fluxo de importação/sincronização confiável entre desktop e celular.",
      en: "Making encryption speak the same language across Python and Dart, and building a reliable import/sync flow between desktop and phone."
    }
  }
];

/* ---------- 4. Estado de idioma ---------- */
const LS_KEY = "portfolio-lang";
let lang = (function () {
  const saved = localStorage.getItem(LS_KEY);
  if (saved === "pt" || saved === "en") return saved;
  return (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
})();

/* ---------- 5. Render ---------- */
function applyChrome() {
  const dict = I18N[lang];
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v == null) return;
    if (v.includes("<")) el.innerHTML = v; else el.textContent = v;
  });
  const tog = document.getElementById("langToggle");
  tog.querySelector(".lang-cur").textContent = lang.toUpperCase();
  tog.querySelector(".lang-oth").textContent = lang === "pt" ? "EN" : "PT";
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(g => `
    <div class="skill-group">
      <h3>${g.t[lang]}</h3>
      <ul>${g.items.map(i => `<li>${typeof i === "string" ? i : i[lang]}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="pcard${p.feat ? " feat" : ""}" data-id="${p.id}" tabindex="0" role="button">
      <div class="pcard-top"><span class="ptag${p.tagAlt ? " alt" : ""}">${p.tag[lang]}</span></div>
      <h3>${p.name[lang]}</h3>
      <p class="pdesc">${p.desc[lang]}</p>
      <ul class="ptech">${p.tech.slice(0, 6).map(t => `<li>${t}</li>`).join("")}</ul>
      <span class="pmore">${I18N[lang]["modal.more"]} →</span>
    </article>`).join("");
  grid.querySelectorAll(".pcard").forEach(card => {
    card.addEventListener("click", () => openModal(card.getAttribute("data-id")));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.getAttribute("data-id")); } });
  });
}

/* ---------- 6. Modal ---------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const d = I18N[lang];
  modalBody.innerHTML = `
    <h3>${p.name[lang]}</h3>
    <p class="modal-tag">${p.tag[lang]}</p>
    <ul class="modal-stack">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
    <div class="mblock"><h4>${d["modal.problem"]}</h4><p>${p.problem[lang]}</p></div>
    <div class="mblock"><h4>${d["modal.solution"]}</h4><p>${p.solution[lang]}</p></div>
    <div class="mblock"><h4>${d["modal.arch"]}</h4><p>${p.arch[lang]}</p></div>
    <div class="mblock"><h4>${d["modal.decisions"]}</h4><ul>${p.decisions[lang].map(i => `<li>${i}</li>`).join("")}</ul></div>
    <div class="mblock"><h4>${d["modal.challenges"]}</h4><p>${p.challenges[lang]}</p></div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------- 7. Idioma + init ---------- */
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "pt" ? "en" : "pt";
  localStorage.setItem(LS_KEY, lang);
  applyChrome(); renderSkills(); renderProjects();
});

document.getElementById("year").textContent = new Date().getFullYear();
applyChrome();
renderSkills();
renderProjects();
