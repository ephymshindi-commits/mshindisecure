# MshindiSecure Portfolio — Setup Guide

## 🚀 Quick Start

1. Drop your photo at `/assets/profile.jpg` (replaces the placeholder initials)
2. Open `index.html` in a browser — everything works from the file system
3. Deploy the folder to any static host: Netlify, Vercel, GitHub Pages, Cloudflare Pages

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Home page
├── assets/
│   └── profile.jpg         ← YOUR PHOTO GOES HERE
├── css/
│   ├── style.css           ← Global design system (tokens, components)
│   └── home.css            ← Home page-specific styles
├── js/
│   ├── layout.js           ← Navbar + footer injected on every page
│   └── main.js             ← Loader, scroll animations, typed text, form
└── pages/
    ├── about.html
    ├── projects.html
    ├── cybersecurity.html
    ├── skills.html
    └── contact.html
```

---

## 🎨 Brand System

### Color Palette

| Token         | Hex       | Usage                          |
|---------------|-----------|-------------------------------|
| Obsidian      | `#080c12` | Page background                |
| Surface 1     | `#0d1117` | Section alternates             |
| Surface 2     | `#111720` | Cards, panels                  |
| Surface 3     | `#161e2a` | Inputs, deep fills             |
| Border        | `#1e2d3d` | Default borders                |
| Border Bright | `#2a3f55` | Hover borders                  |
| **Cyan**      | `#00d4ff` | Primary accent, CTAs           |
| Green         | `#00ff8c` | Security, success, live status |
| Orange        | `#ff6b35` | Warnings, flagship badges      |
| Ghost         | `#f0f4f8` | Primary text, headings         |
| Muted         | `#6b7d8f` | Secondary text                 |
| Muted Bright  | `#8fa3b8` | Body copy                      |

### Font Pairing

- **Display / Headings:** Space Grotesk (700, 600)
- **Body / UI:** Inter (400, 500, 600)
- **Code / Terminals:** JetBrains Mono (400, 500)

All loaded from Google Fonts — no install required.

---

## ✍️ 3 Headline Variations

Use any of these as your hero headline or LinkedIn summary opener:

**Option A — The Defender**
> "I build systems that defend as hard as they ship."

**Option B — The Dual Threat**
> "Full Stack. Fully Secured. One engineer doing both."

**Option C — The Attacker's Mindset**
> "I know how attackers think. I build products they can't break."

---

## 📞 Contact Details (pre-configured)

- **Email:** mshindisecure@gmail.com
- **Phone:** +254114419282
- **WhatsApp Book Link:** https://wa.me/254114419282

The contact form automatically pre-fills a WhatsApp message with the sender's name, email, subject, and message — no backend needed.

---

## ⚙️ Customization Tips

### Add your real photo
Replace `/assets/profile.jpg` with your actual photo.
The `<img>` tag has an `onerror` fallback showing "EM" initials if no image is found.

### Change the typed text on the homepage
Edit the array in `index.html` at the bottom `<script>` block:
```js
typeText(document.getElementById('typed-role'), [
  'building secure systems',
  'hunting vulnerabilities',
  // ... add your own
]);
```

### Add social links (GitHub, LinkedIn, etc.)
Find the footer in `js/layout.js` and add links to the `.footer-links` section.

### Deploy to Netlify (free)
```bash
# Drag and drop the /portfolio folder at netlify.com/drop
# Or use the CLI:
npx netlify-cli deploy --dir=portfolio --prod
```

### Deploy to GitHub Pages
1. Push the portfolio folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch / root
3. Live in ~2 minutes at `username.github.io/repo-name`

---

## 🔒 Personal Branding Direction

**Voice:** Confident, precise, zero fluff. You are a practitioner, not a student.

**Positioning:** You occupy a rare intersection — most developers aren't security engineers and most security engineers aren't strong developers. Lead with this. It's your strongest differentiator.

**LinkedIn Headline Suggestion:**
> Full Stack Developer & Cybersecurity Specialist | MshindiSecure | Nairobi, Kenya

**Twitter/X Bio:**
> Building systems that ship and defend. Full stack + pentesting + AI. Founder @MshindiSecure. Nairobi 🇰🇪

---

Built with purpose, secured by design. — MshindiSecure
