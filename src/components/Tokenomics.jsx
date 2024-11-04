import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Tv, Coins, Users, Star, Zap } from 'lucide-react';

const Tokenomics = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [openFaqId, setOpenFaqId] = useState(null);

  const tokenomicsData = [
    { label: 'Community Rewards', value: '40%', description: 'Distributed to active streamers and viewers' },
    { label: 'Development', value: '30%', description: 'Platform enhancement and new features' },
    { label: 'Marketing', value: '20%', description: 'Growth and partnerships' },
    { label: 'Team', value: '10%', description: 'Core team allocation' },
  ];

  const features = [
    {
      icon: <Tv className="w-8 h-8 text-pink-400" />,
      title: "HD Streaming",
      description: "Crystal clear 4K streaming with ultra-low latency"
    },
    {
      icon: <Coins className="w-8 h-8 text-pink-400" />,
      title: "Crypto Payments",
      description: "Instant payments with multiple cryptocurrency options"
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
      title: "Creator Tokens",
      description: "Launch your own creator token and build your economy"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Community Features",
      description: "Build and engage with your community"
    },
    {
      icon: <Star className="w-8 h-8 text-pink-400" />,
      title: "Exclusive Content",
      description: "Token-gated premium content for your supporters"
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: "Instant Rewards",
      description: "Automated rewards distribution for engagement"
    }
  ];

  const faqCategories = {
    creators: [
      {
        id: 'c1',
        question: "How do I start streaming?",
        answer: "Simply connect your wallet, verify your account, and start streaming in minutes with our easy-to-use platform."
      },
      {
        id: 'c2',
        question: "What are the revenue streams?",
        answer: "Earn through direct tips, subscriptions, creator tokens, NFT sales, and community rewards program."
      },
      {
        id: 'c3',
        question: "What streaming quality is supported?",
        answer: "We support up to 4K resolution at 60fps with adaptive bitrate for optimal viewing experience."
      }
    ],
    tokens: [
      {
        id: 't1',
        question: "How do creator tokens work?",
        answer: "Creator tokens are unique cryptocurrencies tied to your channel, allowing fans to invest in your growth and access exclusive benefits."
      },
      {
        id: 't2',
        question: "What's the token distribution?",
        answer: "40% community rewards, 30% development, 20% marketing, and 10% team allocation, with vesting periods for stability."
      }
    ],
    general: [
      {
        id: 'g1',
        question: "What cryptocurrencies are accepted?",
        answer: "We accept major cryptocurrencies including ETH, USDT, and our platform token for payments and tips."
      },
      {
        id: 'g2',
        question: "How is stream quality maintained?",
        answer: "We use distributed edge servers and adaptive bitrate streaming to ensure HD quality with minimal buffering."
      }
    ]
  };

  const TabButton = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-pink-600 text-white' 
          : 'bg-pink-900/20 text-pink-200 hover:bg-pink-800/30'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-900/50 to-pink-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <TabButton 
            label="Features" 
            isActive={activeTab === 'features'} 
            onClick={() => setActiveTab('features')}
          />
          <TabButton 
            label="Tokenomics" 
            isActive={activeTab === 'tokenomics'} 
            onClick={() => setActiveTab('tokenomics')}
          />
          <TabButton 
            label="FAQ" 
            isActive={activeTab === 'faq'} 
            onClick={() => setActiveTab('faq')}
          />
        </div>

        {/* Features Section */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-6 rounded-lg backdrop-blur-sm
                          transform transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-pink-200 mb-2">{feature.title}</h3>
                <p className="text-pink-100/80">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tokenomics Section */}
        {activeTab === 'tokenomics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-6 rounded-lg text-center
                          transform transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl font-bold text-pink-200 mb-2">{item.value}</div>
                <div className="text-xl text-pink-100 mb-2">{item.label}</div>
                <div className="text-sm text-pink-100/70">{item.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="space-y-8">
            {Object.entries(faqCategories).map(([category, questions]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-200 capitalize mb-4">{category} FAQ</h3>
                {questions.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-gradient-to-br from-pink-800/30 to-red-800/30 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 flex justify-between items-center text-left"
                      onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                    >
                      <span className="text-pink-200 font-semibold">{faq.question}</span>
                      {openFaqId === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-pink-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-pink-400" />
                      )}
                    </button>
                    {openFaqId === faq.id && (
                      <div className="px-6 py-4 text-pink-100/80 border-t border-pink-800/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tokenomics;