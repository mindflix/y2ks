import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "components/Text";
import TextField from "components/TextField";
import { IoLockClosed, IoFingerPrintOutline } from "react-icons/io5";
import { Container, Paper, Box } from "styles/globalComponents";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import px2vw from "utils/px2vw";
import heroBg from "public/images/section1.jpg";

export default function Account() {
    return (
        <Box style={{ overflow: "hidden" }}>
            <Container maxWidth="sm" style={{ position: "relative" }}>
                <SignIn />
            </Container>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.2,
                }}
            >
                <Image
                    alt="Mountains"
                    src={heroBg}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                />
            </div>
        </Box>
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
    margin-top: ${px2vw(72)};
    flex-direction: column;
`;

const StyledForm = styled.form`
    width: 100%;
    & > * {
        margin: 12px 0;
    }
    & > button {
        margin: 20px 0 0 auto;
    }
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
            <Text variant="h1">Connexion</Text>
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
                <Button type="submit" icon={<IoFingerPrintOutline size={24} />}>
                    Se connecter
                </Button>
            </StyledForm>
        </StyledPaper>
    );
}
