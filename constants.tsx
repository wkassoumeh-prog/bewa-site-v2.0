import React from 'react';
import { Phone, FileText, Truck, Banknote, UserPlus, Bell } from 'lucide-react';
import { ProcessStep, ContactDetails } from './types';

export const CONTACT_INFO: ContactDetails = {
  phone: "0177 5121078",
  fax: "06421 / 620 95 56",
  owner: "Samir Al-Masri",
  address: ["Afföllerstraße 49a", "35039 Marburg", "DEUTSCHLAND"],
  taxId: "031 801 63645"
};

export const NAV_ITEMS = [
  { label: "Start", href: "#hero" },
  { label: "Wildmeldung", href: "#wildmeldung" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Drückjagd", href: "#drueckjagd" },
  { label: "Rezepte (AI)", href: "#ai-chef" },
  { label: "Kontakt", href: "#kontakt" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: <UserPlus className="w-8 h-8 text-gold-500" />,
    title: "Registrierung",
    description: "Sie registrieren sich einmalig bei uns, um in unsere Kartei aufgenommen zu werden."
  },
  {
    icon: <Phone className="w-8 h-8 text-gold-500" />,
    title: "Wild anmelden",
    description: "Anruf unter 0177 512 10 78 oder per SMS / Fax / WhatsApp."
  },
  {
    icon: <Bell className="w-8 h-8 text-gold-500" />,
    title: "Nachricht vorab",
    description: "Gerne melden wir uns kurz vor der geplanten Abholung bei Ihnen."
  },
  {
    icon: <Truck className="w-8 h-8 text-gold-500" />,
    title: "Abholung",
    description: "Die Abholung erfolgt durch erfahrene Mitarbeiter mit gekühlten Rohrbahnfahrzeugen."
  },
  {
    icon: <Banknote className="w-8 h-8 text-gold-500" />,
    title: "Abrechnung",
    description: "Sie erhalten eine Aufstellung sowie Ihre Vergütung termingerecht durch uns."
  }
];