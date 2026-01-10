"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Factory, Beaker, Zap, UtensilsCrossed, Settings, Truck, ShoppingBag, Briefcase, Search } from "lucide-react";
import { Button } from "./ui/Button";

// Comprehensive search index with page content
const searchIndex = [
  // Main Pages
  { name: "Home", href: "/", keywords: ["home", "icit", "odoo", "houston", "erp", "implementation", "texas", "local partner", "90 day", "open source"] },
  { name: "Applications", href: "/applications", keywords: ["apps", "applications", "modules", "crm", "sales", "accounting", "inventory", "manufacturing", "hr", "project", "ecommerce", "pos", "marketing", "all apps", "odoo apps"] },
  { name: "ROI Calculator", href: "/roi-calculator", keywords: ["roi", "calculator", "savings", "return", "investment", "cost", "payback", "efficiency", "labor savings", "error reduction"] },
  { name: "Why ICIT", href: "/why-icit", keywords: ["why", "icit", "about", "team", "experience", "partner", "local", "houston based", "on-site support"] },
  { name: "Contact", href: "/contact", keywords: ["contact", "get in touch", "demo", "consultation", "call", "email", "schedule", "meeting", "free consultation"] },

  // Industries - Houston
  { name: "Manufacturing (Houston)", href: "/HTX/manufacturing", keywords: ["manufacturing", "mrp", "production", "bom", "factory", "assembly", "houston", "htx", "shop floor", "work orders", "production planning", "quality control", "traceability", "ship channel", "energy corridor"] },
  { name: "Discrete Manufacturing", href: "/HTX/discrete-manufacturing", keywords: ["discrete", "manufacturing", "machine shop", "fabrication", "assembly", "job shop", "custom orders", "engineering", "cad", "cnc", "tooling", "make to order"] },
  { name: "Process Manufacturing", href: "/HTX/process-manufacturing", keywords: ["process", "manufacturing", "chemical", "petrochemical", "batch", "formula", "recipe", "mixing", "blending", "yield", "byproduct", "continuous production"] },
  { name: "Food & Beverage", href: "/HTX/food-beverage", keywords: ["food", "beverage", "processing", "distribution", "expiration", "lot tracking", "fda", "haccp", "recall", "shelf life", "cold chain", "allergen", "nutrition"] },
  { name: "Energy Services", href: "/HTX/energy-services", keywords: ["energy", "oilfield", "oil", "gas", "equipment", "field service", "rental", "maintenance", "upstream", "midstream", "downstream", "pipeline", "drilling"] },
  { name: "Distribution & Wholesale", href: "/HTX/distribution", keywords: ["distribution", "wholesale", "warehouse", "b2b", "logistics", "3pl", "pick pack ship", "cross dock", "drop ship", "multi warehouse", "inventory optimization"] },
  { name: "Retail & E-commerce", href: "/HTX/retail", keywords: ["retail", "ecommerce", "e-commerce", "omnichannel", "pos", "store", "shopify", "amazon", "marketplace", "returns", "loyalty", "gift cards"] },
  { name: "Professional Services", href: "/HTX/professional-services", keywords: ["professional", "services", "consulting", "agency", "timesheet", "billing", "hourly", "retainer", "utilization", "resource planning", "project billing"] },

  // Industries - Austin
  { name: "Manufacturing (Austin)", href: "/ATX/manufacturing", keywords: ["manufacturing", "austin", "atx", "tech corridor", "semiconductor", "electronics", "clean room", "round rock", "cedar park"] },
  { name: "Discrete Manufacturing (Austin)", href: "/ATX/discrete-manufacturing", keywords: ["discrete", "austin", "atx", "precision", "aerospace", "defense"] },
  { name: "Process Manufacturing (Austin)", href: "/ATX/process-manufacturing", keywords: ["process", "austin", "atx", "pharmaceutical", "biotech"] },
  { name: "Distribution (Austin)", href: "/ATX/distribution", keywords: ["distribution", "austin", "atx", "fulfillment", "tech hub"] },
  { name: "Energy Services (Austin)", href: "/ATX/energy-services", keywords: ["energy", "austin", "atx", "solar", "renewable", "green energy"] },
  { name: "Retail (Austin)", href: "/ATX/retail", keywords: ["retail", "austin", "atx", "south congress", "local brands"] },
  { name: "Professional Services (Austin)", href: "/ATX/professional-services", keywords: ["professional", "austin", "atx", "tech consulting", "startups"] },
  { name: "Food & Beverage (Austin)", href: "/ATX/food-beverage", keywords: ["food", "austin", "atx", "craft", "local", "farm to table"] },

  // Industries - Dallas
  { name: "Manufacturing (Dallas)", href: "/DFW/manufacturing", keywords: ["manufacturing", "dallas", "dfw", "fort worth", "alliance corridor", "logistics hub", "arlington", "irving"] },
  { name: "Discrete Manufacturing (Dallas)", href: "/DFW/discrete-manufacturing", keywords: ["discrete", "dallas", "dfw", "aerospace", "defense", "lockheed"] },
  { name: "Process Manufacturing (Dallas)", href: "/DFW/process-manufacturing", keywords: ["process", "dallas", "dfw", "plastics", "chemicals"] },
  { name: "Distribution (Dallas)", href: "/DFW/distribution", keywords: ["distribution", "dallas", "dfw", "logistics hub", "intermodal", "central location"] },
  { name: "Energy Services (Dallas)", href: "/DFW/energy-services", keywords: ["energy", "dallas", "dfw", "corporate", "headquarters", "midstream"] },
  { name: "Retail (Dallas)", href: "/DFW/retail", keywords: ["retail", "dallas", "dfw", "galleria", "northpark", "luxury"] },
  { name: "Professional Services (Dallas)", href: "/DFW/professional-services", keywords: ["professional", "dallas", "dfw", "corporate", "finance", "banking"] },
  { name: "Food & Beverage (Dallas)", href: "/DFW/food-beverage", keywords: ["food", "dallas", "dfw", "restaurant", "hospitality", "catering"] },

  // Solutions with detailed content
  { name: "CRM - Customer Relationships", href: "/solutions/crm", keywords: ["crm", "leads", "pipeline", "opportunities", "deals", "customers", "relationships", "contact management", "lead scoring", "sales funnel", "follow up", "customer 360", "activity tracking", "email integration", "meeting scheduler"] },
  { name: "Sales - Orders & Quotes", href: "/solutions/sales", keywords: ["sales", "quotes", "orders", "fulfillment", "pricing", "delivery", "quotation", "sales order", "price list", "discount", "margin", "commission", "sales team", "territory", "forecast"] },
  { name: "Accounting & Finance", href: "/solutions/accounting", keywords: ["accounting", "finance", "invoicing", "bills", "reports", "bookkeeping", "general ledger", "accounts receivable", "accounts payable", "bank reconciliation", "financial reports", "balance sheet", "income statement", "cash flow", "audit trail", "tax", "multi currency"] },
  { name: "Invoicing & Billing", href: "/solutions/invoicing", keywords: ["invoicing", "invoice", "billing", "payments", "reminders", "recurring", "online payment", "stripe", "paypal", "payment terms", "credit notes", "debit notes", "customer portal", "automatic reminders"] },
  { name: "Inventory Management", href: "/solutions/inventory", keywords: ["inventory", "stock", "warehouse", "barcode", "tracking", "reorder", "serial number", "lot number", "fifo", "lifo", "average cost", "stock valuation", "inventory adjustment", "cycle count", "putaway", "picking", "packing", "shipping", "receiving", "bin location", "multi location"] },
  { name: "Purchase & Procurement", href: "/solutions/purchase", keywords: ["purchase", "procurement", "vendor", "po", "rfq", "buying", "purchase order", "request for quotation", "vendor management", "supplier", "purchase agreement", "blanket order", "dropship", "landed cost", "vendor bill"] },
  { name: "Manufacturing (MRP)", href: "/solutions/manufacturing", keywords: ["manufacturing", "mrp", "bom", "work orders", "production", "bill of materials", "routing", "work center", "production order", "manufacturing order", "material planning", "capacity planning", "shop floor", "quality check", "scrap", "subcontracting", "plm"] },
  { name: "HR & Employees", href: "/solutions/hr", keywords: ["hr", "human resources", "employees", "attendance", "time off", "appraisals", "recruitment", "onboarding", "employee directory", "org chart", "contracts", "payroll", "expenses", "fleet", "lunch", "referral"] },
  { name: "Project Management", href: "/solutions/project-management", keywords: ["project", "tasks", "timesheet", "planning", "gantt", "kanban", "milestones", "subtasks", "project stages", "profitability", "burndown", "sprint", "agile", "resource allocation", "billable hours", "project billing"] },
  { name: "E-commerce & Website", href: "/solutions/ecommerce", keywords: ["ecommerce", "online store", "website", "shopping cart", "products", "catalog", "product variants", "attributes", "checkout", "shipping rates", "tax calculation", "promo codes", "coupons", "wishlist", "compare", "reviews", "seo"] },
  { name: "Point of Sale (POS)", href: "/solutions/point-of-sale", keywords: ["pos", "point of sale", "retail", "register", "checkout", "restaurant", "cash register", "barcode scanner", "receipt", "cash management", "split payment", "refund", "loyalty program", "gift card", "table management", "kitchen display", "tips"] },
  { name: "Email Marketing", href: "/solutions/marketing", keywords: ["marketing", "email", "automation", "campaigns", "social", "sms", "mailing list", "newsletter", "a/b testing", "email template", "marketing automation", "drip campaign", "lead nurturing", "utm tracking", "analytics", "unsubscribe", "gdpr"] },

  // Feature-specific searches
  { name: "Barcode Scanning", href: "/solutions/inventory", keywords: ["barcode", "scanner", "scan", "barcode printing", "label", "gs1"] },
  { name: "Multi-Company", href: "/solutions/accounting", keywords: ["multi company", "consolidation", "intercompany", "multiple companies", "subsidiaries"] },
  { name: "Reporting & Analytics", href: "/solutions/accounting", keywords: ["reports", "reporting", "analytics", "dashboard", "kpi", "metrics", "pivot", "charts", "export"] },
  { name: "Integrations", href: "/applications", keywords: ["integration", "api", "connect", "sync", "import", "export", "third party", "zapier", "webhook"] },
  { name: "Mobile App", href: "/applications", keywords: ["mobile", "app", "ios", "android", "phone", "tablet", "offline"] },
  { name: "Document Management", href: "/solutions/project-management", keywords: ["documents", "files", "attachments", "spreadsheet", "pdf", "sign", "e-signature"] },
];

