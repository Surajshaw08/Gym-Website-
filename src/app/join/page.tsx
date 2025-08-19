import { CheckCircle, Star, Flame, Medal } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29/mo",
    features: [
      "24/7 Gym Access",
      "Standard Equipment",
      "Locker Room Access",
      "1 Group Class/week",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$59/mo",
    features: [
      "Everything in Basic",
      "Unlimited Group Classes",
      "Personal Trainer (2 sessions/mo)",
      "Nutrition Plan",
      "Priority Support",
    ],
    highlight: true,
    icon: <Star className="w-6 h-6 text-yellow-400 inline ml-1" />,
  },
  {
    name: "Elite",
    price: "$99/mo",
    features: [
      "Everything in Premium",
      "Weekly Personal Training",
      "Specialized Training Sessions",
      "Body Composition Analysis",
      "VIP Lounge Access",
      "Exclusive Events",
    ],
    highlight: false,
    icon: <Medal className="w-6 h-6 text-orange-400 inline ml-1" />,
  },
];

const specialSessions = [
  {
    name: "HIIT Blast",
    desc: "High-Intensity Interval Training for maximum fat burn.",
    icon: <Flame className="w-7 h-7 text-orange-500" />,
  },
  {
    name: "Strength Camp",
    desc: "Build muscle and power with expert-led sessions.",
    icon: <CheckCircle className="w-7 h-7 text-orange-500" />,
  },
  {
    name: "Yoga Flow",
    desc: "Improve flexibility and mindfulness in a calming environment.",
    icon: <CheckCircle className="w-7 h-7 text-orange-500" />,
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-orange-500 mb-4 text-center">Join Us</h1>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl">
        Become a member of Bodyshape Gym and unlock access to world-class facilities, expert trainers, and a supportive fitness community. Choose the plan that fits your goals!
      </p>
      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border border-orange-500/30 bg-gray-900/80 p-8 flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105 ${plan.highlight ? 'border-2 border-yellow-400 shadow-yellow-400/20' : ''}`}
          >
            <h2 className="text-3xl font-bold mb-2 text-orange-400 flex items-center">
              {plan.name} {plan.icon}
            </h2>
            <div className="text-4xl font-extrabold mb-4">{plan.price}</div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-200">
                  <CheckCircle className="w-4 h-4 text-orange-400" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold text-lg transition ${plan.highlight ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}>Join {plan.name}</button>
          </div>
        ))}
      </div>
      {/* Special Training Sessions */}
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Special Training Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
        {specialSessions.map((s) => (
          <div key={s.name} className="bg-gray-900/70 border border-orange-500/20 rounded-xl p-6 flex flex-col items-center text-center shadow-md">
            <div className="mb-3">{s.icon}</div>
            <div className="text-xl font-semibold mb-1 text-orange-300">{s.name}</div>
            <div className="text-gray-300 text-sm">{s.desc}</div>
          </div>
        ))}
      </div>
      {/* Premium Features */}
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Premium Features</h2>
      <ul className="max-w-2xl mx-auto space-y-3 text-lg text-gray-200 mb-10">
        <li><CheckCircle className="w-5 h-5 text-orange-400 inline mr-2" /> Smart Fitness Tracking & App Integration</li>
        <li><CheckCircle className="w-5 h-5 text-orange-400 inline mr-2" /> Free Fitness Assessment & Progress Reports</li>
        <li><CheckCircle className="w-5 h-5 text-orange-400 inline mr-2" /> Member-Only Events & Workshops</li>
        <li><CheckCircle className="w-5 h-5 text-orange-400 inline mr-2" /> Discounts on Supplements & Merchandise</li>
        <li><CheckCircle className="w-5 h-5 text-orange-400 inline mr-2" /> Early Access to New Classes & Equipment</li>
      </ul>
    </div>
  );
}
