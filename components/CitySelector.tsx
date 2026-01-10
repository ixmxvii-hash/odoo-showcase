"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cities } from "@/lib/industryData";

interface CitySelectorProps {
  currentCity: string;
}

export default function CitySelector({ currentCity }: CitySelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCityChange = (newCity: string) => {
    if (newCity.toUpperCase() === currentCity.toUpperCase()) return;

    // Replace city in current path: /HTX/manufacturing -> /ATX/manufacturing
    const pathParts = pathname.split("/");
    if (pathParts.length >= 2) {
      pathParts[1] = newCity;
      const newPath = pathParts.join("/");
      router.push(newPath);
    }
  };

  const normalizedCurrentCity = currentCity.toUpperCase();

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center">
          {/* Pill Container */}
          <div className="inline-flex items-center gap-1 bg-slate-800/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-700/50">
            {/* Location Icon */}
            <div className="flex items-center gap-2 px-3 py-1.5 text-slate-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Region</span>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-slate-700" />

            {/* City Buttons */}
            {Object.entries(cities).map(([key, city]) => {
              const isActive = normalizedCurrentCity === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => handleCityChange(key)}
                  whileHover={{ scale: isActive ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="citySelector"
                      className="absolute inset-0 bg-orange-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="font-semibold">{key}</span>
                    <span className="hidden md:inline text-xs opacity-80">
                      {city.name === "Dallas-Fort Worth" ? "Dallas" : city.name}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
