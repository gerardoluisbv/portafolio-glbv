/*import "../../footer.css";*/
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  z-index: 900;
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



const Line = styled.hr`
  width: 90%;
  border-top: 1px solid rgb(255, 255, 255);
  margin: 16px 250px;
  opacity: 0.54;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
        <Line />
      <CopyrightFooter>Gerardoluisbv © 2010-2022</CopyrightFooter>
    </FooterWrapper>
  );
};

export default Footer;