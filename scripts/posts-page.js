// 生成 /posts/ 文章列表页（卡片样式）
hexo.extend.generator.register('posts', function (locals) {
  const posts = locals.posts.sort('-date').toArray();
  return {
    path: 'posts/index.html',
    layout: ['posts', 'page', 'index'],
    data: { posts: posts }
  };
});