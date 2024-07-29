"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./Header";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;


}

const CardWrapper = ({
    children,
    headerLabel,

}: CardWrapperProps) => {
    return (
        <Card className="w-[800px] max-w[900px] shadow-lg bodrder-[2px] border-white my-6 bg-gray-900 rounded-lg ">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>

            <CardFooter>

            </CardFooter>
        </Card>
    );
};

export default CardWrapper;