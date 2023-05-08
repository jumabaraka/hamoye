
FROM nginx:latest AS Frontend
COPY apps/flight-angular/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/apps/flight-angular /usr/share/nginx/html

EXPOSE 8080
