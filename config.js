import {
  CloudUploadIcon,
  LockClosedIcon,
  RefreshIcon,
  ShieldCheckIcon,
  CogIcon,
  ServerIcon,
} from "@heroicons/react/outline";

export const meta = {
  name: "A-Barber",
};

export const navigation = [
  { name: "Teenused", href: "#" },
  { name: "Tooted", href: "#" },
  { name: "Meist", href: "#" },
  { name: "Kontakt", href: "#" },
];

export const features = [
  {
    name: "Juukselöikus - 45/60min",
    description:
      "Löikust teostatakse kääride ja masinate abil/ainult kääridega. Sisaldab juuksepesu ning juuste löppviimistlust professionaalsete toodete abil.",
    icon: CloudUploadIcon,
  },
  {
    name: "Masinlôikus - 30/45min",
    description:
      "Teenuse broneerimiseks vali köigepealt teenuse ning seejarel salongi.",
    icon: LockClosedIcon,
  },
  {
    name: "Habeme kujundamine (trimmer + pardel) - 30/45min",
    description:
      "Habeme kujundamine masina/kääride abil, kaela ja pöse piirkonna kontuuride tegemine trimmeri ja pardli abil.",
    icon: RefreshIcon,
  },
  {
    name: "Habeme kujundamine (trimmer + habemenuga + kuum rätik) - 45/60min",
    description:
      "Habemekujundamine masinatega/kääridega, aurutamine kuuma rätiku abil, kontuuride loomine habemenoaga.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Traditsiooniline habemeajamine "Royal Shave" - 60/75min',
    description:
      "Traditsiooniline não raseerimine. Não aurutamine kuuma rätiku abil, oliga naha pehmendamine, traditsioonilisel viisil valmistatud raseerimisvaht.",
    icon: CogIcon,
  },
  {
    name: "Kinkekaart",
    description:
      "Kinkekaart toimib ühekordse maksevahendina. Kui kauba ja teenuste väärtus on väiksem kui kinkekaardi nimiväärtus, sis vahesummat sularahas ei tagastata.",
    icon: ServerIcon,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Roel Aufderehar",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Brenna Goyette",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Daniela Metz",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "11 min",
  },
];
