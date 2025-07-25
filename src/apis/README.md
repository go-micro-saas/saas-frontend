# 生成API客户端

1. 把文件放入`src/apis/swagger`目录下
2. 执行`pnpm run generate:api`
3. 生成的文件在`src/apis/api`

## typescript-api 示例

```shell
npm install --save-dev swagger-typescript-api
# 查看帮助信息
npx swagger-typescript-api --help
npx swagger-typescript-api generate --help
# output ./Api.ts
npx swagger-typescript-api generate --path swagger/backend_auth.service.v1.swagger.json
# output swagger/backend_auth.service.v1/Api.ts
npx swagger-typescript-api generate --path swagger/backend_auth.service.v1.swagger.json -o swagger/backend_auth.service.v1
npx swagger-typescript-api generate --path swagger/backend_auth.service.v1.swagger.json -o swagger/backend_auth.service.v1 --axios
# output swagger/backend_auth.service.v1.ts
npx swagger-typescript-api generate --path swagger/backend_auth.service.v1.swagger.json -o swagger -n backend_auth.service.v1.ts
```
