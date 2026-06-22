# Portfólio — Carlos Azevedo

Site de portfólio estático (HTML + CSS + JavaScript puro, **sem build step**), bilíngue **PT/EN**, tema **dark tech**, posicionamento **Backend / Python Developer**.

Pronto para publicar no GitHub Pages, Vercel, Netlify ou qualquer hospedagem estática.

## Estrutura

```
index.html   → estrutura da página + textos da interface (data-i18n)
styles.css   → tema escuro responsivo
app.js       → traduções, dados das skills/projetos, modal e troca de idioma
```

Todo o conteúdo dos **7 projetos** (em PT e EN) está em `app.js`, no array `PROJECTS`.
Para editar um projeto, mude os campos `pt`/`en` correspondentes.

## Visualizar localmente

Abra `index.html` no navegador (duplo clique). Ou, com servidor local:

```powershell
cd C:\portfolio
python -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

```powershell
cd C:\portfolio
git init
git add .
git commit -m "Portfólio profissional"
git branch -M main
git remote add origin https://github.com/Patoxzor/portfolio.git
git push -u origin main
```

Depois, no GitHub: **Settings → Pages → Source: `main` / root**.
O site fica em `https://patoxzor.github.io/portfolio/`.

> Dica: se o repositório se chamar `Patoxzor.github.io`, o site fica na raiz do domínio
> (`https://patoxzor.github.io/`), ideal para colar em currículos e no LinkedIn.

### Alternativa: Vercel (1 clique)

Importe o repositório em [vercel.com](https://vercel.com) → framework **Other** → deploy.
Você ganha um domínio `*.vercel.app` automático e HTTPS.

## Dados já preenchidos

- **Nome:** Carlos Alberto C. de Azevedo Filho
- **Email:** calos.caf@gmail.com
- **GitHub:** https://github.com/Patoxzor
- **LinkedIn:** https://www.linkedin.com/in/azevedoocarlos/
- **WhatsApp:** +55 82 98826-1755
- **Local:** Maceió/AL — Brasil

## Como editar

- **Textos da interface (menu, hero, sobre):** atributos `data-i18n` no `index.html`, com os valores em `app.js` → objeto `I18N` (`pt` e `en`).
- **Skills:** array `SKILLS` no `app.js`.
- **Projetos:** array `PROJECTS` no `app.js` — cada projeto tem `problem`, `solution`, `arch`, `decisions`, `challenges`, todos bilíngues.
- **Cores do tema:** variáveis no topo do `styles.css` (`:root`).