const industries = [
  // Manufacturing & Production
  { name: "Manufacturing", href: "/HTX/manufacturing", icon: Factory, description: "General manufacturing solutions" },
  { name: "Discrete Manufacturing", href: "/HTX/discrete-manufacturing", icon: Settings, description: "Machine shops & fabrication" },
  { name: "Process Manufacturing", href: "/HTX/process-manufacturing", icon: Beaker, description: "Chemical & petrochemical" },
  { name: "Food & Beverage", href: "/HTX/food-beverage", icon: UtensilsCrossed, description: "Food processing & distribution" },
  // Energy & Field Services
  { name: "Energy Services", href: "/HTX/energy-services", icon: Zap, description: "Oilfield & equipment services" },
  // Supply Chain & Commerce
  { name: "Distribution & Wholesale", href: "/HTX/distribution", icon: Truck, description: "Warehousing & B2B distribution" },
  { name: "Retail & E-commerce", href: "/HTX/retail", icon: ShoppingBag, description: "Omnichannel retail solutions" },
  // Professional Services
  { name: "Professional Services", href: "/HTX/professional-services", icon: Briefcase, description: "Consulting & business services" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Applications", href: "/applications" },
  { name: "ROI Calculator", href: "/roi-calculator" },
  { name: "Why ICIT", href: "/why-icit" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchIndex>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileIndustriesOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [pathname]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchIndex.filter((page) => {
      return (
        page.name.toLowerCase().includes(lowerQuery) ||
        page.keywords.some((keyword) => keyword.includes(lowerQuery))
      );
    });
    setSearchResults(results.slice(0, 6)); // Limit to 6 results
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setSearchQuery("");
    } else if (e.key === "Enter" && searchResults.length > 0) {
      router.push(searchResults[0].href);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight group-hover:text-orange-400 transition-colors">
                ICIT
              </span>
            </Link>

            {/* Desktop Navigation - Centered Pills */}
            <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 bg-slate-800/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-700/50">
                {/* Home Link */}
                <Link
                  href="/"
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    pathname === "/"
                      ? "bg-orange-500 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  Home
                </Link>

                {/* Industries Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      pathname.includes("manufacturing") ||
                      pathname.includes("energy") ||
                      pathname.includes("food")
                        ? "bg-orange-500 text-white"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    Industries
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isIndustriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden"
                      >
                        <div className="p-2">
                          {industries.map((industry) => {
                            const Icon = industry.icon;
                            const isActive = pathname === industry.href;
                            return (
                              <Link
                                key={industry.href}
                                href={industry.href}
                                className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                                  isActive
                                    ? "bg-orange-500/10 text-orange-400"
                                    : "hover:bg-slate-700/50 text-slate-300 hover:text-white"
                                }`}
                              >
                                <div
                                  className={`p-2 rounded-lg ${
                                    isActive
                                      ? "bg-orange-500/20"
                                      : "bg-slate-700"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="font-medium">{industry.name}</div>
                                  <div className="text-xs text-slate-400">
                                    {industry.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Links (skip Home since it's rendered first) */}
                {navLinks.filter(link => link.href !== "/").map((link) => {
                  const isActive = link.href.startsWith("/#")
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Search + CTA - Far Right */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search - Expands on Hover */}
              <div
                ref={searchContainerRef}
                className="relative"
                onMouseEnter={() => setIsSearchOpen(true)}
                onMouseLeave={() => {
                  if (!searchQuery) {
                    setIsSearchOpen(false);
                  }
                }}
              >
                <motion.div
                  initial={false}
                  animate={{ width: isSearchOpen ? 280 : 40 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="relative h-10 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-full overflow-hidden"
                >
                  <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${isSearchOpen ? 'text-slate-400' : 'text-slate-300'}`} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`absolute inset-0 pl-10 pr-4 bg-transparent text-white text-sm placeholder:text-slate-400 focus:outline-none transition-opacity ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>

                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {isSearchOpen && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden"
                    >
                      <div className="p-2">
                        {searchResults.map((result) => (
                          <Link
                            key={result.href}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                          >
                            <Search className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium">{result.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* No results */}
                <AnimatePresence>
                  {isSearchOpen && searchQuery && searchResults.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden p-4"
                    >
                      <p className="text-sm text-slate-400 text-center">No results found</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/25"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-800">
                  <span className="text-white font-bold text-lg">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="px-4 py-3 border-b border-slate-800">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search pages..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-500/50"
                    />
                  </div>
                  {/* Mobile Search Results */}
                  {searchQuery && searchResults.length > 0 && (
                    <div className="mt-2 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                      {searchResults.map((result) => (
                        <Link
                          key={result.href}
                          href={result.href}
                          onClick={() => {
                            setSearchQuery("");
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors border-b border-slate-700 last:border-0"
                        >
                          <Search className="w-4 h-4 text-slate-500" />
                          <span className="text-sm font-medium">{result.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                  {searchQuery && searchResults.length === 0 && (
                    <p className="text-sm text-slate-400 text-center mt-3">No results found</p>
                  )}
                </div>

                {/* Mobile Menu Content - Same order as desktop */}
                <div className="flex-1 overflow-y-auto py-4 px-4">
                  <div className="space-y-1">
                    {/* Home */}
                    <Link
                      href="/"
                      className={`block p-3 rounded-lg transition-colors font-medium ${
                        pathname === "/"
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      Home
                    </Link>

                    {/* Industries - Expandable */}
                    <div>
                      <button
                        onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors font-medium ${
                          pathname.includes("manufacturing") ||
                          pathname.includes("energy") ||
                          pathname.includes("food") ||
                          pathname.includes("distribution") ||
                          pathname.includes("retail") ||
                          pathname.includes("professional")
                            ? "bg-orange-500/10 text-orange-400"
                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        <span>Industries</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileIndustriesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileIndustriesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-1 space-y-1">
                              {industries.map((industry) => {
                                const Icon = industry.icon;
                                const isActive = pathname === industry.href;
                                return (
                                  <Link
                                    key={industry.href}
                                    href={industry.href}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                      isActive
                                        ? "bg-orange-500/10 text-orange-400"
                                        : "text-slate-300 hover:bg-slate-800"
                                    }`}
                                  >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{industry.name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Applications */}
                    <Link
                      href="/applications"
                      className={`block p-3 rounded-lg transition-colors font-medium ${
                        pathname === "/applications"
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      Applications
                    </Link>

                    {/* ROI Calculator */}
                    <Link
                      href="/roi-calculator"
                      className={`block p-3 rounded-lg transition-colors font-medium ${
                        pathname === "/roi-calculator"
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      ROI Calculator
                    </Link>

                    {/* Why ICIT */}
                    <Link
                      href="/why-icit"
                      className={`block p-3 rounded-lg transition-colors font-medium ${
                        pathname === "/why-icit"
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      Why ICIT
                    </Link>

                    {/* Contact */}
                    <Link
                      href="/contact"
                      className={`block p-3 rounded-lg transition-colors font-medium ${
                        pathname === "/contact"
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-slate-800">
                  <Link href="/contact" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                    >
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
