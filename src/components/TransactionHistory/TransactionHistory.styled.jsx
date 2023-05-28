import styled from 'styled-components';

export const TransactionTable = styled.table`

width: 100%;
max-width: 480px;

margin-left: auto;
margin-right: auto;
margin-top: 40px;


padding: 40px;
padding-left: 20px;
padding-right: 20px;

font-size: 24px;
background-color: #fff;  

border-radius: 12px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);  


th {
  background-color: aqua;
  font-weight: bold;
  border-radius: 4px;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
`