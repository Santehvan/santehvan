"use client";

import { sleep } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props extends LinkProps {
    children: ReactNode;
    href: string;
    className?: string;
}

export const TransitionLink = ({
    children,
    href,
    className,
    ...props
}: Props) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector("body");

        body?.classList.add("page-transition");

        await sleep(500);

        router.push(href);

        await sleep(500);

        body?.classList.remove("page-transition");
    }
    return (
        <Link onClick={(e) => handleTransition(e)} href={href} className={className ? className : ""}{...props}>{children}</Link>
    )
}
