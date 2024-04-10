import React, {useState} from 'react';
import {ButtonIcon, Container, Header, IconHeader, Title, WrapperItems} from "@/app/components/OrderItemCard/styles";
import {ItemData} from "@/app/interface/ItemData";
import {ItemCard} from "@/app/components/ItemCard";
import {itemService} from "@/app/services/itemService";

interface Props {
    idpedido: number;
}

const OrderItemCard = ({
    idpedido
}: Props) => {
    const [items, setItems] = useState<ItemData[]>([]);

    const handleGetItems = async () => {
        const response = await itemService.getItemByOrderId(idpedido);
        setItems(response.data);
    }

    return (
        <Container>
            <Header>
                <Title>Itens do pedido (ID: {idpedido})</Title>
                <ButtonIcon onClick={handleGetItems}>
                    <IconHeader />
                </ButtonIcon>
            </Header>

            <WrapperItems>
                {items.map((item, index) => (
                    <ItemCard
                        key={index}
                        item={item}
                    />
                ))}
            </WrapperItems>
        </Container>
    );
};

export default OrderItemCard;