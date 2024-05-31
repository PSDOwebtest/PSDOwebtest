'use client'
import Link from "next/link";
import QuestionDiv from "@/components/questionDiv";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <>
            <title>Foire aux Questions</title>
            <div className={"bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white"}>
                <section className={"flex flex-col items-center gap-5 pt-10"}>
                    <p className={"text-3xl font-bold"}>Foire aux Questions</p>
                    <p className={"px-5 text-center"}>Retrouvez ici les réponses aux questions les plus fréquentes sur
                        nos
                        services et produits. Si vous ne trouvez pas ce que vous cherchez, contactez-nous directement
                        !</p>
                    <motion.div initial={{scale: 1}} whileHover={{scale: 1.05}}>
                        <Link href={"/contact"}
                              className={"bg-custom_yellow px-10 py-3 rounded-lg shadow-custom_shadow"}>Contactez-nous</Link>
                    </motion.div>
                </section>
                <div className={"bg-[url('/Images/decoration/banner.png')] bg-cover w-full h-32 my-5 opacity-10"}></div>
                <div className={"bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white py-10"}>
                    <section
                        className={"flex flex-col border-2 border-custom_yellow mx-5 rounded-lg border-b-except-last"}>
                        <QuestionDiv question={"Quels services proposez-vous ?"}
                                     response={"Nous offrons une gamme complète de services, y compris le développement de sites vitrines, e-commerce et sur mesure, l'optimisation SEO, la conception et le développement d'applications mobiles (iOS et Android), ainsi que l'intégration d'API et des solutions personnalisées."}/>
                        <QuestionDiv
                            question={"Puis-je vous contacter si je n'ai pas d'idée précise de ce que je veux ?"}
                            response={"Absolument ! Que vous ayez une idée précise ou non, nous sommes là pour vous aider à définir votre projet et à trouver les meilleures solutions adaptées à vos besoins."}/>
                        <QuestionDiv question={"Comment fonctionne le processus de développement ?"}
                                     response={"Notre processus de développement comprend plusieurs étapes clés : consultation initiale, définition du cahier des charges, conception et design, développement, tests et validation, déploiement et mise en ligne, suivi et maintenance."}/>
                        <QuestionDiv
                            question={"Qu'est-ce qu'un cahier des charges et pourquoi est-il important ?"}
                            response={"Un cahier des charges est un document détaillé qui décrit les exigences et les spécifications de votre projet. Il est essentiel pour garantir que toutes les parties impliquées comprennent bien les attentes et les objectifs du projet."}/>
                        <QuestionDiv
                            question={"Pouvez-vous m'aider à préparer le cahier des charges ?"}
                            response={"Oui, nous pouvons vous fournir une liste de questions détaillées et vous guider tout au long de la préparation du cahier des charges pour assurer que toutes les informations nécessaires soient incluses."}/>
                        <QuestionDiv
                            question={"Offrez-vous un support après la livraison du projet ?"}
                            response={"Oui, nous offrons un support technique réactif et une maintenance continue pour assurer la pérennité de vos projets. Cela inclut des mises à jour régulières et une assistance en cas de problèmes techniques."}/>


                            <QuestionDiv
                            question={"Quelle est la durée de votre support après la mise en ligne du site ?"}
                            response={"Nous offrons différents plans de support et de maintenance adaptés à vos besoins spécifiques. La durée et les détails du support seront définis dans notre contrat de service."}/>

                            <QuestionDiv
                            question={"Comment déterminez-vous le coût d'un projet ?"}
                            response={"Le coût d'un projet dépend de plusieurs facteurs, notamment la complexité, les fonctionnalités requises, le temps de développement, et les technologies utilisées. Nous proposons des devis personnalisés après une évaluation détaillée de vos besoins."}/>

                            <QuestionDiv
                            question={"Proposez-vous des solutions adaptées à tous les budgets ?"}
                            response={"Oui, nous nous efforçons de proposer des solutions flexibles et adaptées à différents budgets. Nous travaillons avec vous pour trouver la meilleure solution possible en fonction de vos contraintes financières."}/>

                            <QuestionDiv
                            question={"Comment protégez-vous mes données personnelles ?"}
                            response={"Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos données personnelles, y compris le chiffrement, des pare-feux et des contrôles d'accès stricts."}/>
                            <QuestionDiv
                            question={"Utilisez-vous des cookies sur votre site web ?"}
                            response={"Oui, notre site utilise des cookies pour améliorer votre expérience utilisateur et pour des analyses statistiques. Vous pouvez gérer et désactiver les cookies à tout moment via les paramètres de votre navigateur."}/>
                            <QuestionDiv
                            question={"Comment puis-je vous contacter pour discuter de mon projet ?"}
                            response={"Vous pouvez nous contacter par téléphone au 06-82-99-85-27, par e-mail à baptiste.petit@psdoweb.com, ou via notre formulaire de contact sur notre site web. Nous serions ravis de discuter de vos besoins et de voir comment nous pouvons vous aider."}/>
                            <QuestionDiv
                            question={"Où êtes-vous situés ?"}
                            response={"Nous sommes situés au 2A Rue de l’orangerie, 60000 Beauvais. Nous ne recevons pas de visites pour le moment, mais vous pouvez nous contacter pour toute question."}/>
                    </section>
                </div>
            </div>
        </>
    )
}