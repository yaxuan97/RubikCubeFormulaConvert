# Cube Converter

> 在不同观察视角之间转换魔方公式。

[English](README.md)

输入一个魔方公式和观察者姿态（面对哪个面、头朝向哪），**Cube Converter** 输出在该视角下等价的魔方公式。原理：每个操作被建模为三维空间中的旋转向量，改变视角就是对它做坐标变换。

```
$ cube-convert "R'" --facing R
F'
```

## 包结构

| 包 | 说明 |
|---------|-------------|
| [`@cube/core`](./packages/core) | 零依赖 TS 库：解析器、序列化器、变换引擎 |
| [`@cube/cli`](./packages/cli) | 命令行工具，封装 `@cube/core` |
| [`@cube/web`](./packages/web) | 浏览器应用，含 3D 魔方可视化（React + Three.js） |

## 快速开始

### CLI

```bash
# 安装依赖
pnpm install

# 默认视角（无变化）
echo "R U R' U'" | pnpm cli

# 从右面看 — R' 变成 F'
echo "R'" | pnpm cli -f R

# 向右歪头（绕 Y 轴旋转观察者）
echo "R U R' U'" | pnpm cli -ry 90

# 从文件读取，输出到文件
pnpm cli -i scramble.txt -o result.txt -f B
```

### 库

```ts
import { convert } from '@cube/core';

const result = convert("R U R' U'", { facing: 'L', headUp: 'U' });
console.log(result.output);
// → L D L' D'
```

### Web 应用

```bash
pnpm dev:web
```

浏览器打开后包含：
- **3D 魔方** — 可拖拽旋转，点击面选择视角
- **视角控件** — 设置面对方向、头顶方向、歪头快捷按钮
- **公式输入** — 实时转换
- **配色方案** — WCA / 日式 / 白底 可选

## 支持的符号

| 类别 | 示例 |
|----------|----------|
| 基本面转动 | `R`, `R'`, `R2`, `L`, `U`, `D`, `F`, `B` |
| 中层转动 | `M`, `E`, `S` |
| 宽层转动 | `r`, `u'`, `f2` |
| 整体旋转 | `x`, `y'`, `z2` |
| 分组 | `(R U R' U')` |
| 重复 | `(R U)3`, `(R U)*3` |
| 嵌套 | `(R (U R')2)3` |

不区分大小写，空格可选。

## 原理

1. **解析** — 公式字符串解析为 AST。
2. **变换** — 每个操作的旋转向量通过观察者旋转矩阵（由 `facing` + `headUp` 或直接轴角构建）进行变换，再将结果量子化到最接近的坐标轴方向。
3. **序列化** — AST 序列化回公式字符串，并保持分组结构。

```
观察者：面对 F 面，头顶朝 U（默认姿态）
  姿态矩阵 = I
  R' 旋转向量 = (-90°, 0, 0)
  结果 = (-90°, 0, 0) → R'

观察者：面对 R 面，头顶朝 U
  姿态矩阵 = Ry(90°)
  R' 旋转向量 = (-90°, 0, 0)
  结果 = (0, 0, -90°) → F'
```

## 项目结构

```
.
├── packages/
│   ├── core/src/
│   │   ├── types.ts        # 类型定义
│   │   ├── coordinate.ts   # Vec3/Mat3 运算、姿态矩阵
│   │   ├── moves.ts        # 面 ↔ 轴角映射表
│   │   ├── parser.ts       # 公式字符串 → AST
│   │   ├── serializer.ts   # AST → 公式字符串
│   │   ├── transform.ts    # 核心变换逻辑
│   │   └── index.ts        # 公开 API
│   ├── cli/src/
│   │   ├── args.ts         # 参数解析
│   │   └── index.ts        # CLI 入口
│   └── web/src/
│       ├── App.tsx
│       └── components/
│           ├── CubeViewer.tsx     # 3D 魔方 (Three.js)
│           ├── ViewSelector.tsx   # 视角控件
│           ├── FormulaInput.tsx   # 公式输入
│           └── ResultDisplay.tsx  # 结果展示 + 复制
├── docs/
│   └── superpowers/
│       ├── specs/      # 设计文档
│       └── plans/      # 实现计划
└── tsconfig.base.json
```

## 开发

```bash
# 安装
pnpm install

# 构建核心库
pnpm build

# 运行全部测试（35 个测试，vitest）
pnpm test

# Web 开发服务器
pnpm dev:web
```

## 技术栈

- **语言：** TypeScript
- **构建：** pnpm workspaces、tsc、Vite
- **测试：** Vitest
- **Web：** React 18、Three.js 0.160
- **CLI 运行时：** tsx

## 开源协议

MIT
