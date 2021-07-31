# electron_dirname_not_defined_reproduce

## Gist
- Electron v13
- `nodeIntegration: true`
- `contextIsolation: false`
- electron-store

## Problem
1. `yarn electron:serve`
2. Got `ReferenceError: __dirname is not defined` Error

## Steps to reproduce the behavior:
1. `vue create <name>`
```
- typescript
- vue 3
```

2. `vue add electron-builder`

3. create `vue.config.ts`
```ts
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
```

4. modify `src/background.ts`
```ts
webPreferences: {
    contextIsolation: false, // hard code to false
}
```

5. `yarn add electron-store`

6. modify `src/main.ts`
```ts
import Store from 'electron-store'
const settings = new Store()
```
6. `yarn electron:serve`

7. Got `ReferenceError: __dirname is not defined` Error