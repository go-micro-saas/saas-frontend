# saas-frontend

start the project

```shell
# react-ts
pnpm create vite saas-frontend --template react-ts
cd saas-frontend
pnpm install
pnpm run dev
```

## 配置 vite

配置`vite.config.ts`: 添加 `resolve`

```ts
export default defineConfig({
  resolve: {
    alias: {
      '@public': '/public',
      '@src': '/src',
    },
  },
  plugins: [react()],
})

```

配置`tsconfig.app.json`: 添加 `compilerOptions.paths`

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
