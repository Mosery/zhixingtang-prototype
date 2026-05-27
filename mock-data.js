/**
 * 知行堂读书打卡 · HTML 原型 Mock 数据与页面逻辑
 * 供 prototype/index.html 引用：window.MOCK / window.NAV_RULES
 * 接口逻辑说明见 page-logic.js（window.PAGE_LOGIC）
 */
window.MOCK = {
  home: `
    <div class="banner"><h3>知行堂读书打卡</h3><p>读书 · 思考 · 践行 · 成长</p></div>
    <div class="grid2">
      <div class="nav-large" style="background:linear-gradient(135deg,#eef5fd,#e3f0fb)">
        <div class="nav-large-icon" style="background:#4a90e2">📖</div>
        <div><div class="nav-large-title">读</div><div class="nav-large-sub">共读共学</div></div>
      </div>
      <div class="nav-large" style="background:linear-gradient(135deg,#eef6f0,#e3f0e8)">
        <div class="nav-large-icon" style="background:#2d5a3d">🎯</div>
        <div><div class="nav-large-title">行</div><div class="nav-large-sub">践行落地</div></div>
      </div>
    </div>
    <div class="grid4" style="margin-top:10px">
      <div class="nav-small"><div class="nav-small-icon" style="background:#2a9d8f">💭</div><div class="nav-small-title">思</div><div class="nav-small-sub">思考沉淀</div></div>
      <div class="nav-small"><div class="nav-small-icon" style="background:#e67e22">🤝</div><div class="nav-small-title">言</div><div class="nav-small-sub">有言实行</div></div>
      <div class="nav-small"><div class="nav-small-icon" style="background:#d4a017">🏅</div><div class="nav-small-title">奖</div><div class="nav-small-sub">激励兑现</div></div>
      <div class="nav-small"><div class="nav-small-icon" style="background:#26a69a">🏢</div><div class="nav-small-title">入企</div><div class="nav-small-sub">企业定制</div></div>
    </div>
    <div class="quote">读书不仅是获取知识，更是培养思考力和行动力的过程。<span class="quote-author">—— 知行堂创始人</span></div>
    <div class="card">
      <div class="section-head"><span class="section-title">📋 今日任务</span><span class="section-more">完成 33%</span></div>
      <div class="task-row"><div class="task-check done">✓</div><span class="task-name">《活着》第3章阅读打卡</span><span class="task-points">+10分</span></div>
      <div class="task-row"><div class="task-check"></div><span class="task-name">周末读书分享会签到</span><span class="task-points">+20分</span></div>
      <div class="task-row"><div class="task-check"></div><span class="task-name">每日阅读30分钟承诺</span><span class="task-points">+5分</span></div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">📍 线下活动</span><span class="section-more">更多 ›</span></div>
      <div class="activity-item">
        <div class="activity-icon" style="background:#2d5a3d">📚</div>
        <div style="flex:1"><div class="activity-title">周末读书分享会</div><div class="activity-date">05-28 14:00 · 知行堂书店</div></div>
        <span class="tag">报名中</span>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">⭐ 优秀内容推荐</span><span class="section-more">更多 ›</span></div>
      <div style="font-size:13px;color:#555;line-height:1.6">读《活着》让我明白，活着本身就是一种力量……<br><span style="font-size:11px;color:#999">—— 书友 李明</span></div>
    </div>`,

  'practice-center': `
    <div class="detail-hero" style="text-align:center;padding:24px 16px 28px">
      <div style="font-size:18px;font-weight:700">🏃 践行中心</div>
      <div style="font-size:12px;opacity:.85;margin-top:6px">活动 · 参与 · 践行 · 成长</div>
      <div style="display:flex;margin-top:16px;padding:12px 0;background:rgba(255,255,255,.12);border-radius:10px">
        <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700">3</div><div style="font-size:11px;opacity:.85;margin-top:4px">参加活动</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700">3</div><div style="font-size:11px;opacity:.85;margin-top:4px">即将开始</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:20px;font-weight:700">1</div><div style="font-size:11px;opacity:.85;margin-top:4px">报名中</div></div>
      </div>
    </div>
    <div style="display:flex;gap:10px;padding:0 12px;margin-top:-12px">
      <div class="practice-module-card" data-goto="practice-activities" style="flex:1;background:#fff;border-radius:10px;padding:16px 8px;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,.06)">
        <div style="width:44px;height:44px;border-radius:12px;background:#eef6f0;display:flex;align-items:center;justify-content:center;margin:0 auto;color:#2d5a3d;font-size:20px">📅</div>
        <div style="font-size:13px;font-weight:600;margin-top:8px">活动广场</div>
      </div>
      <div class="practice-module-card" data-goto="activities" style="flex:1;background:#fff;border-radius:10px;padding:16px 8px;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,.06)">
        <div style="width:44px;height:44px;border-radius:12px;background:#eef5fd;display:flex;align-items:center;justify-content:center;margin:0 auto;color:#4a90e2;font-size:20px">📋</div>
        <div style="font-size:13px;font-weight:600;margin-top:8px">我的活动</div>
      </div>
    </div>
    <div class="card" style="margin:12px">
      <div class="section-head"><span class="section-title">即将开始</span><span class="section-more" data-goto="practice-activities">全部 ›</span></div>
      <div class="list-item" data-goto="practice-detail">
        <div class="list-cover" style="background:#2a9d8f">📚</div>
        <div style="flex:1"><div class="list-title">春日读书分享会</div><div class="list-meta">05-26 14:00</div><div class="list-meta">知行堂书店·三楼</div></div>
        <span class="tag">已报名</span>
      </div>
      <div class="list-item" style="border:none" data-goto="practice-detail">
        <div class="list-cover" style="background:#1e6b6b">📹</div>
        <div style="flex:1"><div class="list-title">《人类简史》线上共读营</div><div class="list-meta">05-15 ~ 05-30</div><div class="list-meta">腾讯会议</div></div>
        <span class="tag">已报名</span>
      </div>
    </div>`,

  'practice-activities': `
    <div class="tabs">
      <div class="tab active">全部</div><div class="tab">已报名</div><div class="tab">未报名</div><div class="tab">已完成</div>
    </div>
    <div class="list-item">
      <div class="list-cover" style="background:#2d5a3d">读书分享</div>
      <div><div class="list-title">周末读书分享会</div><div class="list-meta">📅 05-28 14:00</div><div class="list-meta">📍 知行堂书店·三楼</div><span class="tag">报名中</span></div>
    </div>
    <div class="list-item">
      <div class="list-cover" style="background:#1e6b8a">线上共读</div>
      <div><div class="list-title">《原则》线上共读营</div><div class="list-meta">📅 06-01 20:00</div><div class="list-meta">💻 腾讯会议</div><span class="tag">进行中</span></div>
    </div>
    <div class="list-item">
      <div class="list-cover" style="background:#2a9d8f">社区公益</div>
      <div><div class="list-title">社区阅读陪伴日</div><div class="list-meta">📅 06-05 09:00</div><div class="list-meta">📍 阳光社区中心</div><span class="tag">未报名</span></div>
    </div>`,

  checkin: `
    <div class="hero">
      <div class="hero-stats">
        <div><div class="hero-num">28</div><div class="hero-label">累计打卡(天)</div></div>
        <div><div class="hero-num">5</div><div class="hero-label">连续打卡(天)</div></div>
      </div>
      <div style="margin-top:14px;padding:10px;background:rgba(255,255,255,.15);border-radius:10px;display:flex;justify-content:space-between;align-items:center;font-size:13px">
        <span>🏆 排行榜</span><span>周榜第 3 名 ›</span>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">2026年5月</span><span>‹ ›</span></div>
      <div class="calendar-grid" style="color:#999;margin-bottom:6px"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
      <div class="calendar-grid">
        <span></span><span></span><span></span><span></span><span class="cal-day checked">1</span><span class="cal-day checked">2</span><span class="cal-day">3</span>
        <span class="cal-day checked">4</span><span class="cal-day checked">5</span><span class="cal-day">6</span><span class="cal-day">7</span><span class="cal-day">8</span><span class="cal-day">9</span><span class="cal-day">10</span>
        <span class="cal-day checked">11</span><span class="cal-day">12</span><span class="cal-day">13</span><span class="cal-day">14</span><span class="cal-day">15</span><span class="cal-day">16</span><span class="cal-day">17</span>
        <span class="cal-day">18</span><span class="cal-day">19</span><span class="cal-day">20</span><span class="cal-day">21</span><span class="cal-day">22</span><span class="cal-day">23</span><span class="cal-day">24</span>
        <span class="cal-day">25</span><span class="cal-day">26</span><span class="cal-day today">27</span><span class="cal-day">28</span><span class="cal-day">29</span><span class="cal-day">30</span><span class="cal-day">31</span>
      </div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">今日待打卡</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:8px">《活着》第3章</div>
      <div style="font-size:12px;color:#666;margin-bottom:8px">📄 预计 15 分钟 · 📚 知行堂共读营</div>
      <div style="display:flex;gap:8px"><span class="tag">录音</span><span class="tag">分享</span><span class="tag">65%</span></div>
      <div style="margin-top:12px;display:flex;gap:8px">
        <div style="flex:1;text-align:center;padding:10px;border:1px solid #2d5a3d;color:#2d5a3d;border-radius:8px;font-size:13px">录音 ›</div>
        <div style="flex:1;text-align:center;padding:10px;border:1px solid #e67e22;color:#e67e22;border-radius:8px;font-size:13px">分享 ›</div>
      </div>
    </div>`,

  promise: `
    <div style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;background:#fff">
      <span style="font-size:16px;font-weight:600">🤝 承诺</span>
      <span style="color:#2d5a3d;font-size:14px">+ 创建</span>
    </div>
    <div class="tabs"><div class="tab active">承诺墙</div><div class="tab">我的承诺</div></div>
    <div class="promise-grid">
      <div class="promise-card"><span class="tag">进行中</span><div style="font-size:13px;font-weight:600;margin:8px 0">每日阅读30分钟</div><div style="height:4px;background:#eee;border-radius:2px"><div style="width:65%;height:100%;background:#2d5a3d;border-radius:2px"></div></div><div style="font-size:11px;color:#999;margin-top:6px">65% · 👁 12人见证</div></div>
      <div class="promise-card"><span class="tag">进行中</span><div style="font-size:13px;font-weight:600;margin:8px 0">本月读完2本书</div><div style="height:4px;background:#eee;border-radius:2px"><div style="width:40%;height:100%;background:#2d5a3d;border-radius:2px"></div></div><div style="font-size:11px;color:#999;margin-top:6px">40% · 👁 8人见证</div></div>
      <div class="promise-card"><span class="tag">已完成</span><div style="font-size:13px;font-weight:600;margin:8px 0">每周写1篇心得</div><div style="font-size:11px;color:#999;margin-top:6px">✓ · 👁 15人见证</div></div>
      <div class="promise-card"><span class="tag">进行中</span><div style="font-size:13px;font-weight:600;margin:8px 0">坚持早起阅读</div><div style="height:4px;background:#eee;border-radius:2px"><div style="width:80%;height:100%;background:#2d5a3d;border-radius:2px"></div></div><div style="font-size:11px;color:#999;margin-top:6px">80% · 👁 6人见证</div></div>
    </div>`,

  mine: `
    <div class="profile-header">
      <div class="avatar">张</div>
      <div style="font-size:18px;font-weight:600">张三</div>
      <div style="font-size:12px;opacity:.8;margin:4px 0">读书 · 行动 · 成长</div>
      <div style="display:inline-block;background:rgba(255,255,255,.2);padding:4px 12px;border-radius:999px;font-size:12px;margin-bottom:12px">Lv.12 资深书友</div>
      <div style="display:flex;justify-content:center;gap:32px">
        <div><div style="font-size:20px;font-weight:700">320</div><div style="font-size:11px;opacity:.8">阅读(分)</div></div>
        <div><div style="font-size:20px;font-weight:700">28</div><div style="font-size:11px;opacity:.8">打卡(天)</div></div>
        <div><div style="font-size:20px;font-weight:700">6</div><div style="font-size:11px;opacity:.8">活动(次)</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">等级经验</span><span>Lv.12</span></div>
      <div style="height:8px;background:#eee;border-radius:4px"><div style="width:65%;height:100%;background:#2d5a3d;border-radius:4px"></div></div>
      <div style="font-size:11px;color:#999;margin-top:6px;display:flex;justify-content:space-between"><span>650/1000</span><span>距 Lv.13 差 350</span></div>
    </div>
    <div class="card" style="text-align:center;padding:20px;color:#666;font-size:12px">能力雷达图（canvas）</div>
    <div class="card">
      <div class="menu-item"><span>💎 我的积分</span><span style="color:#999">520 ›</span></div>
      <div class="menu-item"><span>📖 读书记录</span><span style="color:#999">›</span></div>
      <div class="menu-item"><span>🎙 我的录音</span><span style="color:#999">›</span></div>
      <div class="menu-item"><span>📅 我的活动</span><span style="color:#999">›</span></div>
      <div class="menu-item"><span>🤝 我的承诺</span><span style="color:#999">›</span></div>
      <div class="menu-item"><span>🗺 成长地图</span><span style="color:#999">›</span></div>
      <div class="menu-item"><span>⚙️ 设置</span><span style="color:#999">›</span></div>
      <div class="menu-item"><span>❓ 帮助与反馈</span><span style="color:#999">›</span></div>
    </div>`,

  read: `
    <div class="read-page">
      <div class="read-quick-grid">
        <div class="read-quick-card club">
          <div class="read-quick-icon club">📖</div>
          <div class="read-quick-title">读书会</div>
          <div class="read-quick-desc">共读打卡 · 录音朗读</div>
        </div>
        <div class="read-quick-card share">
          <div class="read-quick-icon share">↗</div>
          <div class="read-quick-title">分享圈</div>
          <div class="read-quick-desc">心得交流 · 共同成长</div>
        </div>
        <div class="read-quick-card audio">
          <div class="read-quick-icon audio">🎙</div>
          <div class="read-quick-title">录音库</div>
          <div class="read-quick-desc">我的录音</div>
        </div>
        <div class="read-quick-card plaza">
          <div class="read-quick-icon plaza">⭐</div>
          <div class="read-quick-title">精选广场</div>
          <div class="read-quick-desc">优质内容精选</div>
        </div>
      </div>

      <div class="read-section-card">
        <div class="read-section-title">今日共读</div>
        <div class="read-book-item">
          <div class="read-book-cover" style="background:#eef5fd">活法</div>
          <div class="read-book-info">
            <div class="read-book-title">《活法》</div>
            <div class="read-book-chapter">第一章第11节：倾听工作现场的"神灵之声"</div>
            <div class="read-book-meta">合肥新班预备小组</div>
          </div>
          <span class="read-book-arrow">›</span>
        </div>
        <div class="read-book-item">
          <div class="read-book-cover" style="background:#eef6f0">活着</div>
          <div class="read-book-info">
            <div class="read-book-title">《活着》</div>
            <div class="read-book-chapter">第一章 少年福贵</div>
            <div class="read-book-meta">知行堂共读营</div>
          </div>
          <span class="read-book-arrow">›</span>
        </div>
      </div>

      <div class="read-growth">
        <div class="read-growth-section">
          <div class="read-section-head">
            <span class="read-section-icon">🏆</span>
            <span class="read-section-title">徽章墙</span>
          </div>
          <div class="read-badge-scroll">
            <div class="read-badge-item">
              <div class="read-badge-circle gold">🏅</div>
              <div class="read-badge-name">阅读新星</div>
            </div>
            <div class="read-badge-item">
              <div class="read-badge-circle green">📖</div>
              <div class="read-badge-name">读书达人</div>
            </div>
            <div class="read-badge-item">
              <div class="read-badge-circle teal">✍️</div>
              <div class="read-badge-name">创作能手</div>
            </div>
            <div class="read-badge-item">
              <div class="read-badge-circle locked">🔒</div>
              <div class="read-badge-name">未解锁</div>
            </div>
          </div>
        </div>

        <div class="read-growth-section">
          <div class="read-section-head">
            <span class="read-section-icon">📈</span>
            <span class="read-section-title">等级路径</span>
          </div>
          <div class="read-level-path">
            <div class="read-level-node current">12</div>
            <div class="read-level-track"><div class="read-level-fill" style="width:65%"></div></div>
            <div class="read-level-node next">13</div>
            <span class="read-level-next-label">Lv.13</span>
          </div>
        </div>

        <div class="read-growth-section">
          <div class="read-section-head">
            <span class="read-section-icon">🗺️</span>
            <span class="read-section-title">成长路径</span>
          </div>
          <div class="read-path-card done">
            <div class="read-path-top">
              <div class="read-path-icon done">📚</div>
              <div class="read-path-info">
                <div class="read-path-title">阅读入门之路</div>
                <div class="read-path-desc">5个节点 · 适合初学者</div>
              </div>
            </div>
            <div class="read-path-bar"><div class="read-path-bar-fill"></div></div>
            <div class="read-path-footer"><span>已完成</span></div>
          </div>
          <div class="read-path-card active">
            <div class="read-path-top">
              <div class="read-path-icon active">🚀</div>
              <div class="read-path-info">
                <div class="read-path-title">行动践行之路</div>
                <div class="read-path-desc">5个节点 · 参与线下活动</div>
              </div>
            </div>
            <div class="read-path-bar"><div class="read-path-bar-fill"></div></div>
            <div class="read-path-footer"><span>2/5 完成</span><span class="read-path-footer-right">奖励: 200积分</span></div>
          </div>
          <div class="read-path-card locked">
            <div class="read-path-top">
              <div class="read-path-icon locked">🔒</div>
              <div class="read-path-info">
                <div class="read-path-title">创作大师之路</div>
                <div class="read-path-desc">需要 Lv.20 解锁</div>
              </div>
            </div>
            <div class="read-path-bar"><div class="read-path-bar-fill"></div></div>
            <div class="read-path-footer"><span>未解锁</span></div>
          </div>
        </div>
      </div>
    </div>`,

  enterprise: '',

  'club-list': `
    <div class="detail-hero">
      <div style="font-size:18px;font-weight:700">读书会</div>
      <div style="font-size:12px;opacity:.85;margin-top:4px">选择小组，开启共读打卡</div>
    </div>
    <div class="card">
      <div class="list-item">
        <div class="list-cover" style="background:#2d5a3d">知行堂</div>
        <div style="flex:1">
          <div class="list-title">知行堂共读营</div>
          <div style="display:flex;gap:6px;margin:6px 0"><span class="tag">官方</span><span class="tag">活跃</span></div>
          <div class="list-meta">在读书籍：《活着》</div>
          <div class="list-meta">今日章节：第3章 · 32位成员</div>
        </div>
      </div>
      <div class="list-item" style="border:none">
        <div class="list-cover" style="background:#1e6b8a">经典</div>
        <div style="flex:1">
          <div class="list-title">经典文学小组</div>
          <div style="display:flex;gap:6px;margin:6px 0"><span class="tag">共读</span></div>
          <div class="list-meta">在读书籍：《百年孤独》</div>
          <div class="list-meta">今日章节：第1章 · 18位成员</div>
        </div>
      </div>
    </div>`,

  'club-detail': `
    <div class="detail-hero">
      <div style="font-size:18px;font-weight:700">知行堂共读营</div>
      <div style="font-size:12px;opacity:.85;margin-top:4px">张老师 · 32 位成员</div>
    </div>
    <div class="card">
      <div style="display:flex;gap:6px;margin-bottom:10px"><span class="tag">官方</span><span class="tag">活跃</span></div>
      <div class="list-meta">📅 每周一至周五 07:00 共读提醒</div>
      <div style="font-size:13px;color:#555;margin-top:10px;line-height:1.6">以经典文学为主，每日共读打卡，录音朗读，心得分享。</div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">今日共读</span><span class="section-more">2 项</span></div>
      <div class="list-item">
        <div class="list-cover" style="background:#8b4513;width:56px;height:72px">活着</div>
        <div><div class="list-title">《活着》第3章</div><div class="list-meta">预计 15 分钟</div><div style="display:flex;gap:6px;margin-top:6px"><span class="tag">录音</span><span class="tag">分享</span><span class="tag">65%</span></div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">小组成员</div>
      <div class="scroll-x">
        <div class="member-avatar" style="background:#4a90e2">张</div>
        <div class="member-avatar" style="background:#e67e22">李</div>
        <div class="member-avatar" style="background:#2a9d8f">王</div>
        <div class="member-avatar" style="background:#d4a017">赵</div>
      </div>
    </div>`,

  plaza: `
    <div class="detail-hero">
      <div style="font-size:18px;font-weight:700">精选广场</div>
      <div style="font-size:12px;opacity:.85;margin-top:4px">发现优质内容，遇见同频书友</div>
    </div>
    <div class="tabs"><div class="tab active">推荐</div><div class="tab">热门</div><div class="tab">最新</div><div class="tab">关注</div></div>
    <div class="card">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
        <div class="member-avatar" style="background:#4a90e2;width:36px;height:36px;font-size:12px">李</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">李明 <span class="tag">精选作者</span></div></div>
        <span style="font-size:11px;color:#999">04-27</span>
      </div>
      <div style="font-size:14px;font-weight:600;margin-bottom:6px">读《活着》的三点感悟</div>
      <div style="font-size:13px;color:#555;line-height:1.6">命运让人深思，活着本身就是一种力量……</div>
      <div style="font-size:11px;color:#999;margin-top:8px">♡ 128 · 💬 24 · ↗ 8</div>
    </div>
    <div class="card">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
        <div class="member-avatar" style="background:#2d5a3d;width:36px;height:36px;font-size:12px">王</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">王书友</div></div>
        <span style="font-size:11px;color:#999">04-26</span>
      </div>
      <div style="font-size:14px;font-weight:600;margin-bottom:6px">如何养成每日阅读习惯</div>
      <div style="font-size:13px;color:#555;line-height:1.6">固定时间、固定地点、从10分钟开始……</div>
      <div style="font-size:11px;color:#999;margin-top:8px">♡ 86 · 💬 12 · ↗ 5</div>
    </div>`,

  'plaza-detail': `
    <div style="padding:12px;display:flex;gap:10px;align-items:center;background:#fff;border-bottom:1px solid #f0f0f0">
      <div class="member-avatar" style="background:#4a90e2">李</div>
      <div style="flex:1"><div style="font-size:14px;font-weight:600">李明</div><div style="font-size:11px;color:#999">资深书友 · 推荐语：值得一读</div></div>
      <div class="btn-primary" style="margin:0;padding:6px 14px;font-size:12px;border-radius:999px">关注</div>
    </div>
    <div style="padding:16px">
      <div style="font-size:18px;font-weight:700;margin-bottom:10px">读《活着》的三点感悟</div>
      <div style="display:flex;gap:6px;margin-bottom:14px"><span class="tag">读后感</span><span class="tag">经典文学</span></div>
      <div style="font-size:14px;color:#444;line-height:1.8">第一，活着本身就是一种力量。福贵经历了太多失去，但他依然选择活着……<br><br>第二，珍惜当下拥有的一切。当我们抱怨生活时，不妨想想……<br><br>第三，阅读让我们看见更广阔的人生。</div>
    </div>
    <div style="padding:12px 16px;border-top:1px solid #f0f0f0;display:flex;gap:24px;font-size:13px;color:#666">
      <span>♡ 128 点赞</span><span>💬 24 评论</span><span style="color:#2d5a3d">↗ 分享</span>
    </div>`,

  'book-detail': `
    <div class="detail-hero" style="text-align:center">
      <div class="list-cover" style="background:#8b4513;width:80px;height:100px;margin:0 auto 12px">活着</div>
      <div style="font-size:18px;font-weight:700">《活着》</div>
      <div style="font-size:13px;opacity:.85;margin:4px 0">余华 著</div>
      <div style="display:flex;justify-content:center;gap:8px;margin:10px 0"><span class="tag">经典</span><span class="tag">文学</span></div>
      <div style="display:flex;justify-content:center;gap:24px;font-size:12px;margin-top:8px">
        <div><div style="font-size:16px">♡</div><div>收藏</div></div>
        <div><div style="font-size:16px">🔖</div><div>书单</div></div>
        <div><div style="font-size:16px">📖</div><div>阅读</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:8px">内容简介</div>
      <div style="font-size:13px;color:#555;line-height:1.7">讲述了农村人福贵悲惨的人生遭遇，以冷静的笔触展现生命的韧性与尊严。</div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">章节列表</div>
      <div class="menu-item"><span>第一章 少年福贵</span><span style="color:#999;font-size:12px">🎧 12:30 ›</span></div>
      <div class="menu-item"><span>第二章 赌债缠身</span><span style="color:#999;font-size:12px">🕐 未读 ›</span></div>
      <div class="menu-item" style="border:none"><span style="color:#ccc">第三章 家道中落 🔒</span><span style="color:#999;font-size:12px">需完成前章</span></div>
    </div>`,

  'book-read': `
    <div class="card">
      <div class="form-section" style="display:flex;align-items:center;justify-content:space-between"><label class="form-label" style="margin:0">📖 书籍名称</label><span style="font-size:14px;font-weight:600;color:#333">活着</span></div>
      <div class="form-section" style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f0f0f0;padding-top:12px;margin-top:12px"><label class="form-label" style="margin:0">☰ 所读章节</label><span style="font-size:14px;font-weight:600;color:#333">第三章 家道中落</span></div>
    </div>
    <div class="card">
      <div style="font-size:16px;font-weight:600;margin-bottom:4px">第三章 家道中落</div>
      <div style="font-size:12px;color:#999;margin-bottom:12px">—— 选自《活着》余华</div>
      <div style="font-size:14px;color:#444;line-height:1.8;max-height:280px;overflow:hidden">那是个晴朗的中午，我爹让我到城里去请个长工来。我走在田埂上，看着远处的村庄，心里想着……</div>
    </div>
    <div class="read-bottom-bar">
      <div class="read-action read-action-record">
        <div class="read-action-icon record-icon">🎙</div>
        <div class="read-action-label">录音</div>
      </div>
      <div class="read-action read-action-upload">
        <div class="read-action-icon upload-icon">+</div>
        <div class="read-action-label">上传</div>
      </div>
      <div class="read-action read-action-note">
        <div class="read-action-icon note-icon">✍</div>
        <div class="read-action-label">写心得</div>
      </div>
    </div>`,

  'book-note': `
    <div class="card" style="background:linear-gradient(135deg,#eef6f0,#f8fbf9)">
      <div style="font-size:15px;font-weight:600">《活着》</div>
      <div style="font-size:12px;color:#666;margin-top:4px">第三章 家道中落</div>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div><span class="tag">摘</span> <span style="font-weight:600;font-size:14px">原文摘抄</span></div>
        <span style="font-size:12px;color:#2d5a3d">📋 摘抄</span>
      </div>
      <div class="form-textarea" style="min-height:60px;font-size:13px;color:#555">人是为了活着本身而活着，而不是为了活着之外的任何事物而活着。</div>
      <div style="font-size:11px;color:#999;text-align:right">42/500</div>
    </div>
    <div class="card">
      <div style="margin-bottom:8px"><span class="tag">悟</span> <span style="font-weight:600;font-size:14px">心得感悟</span></div>
      <div class="form-textarea" style="min-height:60px;font-size:13px;color:#555">读这一章让我感受到命运的无常，也理解了……</div>
      <div style="font-size:11px;color:#999;text-align:right">68/800</div>
    </div>
    <div class="card">
      <div style="margin-bottom:8px"><span class="tag">行</span> <span style="font-weight:600;font-size:14px">有言实行</span></div>
      <div class="form-textarea" style="min-height:50px;font-size:13px;color:#999">我承诺……</div>
    </div>
    <div class="btn-primary">分享到分享圈</div>`,

  'practice-detail': `
    <div class="detail-hero"><div style="font-size:18px;font-weight:700">周末读书分享会</div></div>
    <div class="card">
      <div style="display:flex;gap:6px;margin-bottom:10px"><span class="tag">线下</span><span class="tag">读书会</span><span class="tag">已报名</span></div>
      <div class="list-meta">🕐 2026-05-28 14:00-16:00</div>
      <div class="list-meta" style="margin:6px 0">📍 知行堂书店·三楼活动区 <span style="color:#2d5a3d;margin-left:8px">签到 ›</span></div>
      <div class="list-meta">👥 已报名 12/30 人</div>
      <div class="btn-primary" style="background:#eee;color:#2d5a3d;margin-top:12px">已报名</div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:8px">活动详情</div>
      <div style="font-size:13px;color:#555;line-height:1.7">围绕「春日阅读」主题展开，邀请书友分享近期阅读收获，含主题分享、自由交流与茶歇环节。</div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">活动成员 (4/12)</div>
      <div class="scroll-x">
        <div class="member-avatar" style="background:#4a90e2">张</div>
        <div class="member-avatar" style="background:#e67e22">李</div>
        <div class="member-avatar" style="background:#2a9d8f">王</div>
        <div class="member-avatar" style="background:#eee;color:#999;border:2px dashed #ccc">+</div>
      </div>
    </div>`,

  'practice-checkin': `
    <div style="padding:40px 20px;text-align:center">
      <div style="width:80px;height:80px;border-radius:50%;background:#eef6f0;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;color:#2d5a3d">📍</div>
      <div style="font-size:16px;font-weight:600;margin-bottom:8px">定位签到</div>
      <div style="font-size:13px;color:#666;margin-bottom:4px">到达活动地点后，点击下方按钮完成签到</div>
      <div style="font-size:12px;color:#999;margin-bottom:24px">需在活动地点 500 米范围内</div>
      <div class="btn-primary">📍 定位签到</div>
    </div>
    <div class="card">
      <div class="menu-item"><span>签到状态</span><span style="color:#999">未签到</span></div>
      <div class="menu-item" style="border:none"><span>签到时间</span><span style="color:#999">—</span></div>
    </div>`,

  'practice-review': `
    <div class="card" style="text-align:center;padding:24px">
      <div style="font-size:28px;color:#c9a227;margin-bottom:12px">★★★★☆</div>
      <div class="form-textarea" style="text-align:left" placeholder="分享你的活动体验...">活动组织得很好，书友交流很有收获！</div>
      <div class="btn-primary">提交评价</div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">🕐 历史评价</div>
      <div style="padding:10px 0;border-bottom:1px solid #f0f0f0">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:13px">张三</span><span style="color:#c9a227;font-size:12px">★★★★★</span></div>
        <div style="font-size:13px;color:#555">非常棒的活动，收获很多！</div>
        <div style="font-size:11px;color:#999;margin-top:4px">04-28 16:30</div>
      </div>
    </div>`,

  'checkin-rank': `
    <div class="detail-hero" style="text-align:center;padding-bottom:24px">
      <div class="tabs" style="background:transparent;border:none;margin-bottom:16px">
        <div class="tab active" style="color:#fff;border-bottom-color:#fff">周榜</div>
        <div class="tab" style="color:rgba(255,255,255,.7)">月榜</div>
        <div class="tab" style="color:rgba(255,255,255,.7)">总榜</div>
      </div>
      <div style="display:flex;justify-content:center;gap:20px;align-items:flex-end">
        <div style="text-align:center"><div class="member-avatar" style="background:#e8ecf0;margin:0 auto">李</div><div style="font-size:12px;margin-top:6px;color:#fff">李阅读</div><div style="font-size:11px;color:rgba(255,255,255,.8)">🥈 6天</div></div>
        <div style="text-align:center"><div class="member-avatar" style="background:#c9a227;width:52px;height:52px;margin:0 auto">王</div><div style="font-size:12px;margin-top:6px;color:#fff">王书友</div><div style="font-size:11px;color:rgba(255,255,255,.8)">🥇 7天</div></div>
        <div style="text-align:center"><div class="member-avatar" style="background:#eef6f0;margin:0 auto">张</div><div style="font-size:12px;margin-top:6px;color:#fff">张三</div><div style="font-size:11px;color:rgba(255,255,255,.8)">🥉 5天</div></div>
      </div>
    </div>
    <div class="card">
      <div class="task-row"><span style="width:24px;color:#999">4</span><span class="task-name">赵六</span><span class="task-points">4天</span></div>
      <div class="task-row"><span style="width:24px;color:#999">5</span><span class="task-name">钱七</span><span class="task-points">4天</span></div>
    </div>
    <div style="position:sticky;bottom:0;background:#fff;border-top:1px solid #eee;padding:12px 16px;display:flex;justify-content:space-between;align-items:center">
      <div style="display:flex;gap:10px;align-items:center"><div class="member-avatar" style="background:#eef6f0;width:36px;height:36px;font-size:12px">张</div><div><div style="font-size:11px;color:#999">我的排名</div><div style="font-size:13px;font-weight:600">张三</div></div></div>
      <div style="text-align:right"><div style="font-size:16px;font-weight:700;color:#2d5a3d">第 3 名</div><div style="font-size:11px;color:#999">5 天 · 连续 5 天</div></div>
    </div>`,

  'promise-create': `
    <div class="card">
      <div class="form-section"><label class="form-label">承诺内容</label><div class="form-textarea" style="color:#999">我承诺...</div></div>
      <div class="form-section"><label class="form-label">截止期限</label><div class="form-input">2026/06/26 📅</div></div>
      <div class="form-section">
        <label class="form-label">选择模板</label>
        <div class="chip-row">
          <span class="chip active">📚 阅读计划</span>
          <span class="chip">✍️ 写作计划</span>
          <span class="chip">🏃 行动计划</span>
        </div>
      </div>
      <div class="form-section">
        <label class="form-label">公开范围</label>
        <div class="chip-row">
          <span class="chip active">公开</span>
          <span class="chip">仅好友</span>
        </div>
      </div>
    </div>
    <div class="btn-primary">发布承诺</div>`,

  'promise-detail': `
    <div class="detail-hero">
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
        <div class="member-avatar" style="background:#4a90e2">张</div>
        <span>张三</span>
      </div>
      <div style="font-size:18px;font-weight:700;margin-bottom:8px">每日阅读30分钟</div>
      <div style="font-size:13px;opacity:.85;margin-bottom:12px">坚持每日阅读，培养良好习惯</div>
      <div style="height:6px;background:rgba(255,255,255,.3);border-radius:3px"><div style="width:65%;height:100%;background:#fff;border-radius:3px"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-top:8px;opacity:.85"><span>进度 65%</span><span>剩余 12 天</span></div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">进度更新</div>
      <div style="font-size:13px;color:#555;padding:8px 0;border-bottom:1px solid #f0f0f0">今日完成30分钟阅读 ✓<br><span style="font-size:11px;color:#999">04-27 21:30</span></div>
      <div style="font-size:13px;color:#555;padding:8px 0">已连续打卡5天<br><span style="font-size:11px;color:#999">04-26 20:15</span></div>
    </div>
    <div class="card">
      <div class="section-title" style="margin-bottom:10px">见证评论</div>
      <div class="form-textarea" style="min-height:50px;font-size:13px;color:#999">写下你的见证与鼓励...</div>
      <div class="btn-primary" style="margin:8px 0 12px">发表见证</div>
      <div style="display:flex;gap:10px;padding:10px 0;border-top:1px solid #f0f0f0">
        <div class="member-avatar" style="background:#2a9d8f;width:32px;height:32px;font-size:11px">李</div>
        <div><div style="font-size:13px;font-weight:600">李四</div><div style="font-size:12px;color:#555;margin-top:4px">加油！坚持就是胜利 💪</div></div>
      </div>
    </div>`,

  share: `
    <div class="tabs"><div class="tab active">分享圈</div><div class="tab">精彩分享</div><div class="tab">我的分享</div></div>
    <div style="padding:8px 12px;background:#fff;border-bottom:1px solid #eee">
      <div class="chip-row"><span class="chip active">最新</span><span class="chip">最热</span><span class="chip">经营者分享</span><span class="chip">我的关注</span></div>
    </div>
    <div class="share-card card">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
        <div class="avatar" style="width:32px;height:32px;font-size:14px;margin:0;background:#eef6f0;color:#666">张</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600">张三</div>
          <div style="font-size:11px;color:#bbb;margin-top:2px">05-22 09:30</div>
        </div>
        <span class="tag" style="background:#faf6eb;color:#c9a227">精彩</span>
      </div>
      <div style="font-size:13px;line-height:1.6;color:#444">读完《活着》久久不能平静，福贵的一生让我深刻体会到生命的韧性与活着的意义。推荐大家读一读这本书。</div>
      <div style="font-size:12px;color:#2d5a3d;margin-top:8px">📖 《活着》</div>
      <div class="share-stats">
        <span class="share-stat">❤ 28</span>
        <span class="share-stat">💬 2</span>
        <span class="share-action">↗ 分享</span>
      </div>
      <div style="margin-top:10px;padding:8px 10px;background:#f8f8f8;border-radius:8px;font-size:12px;color:#666">
        <span style="color:#2d5a3d;font-weight:500">李四：</span>有收获
      </div>
      <div class="chip-row" style="margin-top:10px;padding-top:10px;border-top:1px solid #f5f5f5">
        <span class="chip">很棒</span><span class="chip">有收获</span><span class="chip">有道理</span><span class="chip">一起成长</span>
      </div>
    </div>`,

  'share-friend': `
    <div class="share-friend-actions">
      <div class="share-friend-action">
        <div class="share-friend-action-icon text">T</div>
        <div class="share-friend-action-label">文本分享</div>
      </div>
      <div class="share-friend-action">
        <div class="share-friend-action-icon wechat">微</div>
        <div class="share-friend-action-label">分享给好友</div>
      </div>
      <div class="share-friend-action">
        <div class="share-friend-action-icon poster">🖼</div>
        <div class="share-friend-action-label">生成海报</div>
      </div>
    </div>
    <div class="share-friend-preview card">
      <div class="share-friend-brand">知行堂</div>
      <div class="share-friend-title">活着 · 读书分享</div>
      <div class="share-friend-cover">
        <div class="share-friend-cover-title">《活着》</div>
        <div class="share-friend-cover-sub">分享圈</div>
      </div>
      <div class="share-friend-content">读完《活着》久久不能平静，福贵的一生让我深刻体会到生命的韧性与活着的意义。推荐大家读一读这本书。</div>
      <div class="share-friend-footer">🔗 小程序</div>
    </div>`,

  message: `
    <div class="tabs"><div class="tab active">全部</div><div class="tab">互动</div><div class="tab">系统</div><div class="tab">活动</div></div>
    <div class="list-item">
      <div class="list-cover" style="background:#eef6f0;width:44px;height:44px;border-radius:10px;color:#2d5a3d">❤</div>
      <div style="flex:1"><div class="list-title">李四 赞了你的打卡</div><div class="list-meta">坚持阅读第3天，加油！</div></div>
      <span class="tag">新</span>
    </div>
    <div class="list-item">
      <div class="list-cover" style="background:#eef6f0;width:44px;height:44px;border-radius:10px;color:#2d5a3d">💬</div>
      <div style="flex:1"><div class="list-title">王五 评论了你的帖子</div><div class="list-meta">写得真好，感同身受</div></div>
    </div>
    <div class="list-item">
      <div class="list-cover" style="background:#faf6eb;width:44px;height:44px;border-radius:10px">🎁</div>
      <div style="flex:1"><div class="list-title">系统通知：积分到账</div><div class="list-meta">阅读打卡积分 +10 已到账</div></div>
    </div>`,

  activities: `
    <div class="tabs"><div class="tab active">我发起的</div><div class="tab">我报名的</div></div>
    <div class="list-item" data-goto="practice-detail">
      <div class="list-cover" style="background:#4a90e2">夏日<br>读书</div>
      <div><div class="list-title">夏日读书分享会</div><div class="list-meta">📅 05-01 14:00</div><span class="tag">报名中</span><div class="list-meta">5人报名</div></div>
    </div>
    <div style="position:fixed;left:12px;right:12px;bottom:16px;height:48px;border-radius:999px;background:linear-gradient(180deg,#3d7a52,#2d5a3d);color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:600;box-shadow:0 4px 12px rgba(45,90,61,.3)" data-goto="practice-create">+ 创建活动</div>`,

  'practice-create': `
    <div class="card">
      <div class="form-section"><label class="form-label">活动名称</label><div class="form-input">夏日读书分享会</div></div>
      <div class="form-section"><label class="form-label">活动类型</label>
        <div class="form-input" style="display:flex;justify-content:space-between;align-items:center;border-color:#2d5a3d">读书会 <span style="color:#999;font-size:12px">▲</span></div>
        <div style="margin-top:8px;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden">
          <div style="padding:12px 14px;background:#eef6f0;color:#2d5a3d;font-weight:600;display:flex;justify-content:space-between"><span>读书会</span><span>✓</span></div>
          <div style="padding:12px 14px;border-top:1px solid #f5f5f5;color:#333">分享会</div>
          <div style="padding:12px 14px;border-top:1px solid #f5f5f5;color:#333">线下聚会</div>
        </div>
      </div>
      <div class="form-section"><label class="form-label">活动时间</label><div class="form-input">2026-05-01 14:00</div></div>
      <div class="form-section"><label class="form-label">活动地点</label><div style="display:flex;gap:8px;align-items:center"><div class="form-input" style="flex:1">知行堂书店</div><div style="width:36px;height:36px;border-radius:50%;background:#4a90e2;color:#fff;display:flex;align-items:center;justify-content:center">📍</div></div></div>
      <div class="form-section"><label class="form-label">活动封面</label><div style="height:120px;border:1px dashed #ddd;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:28px">+</div></div>
      <div class="form-section"><label class="form-label">活动描述</label><div class="form-textarea" style="color:#999">描述你的活动...</div></div>
      <div class="btn-primary">发布</div>
    </div>`,

  'growth-map': `
    <div class="hero">
      <div style="font-size:18px;font-weight:700;margin-bottom:4px">成长地图</div>
      <div style="font-size:12px;opacity:.85">探索你的阅读成长之旅</div>
      <div class="hero-stats" style="margin-top:16px">
        <div><div class="hero-num" style="font-size:22px">Lv.12</div><div class="hero-label">当前等级</div></div>
        <div><div class="hero-num" style="font-size:22px">5</div><div class="hero-label">勋章</div></div>
        <div><div class="hero-num" style="font-size:22px">650</div><div class="hero-label">总经验</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">🏆 徽章墙</span></div>
      <div class="scroll-x">
        <div style="text-align:center;min-width:56px"><div style="width:44px;height:44px;border-radius:50%;background:#eef6f0;margin:0 auto;display:flex;align-items:center;justify-content:center">🏅</div><div style="font-size:10px;margin-top:4px">阅读新星</div></div>
        <div style="text-align:center;min-width:56px"><div style="width:44px;height:44px;border-radius:50%;background:#eef6f0;margin:0 auto;display:flex;align-items:center;justify-content:center">📖</div><div style="font-size:10px;margin-top:4px">读书达人</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">🗺️ 成长路径</span></div>
      <div class="menu-item"><span>📚 阅读入门之路</span><span class="tag">已完成</span></div>
      <div class="menu-item"><span>🚀 行动践行之路</span><span style="color:#2d5a3d;font-size:12px">2/5 完成</span></div>
      <div class="menu-item" style="border:none"><span style="color:#999">🔒 创作大师之路</span><span style="color:#999;font-size:12px">未解锁</span></div>
    </div>`,

  points: `
    <div class="hero" style="text-align:center;padding:28px 16px">
      <div style="font-size:40px;font-weight:700">520</div>
      <div style="font-size:13px;opacity:.85;margin-top:4px">本月已获取 128 积分</div>
      <div style="display:flex;justify-content:center;gap:32px;margin-top:20px;font-size:12px">
        <div><div style="font-size:20px">🤲</div><div style="margin-top:4px">公益兑换</div></div>
        <div><div style="font-size:20px">ℹ️</div><div style="margin-top:4px">积分规则</div></div>
        <div><div style="font-size:20px">💝</div><div style="margin-top:4px">捐赠记录</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">☰ 积分明细</span></div>
      <div class="menu-item"><div><div style="font-size:14px">阅读打卡 +10</div><div class="list-meta">04-27 10:30</div></div><span style="color:#2d5a3d;font-weight:600">+10</span></div>
      <div class="menu-item"><div><div style="font-size:14px">发布心得 +20</div><div class="list-meta">04-26 15:20</div></div><span style="color:#2d5a3d;font-weight:600">+20</span></div>
      <div class="menu-item" style="border:none"><div><div style="font-size:14px">公益捐赠 -100</div><div class="list-meta">04-25 09:00</div></div><span style="color:#e74c3c;font-weight:600">-100</span></div>
    </div>`,

  charity: `
    <div class="banner" style="height:80px;margin:12px"><h3 style="font-size:15px">用积分传递爱心</h3><p>让阅读更有温度</p></div>
    <div class="tabs"><div class="tab active">教育</div><div class="tab">环保</div><div class="tab">社区</div></div>
    <div class="promise-grid">
      <div class="promise-card">
        <div class="list-cover" style="background:#2d5a3d;width:100%;height:80px;border-radius:8px;margin-bottom:8px">📚</div>
        <div style="font-size:13px;font-weight:600">乡村图书角建设计划</div>
        <div style="font-size:11px;color:#999;margin:4px 0">为偏远山区学校建设图书角</div>
        <div style="height:4px;background:#eee;border-radius:2px;margin:8px 0"><div style="width:65%;height:100%;background:#2d5a3d;border-radius:2px"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#999"><span>100积分</span><span>已筹65%</span></div>
        <div class="btn-primary" style="margin:8px 0 0;font-size:13px;padding:8px">捐赠积分</div>
      </div>
      <div class="promise-card">
        <div class="list-cover" style="background:#2a9d8f;width:100%;height:80px;border-radius:8px;margin-bottom:8px">🌱</div>
        <div style="font-size:13px;font-weight:600">净美地球行动</div>
        <div style="font-size:11px;color:#999;margin:4px 0">支持社区环保与垃圾分类</div>
        <div style="height:4px;background:#eee;border-radius:2px;margin:8px 0"><div style="width:40%;height:100%;background:#2a9d8f;border-radius:2px"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#999"><span>50积分</span><span>已筹40%</span></div>
        <div class="btn-primary" style="margin:8px 0 0;font-size:13px;padding:8px">捐赠积分</div>
      </div>
    </div>`,

  donation: `
    <div class="hero" style="text-align:center;padding:20px 16px">
      <div style="font-size:14px">累计捐赠 520 积分 · 参与 3 个项目</div>
    </div>
    <div class="card" style="text-align:center;padding:20px">
      <div style="font-size:36px;margin-bottom:8px">🎖️</div>
      <div style="font-size:16px;font-weight:600">爱心大使证书</div>
      <div style="font-size:12px;color:#666;margin:6px 0">累计捐赠满500积分获得</div>
      <div style="font-size:11px;color:#999">颁发日期：2026-04-15</div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">🕐 捐赠记录</span></div>
      <div style="padding:10px 0;border-bottom:1px solid #f0f0f0">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:14px">乡村图书角建设计划</span><span class="tag">进行中</span></div>
        <div style="font-size:12px;color:#666;margin-bottom:8px">为偏远山区学校建设图书角</div>
        <div style="height:4px;background:#eee;border-radius:2px"><div style="width:65%;height:100%;background:#2d5a3d;border-radius:2px"></div></div>
        <div style="font-size:11px;color:#2d5a3d;margin-top:8px">✓ 您已捐赠 100 积分</div>
      </div>
    </div>`,

  records: `
    <div style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;background:#fff">
      <span style="font-size:16px;font-weight:600">读书记录</span>
      <span style="font-size:13px;color:#2d5a3d">⬇ 导出</span>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;text-align:center;font-size:11px">
        <div><div style="color:#999">一</div><div style="width:32px;height:32px;border-radius:50%;background:#eee;margin:4px auto;line-height:32px">20</div></div>
        <div><div style="color:#999">二</div><div style="width:32px;height:32px;border-radius:50%;background:#eee;margin:4px auto;line-height:32px">21</div></div>
        <div><div style="color:#999">三</div><div style="width:32px;height:32px;border-radius:50%;background:#eef6f0;color:#2d5a3d;margin:4px auto;line-height:32px;font-weight:600">22</div><div style="color:#2d5a3d">已读</div></div>
        <div><div style="color:#999">四</div><div style="width:32px;height:32px;border-radius:50%;background:#eef6f0;color:#2d5a3d;margin:4px auto;line-height:32px;font-weight:600">23</div><div style="color:#2d5a3d">已读</div></div>
        <div><div style="color:#999">五</div><div style="width:32px;height:32px;border-radius:50%;background:#eee;margin:4px auto;line-height:32px">24</div></div>
        <div><div style="color:#999">六</div><div style="width:32px;height:32px;border-radius:50%;background:#eee;margin:4px auto;line-height:32px">25</div></div>
        <div><div style="color:#999">日</div><div style="width:32px;height:32px;border-radius:50%;background:#eee;margin:4px auto;line-height:32px">26</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">📖 阅读心得</span></div>
      <div style="padding:10px 0;border-bottom:1px solid #f0f0f0">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:14px">《活着》阅读心得</span><span style="font-size:11px;color:#999">04-17</span></div>
        <div style="font-size:13px;color:#555;line-height:1.6">福贵的命运让人深思，活着本身就是一种力量...</div>
        <div style="display:flex;align-items:center;margin-top:8px;font-size:11px;color:#2a9d8f"><span style="margin-right:4px">🎙</span>朗读录音 <span style="color:#999;margin-left:6px">0:30</span></div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:#999"><span>👁 42</span><span style="color:#2d5a3d">⬇ 导出</span></div>
      </div>
      <div style="padding:10px 0;border-bottom:1px solid #f0f0f0">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:14px">《人类简史》笔记</span><span style="font-size:11px;color:#999">04-22</span></div>
        <div style="font-size:13px;color:#555;line-height:1.6">认知革命让人类能够虚构共同的故事...</div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:#999"><span>👁 28</span><span style="color:#2d5a3d">⬇ 导出</span></div>
      </div>
      <div style="padding:10px 0">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:14px">《百年孤独》摘抄</span><span style="font-size:11px;color:#999">04-17</span></div>
        <div style="font-size:13px;color:#555;line-height:1.6">马孔多在雨中，家族的命运如同轮回...</div>
        <div style="display:flex;align-items:center;margin-top:8px;font-size:11px;color:#2a9d8f"><span style="margin-right:4px">🎙</span>朗读录音 <span style="color:#999;margin-left:6px">1:05</span></div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:#999"><span>👁 15</span><span style="color:#2d5a3d">⬇ 导出</span></div>
      </div>
    </div>`,

  audio: `
    <div class="tabs"><div class="tab active">全部</div><div class="tab">已上传</div><div class="tab">未上传</div></div>
    <div class="card">
      <div class="list-item" style="flex-direction:column;align-items:stretch;border:none;padding:0">
        <div style="display:flex;gap:12px">
          <div class="list-cover" style="background:#fce4ec;width:56px;height:56px;border-radius:8px;color:#e74c3c">▶</div>
          <div style="flex:1"><div class="list-title">第一章 少年福贵</div><div class="list-meta">《活着》· 02:30 · 04-27</div></div>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <span class="chip">↗ 分享</span><span class="chip">⬇ 下载</span>
        </div>
        <div style="margin-top:8px;height:4px;background:#eee;border-radius:2px"><div style="width:35%;height:100%;background:#2d5a3d;border-radius:2px"></div></div>
      </div>
    </div>
    <div class="card">
      <div class="list-item" style="flex-direction:column;align-items:stretch;border:none;padding:0">
        <div style="display:flex;gap:12px">
          <div class="list-cover" style="background:#eef6f0;width:56px;height:56px;border-radius:8px;color:#2d5a3d">▶</div>
          <div style="flex:1"><div class="list-title">第二章 赌债缠身</div><div class="list-meta">《活着》· 03:15 · 04-25</div></div>
        </div>
        <div style="margin-top:10px;font-size:12px;color:#2d5a3d">🖼 生成海报分享</div>
      </div>
    </div>`,

  settings: `
    <div class="card">
      <div class="menu-item"><span>🔔 消息通知</span><div class="switch-fake"></div></div>
      <div class="menu-item"><span>🔊 语音提醒</span><div style="width:44px;height:24px;background:#ccc;border-radius:12px;position:relative"><div style="width:20px;height:20px;background:#fff;border-radius:50%;position:absolute;left:2px;top:2px"></div></div></div>
      <div class="menu-item"><span>字体大小</span><span style="color:#999">标准 ›</span></div>
      <div class="menu-item"><span>清除缓存</span><span style="color:#999">12.5 MB ›</span></div>
      <div class="menu-item"><span>关于知行堂</span><span style="color:#999">v1.0.0 ›</span></div>
      <div class="menu-item" style="border:none"><span>隐私政策</span><span style="color:#999">›</span></div>
    </div>`,

  feedback: `
    <div class="card">
      <div class="section-head"><span class="section-title">❓ 常见问题</span></div>
      <div class="menu-item"><span>如何获得积分？</span><span>›</span></div>
      <div class="menu-item"><span>如何创建读书小组？</span><span>›</span></div>
      <div class="menu-item" style="border:none"><span>如何参与公益捐赠？</span><span>›</span></div>
    </div>
    <div class="card">
      <div class="section-head"><span class="section-title">💬 意见反馈</span></div>
      <div class="form-textarea" style="color:#999">请描述您遇到的问题或建议...</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px">
        <span style="font-size:13px;color:#666">+ 上传附件</span>
        <div class="btn-primary" style="margin:0;padding:8px 20px;font-size:13px;display:inline-block">提交</div>
      </div>
    </div>`,
};

