import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const useTranslatedItems = (isLoggedIn, logout) => {
    const { t } = useTranslation();
  
    const MENU_ITEMS = isLoggedIn
      ? [
          {
            name: t("Your services"),
            link: "/",
            special: false,
          },
          {
            name: t("Account Settings"),
            link: "/",
            special: false,
          },
          {
            name: t("Logout"),
            link: "/",
            onClick: logout,
            special: false,
          },
        ]
      : [
          {
            name: t("Sign In"),
            link: "/login",
            special: false,
          },
          {
            name: t("Sign Up"),
            link: "/auth",
            special: true,
          },
        ];
  
   

const NAV_ITEMS = [
    {
        label: t("Home"),
        children: [
            {
                label: t("This is our homepage!"),
                subLabel: t("We are happy to see You here"),
                href: "/",
            },
            {
                label: t("New cities"),
                subLabel: t("At Your service"),
                href: "/cities",
            },
        ],
    },
    {
        label: t("Cities"),
        children: [
            {
                label: t("Cities are discussed here"),
                subLabel: t("Find your dream accomodation"),
                href: "/discussions",
            },
            {
                label: t("Other Projects"),
                subLabel: t("An exclusive list of projects"),
                href: "#",
            },
        ],
    },
    {
        label: t("Contact Us"),
        href: "/contactus",
    },
    {
        label: t("Talk about Your landlord"),
        href: "/discussions",
    },
    {
        label: t("Language"),
        children: [
            {
                label: t("English"),
                languageCode: "en",
            },
            {
                label: t("Ukrainian"),
                languageCode: "uk",
            },
            {
                label: t("Polish"),
                languageCode: "pl",
            },
        ],
    },
];

const SOCIAL_BUTTONS = [
    { i18nKey: t("Twitter"), href: "#", icon: FaTwitter },
    { i18nKey: t("YouTube"), href: "#", icon: FaYoutube },
    { i18nKey: t("Instagram"), href: "#", icon: FaInstagram },
];

const COMPANY_LINKS = [
    { i18nKey: t("AboutUs"), href: "#" },
    { i18nKey: t("Blog"), href: "#" },
    { i18nKey: t("ContactUs"), href: "/contactus" },
    { i18nKey: t("Pricing"), href: "#" },
    { i18nKey: t("Testimonials"), href: "#" },
];

const SUPPORT_LINKS = [
    { i18nKey: t("HelpCenter"), href: "#" },
    { i18nKey: t("TermsOfService"), href: "#" },
    { i18nKey: t("Legal"), href: "#" },
    { i18nKey: t("PrivacyPolicy"), href: "#" },
    { i18nKey: t("Status"), href: "#" },
];


return { MENU_ITEMS, NAV_ITEMS, SOCIAL_BUTTONS, SUPPORT_LINKS, COMPANY_LINKS }
};
