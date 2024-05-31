'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Construisons() {
  return (
    <main>
      <title className="text-4xl font-bold">Construisons Ensemble</title>
      <div className="bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white p-5 text-center">
        <motion.h1 initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="text-4xl font-bold">Construisons Ensemble</motion.h1>
      </div>
      <section className="flex flex-col gap-[30px] relative to-white pb-5 lg:px-60">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="flex flex-col items-center justify-center gap-8 m-5">
          <h3 className="font-bold text-xl">Vous avez une idée précise ?</h3>
          <p className="text-base">
            Parfait ! Nous aimons travailler avec des clients qui savent exactement ce qu&apos;ils veulent. Partagez avec nous vos spécifications, vos idées de design, les fonctionnalités que vous imaginez, et même les exemples de sites que vous admirez. Nous sommes ici pour transformer votre vision en réalité. Pour démarrer, veuillez remplir notre formulaire de contact ou nous envoyer un email à [adresse email]. Nous vous répondrons rapidement pour fixer une première réunion de consultation.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="p-3 gap-8 flex flex-col items-center justify-center text-center rounded-[10px] bg-custom_yellow z-20 m-5">
          <h2 className="font-bold text-xl">Besoin d&apos;inspiration ou de conseils ?</h2>
          <p className="text-base">
            Pas de problème ! Si vous n&apos;êtes pas sûr de ce que vous voulez, ou si vous avez besoin d&apos;aide pour affiner vos idées, notre équipe de créatifs et de techniciens est à votre service. Nous pouvons vous aider à définir les objectifs de votre site, choisir le bon style visuel, et planifier les fonctionnalités qui engageront vos visiteurs. Pour commencer, contactez-nous à [adresse email], et nous planifierons une session de brainstorming pour explorer les possibilités.
          </p>
        </motion.div>
        <div className="absolute bg-[url('/Images/decoration/banner.png')] bg-cover bg-center h-[118px] w-full bottom-0 z-10 opacity-10 lg:hidden"></div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="hidden lg:flex absolute opacity-10 right-20 top-1/4">
          <Image src={"/Images/decoration/Icons/3.png"} alt="client_logo" width={100} height={100} />
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="hidden lg:flex absolute opacity-50 left-20 top-1/4">
          <Image src={"/Images/socialmedia/mail.png"} alt="mail_logo" width={100} height={100} />
        </motion.div>
      </section>


      <div className="text-center p-5">
        <motion.h2 initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="text-4xl font-bold">Pourquoi nous choisir ?</motion.h2>
      </div>
      <section className="relative bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white py-5 md:flex md:flex-col md:items-center lg:px-60 lg:gap-5">
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className=" justify-center items-center m-5">
          <ul className="list-disc flex flex-col gap-12">
            <li>
              <span className="underline font-bold">Innovation et Créativité :</span> Notre passion pour le design innovant et créatif nous permet de proposer des solutions sur mesure qui captivent et convertissent. Chaque projet est une opportunité de repousser les limites de ce qui est possible.
            </li>
            <li>
              <span className="underline font-bold">Accompagnement Sur-Mesure :</span> Nous sommes à vos côtés à chaque étape de votre projet, du concept initial au lancement final. Nous misons sur une communication transparente et régulière pour garantir que chaque détail reflète vos attentes.
            </li>
            <li>
              <span className="underline font-bold">Technologie Avancée :</span> En exploitant les technologies les plus récentes, nous assurons que votre site ne soit pas seulement visuellement attrayant, mais également performant et sécurisé, répondant aux standards les plus élevés du développement web.
            </li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="p-3 gap-8 flex flex-col items-center justify-center text-center rounded-[10px] bg-custom_yellow z-50 m-5 md:h-[10%]">
          <h2 className="font-bold text-xl">Prêt à commencer ?</h2>
          <p className="text-base">
            Nous serions ravis de discuter de votre projet. Contactez-nous aujourd&apos;hui à baptiste.petit@psdoweb.com ou via notre formulaire en ligne pour fixer un rendez-vous gratuit. Votre projet mérite ce qu&apos;il y a de meilleur, et nous sommes ici pour vous aider à le réaliser.
          </p>
          <div className="flex justify-center items-center text-xs gap-5 flex-col sm:flex-row">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src="/Images/home/professionnel.png" alt="professionnel_logo" width={100} height={100} className="" />
              <h3 className="text-base">Professionnel</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src="/Images/home/securite.png" alt="securite_logo" width={100} height={100} className="" />
              <h3 className="text-base">Sécurité</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src="/Images/home/Developpement.png" alt="developpement_logo" width={100} height={100} className="" />
              <h3 className="text-base">Développement</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src="/Images/home/originalite.png" alt="originalite_logo" width={100} height={100} className="" />
              <h3 className="text-base">Originalité</h3>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="hidden md:flex absolute opacity-10 left-[18%] top-0 lg:left-20">
          <Image src={"/Images/decoration/Icons/4.png"} alt="web_logo" width={100} height={100} />
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="hidden md:flex absolute opacity-10 left-[18%] lg:left-20 bottom-6 lg:bottom-10">
          <Image src={"/Images/decoration/Icons/3.png"} alt="server_logo" width={100} height={100} />
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="hidden lg:flex absolute opacity-10 right-20 top-1/4">
          <Image src={"/Images/decoration/Icons/2.png"} alt="cloud_logo" width={100} height={100} />
        </motion.div>
      </section>
    </main>
  );
}