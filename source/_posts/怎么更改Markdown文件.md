---
title: 怎么更改Markdown文件
date: 2026-08-16 01:00:41
tags:
  - 教程
  - Markdown
---

这篇示例文章用来演示**如何编辑 Markdown 文件**。博客里的每一篇文章都是一个 `.md` 文件，存放在 `E:\code\blog\source\_posts\` 目录下，用任何文本编辑器（推荐 VS Code）打开就能改。

## 1. 写新文章的流程

1. 打开命令行，进入博客目录：`cd E:\code\blog`
2. 创建文章：`hexo new "文章标题"`
3. 编辑生成的文件：`source\_posts\文章标题.md`
4. 本地预览：`hexo server`，访问 `http://localhost:4000`
5. 发布上线：`git add -A` → `git commit -m "更新"` → `git push`

## 2. 文件开头的"说明区"（front matter）

每篇文章开头有两行横线包起来的内容，叫 **front matter**，用来告诉博客文章的信息：

```yaml
---
title: 怎么更改Markdown文件
date: 2026-08-16 01:00:41
tags:
  - 教程
  - Markdown
---
```

- `title`：文章标题（会显示在页面和浏览器标签上）
- `date`：发布时间（一般不用手动改）
- `tags`：文章标签，可以加多个，用 `- ` 开头

## 3. 常用的 Markdown 语法

| 效果 | 写法 |
| --- | --- |
| **加粗** | `**加粗**` |
| *斜体* | `*斜体*` |
| ~~删除线~~ | `~~删除线~~` |
| [链接](https://hexo.io) | `[链接](https://hexo.io)` |
| `行内代码` | `` `行内代码` `` |

**列表：**

- 无序列表项一
- 无序列表项二

1. 有序列表项一
2. 有序列表项二

**引用：**

> 这是一段引用文字。

**代码块**（用三个反引号包裹，可以指定语言）：

```python
print("Hello, World!")
```

**图片：**

```markdown
![图片说明](图片地址)
```

## 4. 小贴士

- 保存文件后，`hexo server` 开着的话会自动刷新，刷新浏览器就能看到效果
- 改完记得用 `hexo clean && hexo generate` 重新生成，再推送上线
- 想换行，在行尾加两个空格再回车；想分段，空一行即可

祝你写作愉快！