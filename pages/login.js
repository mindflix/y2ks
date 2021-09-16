import { useState } from "react";
import styled from "styled-components";
import Text from "components/Text";
import TextField from "components/TextField";
import { IoLockClosed, IoFingerPrintOutline } from "react-icons/io5";
import { Container, Paper } from "styles/globalComponents";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import px2vw from "utils/px2vw";

export default function Account() {
    return (
        <Container maxWidth="sm" style={{ position: "relative" }}>
            <SignIn />
        </Container>
    );
}

const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    height: 72px;
    width: 72px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
`;

const StyledPaper = styled(Paper)`
    margin-top: ${px2vw(60)};
    flex-direction: column;
    @media (max-width: 1224px) {
        box-shadow: none;
        background: none;
    }
`;

const StyledForm = styled.form`
    padding-top: 20px;
    width: 100%;
`;

function SignIn() {
    const router = useRouter();
    const { signin } = useAuth();
    const [error, setError] = useState([]);

    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        await signin(data.email, data.password)
            .catch((error) => {
                setError(error.message);
            })
            .then(() => {
                router.push("/account");
            });
    };

    return (
        <StyledPaper>
            <StyledIcon>
                <IoLockClosed size={36} />
            </StyledIcon>
            <Text variant="h2">Connexion</Text>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("email")}
                    name="email"
                    label="Email*"
                    fullWidth
                />
                <TextField
                    {...register("password")}
                    name="password"
                    label="Password*"
                    type="password"
                    fullWidth
                />
                {error}
                <Button
                    type="submit"
                    icon={<IoFingerPrintOutline size={24} />}
                    style={{ margin: "10px 0 10px auto", width: "200px" }}
                >
                    Se connecter
                </Button>
            </StyledForm>
        </StyledPaper>
    );
}
