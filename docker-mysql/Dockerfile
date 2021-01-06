FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=test

COPY my.cnf /etc/mysql/conf.d/my.cnf
# /docker-entrypoint-initdb.d 配下にsqlファイルを置くと実行してくれる
COPY initialize.sql /docker-entrypoint-initdb.d/initialize.sql

EXPOSE 3306