import styled from 'styled-components';

export const Card = styled.div`
  display: block;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--ifm-leading);
  max-width: 480px;
  padding: 40px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #fff;  

  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`
export const Description = styled.div`
  text-align: center;
`

export const Avatar = styled.img`
display: block;

width: 120px;
height: 120px;

margin: auto;

background-color: gray;
border-radius: 50%;
`
export const UserName = styled.p`
  color: #000;
  font-size: 40px;
  margin-top: 24px;
`
export const Tag = styled.p`
  color: grey;
  font-size: 24px;
`
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;

  padding: 0;

  list-style: none;
  font-size: 24px;
`
export const Label = styled.span`
  display: block;

  font-size: 18px;
  text-align: center;
  color: grey;
`
export const Quantity = styled.span`
  display: block;

  text-align: center;
  font-size: 30px;
  font-weight: 700;
  
`