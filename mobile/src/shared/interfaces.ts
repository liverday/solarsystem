export interface Planet {
  id: string;
  name: string;
  resume: string;
  introduction: string;
  image: string;
  searchTags: string[];
  features: {
    orbitalPeriod: string[];
    orbitalSpeed: string;
    rotationDuration: string;
    radius: string;
    Diameter: string;
    sunDistance: string;
    satellites: {
      number: number;
      names: string[];
    };
    temperature: string;
  };
  geography: string;
}
