import React from 'react';
import { 
  Trophy, 
  Users, 
  FileText, 
  Flame, 
  Lightbulb, 
  BarChart2, 
  PenTool, 
  Target, 
  ArrowUpRight,
  Github,
  TrendingUp,
  Zap,
  Search,
  LayoutGrid
} from 'lucide-react';
import Section from './components/Section';
import StatCard from './components/StatCard';
import { TOP_CREATORS, KEYWORD_DATA, SENTIMENT_DATA, TITLE_PATTERNS } from './constants';
import { KeywordBarChart, SentimentPieChart } from './components/Charts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-500 selection:text-white pb-20 relative">
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid z-0 pointer-events-none opacity-50"></div>
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent z-50"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
              <LayoutGrid size={18} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-white tracking-tight">AI Insight</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Content Analytics</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-white/5">
            {['排名', '分析', '模式', '建议'].map((item, i) => (
              <a 
                key={item}
                href={`#${['ranking', 'analysis', 'patterns', 'suggestions'][i]}`} 
                className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white border border-white/10 rounded-md hover:border-white/20 transition-all">
              <Github size={14} />
              <span>Source</span>
            </button>
            <button className="bg-white text-slate-950 px-4 py-1.5 text-sm font-bold rounded-md hover:bg-slate-200 transition-colors">
              下载报告
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            AI 科技内容创作趋势报告 2024
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-white">
            揭秘 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">爆款内容</span> 的<br/>
            <span className="relative">
              流量密码
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            基于187位创作者、274篇文章的系统分析，为您拆解 TOP 10 创作者的制胜法则。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <StatCard 
              icon={<Users size={20} />}
              value="187"
              label="分析创作者"
              subLabel="覆盖全网主流AI账号"
            />
            <StatCard 
              icon={<FileText size={20} />}
              value="274"
              label="深度文章"
              subLabel="系统性内容拆解"
            />
            <StatCard 
              icon={<Target size={20} />}
              value="10%"
              label="爆款率"
              subLabel="10万+阅读量门槛"
            />
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto px-4 max-w-7xl space-y-24 z-10 relative">
        
        {/* Rankings Section - Table Style */}
        <Section id="ranking" title="TOP 10 创作者表现" icon={<Trophy size={20} />}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-panel rounded-xl border border-white/5 overflow-hidden flex flex-col">
              <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="font-semibold text-white">综合影响力排行榜</h3>
                <div className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">按发文量排序</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-slate-500 font-medium bg-white/[0.01]">
                    <tr>
                      <th className="px-6 py-4 w-16">排名</th>
                      <th className="px-6 py-4">创作者</th>
                      <th className="px-6 py-4 text-right">产出文章</th>
                      <th className="px-6 py-4 hidden sm:table-cell">特点标签</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {TOP_CREATORS.map((creator) => (
                      <tr key={creator.rank} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-4">
                          <div className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold
                            ${creator.rank <= 3 ? 'bg-primary-500/20 text-primary-400' : 'bg-slate-800 text-slate-500'}`}>
                            {creator.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-200 group-hover:text-white transition-colors">{creator.name}</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="font-mono text-primary-400 font-semibold">{creator.articles}</div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell text-slate-500 text-xs">
                          {creator.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl border border-white/5 bg-gradient-to-b from-primary-900/20 to-slate-900/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Trophy size={100} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">关键发现：头部效应</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <strong className="text-white">虎嗅APP</strong> (15篇) 与 <strong className="text-white">数字生命卡兹克</strong> (11篇) 遥遥领先，高产出是影响力的基石。
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      爆款文章数量与总产出成正比，头部账号通过高频试错锁定了流量密码。
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">标杆账号推荐</div>
                    <div className="text-sm font-bold text-white">机器之心 <span className="text-xs font-normal text-slate-500 ml-1">(Rank 6)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Bento Grid Analysis */}
        <Section id="analysis" title="深度数据洞察" icon={<BarChart2 size={20} />}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Main Chart - Keywords */}
            <div className="md:col-span-2 glass-panel p-6 rounded-xl border border-white/5 flex flex-col card-hover">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">高频话题分布</h3>
                  <p className="text-xs text-slate-400 mt-1">基于标题语义分析</p>
                </div>
                <div className="px-2 py-1 bg-primary-500/10 text-primary-400 text-xs rounded border border-primary-500/20">
                  AI 提及 144 次
                </div>
              </div>
              <div className="flex-1 min-h-[250px]">
                <KeywordBarChart data={KEYWORD_DATA} />
              </div>
            </div>

            {/* Stats Box - Funnel */}
            <div className="md:col-span-1 glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-50" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1 relative z-10">爆款漏斗</h3>
                <p className="text-xs text-slate-400 relative z-10">从发布到爆款的转化</p>
              </div>
              
              <div className="space-y-4 my-6 relative z-10">
                <div className="flex justify-between items-end">
                  <span className="text-slate-400 text-xs">总文章</span>
                  <span className="text-xl font-bold text-white">274</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-slate-600" />
                </div>
                
                <div className="flex justify-between items-end">
                  <span className="text-primary-400 text-xs">10W+ 爆款</span>
                  <span className="text-xl font-bold text-primary-400">27</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full w-[10%] bg-primary-500" />
                </div>
              </div>

              <div className="text-3xl font-bold text-white relative z-10">
                10% <span className="text-sm font-normal text-slate-500">转化率</span>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="md:col-span-1 glass-panel p-6 rounded-xl border border-white/5 flex flex-col card-hover">
              <h3 className="text-lg font-semibold text-white mb-4">情感倾向</h3>
              <div className="flex-1 min-h-[200px]">
                <SentimentPieChart data={SENTIMENT_DATA} />
              </div>
            </div>

            {/* Title Patterns - Wide */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
               {TITLE_PATTERNS.map((pattern, idx) => {
                 const Icon = pattern.icon;
                 return (
                   <div key={idx} className="bg-slate-900/40 hover:bg-slate-800 border border-white/5 hover:border-primary-500/30 p-4 rounded-xl transition-all group">
                     <div className={`mb-3 w-10 h-10 rounded-lg flex items-center justify-center bg-slate-950 ${pattern.color}`}>
                       <Icon size={20} />
                     </div>
                     <h4 className="text-slate-200 font-medium text-sm mb-1">{pattern.name}</h4>
                     <p className="text-xs text-slate-500 mb-3 line-clamp-2 h-8">{pattern.effect}</p>
                     <div className="text-[10px] text-slate-400 bg-slate-950/50 p-2 rounded border-l-2 border-slate-700 truncate">
                       "{pattern.example}"
                     </div>
                   </div>
                 )
               })}
            </div>
          </div>
        </Section>

        {/* Suggestions Section - Cards */}
        <Section id="suggestions" title="行动建议" icon={<Lightbulb size={20} />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "产量为王，质量保底",
                desc: "虎嗅和数字生命卡兹克的成功证明：持续高频输出（月均5-15篇）能建立稳定影响力，但10%的爆款率意味着必须保证基础质量。",
                icon: TrendingUp,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "紧跟前沿 + 实用落地",
                desc: "OpenAI、Sora等前沿技术永远有流量。同时，'知识付费'、'教育'等实用话题以及AI+垂直领域（医疗/体育）是蓝海机会。",
                icon: Target,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "理性叙事，适度造势",
                desc: "70%中性情感占比说明读者看重价值。标题策略上，适度使用'夸张造势'和'疑问+数字排名'，是经验证的高转化组合。",
                icon: Zap,
                color: "from-emerald-500 to-teal-500"
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                
                <div className="relative h-full bg-slate-900 rounded-xl p-8 border border-white/5 flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center text-xs font-medium text-slate-500 group-hover:text-white transition-colors uppercase tracking-wider">
                    Strategy 0{i + 1}
                    <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 pt-12 pb-8 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <LayoutGrid size={20} className="text-white" />
            <span className="text-lg font-bold text-white">AI Insight</span>
          </div>
          <p className="text-slate-500 text-sm mb-2">
            数据来源：基于187位创作者、274篇文章的系统分析
          </p>
          <p className="text-slate-600 text-xs">
            Designed for Content Creators · 2024 Edition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;