'use client';
import React, {useState} from 'react';
import SideBar from "@/app/components/SideBar";
import Home from "@/app/(pages)/Home/page";
import Delivery from "@/app/(pages)/Delivery/page";
import BoxFront from "@/app/(pages)/BoxFront/page";

interface Props {
    children: React.ReactNode;
}

export type PageKeys = 'Home' | 'Delivery' | 'BoxFront';

const pages: Record<PageKeys, JSX.Element> = {
    'Home': <Home />,
    'Delivery': <Delivery />,
    'BoxFront': <BoxFront />
};

const Layout = ({
    children
}: Props) => {
    const [currentPage, setCurrentPage] = useState<PageKeys>('Home');

    const handleLinkClick = (link: string) => {
        if (link in pages) {
            setCurrentPage(link as PageKeys);
        }
    }

    return (
        <>
            <SideBar
                onLinkClick={handleLinkClick}
            />
            {pages[currentPage] || <Home />}
        </>
    );
};

export default Layout;