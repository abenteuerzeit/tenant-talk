import { useTranslation } from "react-i18next";

export const ErrorPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1> {t("Wrong URL !!!")}</h1>
            <p>{t("Opps!")}</p>
        </>
    );
};
