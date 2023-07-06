import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from "@chakra-ui/react";
import { useTranslatedItems } from './header_components/MenuTexts'; // Path to your file
import { useTranslation } from 'react-i18next';

export const Breadcrumbs = () => {
    const location = useLocation();
    const { NAV_ITEMS } = useTranslatedItems();
    const {t} = useTranslation();

    // Split the location into sections based on '/'
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Box padding="20px">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="/">{t("Home")}</BreadcrumbLink>
                </BreadcrumbItem>
                {pathnames.map((value, index) => {
                    const path = `/${pathnames.slice(0, index + 1).join('/')}`;

                    // Find the breadcrumb name
                    let name;
                    for (const navItem of NAV_ITEMS) {
                        // Check if the item is a "Language" item
                        if (navItem.children && navItem.children.some(child => child.languageCode)) {
                            continue;
                        }

                        if (navItem.href === path) {
                            name = navItem.label;
                            break;
                        } else if (navItem.children) {
                            const foundChild = navItem.children.find(child => child.href === path);
                            if (foundChild) {
                                name = foundChild.label;
                                break;
                            }
                        }
                    }

                    return name ? (
                        <BreadcrumbItem key={name}>
                            <BreadcrumbLink as={Link} to={path}>{name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    ) : null;
                })}
            </Breadcrumb>
        </Box>
    );
};