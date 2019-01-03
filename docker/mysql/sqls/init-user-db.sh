#!/bin/bash
set -e

mysql -uroot -p"$MYSQL_ROOT_PASSWORD" shelf < /docker-entrypoint-initdb.d/books.sql