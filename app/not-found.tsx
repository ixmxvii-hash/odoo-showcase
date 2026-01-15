import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <div className="text-orange-500 text-sm font-semibold tracking-wide">404 • Page Not Found</div>
        <h1 className="text-4xl sm:text-5xl font-bold">Lost in the warehouse?</h1>
        <p className="text-slate-300 text-lg">
          The page you’re looking for doesn’t exist. Let’s get you back to the right aisle.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">Return Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3">
              Talk to our team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
