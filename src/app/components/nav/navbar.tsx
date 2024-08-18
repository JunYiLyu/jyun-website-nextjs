"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from "react";
import { useRouter } from "next/navigation";

const options = [
    '關於我',
    '文章',
    '專案'
];
const ITEM_HEIGHT = 48;

const Navbar = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="w-full h-16 bg-white sticky top-0 z-50 bg-opacity-95 border-b-4 px-5">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="pl-5">
                            <Logo />
                        </div>
                        <HorizontalMenu pathname={pathname} />
                        <DropDownMenu />
                    </div>
                </div>
            </div>
        </>
    );
};

const HorizontalMenu = ({ pathname }: { pathname: String }) => {
    const aboutCss = pathname === "/about" ? "underline" : "";
    const blogCss = pathname === "/blog" ? "underline" : "";
    const projectCss = pathname === "/project" ? "underline" : "";

    return (
        <ul className="hidden md:flex gap-x-8">
            <li>
                <Link href="/about">
                    <p className={`hover:drop-shadow-lg ${aboutCss}`}>關於我</p>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    <p className={`hover:drop-shadow-lg ${blogCss}`}>文章</p>
                </Link>
            </li>
            <li>
                <Link href="/project">
                    <p className={`hover:drop-shadow-lg ${projectCss}`}>專案</p>
                </Link>
            </li>
        </ul>
    );
}

const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const router = useRouter(); //不會重新載入頁面
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="md:hidden">
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={() => {
                            setAnchorEl(null);
                            if (option === "關於我") {
                                router.push("/about");
                            } else if (option === "文章") {
                                router.push("/blog");
                            } else if (option === "專案") {
                                router.push("/project");
                                window.location.href
                            }
                        }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
export default Navbar;