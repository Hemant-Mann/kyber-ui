export type DensityMode = "comfortable" | "compact";

export async function resolveDensity(searchParams?: Promise<{ density?: string }>): Promise<DensityMode> {
  const params = (await searchParams) ?? {};
  return params.density === "compact" ? "compact" : "comfortable";
}
