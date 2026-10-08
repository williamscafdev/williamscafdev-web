# williamscafdev-web

The personal site at **https://williamscafdev.com** — Williams M. Torres, software developer in Lima.
Static HTML and CSS, no JavaScript, served by nginx, deployed on Coolify.

```
site/            everything that is served (index.html, styles.css, main.js, img/, app-ads.txt …)
nginx.conf       www -> apex redirect, security headers, caching, /healthz
Dockerfile       nginx:1.27-alpine + site/
```

## Editing

All content is in `site/index.html`. Push to `main` and redeploy the `williamscafdev-web`
resource in Coolify (project `williamscafdev`).

## Things that must stay

- **`site/app-ads.txt`** — AdMob crawls `/app-ads.txt` on the developer website listed in
  Google Play (this domain). It must match the publisher line CataEduca serves at
  https://cataeduca.williamscafdev.com/app-ads.txt, or the app's ads show as unverified.
- **The CataEduca link** — `https://cataeduca.williamscafdev.com/`.

## Run locally

```bash
python3 -m http.server -d site 8080        # content only
docker build -t williamscafdev-web . && docker run --rm -p 8080:80 williamscafdev-web   # with nginx
```
