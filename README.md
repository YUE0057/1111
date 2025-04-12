# 物业管理系统

这是一个基于 Next.js 开发的物业管理系统，用于支持物业的日常管理工作。

## 功能特点

- 维修申请管理
- 物业费用缴纳
- 文件下载中心
- 公告发布
- 响应式设计，支持移动端访问

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- Node.js

## 开始使用

1. 克隆项目
```bash
git clone https://github.com/yourusername/building-management-system.git
cd building-management-system
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
复制 `.env.example` 文件为 `.env`，并填写相应的配置信息：
```bash
cp .env.example .env
```

4. 运行开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

## 部署

本项目可以部署到 Vercel 平台：

1. 在 Vercel 上创建新项目
2. 连接 GitHub 仓库
3. 配置环境变量
4. 部署项目

## 项目结构

```
building-management-system/
├── app/                    # 应用程序主目录
│   ├── maintenance/       # 维修申请页面
│   ├── payments/         # 物业费缴纳页面
│   └── documents/        # 文件下载页面
├── public/                # 静态资源
├── styles/                # 样式文件
└── package.json          # 项目配置文件
```

## 环境变量

项目使用以下环境变量：

- `NEXT_PUBLIC_SITE_NAME`: 网站名称
- `NEXT_PUBLIC_COMPANY_NAME`: 公司名称
- `NEXT_PUBLIC_CONTACT_EMAIL`: 联系邮箱
- `NEXT_PUBLIC_CONTACT_PHONE`: 联系电话
- `API_SECRET_KEY`: API密钥
- `DATABASE_URL`: 数据库连接URL

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

MIT
