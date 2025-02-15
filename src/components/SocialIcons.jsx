import { useState } from 'react';
import React from 'react';
import InstagramIcon from '/public/assets/Instagram.svg';
import MailIcon from '/public/assets/Mail.svg';
import WhatsappIcon from '/public/assets/Whatsapp.svg';
import LinkedinIcon from '/public/assets/Linkedin.svg';
import insta_hover from '/public/assets/insta_hover.svg';
import mail_hover from '/public/assets/mail_hover.svg';
import whatsapp_hover from '/public/assets/whatsapp_hover.svg';
import linkedin_hover from '/public/assets/linkedin_hover.svg';
//import { LinkedinIcon } from 'lucide-react';

const IconButton = ({ href, icon, alt }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <img src={icon} alt={alt} className="w-[61px] h-[62px]" />
  </a>
);

const SocialIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Social media icons with default and hover images
  const icons = [
    {
      name: "Instagram",
      link: "https://instagram.com/tedxcet",
      defaultImg: InstagramIcon,
      hoverImg: insta_hover,
    },
    {
      name: "Gmail",
      link: "mailto:your-email@gmail.com",
      defaultImg: MailIcon,
      hoverImg: mail_hover,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/tedxcet/?originalSubdomain=in",
      defaultImg: LinkedinIcon,
      hoverImg: linkedin_hover,
    },
    {
      name: "WhatsApp",
      link: "",
      defaultImg: WhatsappIcon,
      hoverImg: whatsapp_hover,
    },
  ];

  return (
    <div className="flex gap-4 items-center ">
      {icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIcon(icon.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img
            src={hoveredIcon === icon.name ? icon.hoverImg : icon.defaultImg}
            alt={icon.name}
            className="w-16 h-16 transition-all duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
