import styled from 'styled-components';

export const StatisticTitle = styled.h2`
  text-align: center;
  font-size: 40px;
`;
export const StatisticsCard = styled.section`
  display: block;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  max-width: 480px;
  padding: 40px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #fff;  

  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;
export const StatisticsList = styled.ul`
  display: flex;
  gap: 12px;

  margin-top: 40px;

  font-size: 24px;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 80px;

  color: #fff;

`;
export const StatisticsPercentage = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 80px;
`;
