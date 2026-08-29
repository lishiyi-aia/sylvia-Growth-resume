// 项目数据（双语）。各板块 → 点击展开项目详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: '增长运营项目',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '打开完整项目',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: '海外潮玩二手交易 App 增长策略研究',
        tagline: '海外增长｜用户研究｜竞品分析｜信任转化｜KOL/KOC',
        items: [
          {
            name: '海外潮玩二手交易 App 增长策略研究',
            meta: 'Overseas Designer Toy Resale App Growth Strategy',
            slug: 'overseas-toy-growth',
            tags: [
              '从内容流量假设切入，重构为交易信任驱动的增长问题',
              '完成用户路径、竞品定位、信任阻碍热力图和渠道角色分析',
              '规划 TikTok / Reddit / Discord 内容实验与 KOL/KOC 评分模型',
              '用 AARRR、RICE 与纠纷率护栏形成增长复盘闭环',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'AI资讯追踪App运营分析与问题归因面板',
        tagline: '新品运营｜多源数据整合｜用户路径诊断｜运营决策',
        items: [
          {
            name: 'AI资讯追踪 App 运营分析与问题归因面板',
            meta: 'AI Information Tracking App Operations Dashboard',
            slug: 'ai-news-dashboard',
            tags: [
              '承接 YouNews 用户路径工具，整合埋点、问卷和日报指标',
              '定位注册后首次核心体验前的流失节点与功能理解问题',
              '搭建 Funnel、Activation、Segments、Cross Analysis 诊断框架',
              '沉淀内容教育、产品入口优化和留存提醒三类动作',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Coffee / ZUS Everywhere新品账号运营',
        tagline: '新品传播｜竞品IG分析｜内容矩阵｜增长复盘',
        items: [
          {
            name: 'ZUS Coffee / ZUS Everywhere 新品内容运营与社媒增长复盘',
            meta: 'ZUS Everywhere New Product Social Operations',
            slug: 'zus-everywhere',
            tags: [
              '采样 ZUS、Starbucks、Tealive、GIGI Coffee 公开 IG 内容信号',
              '用 Social AARRR、3x3 内容矩阵和 RICE 排序规划选题',
              '围绕新品认知、场景种草、UGC 互动和购买入口设计内容',
              '通过触达、互动、保存、主页访问和链接点击复盘增长质量',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Growth Operations Projects',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Open full case',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: 'Overseas Designer Toy Resale App Growth Strategy',
        tagline: 'Overseas Growth · User Research · Competitor Analysis · Trust Conversion',
        items: [
          {
            name: 'Overseas Designer Toy Resale App Growth Strategy',
            meta: '海外潮玩二手交易 App 增长策略研究',
            slug: 'overseas-toy-growth',
            tags: [
              'Built a market, competitor, and community pain-point study from public sources',
              'Reframed the challenge from traffic acquisition to trust-led conversion',
              'Designed TikTok, Reddit, Discord, and KOL/KOC growth experiments',
              'Connected AARRR, RICE prioritization, and dispute-rate guardrails into a review loop',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'AI Information Tracking App Operations Dashboard',
        tagline: 'New Product Operations · Multi-source Data · User Journey · Decision Support',
        items: [
          {
            name: 'AI Information Tracking App Operations Dashboard',
            meta: 'AI资讯追踪App运营分析与问题归因面板',
            slug: 'ai-news-dashboard',
            tags: [
              'Turned YouNews user-path data into an operations diagnosis console',
              'Identified drop-off before first core experience and feature understanding gaps',
              'Built funnel, activation, segmentation, and cross-analysis modules',
              'Converted diagnosis into content education, product entry, and retention actions',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Coffee / ZUS Everywhere New Product Social Operations',
        tagline: 'Product Launch · IG Benchmarking · Content Matrix · Growth Review',
        items: [
          {
            name: 'ZUS Coffee / ZUS Everywhere Content Growth Review',
            meta: 'ZUS Everywhere新品账号运营',
            slug: 'zus-everywhere',
            tags: [
              'Benchmarked public Instagram signals from ZUS, Starbucks, Tealive, and GIGI Coffee',
              'Used Social AARRR, a 3x3 content matrix, and RICE to prioritize topics',
              'Planned content for product education, usage scenes, UGC, and conversion entry points',
              'Reviewed reach, engagement, saves, profile visits, and link-click proxies',
            ],
          },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}projects/overseas-toy-growth-project-v2/visuals/03_trust_barrier_heatmap.svg`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-3': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
