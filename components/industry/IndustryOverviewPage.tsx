import Link from "next/link";
import { ArrowRight, MapPin, type LucideIcon } from "lucide-react";
import { industries } from "@/lib/industryData";
import Footer from "@/components/Footer";

type Accent =
  | "blue"
  | "amber"
  | "emerald"
  | "purple"
  | "rose"
  | "cyan"
  | "indigo"
  | "teal";

const accentStyles: Record<
  Accent,
  {
    iconBg: string;
    iconText: string;
    headingGradient: string;
    solutionsBg: string;
    solutionsIconBg: string;
    ctaBg: string;
    ctaText: string;
    modulesIconBg: string;
  }
> = {
  blue: {
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    headingGradient: "from-blue-600 to-blue-800",
    solutionsBg: "from-blue-50 to-white",
    solutionsIconBg: "bg-blue-500",
    ctaBg: "from-blue-600 to-blue-800",
    ctaText: "text-blue-100",
    modulesIconBg: "bg-blue-50",
  },
  amber: {
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    headingGradient: "from-amber-600 to-orange-600",
    solutionsBg: "from-amber-50 to-white",
    solutionsIconBg: "bg-amber-500",
    ctaBg: "from-amber-600 to-orange-700",
    ctaText: "text-amber-100",
    modulesIconBg: "bg-amber-50",
  },
  emerald: {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    headingGradient: "from-emerald-600 to-green-700",
    solutionsBg: "from-emerald-50 to-white",
    solutionsIconBg: "bg-emerald-500",
    ctaBg: "from-emerald-600 to-green-700",
    ctaText: "text-emerald-100",
    modulesIconBg: "bg-emerald-50",
  },
  purple: {
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    headingGradient: "from-purple-600 to-purple-800",
    solutionsBg: "from-purple-50 to-white",
    solutionsIconBg: "bg-purple-500",
    ctaBg: "from-purple-600 to-purple-800",
    ctaText: "text-purple-100",
    modulesIconBg: "bg-purple-50",
  },
  rose: {
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    headingGradient: "from-rose-600 to-pink-700",
    solutionsBg: "from-rose-50 to-white",
    solutionsIconBg: "bg-rose-500",
    ctaBg: "from-rose-600 to-pink-700",
    ctaText: "text-rose-100",
    modulesIconBg: "bg-rose-50",
  },
  cyan: {
    iconBg: "bg-cyan-100",
    iconText: "text-cyan-600",
    headingGradient: "from-cyan-600 to-blue-700",
    solutionsBg: "from-cyan-50 to-white",
    solutionsIconBg: "bg-cyan-500",
    ctaBg: "from-cyan-600 to-blue-700",
    ctaText: "text-cyan-100",
    modulesIconBg: "bg-cyan-50",
  },
  indigo: {
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",
    headingGradient: "from-indigo-600 to-violet-700",
    solutionsBg: "from-indigo-50 to-white",
    solutionsIconBg: "bg-indigo-500",
    ctaBg: "from-indigo-600 to-violet-700",
    ctaText: "text-indigo-100",
    modulesIconBg: "bg-indigo-50",
  },
  teal: {
    iconBg: "bg-teal-100",
    iconText: "text-teal-600",
    headingGradient: "from-teal-600 to-cyan-700",
    solutionsBg: "from-teal-50 to-white",
    solutionsIconBg: "bg-teal-500",
    ctaBg: "from-teal-600 to-cyan-700",
    ctaText: "text-teal-100",
    modulesIconBg: "bg-teal-50",
  },
};

const cityCards = [
  { name: "Houston", slug: "HTX", region: "Greater Houston" },
  { name: "Austin", slug: "ATX", region: "Central Texas" },
  { name: "Dallas-Fort Worth", slug: "DFW", region: "North Texas" },
];

interface IndustryOverviewPageProps {
  industryKey: keyof typeof industries;
  heroTitle: string;
  heroIcon: LucideIcon;
  accent: Accent;
  cityCtaDescription: string;
}

export default function IndustryOverviewPage({
  industryKey,
  heroTitle,
  heroIcon: HeroIcon,
  accent,
  cityCtaDescription,
}: IndustryOverviewPageProps) {
  const industry = industries[industryKey];
  const styles = accentStyles[accent];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 ${styles.iconBg} rounded-2xl mb-6`}>
              <HeroIcon className={`w-10 h-10 ${styles.iconText}`} />
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${styles.headingGradient} bg-clip-text text-transparent`}>
              {heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {industry.heroDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {industry.painPoints.slice(0, 3).map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br ${styles.solutionsBg} rounded-2xl p-8 mb-16`}>
            <h2 className="text-3xl font-bold mb-8 text-center">How Odoo Solves These Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.solutions.slice(0, 4).map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${styles.solutionsIconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{solution.title}</h3>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Odoo Modules for {industry.name}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {industry.keyModules.slice(0, 4).map((module, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                  <div className={`w-12 h-12 ${styles.modulesIconBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <div className={`w-6 h-6 ${styles.solutionsIconBg} rounded`} />
                  </div>
                  <h3 className="font-semibold text-sm">{module.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-br ${styles.ctaBg} rounded-2xl p-12 text-white text-center`}>
            <MapPin className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Select Your Location</h2>
            <p className={`${styles.ctaText} mb-8 max-w-2xl mx-auto`}>
              {cityCtaDescription}
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {cityCards.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/${industry.slug}`}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20 hover:border-white/40 group"
                >
                  <div className="text-2xl font-bold mb-2">{city.name}</div>
                  <div className={`text-sm ${styles.ctaText} mb-4`}>{city.region}</div>
                  <div className="flex items-center justify-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
