export type Map = 'Worlds Edge' | 'Kings Canyon' | 'Olympus';

export const legends = new Set([
  'Bangalore',
  'Bloodhound',
  'Caustic',
  'Crypto',
  'Gibraltar',
  'Lifeline',
  'Loba',
  'Mirage',
  'Octane',
  'Pathfinder',
  'Rampart',
  'Revenant',
  'Wattson',
  'Wraith',
]);

export const KCLocations = new Set([
  'Airbase',
  'Artillery',
  'Bunker',
  'Capacitor',
  'Containment',
  'Gauntlet',
  'Hydro dam',
  'Labs',
  'Map room',
  'Market',
  'Repulsor',
  'Runoff',
  'Salvage',
  'Slum lakes',
  'Swamps',
  'The cage',
  'The pit',
  'The rig',
  'Watchtower',
  'Water treatment',
]);

export const WELocations = new Set([
  'Bloodhounds Trials',
  'Countdown',
  'Epicenter',
  'Fragment',
  'Geyser',
  'Harvester',
  'HillValley',
  'Launch site',
  'Lava city',
  'Lava fissure',
  'Mining pass',
  'Overlook',
  'RainTunnel',
  'Refinery',
  'Skyhook',
  'Sorting factory',
  'Springs end',
  'Staging',
  'Survey camp',
  'The bridge',
  'The dome',
  'The tree',
  'Thermal station',
  'Trainyard',
]);

export const OlympusLocations = new Set([
  'Oasis',
  'Carrier',
  'Docks',
  'Power grid',
  'Rift',
  'Energy depot',
  'Gardens',
  'Grow towers',
  'Hammond labs',
  'Estates',
  'Elysium',
  'Hydroponics',
  'Bonsai plaza',
  'Solar array',
  'Turbine',
  'Orbital cannon',
]);

export const Locations = new Set([...WELocations, ...KCLocations, ...OlympusLocations]);
export type Season = 'Season 7';
export type Split = number;

export type MatchRecord = {
  id: number;
  date: string;
  season: Season;
  split: Split;
  map: Map;
  legend: string;
  location: string;
  teamSize: number;
  placement: number;
  kills: number;
  pointsGained: number;
  rating: number;
};

export type AddMatchData = {
  location: string;
  legend: string;
  placement: number;
  kills: number;
  tier: string;
  rankingPoints: number;
};
