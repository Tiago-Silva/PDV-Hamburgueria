import * as S from "./styles";

interface Props {
    title: string;
    page: string;
    isActive: boolean;
    handleOnClick: (link: string) => void;
    icon: React.ReactNode;
    isShow?: boolean;
}

export const LinkMenu = ({
    title,
    page,
    isActive,
    handleOnClick,
    icon,
    isShow
}: Props) => {
    return (
        <S.Container
            $isActive={isActive}
            onClick={() => handleOnClick(page)}
        >
            {icon}
            {isShow && (
                <S.LinkMenu>
                    {title}
                </S.LinkMenu>
            )}
        </S.Container>
    );
}