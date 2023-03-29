### .gitignore 忽略文件

### 给文件添加权限为可执行

chmod +x ss.sh

## 配置 eslint

###

```
yarn add eslint -D
yarn eslint --init
```

```
(1) How would you like to use ESLint?
选择：To check syntax and find problems

(2) What type of modules does your project use?
选择：JavaScript modules (import/export)

(3) Which framework does your project use?
选择：Vue.js

(4) Does your project use TypeScript?
选择：Yes

(5) Where does your code run?
选择：Browser

(6) What format do you want your config file to be in?
选择：JavaScript

(7) Would you like to install them now?
选择：Yes

(8) Which package manager do you want to use?
选择：pnpm
```

env 字段中增加 node: true 配置以解决 eslint 找不到 module 的报错

在 package.json 文件中的 script 中添加 lint 命令

```json
{
  "scripts": {
    // eslint . 为指定lint当前项目中的文件
    // --ext 为指定lint哪些后缀的文件
    // --fix 开启自动修复
    "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
  }
}
```

执行 lint 命令 pnpm lint
