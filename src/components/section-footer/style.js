import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 17px;
  font-weight: 700;
  color: ${props => props.color};

  .info {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
  }

  .text {
    margin-right: 3px;
  }
  }
` 