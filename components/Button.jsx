import styled from "styled-components";

const Button = styled.button`
    display: flex;
    border: 2px solid ${({ theme }) => theme.bg}
`;

export default Button