export const PATHS = {
  savings: () => ["savings"] as const,
  metadata: () => ["metadata"] as const,

  mutations: (id: string) => [...PATHS.savings(), id, "mutations"] as const,
  aggregations: () => [...PATHS.metadata(), "aggregations"] as const,
  auth: () => [...PATHS.metadata(), "auth"] as const,
};
