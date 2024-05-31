'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <title>Collaborateurs</title>
      <motion.section id="intro_collab" className="bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white flex justify-around items-center relative">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }}>
          <Image src="/Images/decoration/Icons/4.png" alt="world_wide_web" width={100} height={100} className="hidden lg:flex opacity-10 w-52 h-52" />
        </motion.div>
        <div className="flex flex-col gap-[43px]">
          <div className="flex flex-col items-center gap-[43px]">
            <motion.h1 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.25, delay: 0.5 }} viewport={{ once: true }} className="font-bold text-4xl mt-[43px]">Collaborateurs</motion.h1>
            <motion.p initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }} viewport={{ once: true }} className="text-center w-[348px]">Nous transformons vos idées en expériences numériques innovantes, capturant l&apos;attention de votre public cible.</motion.p>
          </div>
          <div className="w-full h-[118px]">
            <div className="absolute inset-0 bg-[url('/Images/decoration/banner.png')] bg-cover bg-center opacity-10 lg:hidden h-[118px] top-[200px]"></div>
            <motion.div initial={{ opacity: 0, y: 40, scale: 1 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.25, delay: 0.5 }} viewport={{ once: true }} className="relative flex justify-center items-center w-full h-fit">
              <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10 hover:scale-105 transition-transform">
                Contactez-nous &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }}>
          <Image src="/Images/decoration/Icons/4.png" alt="world_wide_web" width={100} height={100} className="hidden lg:flex opacity-10 w-52 h-52" />
        </motion.div>
      </motion.section>

      <motion.div initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden lg:flex relative">
        <hr className="custom-dashed-border my-4 absolute left-[400px]" />
      </motion.div>
      <section id="collab_1" className="flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row lg:h-[320px] justify-center lg:gap-52">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src="/Images/logoCollab/logoBP.png" alt="logo_baptiste_petit" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <motion.h2>Baptiste Petit</motion.h2>
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[22px] justify-center items-center">
          <motion.p className="w-[300px] md:w-[500px] text-center">Je suis Baptiste Petit, fondateur de PSDOweb, une entreprise dédiée à la mise en relation de développeurs web freelances et de clients ayant des besoins technologiques spécifiques. Notre mission est de connecter des talents qualifiés avec des projets ambitieux, en garantissant qualité, sécurité et originalité. Ensemble, nous construisons le web de demain.</motion.p>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.15 }}>
            <Link href="https://www.baptistepetit.com/" target={"_blank"} className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Portfolio
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="w-fit absolute opacity-10 top-5 lg:top-56 right-16 sm:right-32">
          <Image src="/Images/decoration/Icons/2.png" alt="cloud_logo" width={75} height={75} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="w-fit hidden absolute opacity-10 top-5 lg:flex left-16 sm:left-32">
          <Image src="/Images/decoration/Icons/3.png" alt="client_logo" width={75} height={75} />
        </motion.div>
      </section>


      <motion.div initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden lg:flex relative">
        <hr className="custom-dashed-border my-4 absolute left-[400px]" />
      </motion.div>
      <section id="collab_2" className="flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row-reverse lg:h-[320px] justify-center lg:gap-52">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src="/Images/logoCollab/logoBD2.png" alt="logo_benjamin_desmet" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Benjamin Desmet</h2>
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">En tant que développeur web expérimenté, j&apos;excelle aussi bien en front-end qu&apos;en back-end, combinant une solide maîtrise technique avec une grande créativité. Je suis prêt à mettre mes compétences à votre disposition pour assurer le succès de votre projet.</p>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.15 }}>
            <Link href="https://www.benjamin-desmet.com/" target={"_blank"} className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Portfolio
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="absolute opacity-10 top-5 lg:bottom-56 left-16 sm:right-32 lg:left-[88%]">
          <Image src="/Images/decoration/Icons/4.png" alt="world_wide_web" width={75} height={75} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden absolute opacity-10 bottom-5 lg:flex left-16 sm:left-32">
          <Image src="/Images/decoration/Icons/3.png" alt="server_logo" width={75} height={75} />
        </motion.div>
      </section>

      <motion.div initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden lg:flex relative">
        <hr className="custom-dashed-border my-4 absolute left-[400px]" />
      </motion.div>
      <section id="collab_3" className="flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row lg:h-[320px] justify-center lg:gap-52">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src="/Images/logoCollab/logoGB.png" alt="logo_gabin_buignet" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Gabin Buignet</h2>
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">Passionné par le codage informatique depuis de nombreuses années, j&apos;ai toujours eu une prédilection pour le développement web, tant pour l&apos;aspect design que pour le côté technique. Je serais ravi de mettre mes compétences à votre service pour mener à bien votre projet.</p>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.15 }}>
            <Link href="https://www.gabinbuignet.xyz/" target={"_blank"} className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Portfolio
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="absolute opacity-10 top-5 lg:top-56 right-16 sm:right-32">
          <Image src="/Images/decoration/Icons/2.png" alt="cloud_logo" width={75} height={75} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden absolute opacity-10 top-5 lg:flex left-16 sm:left-32">
          <Image src="/Images/decoration/Icons/3.png" alt="client_logo" width={75} height={75} />
        </motion.div>
      </section>

      <motion.div initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden lg:flex relative">
        <hr className="custom-dashed-border my-4 absolute left-[400px]" />
      </motion.div>
      <section id="collab_4" className="flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row-reverse lg:h-[320px] justify-center lg:gap-52 bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[10px] items-center">
          <div className="bg-black w-fit">
            <Image src="/Images/logoCollab/logoMP.png" alt="logo_maxime_petit" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Maxime Petit</h2>
        </motion.div>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: 0.25 }} viewport={{ once: true }} className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">Je suis un développeur web spécialisé en front-end et back-end, alliant expertise technique et créativité pour livrer des sites à la fois performants et esthétiquement plaisants. Ma maîtrise de JavaScript, React et Node.js m&apos;aide à trouver des solutions pour correspondre à vos attentes.</p>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.15 }}>
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Portfolio
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="absolute opacity-10 top-5 lg:bottom-56 left-16 sm:right-32 lg:left-[88%]">
          <Image src="/Images/decoration/Icons/4.png" alt="world_wide_web" width={75} height={75} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 0.1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="hidden absolute opacity-10 bottom-5 lg:flex left-16 sm:left-32">
          <Image src="/Images/decoration/Icons/3.png" alt="server_logo" width={75} height={75} />
        </motion.div>
      </section>
    </main>
  );
}
