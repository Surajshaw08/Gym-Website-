import { Dumbbell, Users, Salad, Leaf, Activity } from "lucide-react";

const services = [
  {
    icon: <Dumbbell className="w-10 h-10 text-orange-500" />,
    title: "Personal Training",
    desc: "One-on-one sessions with certified trainers to help you reach your unique fitness goals with expert guidance and motivation.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Group Fitness Classes",
    desc: "Fun and energetic group classes including HIIT, Zumba, and more, designed for all fitness levels.",
  },
  {
    icon: <Salad className="w-10 h-10 text-orange-500" />,
    title: "Nutrition Counseling",
    desc: "Personalized nutrition plans and ongoing support to fuel your body and maximize your results.",
  },
  {
  icon: <Leaf className="w-10 h-10 text-orange-500" />,
    title: "Yoga & Mindfulness",
    desc: "Relax, stretch, and strengthen your mind-body connection with our yoga and mindfulness sessions.",
  },
  {
    icon: <Activity className="w-10 h-10 text-orange-500" />,
    title: "Strength & Conditioning",
    desc: "Build muscle, boost endurance, and improve overall fitness with our strength and conditioning programs.",
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-4 text-orange-500 text-center">Our Services</h1>
      <p className="max-w-2xl text-center text-lg text-gray-300 mb-12">
        Discover our range of professional fitness services designed to help you achieve your health and wellness goals. Whether you’re a beginner or an athlete, we have something for everyone.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-900/70 border border-orange-500/20 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-orange-400 text-center">{service.title}</h2>
            <p className="text-gray-300 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
