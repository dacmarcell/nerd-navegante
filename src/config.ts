import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://nerd-navegante.vercel.app/", // replace this with your deployed domain
  author: "Developer Marcell",
  desc: "meu portfolio e blog de programacao",
  title: "devmarcell",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "pt", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-br"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dacmarcell",
    linkTitle: ` Marcell no Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcell-dactes/",
    linkTitle: `Marcell no LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dacmarcell@gmail.com",
    linkTitle: `Envie uma mensagem.`,
    active: false,
  },
];
