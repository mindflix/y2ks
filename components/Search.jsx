import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    width: 600px;
    align-items: center;
    border-radius: 4px;
    padding: 6px 12px;
    border: 2px solid ${({ theme }) => theme.background.gray};
`;

const StyledInput = styled.input`
    width: 100%;
    font-size: 1.1rem;
    letter-spacing: 0.02rem;
    padding: 6px 10px 7px;
    box-sizing: content-box;
    border: 0;
    outline: none;
    ::placeholder {
        color: ${({ theme }) => theme.colors.gray};
    }
`;

const StyledIcon = styled.button`
    background: none;
    border: 0;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.gray};
`;

export default function Search(props) {
    return (
        <StyledSearch>
            <StyledInput type="text" placeholder={props.placeholder} />
            <StyledIcon>
                <IoSearchOutline size={24} />
            </StyledIcon>
        </StyledSearch>
    );
}
