import { styled } from "styled-components"
import { formatPrice  } from "@/utils/format-price";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px 0px 4px 4px;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);
    width: 256px;
    cursor: pointer;

    img{
        width: 256px;
        height: 300px;
    }

    h3{
        color: var(--text-dark-2);
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
    }

    p{
        color: var(--shapes-dark);
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
    }

    div{

        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8x 0;

        > div{
            width: 228px;
            height: 1px;
            background: var(--shapes);
            margin: 8px 0;
            padding: 0;
        }

    }

`
export function ProductCard(props: ProductCardProps) {
    const router = useRouter();
    const price = formatPrice(props.price)

    const handleNavigate = () => {
        router.push("/product?id=" + props.id)
    }

    return (
        <Card onClick={handleNavigate}>
            <img src={props.image} />
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}