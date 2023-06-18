import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const MENU_ITEMS = [
    {
        name: "Your services",
        link: "/",
        special: false,
    },
    {
        name: "Account Settings",
        link: "/",
        special: false,
    },
    {
        name: "Logout",
        link: "/",
        special: false,
    },
    {
        name: "Sign In",
        link: "/login",
        special: false,
    },
    {
        name: "Sign Up",
        link: "/",
        special: true,
    },
];

const NAV_ITEMS = [
    {
        label: "Home",
        children: [
            {
                label: "This is our homepage!",
                subLabel: "We are happy to see You here",
                href: "/home",
            },
            {
                label: "New cities",
                subLabel: "At Your service",
                href: "/cities",
            },
        ],
    },
    {
        label: "Cities",
        children: [
            {
                label: "Cities are discussed here",
                subLabel: "Find your dream accomodation",
                href: "/discussions",
            },
            {
                label: "Other Projects",
                subLabel: "An exclusive list of progects",
                href: "/contactus",
            },
        ],
    },
    {
        label: "Contact Us",
        href: "/contactus",
    },
    {
        label: "Talk about Your landlord",
        href: "/discussions",
    },
    {
        label: "Language",
        children: [
            {
                label: "English",
                languageCode: "en",
            },
            {
                label: "Ukrainian",
                languageCode: "uk",
            },
            {
                label: "Polish",
                languageCode: "pl",
            },
        ],
    },
];

const SOCIAL_BUTTONS = [
    { i18nKey: "Twitter", href: "#", icon: FaTwitter },
    { i18nKey: "YouTube", href: "#", icon: FaYoutube },
    { i18nKey: "Instagram", href: "#", icon: FaInstagram },
];

const COMPANY_LINKS = [
    { i18nKey: "AboutUs", href: "#" },
    { i18nKey: "Blog", href: "#" },
    { i18nKey: "ContactUs", href: "/contactus" },
    { i18nKey: "Pricing", href: "#" },
    { i18nKey: "Testimonials", href: "#" },
];

const SUPPORT_LINKS = [
    { i18nKey: "HelpCenter", href: "#" },
    { i18nKey: "TermsOfService", href: "#" },
    { i18nKey: "Legal", href: "#" },
    { i18nKey: "PrivacyPolicy", href: "#" },
    { i18nKey: "Status", href: "#" },
];

export { MENU_ITEMS, NAV_ITEMS, SOCIAL_BUTTONS, SUPPORT_LINKS, COMPANY_LINKS };
