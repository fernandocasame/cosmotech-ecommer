# ==========================================
# CosmoTech Landing Page — Dockerfile
# Sirve los archivos estáticos con nginx
# ==========================================
FROM nginx:alpine

# Copiar todos los archivos del proyecto
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# nginx arranca automáticamente con la imagen base
