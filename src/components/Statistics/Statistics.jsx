import React from 'react';
import {StatisticTitle, StatisticsCard, StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsCard>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsCard>
  );
};