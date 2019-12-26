import flatten from 'flat';
import { defaultsDeep } from 'lodash-es';

// import { interactive as messages } from 'react-trasnlation';
//
//
// locale = 'fr-FR'; // Forcing for testing
// const msg = defaultsDeep(messages[locale], messages['en-US']);
// export const flattenedMessage = flatten(msg);
// export default { flattenedMessage, locale };



export const manageTranslation = (locale, translationMsg) => {

  if(!translationMsg){
    throw new Error('Translation message is required parameter, exiting the function');
    return
  }

  if(!locale){
    console.log('Locale is not provided and will be using en-US as default');
  }

  const mergeMsg = defaultsDeep(translationMsg[locale], translationMsg['en-US']);
  return flatten(mergeMsg);
}

export default manageTranslation;
