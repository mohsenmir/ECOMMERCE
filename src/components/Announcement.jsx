import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  weidth: 100%;
  background-color: teal;
  color: white;
  font-family: kalameh;
  font-weight: bold;
  direction: rtl;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Announcement = () => {
  return <Container>فروش فوق العاده! 50%تخفیف ویزه!</Container>;
};

export default Announcement;
