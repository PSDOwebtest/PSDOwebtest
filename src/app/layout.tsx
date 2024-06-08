import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "PSDOWeb",
    description: "Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
