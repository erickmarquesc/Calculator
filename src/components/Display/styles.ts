import styled from "styled-components";

export const DisplayContainer = styled.div`
  
  padding-inline: 54px;

  #last-calc {
  padding-top: 54px;
  text-align: right;
  font-size: 20px;
  line-height: 140%;
  color: #6b6b6b;

  label{
    margin: 5px;
  }
}
`; 

export const ResultSection = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  span {
  font-size: 36px;
  line-height: 140%;
  color: #ebebeb;
}
`;