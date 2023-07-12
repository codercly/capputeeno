import { styled } from "styled-components";
import { BackIcon } from "@/components/icons/back-icon"
import { useRouter } from "next/navigation";


const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;

    color: var(--secondary-text);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
`
interface BtnProps{
    navigate: string;
}


export function BackBtn({navigate}: BtnProps) {
    const router = useRouter();
    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <Button onClick = {handleNavigate}>
            <BackIcon/>
            voltar
        </Button>
    )
}