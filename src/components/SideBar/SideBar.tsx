// Libraries
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbPdf,
} from "react-icons/tb";

function SideBar() {
  return (
    <div className="md:flex md:flex-col lg:justify-end md:justify-center h-full lg:py-10 hidden gap-4 w-fit md:pr-10 lg:px-5">
      <a href="https://twitter.com/msafdev" target="_blank">
        <TbBrandTwitter className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#00acee]" />
      </a>
      <a href="https://instagram.com/msalman_af" target="_blank">
        <TbBrandInstagram className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#d62976]" />
      </a>
      <a href="https://linkedin.com/in/muhammadsalmoon" target="_blank">
        <TbBrandLinkedin className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#0e76a8]" />
      </a>
      <a
        href="https://drive.google.com/file/d/1F8JYq7PKLtQajm4SxDNQgXEKJkCQOzlJ/view?usp=drive_link"
        target="_blank"
      >
        <TbPdf className="w-[32px] h-[32px] hover:scale-110 cursor-pointer transition-all hover:text-[#f40f02]" />
      </a>
    </div>
  );
}
export default SideBar;
