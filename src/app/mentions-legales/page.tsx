'use client'
import CustomBlock from "@/components/MentionsLegales/CustomBlock";
import SommaireLink from "@/components/MentionsLegales/SommaireLink";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div>
                <title>Mentions Légales</title>
                <div className={"bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white"}>
                    <section className={"flex flex-col items-center gap-5 pt-10"}>
                        <p className={"text-3xl font-bold"}>Mentions Légales</p>
                        <p className={"px-5 text-center"}>{"Découvrez nos mentions légales pour en savoir plus sur les informations légales relatives à notre entreprise, y compris les conditions d'utilisation, la politique de confidentialité, et les détails de contact."}</p>
                        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                            <Link href={"/contact"}
                                className={"bg-custom_yellow px-10 py-3 rounded-lg shadow-custom_shadow"}>Contactez-nous</Link>
                        </motion.div>
                    </section>
                </div>
                <div className={"bg-[url('/Images/decoration/banner.png')] bg-cover w-full h-32 my-5 opacity-10"}></div>
            </div>
            <div className={"flex flex-col sm:items-center gap-3 px-10 bg-gradient-to-t from-custom_blue_black from-0% to-white to-[2%] pb-14"}>
                <p className={"text-3xl font-bold"}>Sommaire</p>
                <div className={"flex flex-col gap-3 p-5 border-b-2 border-dashed border-custom_yellow"}>
                    <SommaireLink title={"Éditeur du site"} anchorTo={"website-editor"} image={"/Images/mentions-legales/edit.svg"} />
                    <SommaireLink title={"Directeur de la publication"} anchorTo={"upload-director"} image={"/Images/mentions-legales/director.svg"} />
                    <SommaireLink title={"Hébergeur du site"} anchorTo={"web-hostring"} image={"/Images/mentions-legales/hosting.svg"} />
                    <SommaireLink title={"Propriété intellectuelle"} anchorTo={"intellectual-property"} image={"/Images/mentions-legales/intellectual.svg"} />
                    <SommaireLink title={"Condition d'utilisation"} anchorTo={"utilisation"} image={"/Images/mentions-legales/condition.svg"} />
                    <SommaireLink title={"Protection des données personnelles"} anchorTo={"personal-data-protection"} image={"/Images/mentions-legales/protection.svg"} />
                    <SommaireLink title={"Cookies"} anchorTo={"cookies"} image={"/Images/mentions-legales/cookies.svg"} />
                </div>
                <div className={"flex flex-col gap-5 border-b-except-last"}>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"website-editor"}>
                        <p className={"text-2xl font-medium"}>Éditeur du site</p>
                        <CustomBlock title={"Nom de l'entreprise"} description={"PSDOweb"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Forme juridique"} description={"Société à responsabilité limitée (SARL)"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Adresse du siège social"} description={"2A rue de l'Orangerie, 60000 Beauvais"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Numéro de téléphone"} description={"06-82-99-85-27"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Adresse e-mail"} description={"baptiste.petit@psdoweb.com"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Numéro d'inscription au RCS"} description={"929 021 145"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Numéro de TVA intracommunautaire"} description={"FR83929021145"} image={"/Images/mentions-legales/edit.svg"} />
                        <CustomBlock title={"Capital social"} description={"100€"} image={"/Images/mentions-legales/edit.svg"} />
                    </div>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"upload-director"}>
                        <p className={"text-2xl font-medium"}>Directeur de la publication</p>
                        <CustomBlock title={"Nom et prénom"} description={"Petit Baptiste"} image={"/Images/mentions-legales/director.svg"} />
                        <CustomBlock title={"Statut"} description={"Gérant"} image={"/Images/mentions-legales/director.svg"} />
                    </div>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"web-hosting"}>
                        <p className={"text-2xl font-medium"}>Hébergeur du site</p>
                        <CustomBlock title={"Nom de l'hébergeur"} description={"ovhcloud"} image={"/Images/mentions-legales/hosting.svg"} />
                        <CustomBlock title={"Adresse de l'hébergeur"} description={"2 rue Kellermann - 59100 Roubaix - France"} image={"/Images/mentions-legales/hosting.svg"} />
                        <CustomBlock title={"Numéro de téléphone de l'hébergeur"}
                            description={"pas référencé"} image={"/Images/mentions-legales/hosting.svg"} />
                    </div>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"intellectual-property"}>
                        <p className={"text-2xl font-medium"}>Propriété intellectuelle</p>
                        <div className={"border-2 border-custom_yellow rounded-lg p-3"}>
                            <p className={"text-center font-medium sm:w-[30rem]"}>{"L'intégralité du contenu du site PSDOweb est protégée par les lois françaises et internationales relatives à la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les documents téléchargeables et les représentations iconographiques et photographiques."}</p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"utilisation"}>
                        <p className={"text-2xl font-medium"}>{"Condition d'utilisation"}</p>
                        <div className={"border-2 border-custom_yellow rounded-lg p-3"}>
                            <p className={"text-center font-medium sm:w-[30rem]"}>{"L'utilisation du site PSDOweb implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation peuvent être modifiées ou complétées à tout moment, les utilisateurs du site PSDOweb sont donc invités à les consulter de manière régulière."}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"personal-data-protection"}>
                        <p className={"text-2xl font-medium text-center"}>Protection des données personnelles</p>
                        <div className={"border-2 border-custom_yellow rounded-lg p-3"}>
                            <p className={"text-center font-medium sm:w-[30rem]"}>{"Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de rectification, de modification et de suppression des données vous concernant. Vous pouvez exercer ce droit en envoyant un courrier à l'adresse suivante : 2A rue de l'Orangerie, 60000 Beauvais ou par email à baptiste.petit@psdoweb.com ."}
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-5 items-center py-3"} id={"cookies"}>
                        <p className={"text-2xl font-medium"}>Cookies</p>
                        <div className={"border-2 border-custom_yellow rounded-lg p-3"}>
                            <p className={"text-center font-medium sm:w-[30rem]"}>{"Le site PSDOweb peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}