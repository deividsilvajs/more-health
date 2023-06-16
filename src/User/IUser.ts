export type MetricsValues = [number, number];

export interface User {
    name: string;
    weight: number;
    height: number;
}

export interface UserMetrics extends User {
    imc: () => string;
    water: () => string;
    bulkingCarbo: () => MetricsValues;
    bulkingProt: () => MetricsValues;
    bulkingFat: () => MetricsValues;
    cuttingCarbo: () => MetricsValues;
    cuttingProt: () => MetricsValues;
    cuttingFat: () => MetricsValues;
}