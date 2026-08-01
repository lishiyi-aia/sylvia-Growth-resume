import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2021.09–2024.10',
        place: 'National University of Malaysia (UKM)',
        role: 'Bachelor of Business Administration',
        points: [
          'Relevant coursework in Marketing Management, Business Statistics, Organizational Behaviour, International Business, Business Communication, and Operations Management.',
        ],
      },
      {
        period: '2023.12–2024.06',
        place: 'ZUS Coffee · Malaysia',
        role: 'New Media Operations Intern',
        points: [
          'Researched new product content and distilled messaging from user preferences, social feedback, and competitor performance.',
          'Produced 50 Instagram posts, handling planning, shooting, editing, English copywriting, and publishing.',
          'Delivered 15+ content reviews, shifting strategy toward product features, consumption scenarios, and lifestyle, gaining over 11k followers.',
        ],
      },
      {
        period: '2024.10–2025.05',
        place: 'Xuanhua Intelligence · Beijing',
        role: 'AI Product Operations Intern',
        points: [
          'Analyzed higher-education user needs, collating 100+ feedback items and identifying frequent requirements and experience issues.',
          'Mapped product journey drop-off points and proposed optimizations based on data insights.',
          'Produced 30+ guides, FAQs, and tutorials, driving a 30% increase in core feature adoption.',
          'Supported B2B university pilots with 10+ recommendations and prepared demos and instructor case materials.',
        ],
      },
      {
        period: '2025.08–Present (Expected Feb 2027)',
        place: 'The University of Sydney',
        role: 'Master of Marketing',
        points: [
          'Relevant coursework in Marketing Analytics, Consumer Behaviour, Marketing Research, Customer Analytics and CRM, B2B Marketing, and New Product Marketing.',
        ],
      },
      {
        period: '2025.12–2026.02',
        place: 'Beijing Sohu New Media',
        role: 'AI Product Operations Intern',
        points: [
          'Researched AI news-tracking products and supported PRD, feature specs, and FAQ development using user feedback and data.',
          'Built AI-assisted operations dashboards to identify drop-off points and product improvement opportunities.',
          'Created 100+ WeChat, Xiaohongshu, and community posts and optimized channel strategy through A/B testing.',
          'Helped increase new registrations by 50% and raise special-topic creation rate by 15%.',
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2021.09–2024.10',
        place: '马来西亚国立大学（UKM）',
        role: '工商管理学士',
        points: [
          '主修营销管理、商业统计、组织行为、国际商务、商务沟通与运营管理。',
        ],
      },
      {
        period: '2023.12–2024.06',
        place: 'ZUS Coffee · 马来西亚',
        role: '新媒体运营实习生',
        points: [
          '参与新品内容调研，结合用户偏好、社媒反馈与竞品表现提炼传播卖点。',
          '完成50条Instagram内容的选题、拍摄、剪辑、英文文案与发布。',
          '输出15次以上内容复盘，推动内容转向“产品功能＋消费场景＋生活方式”，账号粉丝增长1.1万以上。',
        ],
      },
      {
        period: '2024.10–2025.05',
        place: '玄华智能（北京）科技有限公司',
        role: 'AI产品运营实习生',
        points: [
          '分析高校用户需求，整理100余条用户反馈并识别高频需求和体验问题。',
          '分析产品体验路径中的流失节点，结合数据提出产品优化建议。',
          '输出30余篇使用指南、FAQ和功能教程，推动核心功能使用率提升30%。',
          '支持B2B高校试点，输出10余项优化建议并整理产品演示与教师案例材料。',
        ],
      },
      {
        period: '2025.08–至今（预计2027.02毕业）',
        place: '悉尼大学',
        role: '市场营销硕士',
        points: [
          '主修营销分析、消费者行为、市场研究、客户分析与CRM、B2B营销及新产品营销。',
        ],
      },
      {
        period: '2025.12–2026.02',
        place: '北京搜狐新媒体信息有限公司',
        role: 'AI产品运营实习生',
        points: [
          '参与AI资讯追踪产品调研，结合用户反馈与数据协助撰写PRD、功能说明和FAQ。',
          '运用AI辅助搭建运营分析看板，识别用户路径中的流失节点和产品优化问题。',
          '输出100余篇公众号、小红书及社群内容，并通过A/B Test优化渠道策略。',
          '推动新增注册用户数提升50%，专题创建率提升15%。',
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
