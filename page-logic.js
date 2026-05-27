/**
 * 原型各页面接口逻辑说明（结构化）
 * 供 prototype/index.html 右侧面板渲染
 */
window.API_CONVENTIONS = [
  '统一响应格式：{ code: number, message: string, data: object }',
  '鉴权 Header：Authorization: Bearer {token}',
  '分页参数：page、size；时间字段：ISO8601 或 yyyy-MM-dd HH:mm',
];

window.PAGE_LOGIC = {
  home: {
    summary: '首页聚合：轮播、快捷导航、今日任务、线下活动、内容推荐',
    load: [
      'GET /api/home/banners — 轮播图（id、title、desc、bg、linkType、linkTarget）',
      'GET /api/home/quote — 每日引言（text、author，可选静态配置）',
      'GET /api/home/tasks — 今日任务（id、name、type、done、points、linkType、linkTarget）',
      'GET /api/home/tasks/progress — 完成进度 completionRate',
      'GET /api/activities/offline?limit=5 — 线下活动摘要（id、title、time、location、status）',
      'GET /api/home/recommendations?limit=3 — 优秀内容推荐（author、content、shareId）',
    ],
    write: [],
    nav: [
      '「读」→ pages/read/index',
      '「行」→ pages/practice/center',
      '「思」→ pages/share/index',
      '「言」→ switchTab pages/promise/index',
      '「奖」→ pages/mine/points',
      '「入企」→ pages/home/enterprise',
      '今日任务 / 线下活动 / 推荐 → 对应详情或 Tab 页',
    ],
  },

  enterprise: {
    summary: '入企导读：企业理念、企业文化、使用手册三个 Tab',
    load: [
      'GET /api/enterprise/guide — 全部章节（key、label、icon、summary、content[]）',
      'GET /api/enterprise/guide?tab=philosophy|culture|manual — 按 Tab 拉取单章节（可选）',
    ],
    write: [],
    nav: [],
  },

  read: {
    summary: '共读共学：功能入口、今日共读、成长地图（徽章/等级/路径）',
    load: [
      'GET /api/reading/today-books — 今日共读（bookId、chapterId、title、chapter、groupName、color）',
      'GET /api/user/badges — 徽章墙（id、name、icon、unlocked、color）',
      'GET /api/user/level-path — 等级路径（level、exp、expMax、nextLevel）',
      'GET /api/user/growth-path — 成长路径节点（id、title、desc、status、percent、footerLeft、footerRight）',
    ],
    write: [],
    nav: [
      '「读书会」→ pages/read/club-list',
      '「分享圈」→ pages/share/index',
      '「录音库」→ pages/mine/audio',
      '「精选广场」→ pages/read/plaza',
      '今日共读条目 → pages/book/read?bookId&chapterId',
    ],
  },

  'club-list': {
    summary: '读书会小组列表，选择后进入小组详情',
    load: [
      'GET /api/reading/groups — 小组列表（groupKey、name、tags[]、currentBook、todayChapter、memberCount、coverColor）',
    ],
    write: [],
    nav: ['列表项 → pages/read/club-detail?groupKey='],
  },

  'club-detail': {
    summary: '小组详情与今日共读任务',
    load: [
      'GET /api/reading/groups/{groupKey} — 小组介绍、标签、成员数、提醒时间',
      'GET /api/reading/groups/{groupKey}/members?limit= — 成员列表（可选）',
      'GET /api/reading/groups/{groupKey}/today-readings — 今日任务（bookId、chapterId、progress、recordDone、shareDone）',
    ],
    write: [
      'POST /api/reading/groups/{groupKey}/join — 加入小组（可选）',
    ],
    nav: [
      '今日共读 → pages/book/read',
      '「查看打卡」→ switchTab pages/checkin/index',
    ],
  },

  plaza: {
    summary: '精选广场：推荐/热门/最新/关注 Tab 帖子流',
    load: [
      'GET /api/plaza/posts?tab=recommend|hot|latest|following&page=&size= — 帖子列表',
      '响应：id、author、surname、title、snippet、likes、comments、isRecommended、isFollowing',
    ],
    write: [],
    nav: ['帖子卡片 → pages/read/plaza-detail?id='],
  },

  'plaza-detail': {
    summary: '精选帖子详情：正文、标签、点赞、关注',
    load: [
      'GET /api/plaza/posts/{id} — 详情（author、authorRole、recommendNote、tags[]、content、likes、comments、isFollowing）',
    ],
    write: [
      'POST /api/plaza/posts/{id}/follow — 关注/取消关注',
      'POST /api/plaza/posts/{id}/like — 点赞/取消点赞',
    ],
    nav: ['「分享」→ pages/share/friend（携带 shareId / 预览数据）'],
  },

  'book-detail': {
    summary: '书籍详情：简介、章节目录、相关推荐',
    load: [
      'GET /api/books/{bookId} — 书籍（title、author、tags[]、intro、chapters[]: id/title/locked/duration）',
      'GET /api/books/{bookId}/recommendations — 相关推荐',
    ],
    write: [
      'POST /api/books/{bookId}/favorite — 收藏/取消收藏（可选）',
    ],
    nav: ['「开始朗读」/ 章节 → pages/book/read?bookId&chapterId'],
  },

  'book-read': {
    summary: '读书录音：章节正文只读，页内录音不上传跳转',
    load: [
      'GET /api/books/{bookId}/chapters/{chapterId} — 章节（bookTitle、chapterTitle、content）',
      'GET /api/recordings?bookId=&chapterId= — 本章已有录音（id、duration、uploaded、createdAt）',
    ],
    write: [
      'POST /api/recordings/upload — 上传录音（bookId、chapterId、file、duration）',
      'POST /api/recordings/{id}/complete — 标记上传完成（可选）',
    ],
    nav: [
      '「写心得」→ pages/book/note?bookId&chapterId',
      '摘抄模式 notePick=1 → 选中文本回传后 navigateBack',
    ],
  },

  'book-note': {
    summary: '写心得：摘抄、感悟、有言实行，草稿与发布',
    load: [
      'GET /api/shares/draft?bookId=&chapterId= — 恢复草稿（excerpt、insight、action）',
      'GET /api/books/{bookId}/chapters/{chapterId}/excerpt-hints — 摘抄提示（可选）',
    ],
    write: [
      'POST /api/shares/draft — 保存草稿（bookId、chapterId、excerpt、insight、action）',
      'POST /api/shares — 发布心得，返回 shareId 与 sharePreview',
    ],
    nav: [
      '「返回读书」→ pages/book/read',
      '发布成功 → pages/share/index 或 pages/share/friend',
    ],
  },

  share: {
    summary: '分享圈：圈子/精选/我的 Tab，筛选与快捷评论',
    load: [
      'GET /api/shares?tab=circle|featured|mine&filter=latest|hot|operator|following&page=&size= — 分享列表',
      '响应：id、author、content、book、time、likes、featured、comments[]、isOperator、isFollowing',
    ],
    write: [
      'POST /api/shares/{id}/like — 点赞/取消点赞',
      'POST /api/shares/{id}/comments — 快捷评论（text）',
    ],
    nav: [
      '卡片「分享」→ setExternalPayload + pages/share/friend',
      'GET /api/shares/{id}/share-preview — 外部分享预览数据',
    ],
  },

  'share-friend': {
    summary: '分享好友：预览卡片，微信/文本/海报分享',
    load: [
      'GET /api/shares/{id}/share-preview — 标题、书籍、章节、正文摘要（或由上一页传入 payload）',
    ],
    write: [
      'POST /api/shares/{id}/poster — 生成分享海报（可选扩展）',
    ],
    nav: ['客户端能力：复制文本、调起微信分享，无需额外写接口'],
  },

  'practice-center': {
    summary: '践行中心：活动统计、活动广场/我的活动入口、即将开始',
    load: [
      'GET /api/practice/center/summary — 统计 joined、upcoming、registering',
      'GET /api/activities/upcoming?limit=3 — 即将开始列表（id、title、time、location、registered）',
    ],
    write: [],
    nav: [
      '「活动广场」→ switchTab pages/practice/index',
      '「我的活动」→ pages/mine/activities',
      '活动条目 → pages/practice/detail?id=',
    ],
  },

  'practice-activities': {
    summary: '践行活动 Tab：全部/已报名/未报名/已完成',
    load: [
      'GET /api/activities?tab=all|registered|unregistered|completed&page=&size= — 活动列表',
      '响应：id、category、title、time、location、status、registered、coverColor',
    ],
    write: [],
    nav: ['列表项 → pages/practice/detail?id='],
  },

  'practice-detail': {
    summary: '活动详情：介绍、成员、报名、签到入口',
    load: [
      'GET /api/activities/{id} — 详情（title、time、location、desc、memberCount、registered、members[]）',
      'GET /api/activities/{id}/checkin/status — 是否已签到 checkedIn',
    ],
    write: [
      'POST /api/activities/{id}/register — 报名/取消报名',
    ],
    nav: [
      '「定位签到」→ pages/practice/checkin?id=',
      '「活动评价」→ pages/practice/review?id=',
    ],
  },

  'practice-create': {
    summary: '创建活动：表单提交，类型下拉（读书会/分享会/线下聚会）',
    load: [
      'GET /api/activities/types — 活动类型枚举（可选，也可前端写死）',
    ],
    write: [
      'POST /api/activities — 发布（title、type、startTime、place、coverUrl、description）',
      '封面 coverUrl 需先 POST /api/upload/image 获取 URL（可选）',
    ],
    nav: ['发布成功 → navigateBack 至 pages/mine/activities'],
  },

  'practice-checkin': {
    summary: '定位签到：获取位置并提交',
    load: [
      'GET /api/activities/{id}/checkin/status — 签到状态、签到时间、活动名称',
    ],
    write: [
      'POST /api/activities/{id}/checkin — 提交（latitude、longitude、address）',
    ],
    nav: ['签到成功 → pages/practice/review?id='],
  },

  'practice-review': {
    summary: '活动评价：星级与文字反馈',
    load: [
      'GET /api/activities/{id}/reviews — 历史评价（author、rating、content、time）',
      'GET /api/activities/{id} — 活动标题（展示用）',
    ],
    write: [
      'POST /api/activities/{id}/reviews — 提交（rating 1-5、content）',
    ],
    nav: ['提交成功 → pages/practice/center 或 navigateBack'],
  },

  checkin: {
    summary: '打卡 Tab：统计、月历、今日待打卡任务',
    load: [
      'GET /api/checkin/stats — totalDays、streakDays',
      'GET /api/checkin/calendar?year=&month= — 月历已打卡日期 checkedDates[]',
      'GET /api/checkin/today-tasks — 待打卡（bookId、chapterId、bookTitle、progress、recordDone、shareDone、groupName）',
      'GET /api/checkin/rank/summary — 排行榜入口（rankType、myRank、periodLabel）',
    ],
    write: [
      'POST /api/checkin/makeup — 补卡（date，可选）',
    ],
    nav: [
      '排行榜入口 → pages/checkin/rank',
      '「录音」→ pages/book/read',
      '「写心得」→ pages/book/note',
      '任务卡片 → pages/book/detail 或 club-detail',
    ],
  },

  'checkin-rank': {
    summary: '打卡排行榜：周榜/月榜/总榜',
    load: [
      'GET /api/checkin/rank?type=week|month|total — top3[]、list[]（rank、name、days、avatar）',
      'GET /api/checkin/rank/me?type= — 我的排名（rank、totalDays、streakDays）',
    ],
    write: [],
    nav: [],
  },

  promise: {
    summary: '承诺 Tab：承诺墙 + 我的承诺',
    load: [
      'GET /api/promises/wall?page=&size= — 承诺墙（id、author、content、progress、witnessCount、status）',
      'GET /api/promises/mine?status=all|ongoing|completed|expired — 我的承诺列表',
    ],
    write: [],
    nav: [
      '「+ 创建」→ pages/promise/create',
      '承诺卡片 → pages/promise/detail?id=',
    ],
  },

  'promise-create': {
    summary: '创建承诺：内容、截止日期、公开/私密',
    load: [
      'GET /api/promises/templates — 承诺模板（可选）',
    ],
    write: [
      'POST /api/promises — 创建（content、deadline、visibility: public|private）',
    ],
    nav: ['创建成功 → pages/promise/detail?id= 或 switchTab pages/promise/index'],
  },

  'promise-detail': {
    summary: '承诺详情：进度、时间线、见证评论',
    load: [
      'GET /api/promises/{id} — content、progress、deadline、status、timeline[]、witnessComments[]',
    ],
    write: [
      'POST /api/promises/{id}/witness-comments — 发表见证（content）',
      'PATCH /api/promises/{id}/progress — 更新进度（可选）',
    ],
    nav: [],
  },

  mine: {
    summary: '我的 Tab：资料、等级经验、能力雷达、功能菜单',
    load: [
      'GET /api/user/profile — 昵称、头像、level、exp、expMax、slogan、stats（阅读分/打卡天/活动次/积分）',
      'GET /api/user/radar — 六维能力 [阅读,思考,行动,分享,社交,写作]',
      'GET /api/messages/unread-count — 未读消息数（消息铃铛红点）',
    ],
    write: [],
    nav: [
      '消息 → pages/mine/message',
      '我的积分 → pages/mine/points',
      '读书记录 → pages/mine/records',
      '我的录音 → pages/mine/audio',
      '我的活动 → pages/mine/activities',
      '我的承诺 → switchTab pages/promise/index',
      '成长地图 → pages/mine/growth-map',
      '设置 → pages/mine/settings',
      '帮助与反馈 → pages/mine/feedback',
    ],
  },

  message: {
    summary: '消息中心：互动/系统/活动通知',
    load: [
      'GET /api/messages?type=all|interaction|system|activity&page=&size= — 消息列表',
      '响应：id、type、icon、title、desc、isNew、linkType、linkTarget、time',
    ],
    write: [
      'POST /api/messages/read — 标记已读（messageIds[]）',
      'POST /api/messages/read-all — 全部已读（可选）',
    ],
    nav: ['点击消息 → 按 linkType 跳转 share / practice-detail / checkin 等'],
  },

  activities: {
    summary: '我的活动：我发起的 / 我报名的',
    load: [
      'GET /api/user/activities?role=created|registered&page=&size= — 活动列表',
      '响应：id、title、time、status、statusType、participantCount、coverColor、role',
    ],
    write: [],
    nav: [
      '列表项 → pages/practice/detail?id=',
      '「创建活动」→ pages/practice/create',
    ],
  },

  'growth-map': {
    summary: '成长地图：等级、勋章、徽章墙、等级路径、成长路径（与共读页数据同源）',
    load: [
      'GET /api/user/growth-map — level、medals、exp、expMax、badges[]、levelPath、growthNodes[]',
    ],
    write: [],
    nav: [],
  },

  points: {
    summary: '我的积分：总额、本月获取、积分明细',
    load: [
      'GET /api/points/summary — 积分总额、monthEarned',
      'GET /api/points/records?page=&size= — 明细（title、amount、type: earn|spend、time）',
    ],
    write: [],
    nav: [
      '「公益兑换」→ pages/mine/charity',
      '「捐赠记录」→ pages/mine/donation',
    ],
  },

  charity: {
    summary: '公益兑换：按分类浏览项目并捐赠积分',
    load: [
      'GET /api/charity/projects?category=education|environment|community — 项目列表',
      '响应：id、title、desc、requiredPoints、raisedPoints、targetPoints、coverColor',
    ],
    write: [
      'POST /api/charity/projects/{id}/donate — 捐赠积分（points）',
    ],
    nav: ['捐赠成功 → pages/mine/donation'],
  },

  donation: {
    summary: '捐赠记录：累计捐赠与证书列表',
    load: [
      'GET /api/charity/donations/summary — 累计积分、参与项目数',
      'GET /api/charity/donations/records?page=&size= — 记录（projectTitle、points、status、certDate）',
    ],
    write: [],
    nav: ['「继续捐赠」→ pages/mine/charity'],
  },

  records: {
    summary: '读书记录：本周阅读日历 + 阅读心得列表',
    load: [
      'GET /api/reading/records/calendar?week= — 本周日历（date、read: boolean）',
      'GET /api/reading/records/notes?page=&size= — 心得（title、date、summary、views、recording.duration 可选）',
    ],
    write: [
      'POST /api/reading/records/export — 导出全部或单条（可选）',
    ],
    nav: ['心得条目 → 详情页或 pages/book/note（待扩展）'],
  },

  audio: {
    summary: '我的录音：全部/已上传/未上传 Tab',
    load: [
      'GET /api/recordings?uploadStatus=all|uploaded|pending&page=&size= — 录音列表',
      '响应：id、bookTitle、chapterTitle、duration、createdAt、uploaded、playProgress',
    ],
    write: [
      'POST /api/recordings/{id}/share — 分享录音（可选）',
      'POST /api/recordings/upload — 补传未上传录音',
    ],
    nav: [
      '条目 → pages/book/read?bookId&chapterId',
      '「分享」→ pages/share/friend',
    ],
  },

  settings: {
    summary: '设置：通知开关、缓存清理',
    load: [
      'GET /api/user/settings — 消息通知、语音提醒等开关',
    ],
    write: [
      'PATCH /api/user/settings — 更新单项或批量',
      'POST /api/user/cache/clear — 清除本地缓存记录',
    ],
    nav: ['帮助与反馈 → pages/mine/feedback'],
  },

  feedback: {
    summary: '帮助与反馈：FAQ + 提交意见',
    load: [
      'GET /api/feedback/faq — 常见问题（question、answer）',
    ],
    write: [
      'POST /api/feedback — 提交意见（content、contact、attachments[]）',
    ],
    nav: [],
  },
};

