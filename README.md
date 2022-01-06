# SignalR SWA Functions Chat

[![Azure Static Web Apps CI/CD](https://github.com/drumath2237/signalr-swa-functions-chat/actions/workflows/azure-static-web-apps-purple-field-0bc377700.yml/badge.svg)](https://github.com/drumath2237/signalr-swa-functions-chat/actions/workflows/azure-static-web-apps-purple-field-0bc377700.yml)

## About

簡単なサーバレスチャットのデモ。
ローカル環境では Vite ＋ Vue3 ＋ TypeScript のフロントエンドと、
API 統合された Azure Functions ＋ SignalR を Static Web Apps CLI でエミュレートして開発している。

## Env

- VSCode
- Vue3
- Vite
- TypeScript
- Yarn
- @microsoft/signalr
- Static Web Apps CLI
- Azure Funtions Core Tools v4
- SignalR Serivce (serverless mode)

## Install & Usage

まず`/api/local.settigs.json`を作成し、SignalR の接続文字列を指定。
その後以下のコマンドにより実行。

```sh
# install packacges
yarn install

cd api/
yarn install

# run azure functions
yarn start:api

# start swa cli
yarn preview:swa
```

## Contact

何かございましたら[にー兄さんの Twitter](https://twitter.com/ninisan_drumath)までお願いします。
