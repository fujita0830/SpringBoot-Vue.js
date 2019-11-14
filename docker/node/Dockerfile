FROM node:12.8-alpine

ENV APP_ROOT /app

WORKDIR $APP_ROOT/frontend-app/

# `package.json` と `package-lock.json`を両方コピーする
COPY ./frontend-app/package.json $APP_ROOT/frontend-app/
COPY ./frontend-app/package-lock.json $APP_ROOT/frontend-app/
# プロジェクトの依存ライブラリをインストールする
RUN npm install