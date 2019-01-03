# myshelf

本の一覧を表示、検索できるアプリ

# 使い方

npm install
mysqlconnection.jsのパスワード欄を入力
npm start

# Dockerによる環境構築
## Tool

Docker
https://www.docker.com/get-started

## コマンド
### 環境構築
```
git clone https://github.com/YoshioKimura/myshelf.git
cd ./docker
docker-compose build
dockr-compose up -d
```

### 起動
```
docker ps
```
以下のように`docker_web` `docker_mysql`コンテナが立ち上がっている事を確認する。
```
CONTAINER ID  IMAGE COMMAND  CREATED STATUS  PORTS NAMES
623b1eed849f  docker_web  "sh" 6 seconds ago Up 3 seconds  0.0.0.0:3000->3000/tcp, 3333/tcp  docker_web_1
b6f1366ac2a1  docker_mysql  "docker-entrypoint.s…" 6 seconds ago Up 5 seconds  3306/tcp, 33060/tcp, 0.0.0.0:13306->13306/tcp docker_mysql_1
```

### コンテナへ入る -> npm install〜
```
docker exec -it docker_web_1 sh
/app # npm install
/app # npm start