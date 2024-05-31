'use client'
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
    return (
        <main className="">
            <title>Accueil</title>
            <section
                className={"relative flex flex-col mobile:items-center tablet:items-center gap-16 mobile:gap-8 bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white px-44 mobile:px-10 py-24"}>
                <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}
                    className={"flex flex-col items-center w-fit gap-5 px-16 mobile:px-5 z-10"}>
                    <motion.h2
                        className={"text-[70px] font-semibold tablet:text-6xl tablet:text-center"}>{"PSDO"}</motion.h2>
                    <p className={"text-center w-[30rem] mobile:w-[15rem]"}>{"Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible."}</p>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                        <Link href={'/contact'}
                            className={"bg-custom_yellow px-20 mobile:px-10 rounded-md py-3 text-xl mobile:text-md"}>Contactez-nous
                            →</Link>
                    </motion.div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Image src={"/Images/logo.png"} alt={"Logo"} height={400} width={400}
                        className={"absolute tablet:top-[57%] tablet:right-1/2 tablet:translate-x-1/2 top-1/2 -translate-y-1/2 right-60 opacity-30"} />
                </motion.div>
            </section>
            <div className={"bg-[url('/Images/decoration/banner.png')] w-full h-44 object-cover object-center opacity-10"}></div>
            <section className={"flex flex-col items-center gap-10 py-2"}>
                <p className={"text-4xl font-bold"}>Collaborateurs</p>
                <div>
                    <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }} viewport={{ once: true }}
                        className={"flex mobile:flex-col mobile:items-center gap-10"}>
                        <div className={"flex flex-col items-center gap-2"}>
                            <Image src={"/Images/Logo_collab.png"} alt={"Logo collaborateur"} height={100} width={100}
                                className={"bg-black rounded-full"} />
                            <p className={"text-lg"}>Gabin Buignet</p>
                        </div>
                        <div className={"flex flex-col items-center gap-2"}>
                            <Image src={"/Images/logoCollab/logoMP.png"} alt={"Logo collaborateur"} height={100} width={100}
                                className={"bg-black rounded-full"} />
                            <p className={"text-lg"}>Maxime Petit</p>
                        </div>
                        <div className={"flex flex-col items-center gap-2"}>
                            <Image src={"/Images/Logo_collab.png"} alt={"Logo collaborateur"} height={100} width={100}
                                className={"bg-black rounded-full"} />
                            <p className={"text-lg"}>Damien Landa</p>
                        </div>
                        <div className={"flex flex-col items-center gap-2"}>
                            <Image src={"/Images/logoCollab/logoBD2.png"} alt={"Logo collaborateur"} height={100} width={100}
                                className={"bg-black rounded-full"} />
                            <p className={"text-lg"}>Benjamin Desmet</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }}
                    viewport={{ once: true }}>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                        <Link href={'/collab'} className={"bg-custom_yellow px-20 mobile:px-7 rounded-md py-3 text-xl"}>Rencontrez
                            Notre
                            Équipe →</Link>
                    </motion.div>
                </motion.div>
                <div className={"mobile:hidden flex justify-between items-center w-full"}>
                    <Image src={"/Images/decoration/Icons/4.png"} alt={"Logo"} width={300} height={300}
                        className={"opacity-20"}></Image>
                    <Image src={"/Images/decoration/Icons/1.png"} alt={"Logo"} width={300} height={300}
                        className={"opacity-20"}></Image>
                    <Image src={"/Images/decoration/Icons/4.png"} alt={"Logo"} width={300} height={300}
                        className={"opacity-20"}></Image>
                </div>
            </section>
            <section className={"flex flex-col items-center gap-10 py-10"}>
                <motion.p initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }} className={"text-4xl font-bold"}>Pourquoi nous ?
                </motion.p>
                <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className={"w-[35rem] mobile:w-[20rem] text-center"}>{"Nous offrons un accès exclusif à un réseau de développeurs indépendants, soigneusement sélectionnés pour leur expertise technique et leur fiabilité. Chaque développeur avec qui nous travaillons est un spécialiste dans son domaine, que ce soit le développement web ou la création d'applications mobiles."}</motion.p>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }}
                    viewport={{ once: true }}>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                        <Link href={'/contact'}
                            className={"bg-custom_yellow px-20 mobile:px-10 rounded-md py-3 text-xl"}>Contactez-nous
                            →</Link>
                    </motion.div>
                </motion.div>
            </section>
            <div className={"bg-[url('/Images/decoration/banner.png')] w-full h-44 object-cover object-center opacity-10"}></div>
            <section className={"flex flex-col items-center gap-10 mobile:gap-5 py-20"}>
                <p className={"text-4xl font-bold mobile:text-center"}>Notre vision de la création</p>
                <div className={"flex mobile:flex-col mobile:items-center gap-20"}>
                    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }} className={"flex flex-col items-center gap-3"}>
                        <Image src={'/Images/home/professionnel.png'} alt={'Professionnel'} width={100} height={100}></Image>
                        <p>Professionnel</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className={"flex flex-col items-center gap-3"}>
                        <Image src={'/Images/home/securite.png'} alt={'Sécurité'} width={100} height={100}></Image>
                        <p>Sécurité</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }} className={"flex flex-col items-center gap-3"}>
                        <Image src={'/Images/home/Developpement.png'} alt={'Développement'} width={100} height={100}></Image>
                        <p>Développement</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }} viewport={{ once: true }} className={"flex flex-col items-center gap-3"}>
                        <Image src={'/Images/home/originalite.png'} alt={'Originalité'} width={100}
                            height={100}></Image>
                        <p>Originalité</p>
                    </motion.div>
                </div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}
                    viewport={{ once: true }}>Vous cherchez des idées ou vous en avez déjà :
                </motion.p>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.25, delay: 2 }}
                    viewport={{ once: true }}>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                        <Link href={'/'} className={"bg-custom_yellow px-20 mobile:px-10 rounded-md py-3 text-xl"}>Parlons
                            de
                            Votre Site
                            →</Link>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
