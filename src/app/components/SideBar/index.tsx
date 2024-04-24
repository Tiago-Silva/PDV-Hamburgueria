import React, {useState} from 'react';
import {
    Container,
    Content,
    Header,
    WrapperIconClose
} from "@/app/components/SideBar/styles";
import {LinkMenu} from "@/app/components/LinkMenu";
import { BoxIcon, Close, DeliveryIcon, HomeIcon, Open } from '../Icons/styles';

const linkMenuItems = [
    {
        title: 'Caixa',
        page: 'BoxFront',
        icon: <BoxIcon />,
    },
    {
        title: 'Delivery',
        page: 'Delivery',
        icon: <DeliveryIcon />,
    },
];

interface Props {
    onLinkClick: (link: string) => void;
}

const SideBar = ({
    onLinkClick
}: Props) => {
    const [isActive, setIsActive] = useState('');
    const [open, setOpen] = useState(false);

    const handleOnClick = (link: string) => {
        onLinkClick(link);
        setIsActive(link === isActive ? '' : link);
    }

    const handleCloseSidBar = () => {
        setOpen(!open);
    }

    return (
        <Container $isShow={open}>
            <Header>
                <HomeIcon />
                <WrapperIconClose onClick={handleCloseSidBar}>
                    {open ? <Close /> : <Open />}
                </WrapperIconClose>
            </Header>

            <Content>

                {linkMenuItems.map((item, index) => (
                    <LinkMenu
                        key={index}
                        title={item.title}
                        page={item.page}
                        isActive={isActive === item.page}
                        handleOnClick={handleOnClick}
                        icon={item.icon}
                        isShow={open}
                    />
                ))}

            </Content>
        </Container>
    );
};

export default SideBar;