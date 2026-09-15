import React from 'react';
import { DataStatusType } from '../types';

interface DataStatusBadgeProps {
  status: DataStatusType;
  className?: string;
  compact?: boolean;
}

export const DataStatusBadge: React.FC<DataStatusBadgeProps> = ({ status, className = '', compact = false }) => {
  let colorClasses = 'bg-neutral-100 text-neutral-800 border-neutral-300';
  let labelText: string = status;
  let tooltipText = '';

  switch (status) {
    case 'REPORTED':
      colorClasses = 'bg-emerald-50 text-emerald-800 border-emerald-300';
      labelText = 'REPORTED';
      tooltipText = 'Published by official sources or company filings';
      break;
    case 'ESTIMATED':
      colorClasses = 'bg-neutral-100 text-neutral-800 border-neutral-300';
      labelText = 'ESTIMATE';
      tooltipText = 'Approximate number based on research';
      break;
    case 'INDUSTRY ESTIMATE':
      colorClasses = 'bg-amber-50 text-amber-900 border-amber-300';
      labelText = 'INDUSTRY EST.';
      tooltipText = 'Based on available industry surveys and reports';
      break;
    case 'FORECAST':
      colorClasses = 'bg-blue-50 text-blue-900 border-blue-200';
      labelText = 'FORECAST';
      tooltipText = 'Expected future estimate';
      break;
    case 'SCENARIO':
      colorClasses = 'bg-amber-50 text-amber-900 border-amber-300';
      labelText = 'SCENARIO';
      tooltipText = 'One possible future path, not guaranteed';
      break;
    case 'CALCULATED ESTIMATE':
      colorClasses = 'bg-neutral-100 text-neutral-800 border-neutral-300';
      labelText = 'CALCULATED';
      tooltipText = 'Calculated from historical and survey data';
      break;
  }

  return (
    <span
      title={tooltipText}
      className={`inline-flex items-center px-1.5 py-0.5 text-[0.56rem] font-mono font-bold uppercase tracking-wider border shrink-0 whitespace-nowrap leading-none ${colorClasses} ${className}`}
    >
      {labelText}
    </span>
  );
};

