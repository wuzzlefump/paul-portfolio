FROM nginx:1.19

COPY ./* /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets/
