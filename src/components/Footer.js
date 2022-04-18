/*import "../../footer.css";*/
import styled from "styled-components";
import IconAbout from "../icons/IconAbout";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;



const CopyrightFooter = styled.div`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  margin: 0px 0px 0px;
  align-self: center;
  padding: 2px 5% 24px;
  text-align: left;
`;



export const Footer = () => {
  return (
    <FooterWrapper>     
      <CopyrightFooter>Gerardoluisbv © 2010-2022</CopyrightFooter>
    </FooterWrapper>
  );
};

export default Footer;