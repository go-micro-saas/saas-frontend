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

## bootstrap

```shell
# bootstrap
pnpm install --save react-bootstrap bootstrap @popperjs/core
```

## react router

```shell
# react router
pnpm install react-router
```

## zustand

```shell
pnpm install zustand
```
