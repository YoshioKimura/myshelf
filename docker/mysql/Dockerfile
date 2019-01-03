# Dockerfile_MySQL
FROM mysql:5.7
EXPOSE 3306

# update packages, and set locale
RUN apt-get update && \
    apt-get install -y locales && \
    rm -rf /var/lib/apt/lists/* && \
    echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8

# Set MySQL character with my.cnf file
ADD ./my.cnf /etc/mysql/conf.d/my.cnf

CMD ["mysqld"]