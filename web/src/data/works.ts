// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
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
    title: '新品运营项目',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: 'AI资讯追踪App运营分析与问题归因面板',
        tagline: '新品运营｜多源数据整合｜用户路径诊断｜运营决策',
        items: [
          {
            name: 'AI资讯追踪App运营分析与问题归因面板',
            meta: 'AI Information Tracking App Operations Dashboard',
            tags: [
              '整合用户路径、行为埋点、问卷反馈与核心指标日报',
              'Funnel、Activation、Segments与Cross Analysis',
              '数据质量检查、敏感信息保护与问题归因',
              '从用户流失节点定位到产品运营优化建议',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: '海内外生成式AI教育产品试点',
        tagline: '新品落地｜中国内地高校 × 东南亚教育机构',
        items: [
          {
            name: '海内外生成式AI教育产品试点',
            meta: 'Generative AI Education Product Pilots',
            tags: [
              '境内外教育市场、教学场景与用户需求研究',
              '产品Demo、教师案例、课程方案与应用场景设计',
              '用户试用、功能教学、使用指南与FAQ体系',
              'B2B合作支持、用户反馈分析与产品优化闭环',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Everywhere新品账号运营',
        tagline: '新品传播｜Instagram内容策略｜增长复盘',
        items: [
          {
            name: 'ZUS Everywhere新品账号运营',
            meta: 'ZUS Everywhere New Product Social Operations',
            tags: [
              '新品内容调研、用户偏好分析与社媒卖点提炼',
              '完成50条Instagram内容的策划、拍摄、剪辑与英文文案',
              '测试产品功能、消费场景与生活方式等内容方向',
              '输出15次以上内容复盘，推动账号粉丝增长1.1万以上',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'New Product Operations',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: 'AI Information Tracking App Operations Dashboard',
        tagline: 'New Product Operations · Multi-source Data · User Journey · Decision Support',
        items: [
          {
            name: 'AI Information Tracking App Operations Dashboard',
            meta: 'AI资讯追踪App运营分析与问题归因面板',
            tags: [
              'Integrated user journey, event tracking, survey feedback, and KPI reporting',
              'Funnel, activation, segmentation, and cross-analysis',
              'Data quality checks, sensitive information protection, and issue attribution',
              'From churn point diagnosis to product and operations optimization suggestions',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'Generative AI Education Product Pilots',
        tagline: 'Product Launch · Universities in China · Education Partners in Southeast Asia',
        items: [
          {
            name: 'Generative AI Education Product Pilots',
            meta: '海内外生成式AI教育产品试点',
            tags: [
              'Research on education markets, teaching scenarios, and user needs',
              'Product demos, teacher cases, course plans, and scenario design',
              'User trials, feature teaching, usage guides, and FAQ systems',
              'B2B support, user feedback analysis, and product optimization loops',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Everywhere New Product Social Operations',
        tagline: 'Product Launch · Instagram Strategy · Growth Review',
        items: [
          {
            name: 'ZUS Everywhere New Product Social Operations',
            meta: 'ZUS Everywhere新品账号运营',
            tags: [
              'Research on product content, user preferences, and social media positioning',
              'Planned, shot, edited, and wrote English copy for 50 Instagram posts',
              'Tested product features, consumption scenarios, and lifestyle content directions',
              'Delivered 15+ content reviews and drove over 11,000 new followers',
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
  'project-1': '/works/covers/sohu-dashboard.png',
  'project-2': '/works/covers/education-pilot.png',
  'project-3': '/works/covers/zus-everywhere.jpg',
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
