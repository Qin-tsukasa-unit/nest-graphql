<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## 詳細

nest.js + GraphQL で API サーバーを作成するプロジェクト

## 事前準備

データベースに MySQL を使用するため、Docker で MySQL コンテナを起動する  
※事前に Docker 起動環境を構築しておくこと(windows 用のバッチは bat-for-win にあります)

・image 作成

```bash
cd nest-graphql/docker-mysql
docker build -t qin-mysql .
```

・image 確認

```bash
docker images
```

・コンテナ起動

```bash
docker run --name qin-mysql -p 3306:3306 qin-mysql
```

・コンテナ削除 ※終了時

```bash
docker stop qin-mysql
docker rm qin-mysql
```

## nest-graphql インストール

```bash
# nest-graphqlフォルダに移動してから
npm install
```

## nest-graphql 起動

```bash
npm run start
```

下記 URL にアクセス

```
http://localhost:3000/graphql
```

## TypeORM migration ファイル作成

◆Windows

```bash
.\node_modules\.bin\ts-node ./node_modules/typeorm/cli.js migration:generate -n [エンティティ名]
```

◆Mac

```bash
npx ts-node ./node_modules/.bin/typeorm migration:generate -n [エンティティ名]
```

## TypeORM migration 実行

◆Windows

```bash
.\node_modules\.bin\ts-node ./node_modules/typeorm/cli.js migration:run
```

◆Mac

```bash
npx ts-node ./node_modules/.bin/typeorm migration:run
```
