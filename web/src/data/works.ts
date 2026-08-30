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
    visitLabel: '查看完整项目',
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
              '个人独立研究：整理19项财报、监管、平台规则与社区公开证据',
              '完成用户路径、竞品定位、信任阻碍评分与数据到策略映射',
              '规划 TikTok / Instagram / Reddit / Discord 内容运营与 KOL/KOC 模型',
              '用 AARRR、RICE 与交易质量护栏设计可执行的测量闭环',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'AI资讯追踪App多渠道增长与用户激活',
        tagline: '小红书增长｜KOL/KOC｜用户调研｜数据复盘',
        items: [
          {
            name: 'AI资讯追踪 App 多渠道增长与用户激活',
            meta: 'AI Information Product Multi-channel Growth',
            slug: 'ai-news-dashboard',
            tags: [
              '十周累计约58万曝光、15,800次访问与1,438名可归因注册',
              '筛选金融、科技小博主与低成本KOC，按周错峰验证流量质量',
              '由渠道行为与88份有效问卷定位阻碍，形成3套拉新活动与3张核心物料',
              '科技博主发布周新增注册环比提升50%、首次专题创建率相对提升15%',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Everywhere 新业务上市与内容增长',
        tagline: '新品上市｜Instagram｜内容实验｜数据复盘',
        items: [
          {
            name: 'ZUS Everywhere 新业务上市与 Instagram 内容增长',
            meta: 'New Business Launch & Instagram Content Growth',
            slug: 'zus-everywhere',
            tags: [
              '参与 ZUS 从门店咖啡向 RTD / FMCG 新业务延展的内容冷启动',
              '参与完成 50 条 Instagram 内容与 15+ 轮数据复盘迭代',
              '建立从新品认知、场景兴趣到购买入口的 Content–Commerce 路径',
              '项目期账号粉丝规模达到 1.1w+；品牌首发结果为 10,000 盒 10 天售罄',
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
              'Independent study built from 19 financial, regulatory, platform, and community evidence records',
              'Mapped user journeys, competitor positioning, trust-barrier scores, and evidence-led decisions',
              'Designed TikTok, Instagram, Reddit, Discord, and KOL/KOC operating models',
              'Connected AARRR, RICE prioritisation, and transaction-quality guardrails',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'AI Information App Multi-channel Growth & Activation',
        tagline: 'Xiaohongshu · KOL/KOC · User Research · Growth Review',
        items: [
          {
            name: 'AI Information App Multi-channel Growth & Activation',
            meta: 'AI资讯追踪App多渠道增长与用户激活',
            slug: 'ai-news-dashboard',
            tags: [
              'Generated about 580K impressions, 15,800 visits, and 1,438 attributable sign-ups in ten weeks',
              'Screened finance and tech creators plus long-tail KOCs through staggered weekly trials',
              'Used channel behavior and 88 valid surveys to design three acquisition campaigns and three core assets',
              'Tech-creator launch week drove 50% WoW registration growth and a 15% relative lift in first-topic creation rate',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Everywhere New Business Launch & Content Growth',
        tagline: 'Product Launch · Instagram · Content Experiments · Data Review',
        items: [
          {
            name: 'ZUS Everywhere New Business Launch & Instagram Growth',
            meta: 'ZUS Everywhere 新业务上市与内容增长',
            slug: 'zus-everywhere',
            tags: [
              'Supported the content launch as ZUS expanded from cafes into RTD and FMCG products',
              'Contributed to 50 Instagram assets and 15+ rounds of performance-led iteration',
              'Built a Content–Commerce journey from product discovery to purchase access',
              'Account reached 11k+ during the project; brand launch result: 10,000 boxes sold in 10 days',
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
  'project-1': `${import.meta.env.BASE_URL}projects/overseas-toy-growth-project-v2/designer-toy-hero-v2.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-3': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
