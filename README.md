# saas-frontend

运行项目: node version: v22.17.0

```shell
npm install -g pnpm
pnpm install
pnpm run dev
```

## create project

```shell
# react-ts
pnpm create vite saas-frontend --template react-ts
cd saas-frontend
pnpm install
pnpm run dev
```

## 配置 vite

配置`vite.config.ts`: 添加 `resolve` 和 `base`

```ts
export default defineConfig({
  resolve: {
    alias: {
      '@public': '/public',
      '@src': '/src',
    },
  },
  base:'./',
  plugins: [react()],
})

```

配置`tsconfig.app.json`: 添加 `compilerOptions.baseUrl` 和 `compilerOptions.paths`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@public/*": ["public/*"],
      "@src/*": ["src/*"]
    }
  }
}
```

## 依赖

```shell
# bootstrap
pnpm install --save react-bootstrap bootstrap @popperjs/core
# react router
pnpm install react-router
# zustand
pnpm install zustand
# axios
pnpm install axios
# formik
pnpm install formik
# yup
pnpm install yup
# swagger-typescript-api
pnpm install --save-dev swagger-typescript-api
```

## swagger-typescript-api 生成

[DOC:README.md](./src/apis/README.md)

```shell
pnpm run generate:api
```



