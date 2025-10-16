import { customLanguageMap } from '../custom/translations';
import { en as enCustom } from '../custom/translations/en';
import { en } from './en';
import { fa } from './fa';

export type LangType = typeof en;

export const languageMap = {
    default: en,
    en: { ...en, ...enCustom },
    fa: fa,
    ...customLanguageMap,
};
