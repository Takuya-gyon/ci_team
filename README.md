# 大阪公立大ありのままっぷ
杉本キャンパス・中百舌鳥キャンパスのマップと、それぞれの各建物に関するプチ情報、そして現在の堺市の天気をAPI経由で表示するアプリケーションです。

## （重要）Docker Imagesの保管場所および環境構築に関して
提出物に含まれているDocker Imagesに関して、DockerHubにコンテナイメージをpushしました。
```
https://hub.docker.com/r/tkucd/ci_team-app
```
ただし本アプリケーションの環境構築はレポジトリ内にあるDockerfileおよびdocker-compose.ymlを用いることで行われます。<br>
そのため上記リンクに示すImageをpullして`docker run`コマンドによりコンテナを作成するのではなく、下記に示す`docker compose`コマンドによりコンテナの作成をお願いいたします。

## 大阪公立大ありのままっぷの使い方
以下ではローカル環境での実行手順を記載します。

まず本レポジトリのクローンをお願いします。
```
git clone https://github.com/Takuya-gyon/ci_team
```

クローン後、以下のコマンドによりアプリが起動します。<br>
（アプリ起動には長い場合10~20分程度かかります。）
```
docker compose up -d
```
もしくは
```
docker-compose up -d
```