/** 兼容旧版 flat 数组（若外部仍引用 window.LOGIC[id]） */
window.LOGIC = Object.fromEntries(
  Object.entries(window.PAGE_LOGIC).map(([id, page]) => {
    const lines = [];
    if (page.summary) lines.push(`【说明】${page.summary}`);
    if (page.load?.length) lines.push(...page.load.map((t) => `[加载] ${t}`));
    if (page.write?.length) lines.push(...page.write.map((t) => `[操作] ${t}`));
    if (page.nav?.length) lines.push(...page.nav.map((t) => `[跳转] ${t}`));
    return [id, lines];
  })
);

window.LOGIC.default = window.API_CONVENTIONS;

window.renderPageLogic = function renderPageLogic(pageId) {
  const page = window.PAGE_LOGIC[pageId];
  if (!page) {
    return {
      summary: '暂无专属接口说明，请参考通用约定。',
      sections: [{ title: '通用约定', items: window.API_CONVENTIONS }],
      totalCount: window.API_CONVENTIONS.length,
    };
  }
  const sections = [];
  if (page.load?.length) sections.push({ title: '数据加载', items: page.load });
  if (page.write?.length) sections.push({ title: '写操作', items: page.write });
  if (page.nav?.length) sections.push({ title: '页面跳转', items: page.nav });
  const totalCount =
    (page.load?.length || 0) + (page.write?.length || 0) + (page.nav?.length || 0);
  return { summary: page.summary, sections, totalCount };
};
