# Apologia — apologia.fi

A static site: home page, blog, and embedded Spotify/SoundCloud players. Pure HTML/CSS/JS, no build step, ready for GitHub Pages. All visitor-facing content is in Finnish.

## File structure

```
index.html              → home page (hero, listen, blog preview, about, docket, contact)
blog.html                → full list of blog entries
blog/
  opening-statement.html
  on-the-first-session.html
  what-comes-next.html
css/style.css             → all styles
js/script.js               → mobile nav + scroll reveal + mailing-list form
assets/
  logo.svg               → the mark, used as favicon and in the nav/footer
  favicon-32.png
  favicon-192.png
```

## Live links already wired in

- Spotify show: `https://open.spotify.com/show/6h0ySmW9rlTjm32GhbJBQ9`
- SoundCloud profile: `https://soundcloud.com/user-605761881`

Both are embedded on the home page under "Kuuntele" (Listen) and linked from every footer.

## Deploying to GitHub Pages (free)

1. Create a new **public** repository on GitHub (e.g. `apologia-site`).
2. Upload every file in this folder to the repo, keeping the same structure.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will give you a URL like `https://yourname.github.io/apologia-site/`.
6. To use **apologia.fi**:
   - In **Settings → Pages**, add `apologia.fi` under **Custom domain**.
   - At your domain registrar, add a `CNAME` record pointing `apologia.fi` (or `www`) to `yourname.github.io`, or four `A` records pointing the apex domain to GitHub's IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) — check GitHub's Pages docs for the current values.
   - Wait for DNS to propagate, then tick **Enforce HTTPS** once it's available.

## Still worth swapping in before launch

- `hello@apologia.fi` — appears in the About section, footer, and the mailing-list form fallback. Replace with your real contact address if different.

## Adding a new blog post

1. Copy `blog/opening-statement.html` to a new file, e.g. `blog/uusi-merkinta.html`.
2. Update the `<title>`, the eyebrow label, `<h1>`, date, and body paragraphs (in Finnish).
3. Add a new `<li>` entry to `blog.html` and, optionally, swap it into the three-card preview on `index.html`.

## Editing the palette or type

All design tokens (colors, fonts, spacing) live at the top of `css/style.css` under `:root`. Change a value there and it updates everywhere.

## Notes

- The mailing-list form has no backend (GitHub Pages only serves static files) — it currently opens a pre-filled email as a placeholder. Swap in a real service (Mailchimp, Buttondown, etc.) when ready by replacing the form's `action`/JS handler.
- Fonts (Fraunces, Newsreader, IBM Plex Mono) load from Google Fonts via the `@import` at the top of `style.css`.
