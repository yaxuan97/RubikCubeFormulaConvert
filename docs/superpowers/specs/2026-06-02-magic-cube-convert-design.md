# 魔方公式转换器 — 设计文档

> 日期：2026-06-02
> 状态：已确认

## 1. 概述

一个用于将魔方公式在不同观察视角之间进行转换的工具。输入一个魔方公式和观察者姿态（从哪个面看、头朝向哪），输出在该视角下等价的魔方公式。

提供三种使用方式：TypeScript 库（`@cube/core`）、命令行工具（`@cube/cli`）、Web 交互应用（`@cube/web`）。

## 2. 坐标系与变换模型

### 2.1 魔方固定坐标系（右手系）

```
+X → R面（右面）     +Y → U面（顶面）     +Z → F面（前面）
```

### 2.2 基本操作的数学表示

每个基本操作由 **(旋转轴, 旋转角度)** 定义，使用右手定则：

| 操作 | 旋转轴 | 角度 |
|------|--------|------|
| R    | +X     | +90° |
| R'   | +X     | -90° |
| R2   | +X     | 180° |
| L    | -X     | +90° |
| U    | +Y     | +90° |
| D    | -Y     | +90° |
| F    | +Z     | +90° |
| B    | -Z     | +90° |

中层转动（M/E/S）和宽层转动（r/l/u/d/f/b）被标记为各自对应的轴方向，具有特殊语义。

### 2.3 观察者姿态

观察者姿态用一个 3×3 旋转矩阵 M 表示，它描述了观察者坐标系相对于魔方坐标系的旋转。

**高层 API（面映射）**：
```
transform(formula, { facing: Face, headUp: Face })
```
- `facing`：观察者面对魔方的哪个面
- `headUp`：观察者头顶朝向魔方的哪个面
- 内部将 `(facing, headUp)` 转换为旋转矩阵 M

**底层 API（旋转）**：
```
transformByRotation(formula, { axis: Axis, angle: number })
```
- 直接指定观察者绕 X/Y/Z 轴旋转的角度

**约束**：`facing` 和 `headUp` 必须正交（不同轴），否则抛出 `ValidationError`。

### 2.4 变换计算

对于公式中的每一步操作 `(axis, angle)`：

1. 将操作表示为旋转向量 `v = axis × angle`
2. 应用观察者变换：`v' = M⁻¹ × v`
3. 将变换后的向量量子化到最近的基本轴（±X/±Y/±Z）和最近的角度（0°, ±90°, 180°）
4. 查找对应的基本操作输出

整体旋转（x/y/z）叠加：先对每个操作应用整体旋转改变其轴角，再应用观察者变换。

## 3. 公式语法与 AST

### 3.1 支持的语法

| 类别 | 示例 | 说明 |
|------|------|------|
| 基本面转动 | `R`, `R'`, `R2` | 顺时针/逆时针/180° |
| 中层转动 | `M`, `M'`, `M2` | M/E/S |
| 宽层转动 | `r`, `r'`, `r2` | r = R + M' |
| 整体旋转 | `x`, `x'`, `x2` | 绕 X/Y/Z 轴整体转 |
| 分组 | `(R U R' U')` | 子表达式 |
| 重复 | `(R U)3` 或 `(R U)*3` | 分组重复 N 次 |
| 嵌套 | `(R (U R')2)3` | 可嵌套 |

空格可选，不区分大小写（内部统一规范化为大写）。

### 3.2 AST 节点类型

```typescript
type FormulaNode =
  | { type: 'sequence'; moves: MoveNode[] }
  | { type: 'move'; face: Face; modifier: Modifier }
  | { type: 'group'; moves: MoveNode[]; repeat: number }
  | { type: 'rotation'; axis: Axis; angle: number }

type Face =
  | 'R' | 'L' | 'U' | 'D' | 'F' | 'B'   // 基本面
  | 'M' | 'E' | 'S'                       // 中层
  | 'r' | 'l' | 'u' | 'd' | 'f' | 'b';   // 宽层

type Modifier = '' | "'" | '2';
```

