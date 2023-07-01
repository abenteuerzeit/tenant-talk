import { useTranslation } from "react-i18next"
export const Discussions = () => {
    const { t } = useTranslation();
    return (
        <main>
            
            <h1>{t("Discussion forum")}</h1>
        
        </main>
    )
}
