/*import "../../footer.css";*/
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #1a1b26;
  padding-bottom: 0px;
  margin-bottom: 0px;
  z-index: 900;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;

  padding-top: 10px;
  width: 90%;

  @media (max-width: 1024px) {
    grid-template-columns: 2fr 2fr;
  }
`;

const CopyrightFooter = styled.div`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  margin: 0px 0px 0px;
  align-self: flex-start;
  padding: 2px 5% 24px;
  text-align: left;
`;

const ItemFooter = styled.h2`
  font-family: Lato;
  font-size: 12px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  margin: 8px 0px 0px;
`;

const Line = styled.hr`
  width: 90%;
  border-top: 1px solid rgb(255, 255, 255);
  margin: 16px 250px;
  opacity: 0.54;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div>
          <ItemFooter> About me </ItemFooter>
          
        </div>
        <div>
          <ItemFooter>  </ItemFooter>
          <ItemFooter> Social </ItemFooter>
        </div>
        <div>
          <ItemFooter> Politics </ItemFooter>
          
        </div>
        <div>
          <ItemFooter> Contact </ItemFooter>
        </div>
      </ContentWrapper>

      <Line />
      <CopyrightFooter>Gerardoluisbv © 2010-2022</CopyrightFooter>
    </FooterWrapper>
  );
};

export default Footer;