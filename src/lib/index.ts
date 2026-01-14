import { ChevronDown, TrendingUp, Bell, Shield, Zap, Users, BarChart3, DollarSign, Award, Target, TrendingDown } from "lucide-react";

export const faqs = [
  {
    question: "How do I receive stock signals?",
    answer: "Once you subscribe, you'll receive real-time stock signals directly to your dashboard, email, and mobile app. Our signals include entry points, target prices, and stop-loss levels for each recommendation."
  },
  {
    question: "What is the accuracy rate of your signals?",
    answer: "Our signals maintain a historical accuracy rate of over 75%. We use advanced technical analysis, market sentiment data, and AI-powered algorithms to identify high-probability trading opportunities."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time without any penalties. Your access will continue until the end of your current billing period."
  },
  {
    question: "Do you provide support for beginners?",
    answer: "Absolutely. We offer comprehensive educational resources, video tutorials, and a dedicated support team to help beginners understand our signals and develop their trading skills."
  },
  {
    question: "What markets do you cover?",
    answer: "We cover major stock exchanges including NYSE, NASDAQ, and BSE/NSE. Our signals span across large-cap, mid-cap, and select small-cap stocks across various sectors."
  },
  {
    question: "How often do you send signals?",
    answer: "We send signals based on market conditions, typically 3-5 signals per week. Quality over quantity is our priority—we only send signals when we identify high-conviction opportunities."
  }
];

export const whyChooseUs = [
  {
    icon: TrendingUp,
    title: "Expert Analysis",
    description: "Our team of certified analysts with 15+ years of market experience provides in-depth research and actionable insights."
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Get instant notifications on your phone and email the moment a new opportunity arises. Never miss a trade again."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Every signal comes with clear stop-loss and take-profit levels to help you manage risk and protect your capital."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our infrastructure ensures you receive signals within milliseconds of our analysis completion."
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join a thriving community of 50,000+ traders. Share ideas, discuss strategies, and learn from peers."
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Track all your trades, measure performance, and analyze your portfolio growth with our advanced dashboard."
  }
];

export const navItems = [
  { label: "Trade Ideas", href: '/trades' },
  { label: "Lessons", href: '/lessons' },
  { label: "Stock Updates", href: '/stock-updates' },
  { label: "Articles", href: '/articles' },
  { label: "Stocks News", href: '/news' },
  { label: "Academy", href: '/academy' },
];

export const adminNavItems = [
  { label: "Add Trade", href: '/admin/add-trade' },
  { label: "Add Lesson", href: '/admin/add-lesson' },
  { label: "Add Stock Update", href: '/admin/add-stock-update' },
  { label: "Add Article", href: '/admin/add-article' },
];

export const milestones = [
  {
    id: '1',
    date: 'February 2021',
    title: 'Started Trading Journey',
    description: 'We started our journey with crypto and we were just watching the market and learning during the bull market to familiarize ourselves with this new emerging market.',
    icon: TrendingUp,
    type: 'start',
    amount: '$0'
  },
  {
    id: '2',
    date: 'August 2021',
    title: 'First Investment',
    description: 'Invested our first $1,000 which we lent from family and lost them in our starting week in future trading and left future trading in desperation.',
    icon: TrendingDown,
    type: 'loss',
    amount: '-$1,000'
  },
  {
    id: '3',
    date: 'October 2021',
    title: 'Started Spot Trading',
    description: "Then we started spot trading and left future trading because future trading is not allowed or considered haraam in our religion and then joined binance square and earned our first dollars and we started investing that money in crypto and since then the roller coster hasn't descended.",
    icon: Target,
    type: 'milestone',
    amount: '+$1,000'
  },
  {
    id: '4',
    date: 'March 2022',
    title: 'Dominated the crypto market',
    description: "Then from those earnings, we transformed our account to 5-figures and made a lot of profit.",
    icon: Target,
    type: 'milestone',
    amount: '+$10,000'
  },
  {
    id: '5',
    date: 'August 2022',
    title: 'Hit +$250K Portfolio',
    description: 'Now, We have been closing our months with green for 6 months and then we reached our first major milestone. Consistency was finally paying off with multiple green months. We converted $10,000 into $278,000. After dominating the crypto, we stepped in stocks and forex.',
    icon: Award,
    type: 'achievement',
    amount: '+$250,000'
  },
  {
    id: '6',
    date: 'January 2024',
    title: 'Loss from the stocks and forex',
    description: 'After then, we were profitable in crypto and then we started investing for long term in stocks. But the stock market had some personal issues with us and it took tens of thousands of dollars from us in loss.',
    icon: DollarSign,
    type: 'loss',
    amount: '-$21,000'
  },
  {
    id: '7',
    date: 'Early 2025',
    title: 'Recovery from the market',
    description: 'After all these losses, we finally recovered all our money and became profitable in both stock and forex markets and started dominating these markets also.',
    icon: DollarSign,
    type: 'success',
    amount: '+$100,000'
  },
  {
    id: '8',
    date: 'Present',
    title: 'Current Status',
    description: 'Right now, we are in all three markets and doing well in all of them. We have also passed funded accounts tests and are now official funded traders and now managing funded accounts worth over half a million dollars.',
    icon: TrendingUp,
    type: 'current',
    amount: '+$500,000+'
  }
];

export const getTypeColor = (type: string) => {
    switch (type) {
      case 'start': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'education': return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'milestone': return 'bg-green-100 text-green-600 border-green-200';
      case 'achievement': return 'bg-golden/20 text-golden border-golden/30';
      case 'success': return 'bg-emerald-100 text-emerald-600 border-emerald-200';
      case 'current': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
};