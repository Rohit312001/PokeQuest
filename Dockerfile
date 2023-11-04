FROM nginx

WORKDIR /usr/share/nginx/html/

COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css
COPY images/ /usr/share/nginx/html/images
COPY script.js /usr/share/nginx/html/
COPY README.md /usr/share/nginx/html/

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
