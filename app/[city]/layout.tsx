import { notFound } from "next/navigation";
import { cities } from "@/lib/industryData";
import CitySelector from "@/components/CitySelector";

interface CityLayoutProps {
  children: React.ReactNode;
  params: Promise<{ city: string }>;
}

export default async function CityLayout({ children, params }: CityLayoutProps) {
  const { city } = await params;
  const normalizedCity = city.toUpperCase();

  // Validate city
  if (!(normalizedCity in cities)) {
    notFound();
  }

  return (
    <>
      {children}
      <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none">
        <div className="flex justify-center pointer-events-auto">
          <CitySelector currentCity={normalizedCity} />
        </div>
      </div>
    </>
  );
}
