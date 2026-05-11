# Techo Labs — Next.js Website

Digital agency website for Techo Labs (Pvt) Ltd — the web development, digital marketing, and market research arm of Techo Traders.

**Primary Color:** `#0A4FD4`
**Framework:** Next.js 14 (App Router)
**Theme:** Light / Editorial / Digital Agency

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

Build for production:
```bash
npm run build
npm start
```

---

## Project Structure

```
techo-labs/
├── app/
│   ├── globals.css        # Complete unified design system
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── not-found.js       # 404 page
│   ├── about/page.js      # About page
│   ├── contact/page.js    # Contact page with form
│   ├── portfolio/page.js  # Full portfolio (24 projects)
│   └── services/page.js   # Services detail page
├── components/
│   ├── Nav.js             # Sticky nav with mobile drawer
│   ├── Footer.js          # Footer with links
│   ├── PortfolioGrid.js   # Filterable portfolio grid (client)
│   └── useReveal.js       # Scroll reveal + counter hooks
├── data/
│   └── index.js           # All 24 portfolio items + services data
├── public/                # Static assets
├── next.config.js
└── package.json
```

---

## Pages

| Page        | Route        | Description                                    |
|-------------|--------------|------------------------------------------------|
| Home        | `/`          | Hero, services, portfolio preview, about, CTA  |
| Services    | `/services`  | Web Dev, Digital Marketing, Market Research    |
| Portfolio   | `/portfolio` | All 24 projects with category filtering        |
| About       | `/about`     | Story, team, timeline, values                  |
| Contact     | `/contact`   | Form + info + FAQ                              |
| 404         | `*`          | Branded not-found page                         |

---

## Portfolio Projects (24)

All 24 client websites are stored in `data/index.js` with:
- Title, URL, category, tags, description, location
- Color-coded by category in the grid
- Filterable by category on the portfolio page

---

## Adding Email to Contact Form

Install nodemailer or use a service like Resend / EmailJS:

```bash
npm install resend
```

Create `app/api/contact/route.js`:
```js
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const body = await req.json()
  await resend.emails.send({
    from: 'Techo Labs <noreply@techotraders.com.lk>',
    to: 'labs@techotraders.com.lk',
    subject: `New inquiry from ${body.name}`,
    text: JSON.stringify(body, null, 2),
  })
  return Response.json({ success: true })
}
```

Then update `handleSubmit` in `app/contact/page.js` to call `/api/contact`.

---

## Customisation

- **Update contact details:** `components/Footer.js` + `app/contact/page.js`
- **Add portfolio project:** `data/index.js` → add to `portfolioItems` array
- **Change primary color:** `app/globals.css` → `--blue` variable
- **Add a page:** Create `app/[pagename]/page.js`

---

## Design System

| Token           | Value                      |
|-----------------|----------------------------|
| Primary Blue    | `#0A4FD4`                  |
| Dark Blue       | `#073AA0`                  |
| Light Blue      | `#3B76F0`                  |
| Background      | `#FFFFFF`                  |
| Off-White       | `#F7F8FC`                  |
| Surface         | `#F0F3FA`                  |
| Ink (headings)  | `#0A0F1E`                  |
| Muted text      | `#7A84A0`                  |
| Display Font    | Syne (800)                 |
| Body Font       | Manrope (400/500/600)      |

---

## Part of the Techo Ecosystem

- **Techo Traders** → `techotraders.com.lk`
- **Techo Labs** → This site
- **Techo Xpress** → `express.techotraders.com.lk`
- **Techo Connect** → `connect.techotraders.com.lk`
