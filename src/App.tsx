import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Shield, CreditCard, Globe, Zap, Star, ArrowRight, ShoppingBag, HeartPulse, Smartphone, Car, Landmark, Utensils, X } from "lucide-react";

const SURVEY_LINK = "https://matcheshonoraryunderwater.com/wkm57s3hpb?key=2e3a50b17a7d2248eaf654ee8278c7ff";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c10] text-white selection:bg-primary/30">
      {/* Background Radial Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0d1218] border border-primary/30 rounded-3xl p-8 shadow-2xl shadow-primary/20"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Zap className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Get Paid from Survey</h2>
                <p className="text-white/60 mb-8">
                  Join our exclusive community and start earning real cash for your opinions today. 100% free and instant access.
                </p>
                <a
                  href={SURVEY_LINK}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-bg font-bold text-lg rounded-xl hover:scale-105 transition-transform animate-pulse-glow"
                >
                  Apply Now <ArrowRight size={20} />
                </a>
                <p className="mt-4 text-xs text-white/30">
                  ✅ No credit card required · USA, UK & Canada
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-[#080c10]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-display font-extrabold tracking-tight">
            Survey<span className="text-primary">Pay</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
            <CheckCircle size={14} />
            <span>100% Free to Join</span>
          </div>
        </div>
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-bold mb-8">
                <span>💰 Trusted by 2M+ Users · Paying Since 2019</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6 max-w-4xl mx-auto">
                Get Paid for Your Opinion <span className="text-primary">Starting Today</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                Complete simple online surveys and earn real cash. No experience needed. Join the world's most trusted survey community.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a 
                href={SURVEY_LINK}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-lg rounded-xl hover:scale-105 transition-transform animate-pulse-glow"
              >
                💰 Claim Your Free Account <ArrowRight size={20} />
              </a>
            </FadeIn>

            {/* Stats Bar */}
            <FadeIn delay={0.4}>
              <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-display font-bold text-primary">$5–$75</span>
                  <span className="text-sm text-white/40 uppercase tracking-widest mt-1">Per Survey</span>
                </div>
                <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-white/10 py-6 sm:py-0">
                  <span className="text-3xl font-display font-bold text-primary">2.4M+</span>
                  <span className="text-sm text-white/40 uppercase tracking-widest mt-1">Members</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-display font-bold text-primary">$48M+</span>
                  <span className="text-sm text-white/40 uppercase tracking-widest mt-1">Paid Out</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section className="py-24 px-4 sm:px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold text-center mb-16">How It Works</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", icon: "📝", title: "Sign Up Free", desc: "Create your free account in under 2 minutes" },
                { step: "2", icon: "🎯", title: "Pick Surveys", desc: "Browse surveys that match your profile" },
                { step: "3", icon: "✅", title: "Share Opinion", desc: "Answer simple questions, 5–20 minutes each" },
                { step: "4", icon: "💸", title: "Get Paid", desc: "Cash out via PayPal, gift cards, or bank transfer. Min $10" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="h-full p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors group">
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <div className="text-primary font-display font-bold text-sm mb-2 uppercase tracking-tighter">Step {item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SURVEY CATEGORIES */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold text-center mb-16">High-Paying Categories</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <ShoppingBag className="text-primary" />, title: "Shopping Habits", pay: "$5–$25/survey" },
                { icon: <HeartPulse className="text-primary" />, title: "Health & Lifestyle", pay: "$10–$50/survey" },
                { icon: <Smartphone className="text-primary" />, title: "Tech & Gadgets", pay: "$8–$40/survey" },
                { icon: <Car className="text-primary" />, title: "Automotive", pay: "$15–$75/survey" },
                { icon: <Landmark className="text-primary" />, title: "Finance & Banking", pay: "$20–$75/survey" },
                { icon: <Utensils className="text-primary" />, title: "Food & Beverages", pay: "$5–$30/survey" },
              ].map((cat, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <a 
                    href={SURVEY_LINK}
                    className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{cat.title}</h3>
                      <p className="text-primary font-semibold">{cat.pay}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="py-24 px-4 sm:px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold text-center mb-16">What Our Members Say</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Jessica M.", location: "New York USA", text: "$340 last month doing surveys in lunch breaks", stars: 5 },
                { name: "Tom H.", location: "London UK", text: "Cashed out £180 to PayPal last week", stars: 5 },
                { name: "Sarah R.", location: "Toronto Canada", text: "Earned $500+ in 2 months as stay-at-home mum", stars: 5 },
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} className="fill-secondary text-secondary" />)}
                    </div>
                    <p className="text-lg italic text-white/80 mb-6">"{t.text}"</p>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-white/40">{t.location}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TRUST BAR */}
        <section className="py-12 border-y border-white/5 bg-[#080c10]">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[800px] gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 font-semibold"><Shield size={20} /> SSL Secured</div>
              <div className="flex items-center gap-2 font-semibold"><CreditCard size={20} /> PayPal Payouts</div>
              <div className="flex items-center gap-2 font-semibold"><Zap size={20} /> Instant Signup</div>
              <div className="flex items-center gap-2 font-semibold"><CheckCircle size={20} /> Always Free</div>
              <div className="flex items-center gap-2 font-semibold"><Globe size={20} /> USA · UK · Canada</div>
            </div>
          </div>
        </section>

        {/* 7. MAIN CTA SECTION */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="p-12 md:p-20 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-[40px] text-center relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-3xl -z-10" />
                
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Start Earning Real Cash Today</h2>
                <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
                  Join 2.4 million members. 100% free, takes 2 minutes. No hidden fees or subscriptions.
                </p>
                
                <a 
                  href={SURVEY_LINK}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-bg font-black text-xl rounded-2xl hover:scale-105 transition-transform animate-pulse-glow mb-6"
                >
                  💰 Claim Your Free Account <ArrowRight size={24} />
                </a>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-white/40">
                  <span className="flex items-center gap-1"><CheckCircle size={14} className="text-primary" /> No credit card required</span>
                  <span className="hidden sm:block text-white/10">•</span>
                  <span className="flex items-center gap-1"><CheckCircle size={14} className="text-primary" /> Free forever</span>
                  <span className="hidden sm:block text-white/10">•</span>
                  <span className="flex items-center gap-1"><CheckCircle size={14} className="text-primary" /> Instant access</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="py-16 px-4 sm:px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-2xl font-display font-extrabold">
              Survey<span className="text-primary">Pay</span>
            </div>
            <div className="flex gap-8 text-sm text-white/40 font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-xs text-white/20 leading-relaxed max-w-3xl">
              © 2026 SurveyPay · Earnings vary based on participation, profile matching, and survey availability. Typical users earn between $50 and $500 per month. This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
