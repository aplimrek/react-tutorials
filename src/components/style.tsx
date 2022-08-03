import styled from "styled-components";
import { devices } from "../statics/Devices";

export const AppContainer = styled.div``;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 5%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const HeaderTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #0c7ef9;
  font-weight: 900;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const HeaderMobileRight = styled.div`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
