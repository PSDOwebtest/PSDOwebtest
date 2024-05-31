'use client'
import Image from "next/image";
import HeaderButton from "@/components/HeaderButton";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setIsOpen(!isOpen);
        }
    };
    const handleUlClick = (e) => {
        e.stopPropagation(); // Empêche la propagation du clic jusqu'au parent (toggleMenu)
        setIsOpen(false)
    };
    const closeMenu = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setIsOpen(false);
        }
    };
    const onAnimationComplete = () => {
        setIsAnimating(false);
    };
    return (
        <React.Fragment>
            <header className={"bg-[#161D25] flex justify-center mobile:justify-between sm:justify-between lg:justify-center items-center gap-5 p-12"}>
                <Image src={"/Images/logo.png"} alt={"logo"} height={60} width={60} />
                <ul className={"flex gap-2 mobile:hidden sm:hidden lg:flex"}>
                    <HeaderButton url={"/"} title={"Accueil"} />
                    <HeaderButton url={"/collaborateurs"} title={"Collaborateurs"} />
                    <HeaderButton url={"/contact"} title={"Contactez-nous"} />
                    <HeaderButton url={"/construisons"} title={"Construisons Ensemble"} />
                </ul>
                <div onClick={toggleMenu} className={"cursor-pointer hidden mobile:flex sm:flex lg:hidden justify-center items-center z-30"}>
                    <AnimatePresence>
                        {isOpen ? (
                            <motion.div key={"closeButton"} className={"absolute"} initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }} onClick={closeMenu}
                                onAnimationComplete={onAnimationComplete}>
                                <Image src={"/Images/bgMenu/x.svg"} alt={"Close burger menu"} width={40}
                                    height={40}></Image>
                            </motion.div>
                        ) : (
                            <motion.div key={"toggleButton"} className={"absolute flex flex-col gap-1.5"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }} onClick={toggleMenu}
                                onAnimationComplete={onAnimationComplete}>
                                <div className={"w-7 h-0.5 bg-custom_yellow"}></div>
                                <div className={"w-7 h-0.5 bg-custom_yellow"}></div>
                                <div className={"w-7 h-0.5 bg-custom_yellow"}></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: '-100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '-100%' }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    top: 150,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: '#212B37',
                                    zIndex: 10,
                                }}
                                className={"rounded-b-lg"}
                            >
                                <div onClick={handleUlClick} className={"flex flex-col items-center gap-3 py-10"}>
                                    <Link href={'/'}
                                        className={"flex justify-center items-center gap-5 w-fit text-2xl font-semibold z-20 border border-custom_yellow text-custom_yellow p-1.5 rounded-lg"}>
                                        <Image src={"/Images/bgMenu/home.png"} alt={""} width={30} height={30}></Image>
                                        Accueil
                                    </Link>
                                    <Link href={'/collaborateurs'}
                                        className={"flex justify-center items-center gap-5 w-fit text-2xl font-semibold z-20 border border-custom_yellow text-custom_yellow p-1.5 rounded-lg"}>
                                        <Image src={"/Images/bgMenu/user.png"} alt={""} width={40} height={40}></Image>
                                        Collaborateurs
                                    </Link>
                                    <Link href={'/construisons'}
                                          className={"flex justify-center items-center gap-5 w-fit text-2xl font-semibold z-20 border border-custom_yellow text-custom_yellow p-1.5 rounded-lg"}>
                                        <Image src={"/Images/bgMenu/build.svg"} alt={""} width={40} height={40}></Image>
                                        Construisons Ensemble
                                    </Link>
                                </div>
                                <div onClick={handleUlClick} className={"flex flex-col items-center"}>
                                    <Link href={"/contact"}
                                        className={"bg-custom_yellow text-3xl font-bold text-custom_blue_black rounded-lg p-1.5"}>
                                        Contactez-nous
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </React.Fragment>
    )
}