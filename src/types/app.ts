import { ReactNode } from 'react';

export type AppPage =
  | 'home'
  | 'education'
  | 'assessment'
  | 'ai-support'
  | 'help-finder'
  | 'profile';

export type NavigationItem = {
  id: AppPage;
  label: string;
  description: string;
  icon: string;
};

export type PageSection = {
  title: string;
  body: string;
  accent?: string;
};

export type ActionCard = {
  title: string;
  description: string;
  badge: string;
};

export type CardProps = {
  children: ReactNode;
  className?: string;
};
