export type Map = 'Worlds Edge' | 'Kings Canyon';

export enum Legend {
  Bangalore = 'Bangalore',
  Bloodhound = 'Bloodhound',
  Caustic = 'Caustic',
  Crypto = 'Crypto',
  Gibraltar = 'Gibraltar',
  Lifeline = 'Lifeline',
  Loba = 'Loba',
  Mirage = 'Mirage',
  Octane = 'Octane',
  Pathfinder = 'Pathfinder',
  Rampart = 'Rampart',
  Revenant = 'Revenant',
  Wattson = 'Wattson',
  Wraith = 'Wraith',
}

export enum KCLocation {
  Airbase = 'Airbase',
  Artillery = 'Artillery',
  Bunker = 'Bunker',
  Capacitor = 'Capacitor',
  Containment = 'Containment',
  Gauntlet = 'Gauntlet',
  HydroDam = 'Hydro dam',
  Labs = 'Labs',
  MapRoom = 'Map room',
  Market = 'Market',
  Repulsor = 'Repulsor',
  Runoff = 'Runoff',
  Salvage = 'Salvage',
  SlumLakes = 'Slum lakes',
  Swamps = 'Swamps',
  TheCage = 'The cage',
  ThePit = 'The pit',
  TheRig = 'The rig',
  Watchtower = 'Watchtower',
  WaterTreatment = 'Water treatment',
}
export enum WELocation {
  BloodhoundsTrials = 'Bloodhounds Trials',
  Countdown = 'Countdown',
  Epicenter = 'Epicenter',
  Fragment = 'Fragment',
  Geyser = 'Geyser',
  Harvester = 'Harvester',
  HillValley = 'HillValley',
  LaunchSite = 'Launch site',
  LavaCity = 'Lava city',
  LavaFissure = 'Lava fissure',
  MiningPass = 'Mining pass',
  Overlook = 'Overlook',
  RainTunnel = 'RainTunnel',
  Refinery = 'Refinery',
  Skyhook = 'Skyhook',
  SortingFactory = 'Sorting factory',
  SpringsEnd = 'Springs end',
  Staging = 'Staging',
  SurveyCamp = 'Survey camp',
  TheBridge = 'The bridge',
  TheDome = 'The dome',
  TheTree = 'The tree',
  ThermalStation = 'Thermal station',
  Trainyard = 'Trainyard',
}

export type Location = WELocation | KCLocation;
export type Season = 'Season 6';
export type Split = number;

export type MatchRecord = {
  id: number;
  date: string;
  season: Season;
  split: Split;
  map: Map;
  legend: Legend;
  location: Location;
  teamSize: number;
  placement: number;
  kills: number;
  pointsGained: number;
  rating: number;
};