/** 入企导读（与 src/data/enterprise-guide.js 一致） */
window.ENTERPRISE_SECTIONS = [
  {
    key: 'philosophy',
    label: '企业理念',
    icon: '💡',
    bg: 'linear-gradient(135deg, #eef6f0 0%, #e3f0e8 100%)',
    summary: '以读书启智，以践行致远',
    content: [
      { title: '使命', text: '帮助每一位员工通过读书建立思考框架，将所学转化为工作中的行动力，实现个人成长与组织发展的同频共振。' },
      { title: '愿景', text: '打造学习型组织，让阅读成为企业文化的一部分，让「知」与「行」在日常工作中自然融合。' },
      {
        title: '核心价值观',
        items: ['读书明理 — 通过阅读拓展认知边界', '思考沉淀 — 将感悟转化为清晰表达', '践行落地 — 把所学用于岗位实践', '共同成长 — 在共读共学中彼此成就'],
      },
      { title: '行为准则', text: '每日坚持阅读打卡，按时完成录音朗读；积极撰写心得并参与分享交流；线下活动主动签到参与；以承诺墙见证自我成长。' },
    ],
  },
  {
    key: 'culture',
    label: '企业文化',
    icon: '🌱',
    bg: 'linear-gradient(135deg, #eef8f6 0%, #e0f2ef 100%)',
    summary: '共读 · 共学 · 共创 · 共赢',
    content: [
      { title: '学习文化', text: '鼓励员工养成阅读习惯，以小组共读形式推进同一本书的深度理解。每周分享读书心得，在交流碰撞中激发新思路。' },
      { title: '践行文化', text: '读书不止于「读」，更要落到「行」。通过践行活动、承诺墙打卡，将书中的理念转化为可衡量的工作改进与团队行动。' },
      { title: '分享文化', text: '开放、真诚地分享阅读感悟与实践经验。分享圈是书友交流的平台，每一条心得都是团队智慧的积累。' },
      { title: '激励文化', text: '以积分与公益兑换等方式激励持续参与。完成打卡、分享、活动参与均可获得积分，让成长看得见、有回报。' },
      {
        title: '团队公约',
        items: ['尊重他人观点，文明交流互动', '按时完成小组共读任务', '录音与心得内容真实原创', '线下活动守时守约，积极参与'],
      },
    ],
  },
  {
    key: 'manual',
    label: '使用手册',
    icon: '📱',
    bg: 'linear-gradient(135deg, #eef5fd 0%, #e3f0fb 100%)',
    summary: '快速上手知行堂读书打卡',
    content: [
      {
        title: '1. 首页导航',
        items: ['「读」— 进入共读共学，查看今日共读书籍', '「行」— 浏览并报名线下践行活动', '「思」— 进入分享圈，阅读书友心得', '「打卡」— 底部 Tab 进入，完成每日录音与分享任务'],
      },
      { title: '2. 共读打卡', text: '在「打卡」页查看今日待读章节，点击「录音」进入读书页。选择书籍与章节后，可朗读录音并上传，完成打卡任务。' },
      { title: '3. 写心得', text: '读书页点击「写心得」，可填写原文摘抄、心得感悟与有言实行。支持从正文中摘抄片段，确认后发布至分享圈。' },
      { title: '4. 分享圈', text: '在「思」或分享圈页面浏览书友发布的心得，可点赞、评论互动。自己的心得也会展示在此，与团队共同成长。' },
      { title: '5. 践行活动', text: '「行」页面查看线下活动，报名后可进入活动详情签到。活动结束后可进行评价反馈。' },
      { title: '6. 承诺与积分', text: '「承诺」Tab 创建并追踪个人成长承诺；「我的」页面查看积分、读书记录、录音文件与成长地图。' },
    ],
  },
];

