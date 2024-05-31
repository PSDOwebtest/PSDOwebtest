import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-custom_blue_black p-5 w-full text-xs md:text-base">
      <div className="md:flex md:justify-around items-center text-center">
        <Image src="/Images/decoration/Icons/4.png" alt="world_wide_web" width={70} height={70} className="opacity-10 hidden md:flex" />
        <div className="flex justify-around gap-5">
          <div className="flex flex-col text-center">
            <div>
              <Link href="/contact" className="text-custom_yellow underline">Nous-contacter</Link>
            </div>
            <div className="m-5">
              <Link href="/mentions-legales" className="text-custom_yellow underline">Mentions légales</Link>
            </div>
            <div>
              <Link href="/cgu" className="text-custom_yellow underline">CGU</Link>
            </div>
          </div>
          <div className="text-center">
            <div>
              <Link href="/faq" className="text-custom_yellow underline">F.A.Q</Link>
            </div>
            <div className="m-5">
              <p className="text-custom_yellow">06-82-99-85-27</p>
            </div>
            <div>
              <p className="text-custom_yellow">baptiste.petit@psdoweb.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row h-fit gap-5 md:gap-2 md:mt-10">
            <Link href="https://www.linkedin.com/company/103985488/admin/dashboard/"><Image src="/Images/socialmedia/LinkedIn.png" alt="linkedin_link" width={60} height={60} className="w-5 md:w-10" /></Link>
            <Link href="#"><Image src="/Images/socialmedia/Instagram.png" alt="instagram_link" width={60} height={60} className="w-5 md:w-10" /></Link>
            <Link href="mailto:baptiste.petit@psdoweb.com"><Image src="/Images/socialmedia/mail.png" alt="mail_link" width={60} height={60} className="w-5 md:w-10" /></Link>
          </div>
        </div>
        <Image src="/Images/decoration/Icons/2.png" alt="cloud" width={70} height={70} className="opacity-10 hidden md:flex" />
      </div>
    </footer>
  );
}
