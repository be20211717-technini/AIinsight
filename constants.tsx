import { Creator, KeywordData, SentimentData, TitlePattern } from './types';
import { HelpCircle, Zap, TrendingUp, Plus, Wrench } from 'lucide-react';

export const TOP_CREATORS: Creator[] = [
  { rank: 1, name: "虎嗅APP", articles: 15, description: "领跑榜单，持续产出" },
  { rank: 2, name: "数字生命卡兹克", articles: 11, description: "高质量个人创作者" },
  { rank: 3, name: "体育大生意", articles: 6, description: "垂类跨界代表" },
  { rank: 4, name: "新榜", articles: 6, description: "数据洞察" },
  { rank: 5, name: "酷玩实验室", articles: 5, description: "趣味科技科普" },
  { rank: 6, name: "机器之心", articles: 5, description: "行业标杆" },
  { rank: 7, name: "IT桔子", articles: 5, description: "创投数据" },
  { rank: 8, name: "创业资本汇", articles: 4, description: "资本视角" },
  { rank: 9, name: "果壳", articles: 4, description: "科学普及" },
  { rank: 10, name: "人人都是产品经理", articles: 4, description: "产品思维" },
];

export const KEYWORD_DATA: KeywordData[] = [
  { name: 'AI', count: 144, color: '#6366f1' },
  { name: '人工智能', count: 22, color: '#34d399' },
  { name: 'Top10/排行榜', count: 10, color: '#f59e0b' },
  { name: 'B站', count: 8, color: '#ec4899' },
  { name: '科技/机器之心', count: 7, color: '#64748b' },
];

export const SENTIMENT_DATA: SentimentData[] = [
  { name: '中性 (理性叙事)', value: 70.5, color: '#94a3b8' },
  { name: '正面 (积极展望)', value: 22.5, color: '#10b981' },
  { name: '负面 (焦虑/争议)', value: 7.0, color: '#f43f5e' },
];

export const TITLE_PATTERNS: TitlePattern[] = [
  { 
    icon: HelpCircle, 
    name: "疑问引导型", 
    example: "AI距离我们的生活有多远？", 
    effect: "激发好奇心，降低阅读门槛",
    color: "text-blue-400"
  },
  { 
    icon: Zap, 
    name: "夸张造势型", 
    example: "AI界一夜变天", 
    effect: "制造紧迫感和话题性",
    color: "text-yellow-400"
  },
  { 
    icon: TrendingUp, 
    name: "趋势预测型", 
    example: "AI大航海时代", 
    effect: "建立行业前瞻性定位",
    color: "text-purple-400"
  },
  { 
    icon: Plus, 
    name: "领域跨界型", 
    example: "AI+医疗 / 体育营销+AI", 
    effect: "拓展读者圈层，提升实用价值",
    color: "text-emerald-400"
  },
  { 
    icon: Wrench, 
    name: "解决方案型", 
    example: "专治教资面试开口难", 
    effect: "直击痛点，强调工具价值",
    color: "text-orange-400"
  },
];