### 3.3 变换时对各类型的处理

- **基本面转动**：直接对轴角进行矩阵变换
- **中层转动**：保持中层语义映射到新坐标系下的对应中层（M/E/S），若无法映射则退化为展开的基础操作
- **宽层转动**：保持宽层语义映射，拆解为基本面+中层后各自变换再组合
- **整体旋转**：和观察者姿态叠加计算
- **分组/重复**：递归遍历子节点保持结构

## 4. 项目结构

```
MagicCubeMethodConvert/
├── package.json              # workspace root (pnpm workspaces)
├── tsconfig.base.json        # 共享 TS 配置
├── packages/
│   ├── core/                 # @cube/core — 纯逻辑库
│   │   ├── src/
│   │   │   ├── index.ts      # 公开 API
│   │   │   ├── parser.ts     # 字符串 → AST
│   │   │   ├── serializer.ts # AST → 字符串
│   │   │   ├── transform.ts  # 核心变换逻辑
│   │   │   ├── coordinate.ts # 坐标系、旋转矩阵、姿态定义
│   │   │   ├── moves.ts      # 基本操作定义（轴角映射表）
│   │   │   └── types.ts      # 类型定义
│   │   ├── test/
│   │   └── package.json
│   ├── cli/                  # @cube/cli — 命令行工具
│   │   ├── src/
│   │   │   ├── index.ts      # 入口
│   │   │   └── args.ts       # 参数解析（手写，无外部依赖）
│   │   ├── test/
│   │   └── package.json
│   └── web/                  # @cube/web — 浏览器应用
│       ├── src/
│       │   ├── App.tsx
│       │   ├── components/
│       │   │   ├── CubeViewer.tsx    # 3D 魔方展示 (Three.js)
│       │   │   ├── FormulaInput.tsx  # 公式输入
│       │   │   ├── ViewSelector.tsx  # 视角选择控件
│       │   │   └── ResultDisplay.tsx # 转换结果展示
│       │   └── main.tsx
│       ├── index.html
│       └── package.json
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-06-02-magic-cube-convert-design.md
```

### 4.1 依赖关系

```
cli ──→ core
web ──→ core
```

- **core**：纯 TypeScript，零运行时依赖，同时支持 Node.js 和浏览器
- **cli**：依赖 core + Node.js 标准库，无第三方依赖
- **web**：依赖 core + React + Three.js + Vite，不使用组件库

### 4.2 构建输出

- **core**：ESM + CJS 双格式（tsc 编译）
- **cli**：通过 tsx 或 ts-node 直接运行，不做独立编译
- **web**：通过 Vite 构建 SPA

## 5. 变换引擎详设

### 5.1 中层转动映射

M/E/S 在变换后映射回对应的中层：
- M 沿 X 轴法线方向（LR 中间层）→ 轴映射后找对应的 ±X/±Y/±Z 方向的中层
- E 沿 Y 轴法线方向（UD 中间层）→ 同理
- S 沿 Z 轴法线方向（FB 中间层）→ 同理

若变换后无对应中层（浮点精度问题），退化为展开的基础操作。

### 5.2 宽层转动映射

宽层 = 基本面 + 中层组合（如 r = R + M'）。变换时：
1. 分解为基础面和中层
2. 分别变换
3. 在新坐标系中重新组合

### 5.3 整体旋转叠加

```
最终变换 = 观察者姿态⁻¹ × 整体旋转 × 基础操作
```

### 5.4 边界情况

| 情况 | 处理 |
|------|------|
| 空公式 | 返回空字符串 |
| 非法字符 | 抛出 `ParseError`，标明位置（行:列） |
| 未闭合括号 | 抛出 `ParseError` |
| 无效视角 (facing ∥ headUp) | 抛出 `ValidationError` |
| 变换后浮点精度 | 角度量子化到 {0, ±90, 180}，轴量子化到 ±X/±Y/±Z |
| 中层变换后无对应中层 | 退化为展开的基础操作 |

