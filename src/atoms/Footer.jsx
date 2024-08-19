import styled from "styled-components";
export default function FooterUI() {
  return (
    <Footer>
      오픈소스 경진대회 Footer
      <FooterText> 윤여정 정현규 조승빈 최정현 </FooterText>
    </Footer>
  );
}
export const Footer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: black;
  color: white;
`;
export const FooterText = styled.div``;
