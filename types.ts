export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactDetails {
  phone: string;
  fax: string;
  address: string[];
  owner: string;
  taxId: string;
}

export enum GameType {
  DEER = 'Rehwild',
  BOAR = 'Schwarzwild',
  RED_DEER = 'Rotwild',
  DUCK = 'Flugwild'
}