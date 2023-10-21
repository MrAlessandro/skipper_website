FROM nginx
LABEL authors="MrAlessandro"

COPY .output/public /usr/share/nginx/html