## 6. CLI 设计

### 6.1 命令格式

```bash
# 高层（面映射）
cube-convert "R U R' U'" --facing F --head-up U
cube-convert "R U R' U'" -f F -h U

# 底层（旋转）
cube-convert "R U R' U'" --rotate-y 90
cube-convert "R U R' U'" -ry 90

# 管道输入
echo "R U R' U'" | cube-convert -f L

# 文件输入输出
cube-convert -i input.txt -o output.txt -f B
```

### 6.2 选项

| 选项 | 说明 |
|------|------|
| `-f, --facing <face>` | 面对哪个面 (R/L/U/D/F/B) |
| `-h, --head-up <face>` | 头顶朝向 (R/L/U/D/F/B) |
| `-rx, --rotate-x <deg>` | 绕 X 轴旋转观察者 |
| `-ry, --rotate-y <deg>` | 绕 Y 轴旋转观察者 |
| `-rz, --rotate-z <deg>` | 绕 Z 轴旋转观察者 |
| `-i, --input <file>` | 从文件读取公式 |
| `-o, --output <file>` | 输出到文件 |
| `--pretty` | 美化输出（带颜色高亮） |
| `--json` | JSON 输出格式 |
| `--compact` | 去掉所有空格 |
| `--help` | 帮助信息 |
| `--version` | 版本信息 |

### 6.3 退出码

- `0`：成功
- `1`：解析错误（打印错误位置）
- `2`：参数错误

## 7. Web UI 设计

### 7.1 布局

```
┌──────────────────────────────────────────────────┐
│                  Cube Converter                   │
├──────────────────────┬───────────────────────────┤
│                      │  视角                      │
│                      │  ○ 面对 [F ▼]             │
│    3D 魔方视图       │  ○ 头顶 [U ▼]             │
│    (Three.js)        │  ○ 旋转 [绕Y 0° ▼]        │
│                      │                           │
│    - 可拖拽旋转      │  输入                      │
│    - 点击面选视角    │  ┌─────────────────────┐   │
│    - 操作动画        │  │ R U R' U'            │   │
│                      │  └─────────────────────┘   │
│                      │                           │
│                      │  结果                      │
│                      │  ┌─────────────────────┐   │
│                      │  │ L D L' D'            │   │
│                      │  └─────────────────────┘   │
│                      │  [复制]                    │
└──────────────────────┴───────────────────────────┘
```

### 7.2 交互

| 交互 | 行为 |
|------|------|
| 拖拽 3D 魔方 | 自由旋转观察角度（可重置为默认） |
| 点击魔方面 | 自动设置 facing 为该面 |
| 修改视角控件 | 实时更新公式转换结果 |
| 输入公式 | 实时解析 + 转换 |
| 点击复制 | 复制结果到剪贴板 |
| 歪头快捷按钮 | 快捷设置 headUp（上/下/左/右歪头） |

### 7.3 技术选型

- **构建**：Vite
- **框架**：React
- **3D 渲染**：Three.js
- **样式**：CSS Modules（手写，无组件库）

## 8. 测试策略

- **core**：单元测试覆盖 parser、serializer、transform、coordinate。重点测试：
  - 所有基本操作的变换映射是否正确
  - 中层/宽层语义保持
  - 分组/嵌套/重复解析
  - 边界情况（空输入、非法输入、精度）
- **cli**：集成测试覆盖参数解析和端到端转换
- **web**：组件渲染测试 + 手动验收

## 9. 非目标（不做）

- 魔方求解/最优解计算
- 公式优化/简化（给出最短等价公式）
- 移动端 App（先做桌面版 Web）
- 多语言国际化（先中文）
- 历史记录/公式收藏
- 分享链接生成
