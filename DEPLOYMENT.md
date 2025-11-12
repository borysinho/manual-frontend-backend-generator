# 🚀 Guía de Despliegue - Manual Web

## 📋 Tabla de Contenido

1. [Netlify (Recomendado)](#netlify)
2. [Vercel](#vercel)
3. [GitHub Pages](#github-pages)
4. [Servidor Propio](#servidor-propio)

---

## 🌐 Netlify (Recomendado)

### Opción 1: Despliegue Drag & Drop

```bash
# 1. Construir el proyecto
cd /home/bquiroga/Documents/dev/sw1/examen/presentacion-2/manual
npm run build

# 2. Ir a https://app.netlify.com/drop
# 3. Arrastrar la carpeta dist/ al área de drop
# 4. ¡Listo! Tu manual estará en línea
```

### Opción 2: Despliegue con Git (CI/CD Automático)

```bash
# 1. Crear archivo netlify.toml en la raíz del manual
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF

# 2. Subir a GitHub
git add .
git commit -m "Add Netlify config"
git push origin main

# 3. En Netlify:
#    - New site from Git
#    - Conectar repositorio
#    - Branch: main
#    - Build command: npm run build
#    - Publish directory: dist
#    - Deploy site
```

### Configuración de Dominio Personalizado

1. En Netlify Dashboard → Domain settings
2. Add custom domain
3. Configurar DNS según instrucciones
4. SSL/HTTPS automático

**URL final**: `https://tu-manual-uml.netlify.app`

---

## ⚡ Vercel

### Despliegue con Vercel CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Construir
cd /home/bquiroga/Documents/dev/sw1/examen/presentacion-2/manual
npm run build

# 4. Desplegar
vercel --prod

# Seguir las instrucciones en pantalla
```

### Despliegue con Git

```bash
# 1. Crear vercel.json
cat > vercel.json << 'EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
EOF

# 2. Push a GitHub
git add .
git commit -m "Add Vercel config"
git push origin main

# 3. En vercel.com:
#    - Import Project
#    - Conectar GitHub
#    - Seleccionar repositorio
#    - Deploy
```

**URL final**: `https://manual-uml.vercel.app`

---

## 📄 GitHub Pages

```bash
# 1. Construir
cd /home/bquiroga/Documents/dev/sw1/examen/presentacion-2/manual
npm run build

# 2. Instalar gh-pages
npm install --save-dev gh-pages

# 3. Agregar scripts en package.json
# Editar package.json y agregar:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 4. Desplegar
npm run deploy

# 5. Configurar en GitHub:
#    Repositorio → Settings → Pages
#    Source: gh-pages branch
#    Save
```

**URL final**: `https://borysinho.github.io/server-frontend-backend-generator/`

### Configurar Base URL para GitHub Pages

Si tu repositorio está en una subcarpeta, edita `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/server-frontend-backend-generator/'  // Nombre del repo
})
```

---

## 🖥️ Servidor Propio (VPS/Dedicado)

### Nginx en Ubuntu/Debian

```bash
# 1. Construir localmente
npm run build

# 2. Copiar archivos al servidor
scp -r dist/* usuario@servidor:/var/www/manual-uml/

# 3. Configurar Nginx
sudo nano /etc/nginx/sites-available/manual-uml

# Contenido:
server {
    listen 80;
    server_name manual-uml.tudominio.com;
    root /var/www/manual-uml;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}

# 4. Habilitar sitio
sudo ln -s /etc/nginx/sites-available/manual-uml /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 5. SSL con Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d manual-uml.tudominio.com
```

### Apache en Ubuntu/Debian

```bash
# 1. Copiar archivos
scp -r dist/* usuario@servidor:/var/www/manual-uml/

# 2. Configurar Apache
sudo nano /etc/apache2/sites-available/manual-uml.conf

# Contenido:
<VirtualHost *:80>
    ServerName manual-uml.tudominio.com
    DocumentRoot /var/www/manual-uml

    <Directory /var/www/manual-uml>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        FallbackResource /index.html
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/manual-error.log
    CustomLog ${APACHE_LOG_DIR}/manual-access.log combined
</VirtualHost>

# 3. Habilitar sitio
sudo a2ensite manual-uml
sudo systemctl reload apache2

# 4. SSL
sudo certbot --apache -d manual-uml.tudominio.com
```

---

## 🐳 Docker (Opcional)

```bash
# 1. Crear Dockerfile
cat > Dockerfile << 'EOF'
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

# 2. Crear nginx.conf
cat > nginx.conf << 'EOF'
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
EOF

# 3. Construir imagen
docker build -t manual-uml .

# 4. Ejecutar contenedor
docker run -d -p 80:80 --name manual-uml manual-uml

# 5. Acceder
http://localhost
```

---

## ✅ Checklist Pre-Despliegue

Antes de desplegar, asegúrate de:

- [ ] Ejecutar `npm run build` sin errores
- [ ] Probar con `npm run preview` localmente
- [ ] Verificar que todas las secciones carguen correctamente
- [ ] Probar búsqueda y navegación
- [ ] Revisar responsive en diferentes tamaños
- [ ] Actualizar enlaces en el footer si es necesario
- [ ] Verificar que no haya console.errors
- [ ] Optimizar imágenes si las hay
- [ ] Configurar dominio personalizado (opcional)
- [ ] Configurar SSL/HTTPS

---

## 🎯 Optimizaciones Post-Despliegue

### 1. Caché y Compresión

Ya está configurado en Vite, pero verifica:
- Gzip/Brotli habilitado en servidor
- Headers de caché apropiados
- Minificación de assets

### 2. Analytics (Opcional)

Agregar Google Analytics en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. SEO

Editar `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Manual de Usuario del Sistema Generador de Diagramas UML con generación automática de código Spring Boot y Flutter" />
  <meta name="keywords" content="UML, diagrama, generador, Spring Boot, Flutter, código automático" />
  <meta name="author" content="Tu Nombre" />
  <title>Manual de Usuario - Sistema UML</title>
</head>
```

---

## 🔧 Troubleshooting

### Error: "Cannot GET /"
- Solución: Configurar fallback a index.html en servidor

### Rutas 404 al recargar
- Solución: Configurar SPA redirect en hosting

### Assets no cargan
- Verificar `base` en `vite.config.ts`
- Revisar rutas absolutas vs relativas

### Lento en producción
- Verificar compresión gzip/brotli
- Optimizar imágenes
- Habilitar caché del navegador

---

## 📊 Métricas de Rendimiento Esperadas

- **Lighthouse Score**: 90+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Tamaño total**: ~1-2 MB
- **Requests**: < 20

---

**¡Listo para desplegar! 🚀**

Elige la opción que mejor se adapte a tus necesidades y sigue los pasos.
