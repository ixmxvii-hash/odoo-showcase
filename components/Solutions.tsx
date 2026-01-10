"use client";

import { motion, useInView } from "framer-motion";
import {
  Package,
  Factory,
  TrendingUp,
  ShoppingCart,
  Calculator,
  ClipboardCheck,
  Truck,
  BarChart,
  LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";

interface Module {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  position: { x: number; y: number };
  connections: string[];
}

const modules: Module[] = [
  {
    id: "inventory",
    icon: Package,
    title: "Inventory & Warehouse",
    description: "Real-time stock tracking, multi-location management, and automated reordering",
    position: { x: -280, y: -180 },
    connections: ["manufacturing", "sales", "purchasing"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & MRP",
    description: "Production planning, work orders, and bill of materials management",
    position: { x: 280, y: -180 },
    connections: ["inventory", "quality", "purchasing"],
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Sales & CRM",
    description: "Lead management, quotations, and sales order processing",
    position: { x: -380, y: 60 },
    connections: ["inventory", "accounting", "shipping"],
  },
  {
    id: "purchasing",
    icon: ShoppingCart,
    title: "Purchasing & Vendors",
    description: "Purchase orders, vendor management, and procurement automation",
    position: { x: 380, y: 60 },
    connections: ["inventory", "manufacturing", "accounting"],
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting Integration",
    description: "Automated journal entries, invoicing, and financial reporting",
    position: { x: -280, y: 280 },
    connections: ["sales", "purchasing", "analytics"],
  },
  {
    id: "quality",
    icon: ClipboardCheck,
    title: "Quality Control",
    description: "Quality checks, inspections, and full traceability",
    position: { x: 100, y: -280 },
    connections: ["manufacturing", "inventory"],
  },
  {
    id: "shipping",
    icon: Truck,
    title: "Shipping & Logistics",
    description: "Delivery management, carrier integration, and tracking",
    position: { x: -100, y: 280 },
    connections: ["sales", "inventory", "analytics"],
  },
  {
    id: "analytics",
    icon: BarChart,
    title: "Reporting & Analytics",
    description: "Real-time dashboards, custom reports, and business intelligence",
    position: { x: 280, y: 280 },
    connections: ["accounting", "shipping", "sales"],
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);

  const handleModuleHover = (moduleId: string | null) => {
    setHoveredModule(moduleId);
    if (moduleId) {
      const module = modules.find((m) => m.id === moduleId);
      setActiveConnections(module?.connections || []);
    } else {
      setActiveConnections([]);
    }
  };

  const getConnectionPath = (from: Module, to: Module) => {
    const startX = from.position.x;
    const startY = from.position.y;
    const endX = to.position.x;
    const endY = to.position.y;

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  };

  const isConnectionActive = (fromId: string, toId: string) => {
    if (!hoveredModule) return false;
    return (
      (hoveredModule === fromId && activeConnections.includes(toId)) ||
      (hoveredModule === toId && activeConnections.includes(fromId))
    );
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            One System. Zero Data Silos.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Start small, scale up. No "big bang" required.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Begin with Inventory and Sales. Add Manufacturing when you're ready. Grow at your pace.
          </p>
        </motion.div>

        {/* Hub and Spoke Visualization */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: "visible" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#d1d5db" />
              </marker>
              <marker
                id="arrowhead-active"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
              </marker>
            </defs>
            <g transform="translate(50%, 50%)">
              {/* Draw connections */}
              {modules.map((fromModule) =>
                fromModule.connections.map((toId) => {
                  const toModule = modules.find((m) => m.id === toId);
                  if (!toModule) return null;

                  const isActive = isConnectionActive(fromModule.id, toId);

                  return (
                    <motion.path
                      key={`${fromModule.id}-${toId}`}
                      d={getConnectionPath(fromModule, toModule)}
                      fill="none"
                      stroke={isActive ? "#f97316" : "#d1d5db"}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      markerEnd={`url(#${isActive ? "arrowhead-active" : "arrowhead"})`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { pathLength: 1, opacity: isActive ? 0.8 : 0.3 }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        delay: 0.5,
                        opacity: { duration: 0.3 },
                      }}
                    />
                  );
                })
              )}

              {/* Center Hub - Odoo Logo */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <circle cx="0" cy="0" r="80" fill="#7c3aed" opacity="0.1" />
                <circle cx="0" cy="0" r="60" fill="#7c3aed" opacity="0.2" />
                <circle cx="0" cy="0" r="40" fill="#7c3aed" />
                <text
                  x="0"
                  y="8"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="system-ui"
                >
                  Odoo
                </text>
              </motion.g>
            </g>
          </svg>

          {/* Module Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isHovered = hoveredModule === module.id;
              const isConnected =
                hoveredModule !== null && activeConnections.includes(module.id);

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          x: module.position.x,
                          y: module.position.y,
                        }
                      : {}
                  }
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="absolute"
                  style={{ left: "50%", top: "50%" }}
                  onMouseEnter={() => handleModuleHover(module.id)}
                  onMouseLeave={() => handleModuleHover(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`
                      relative bg-white rounded-xl shadow-lg p-6 w-64
                      border-2 transition-all duration-300 cursor-pointer
                      ${
                        isHovered
                          ? "border-orange-500 shadow-2xl z-20"
                          : isConnected
                          ? "border-orange-300 shadow-xl z-10"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      w-14 h-14 rounded-lg flex items-center justify-center mb-4
                      transition-colors duration-300
                      ${
                        isHovered
                          ? "bg-orange-500"
                          : isConnected
                          ? "bg-orange-100"
                          : "bg-purple-100"
                      }
                    `}
                    >
                      <Icon
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isHovered
                            ? "text-white"
                            : isConnected
                            ? "text-orange-600"
                            : "text-purple-600"
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                      font-semibold text-lg mb-2 transition-colors duration-300
                      ${isHovered || isConnected ? "text-orange-600" : "text-gray-900"}
                    `}
                    >
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {module.description}
                    </p>

                    {/* Pulse effect when hovered */}
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-orange-400"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: [0.5, 0], scale: [1, 1.1] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Hover over any module to see how it connects to your entire operation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Explore All Modules
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