window.renderEnterpriseMock = function (activeKey) {
  const sections = window.ENTERPRISE_SECTIONS;
  const section = sections.find((s) => s.key === activeKey) || sections[0];

  const tabsHtml = sections.map((s) => `
    <div class="enterprise-tab${s.key === section.key ? ' active' : ''}" data-tab="${s.key}">
      <span class="enterprise-tab-icon">${s.icon}</span>
      <span class="enterprise-tab-text">${s.label}</span>
      ${s.key === section.key ? '<span class="enterprise-tab-line"></span>' : ''}
    </div>`).join('');

  const blocksHtml = section.content.map((block) => {
    let body = '';
    if (block.text) {
      body += `<div class="enterprise-block-text">${block.text}</div>`;
    }
    if (block.items) {
      body += `<div class="enterprise-block-list">${block.items.map((item) =>
        `<div class="enterprise-block-item"><span class="enterprise-dot">•</span><span>${item}</span></div>`
      ).join('')}</div>`;
    }
    return `<div class="enterprise-block"><div class="enterprise-block-title">${block.title}</div>${body}</div>`;
  }).join('');

  return `
    <div class="enterprise-hero">
      <div class="enterprise-hero-icon-wrap"><span class="enterprise-hero-icon">🏢</span></div>
      <div class="enterprise-hero-title">入企导读</div>
      <div class="enterprise-hero-desc">了解企业理念与文化，快速上手读书打卡</div>
    </div>
    <div class="enterprise-tabs">${tabsHtml}</div>
    <div class="enterprise-card">
      <div class="enterprise-banner" style="background:${section.bg}">
        <span class="enterprise-banner-icon">${section.icon}</span>
        <div class="enterprise-banner-text">
          <div class="enterprise-banner-title">${section.label}</div>
          <div class="enterprise-banner-summary">${section.summary}</div>
        </div>
      </div>
      ${blocksHtml}
    </div>`;
};

