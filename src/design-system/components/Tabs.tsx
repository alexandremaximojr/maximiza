import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export const Tabs = ({ tabs, defaultTab, className }: TabsProps) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  return (
    <div className={cn('w-full', className)}>
      {/* Tab list */}
      <div role="tablist" className="relative flex gap-1 bg-brand-off-white rounded-xl p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={cn(
              'relative flex-1 px-4 py-2 text-sm font-medium font-body rounded-lg z-10 transition-colors duration-200',
              active === tab.id ? 'text-brand-navy' : 'text-brand-gray hover:text-brand-navy-corp'
            )}
          >
            {/* Indicador animado */}
            {active === tab.id && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== tab.id}
        >
          {active === tab.id && tab.content}
        </div>
      ))}
    </div>
  );
};
