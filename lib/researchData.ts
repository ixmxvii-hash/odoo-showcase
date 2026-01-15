import austinProcess from "../austin-process-manufacturing-research.json";
import austinDistribution from "../austin-distribution-industry-research.json";
import austinEnergy from "../austin_energy_services_research.json";
import austinProfessional from "../austin-professional-services-research.json";
import dfwProcess from "../dfw-process-manufacturing-research.json";
import dfwDiscrete from "../dfw_discrete_manufacturing_research.json";

export interface ResearchData {
  title: string;
  researchDate?: string;
  summary?: string;
  keyStatistics?: Record<string, string>;
  sources: string[];
  fileName: string;
}

type RawResearch = Record<string, unknown>;

function collectSources(raw: unknown, bucket: Set<string>) {
  if (!raw) return;
  if (Array.isArray(raw)) {
    raw.forEach((entry) => collectSources(entry, bucket));
    return;
  }

  if (typeof raw === "object") {
    Object.entries(raw as Record<string, unknown>).forEach(([key, value]) => {
      if (key === "source" && typeof value === "string") {
        bucket.add(value);
      } else {
        collectSources(value, bucket);
      }
    });
  }
}

function normalizeResearch(raw: RawResearch, fileName: string): ResearchData {
  const meta = (raw.research_metadata || {}) as Record<string, unknown>;
  const summary = (raw.executive_summary || {}) as Record<string, unknown>;

  const sources = new Set<string>();
  collectSources(raw, sources);

  return {
    title: typeof meta.title === "string" ? meta.title : fileName,
    researchDate: typeof meta.research_date === "string" ? meta.research_date : undefined,
    summary: typeof summary.overview === "string" ? summary.overview : undefined,
    keyStatistics:
      summary.key_statistics && typeof summary.key_statistics === "object"
        ? (summary.key_statistics as Record<string, string>)
        : undefined,
    sources: Array.from(sources).slice(0, 10),
    fileName,
  };
}

const researchMap: Record<string, ResearchData> = {
  "ATX:processManufacturing": normalizeResearch(
    austinProcess as RawResearch,
    "austin-process-manufacturing-research.json"
  ),
  "ATX:distribution": normalizeResearch(
    austinDistribution as RawResearch,
    "austin-distribution-industry-research.json"
  ),
  "ATX:energyServices": normalizeResearch(
    austinEnergy as RawResearch,
    "austin_energy_services_research.json"
  ),
  "ATX:professionalServices": normalizeResearch(
    austinProfessional as RawResearch,
    "austin-professional-services-research.json"
  ),
  "DFW:processManufacturing": normalizeResearch(
    dfwProcess as RawResearch,
    "dfw-process-manufacturing-research.json"
  ),
  "DFW:discreteManufacturing": normalizeResearch(
    dfwDiscrete as RawResearch,
    "dfw_discrete_manufacturing_research.json"
  ),
};

export function getResearchData(cityKey: string, industryKey: string): ResearchData | null {
  const key = `${cityKey.toUpperCase()}:${industryKey}`;
  return researchMap[key] || null;
}