/** 页面内可点击跳转：当前页 id → [{ sel, to }] */
window.NAV_RULES = {
  home: [
    { sel: '.grid2 .nav-large:nth-child(1)', to: 'read' },
    { sel: '.grid2 .nav-large:nth-child(2)', to: 'practice-center' },
    { sel: '.grid4 .nav-small:nth-child(1)', to: 'share' },
    { sel: '.grid4 .nav-small:nth-child(2)', to: 'promise' },
    { sel: '.grid4 .nav-small:nth-child(3)', to: 'points' },
    { sel: '.grid4 .nav-small:nth-child(4)', to: 'enterprise' },
    { sel: '.card .task-row:nth-child(1)', to: 'checkin' },
    { sel: '.card .task-row:nth-child(2)', to: 'practice-detail' },
    { sel: '.card .task-row:nth-child(3)', to: 'promise-detail' },
    { sel: '.activity-item', to: 'practice-detail' },
    { sel: '.section-more', to: 'practice-center' },
    { sel: '.card:last-child > div:not(.section-head)', to: 'share' },
  ],
  read: [
    { sel: '.read-quick-card.club', to: 'club-list' },
    { sel: '.read-quick-card.share', to: 'share' },
    { sel: '.read-quick-card.audio', to: 'audio' },
    { sel: '.read-quick-card.plaza', to: 'plaza' },
    { sel: '.read-book-item', to: 'book-read' },
  ],
  'practice-center': [
    { sel: '.practice-module-card:first-child', to: 'practice-activities' },
    { sel: '.practice-module-card:last-child', to: 'activities' },
    { sel: '.section-more', to: 'practice-activities' },
    { sel: '.card .list-item', to: 'practice-detail' },
  ],
  'practice-activities': [
    { sel: '.list-item', to: 'practice-detail' },
  ],
  checkin: [
    { sel: '.hero div[style*="margin-top:14px"]', to: 'checkin-rank' },
    { sel: '.card:last-child div[style*="#2d5a3d"][style*="border"]', to: 'book-read' },
    { sel: '.card:last-child div[style*="#e67e22"][style*="border"]', to: 'book-note' },
    { sel: '.card:last-child', to: 'book-detail' },
  ],
  promise: [
    { sel: 'span[style*="color:#2d5a3d"]', to: 'promise-create' },
    { sel: '.promise-card', to: 'promise-detail' },
  ],
  mine: [
    { sel: '.card:last-child .menu-item:nth-child(1)', to: 'points' },
    { sel: '.card:last-child .menu-item:nth-child(2)', to: 'records' },
    { sel: '.card:last-child .menu-item:nth-child(3)', to: 'audio' },
    { sel: '.card:last-child .menu-item:nth-child(4)', to: 'activities' },
    { sel: '.card:last-child .menu-item:nth-child(5)', to: 'promise' },
    { sel: '.card:last-child .menu-item:nth-child(6)', to: 'growth-map' },
    { sel: '.card:last-child .menu-item:nth-child(7)', to: 'settings' },
    { sel: '.card:last-child .menu-item:nth-child(8)', to: 'feedback' },
  ],
  'club-list': [
    { sel: '.list-item', to: 'club-detail' },
  ],
  'club-detail': [
    { sel: '.list-item', to: 'book-read' },
    { sel: '.section-more', to: 'checkin' },
  ],
  plaza: [
    { sel: '.card', to: 'plaza-detail' },
  ],
  'plaza-detail': [
    { sel: 'span[style*="color:#2d5a3d"]', to: 'share-friend' },
  ],
  'book-detail': [
    { sel: '.menu-item:first-child', to: 'book-read' },
    { sel: '.detail-hero div[style*="justify-content:center"] > div:last-child', to: 'book-read' },
  ],
  'book-read': [
    { sel: '.read-action-note', to: 'book-note' },
  ],
  'book-note': [
    { sel: 'span[style*="color:#2d5a3d"]', to: 'book-read' },
    { sel: '.btn-primary', to: 'share' },
  ],
  'practice-detail': [
    { sel: '.list-meta span[style*="color:#2d5a3d"]', to: 'practice-checkin' },
    { sel: '.btn-primary', to: 'practice-review' },
  ],
  'practice-checkin': [
    { sel: '.btn-primary', to: 'practice-review' },
  ],
  'practice-review': [
    { sel: '.btn-primary', to: 'practice-center' },
  ],
  'promise-create': [
    { sel: '.btn-primary', to: 'promise-detail' },
  ],
  'promise-detail': [
    { sel: '.btn-primary', to: 'promise' },
  ],
  share: [
    { sel: '.share-action', to: 'share-friend' },
  ],
  'share-friend': [
    { sel: '.share-friend-preview', to: 'share' },
  ],
  points: [
    { sel: '.hero div[style*="justify-content:center"] > div:nth-child(1)', to: 'charity' },
    { sel: '.hero div[style*="justify-content:center"] > div:nth-child(3)', to: 'donation' },
  ],
  charity: [
    { sel: '.btn-primary', to: 'donation' },
  ],
  donation: [
    { sel: '.card', to: 'charity' },
  ],
  records: [
    { sel: '.card:last-child > div[style*="padding"]', to: 'book-note' },
  ],
  audio: [
    { sel: '.card', to: 'book-read' },
    { sel: 'span.chip:first-child', to: 'share-friend' },
  ],
  activities: [
    { sel: '.list-item', to: 'practice-detail' },
    { sel: '[data-goto="practice-create"]', to: 'practice-create' },
  ],
  'practice-create': [
    { sel: '.btn-primary', to: 'activities' },
  ],
  message: [
    { sel: '.list-item', to: 'share' },
  ],
  settings: [
    { sel: '.menu-item:last-child', to: 'feedback' },
  ],
  feedback: [
    { sel: '.menu-item', to: 'points' },
  ],
};
