import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  color: ${propos => propos.theme.color.primaryColor};
  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
