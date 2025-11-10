## Typescript Setup

### first create npm package

```bash
npm init -y
```

### global install

```bash
npm install -g typescript
```

### local install

```bash
 npm install typescript --save-dev
```

### Create tsconfig.json file

```bash
 tsc --init
```

### after create tsconfig.json file place uncomment

```bash
    "rootDir": "./src",
    "outDir": "./dist",
```
### typescript file compile for windows

```bash
tsc
````

### typescript file compile for mac

```bash
npx tsc
````

### typescript file run

```bash
node dist/index.js
```
