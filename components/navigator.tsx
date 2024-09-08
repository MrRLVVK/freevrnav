import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Navigator() {
    return (
        <Navbar maxWidth="full" className="px-8">
            <NavbarBrand className="flex-grow-0 basis-auto">
                <Image src="/VVK-logo.svg" alt="Free-VRPorn Logo" width={80} height={0} />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 px-4" justify="start">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/" color="secondary" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/test">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
