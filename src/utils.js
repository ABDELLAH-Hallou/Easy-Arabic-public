
export const translateUrl = 'https://microsoft-translator-text.p.rapidapi.com/translate' // POST
export const getLanguagesUrl = 'https://microsoft-translator-text.p.rapidapi.com/languages' // GET
export const detectUrl = 'https://microsoft-translator-text.p.rapidapi.com/Detect' // POST

var XRapidAPIKey = process.env.XRapidAPIKey;
var XRapidAPIHost = 'microsoft-translator-text.p.rapidapi.com';


export const translateOprionsUrl = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {
      'to[0]': 'ar',
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': XRapidAPIKey,
      'X-RapidAPI-Host': XRapidAPIHost
    },
    data: '[{"Text":"Geeeges"}]'
  };

export const languagesOprionsUrl = {
  method: 'GET',
  url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
  params: {'api-version': '3.0',scope: 'translation'},
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': XRapidAPIKey,
    'X-RapidAPI-Host': XRapidAPIHost
  }
};

export const Languages = {
  "translation": {
    "af": {
      "name": "Afrikaans",
      "nativeName": "Afrikaans",
      "dir": "ltr"
    },
    "am": {
      "name": "Amharic",
      "nativeName": "አማርኛ",
      "dir": "ltr"
    },
    "ar": {
      "name": "Arabic",
      "nativeName": "العربية",
      "dir": "rtl"
    },
    "as": {
      "name": "Assamese",
      "nativeName": "অসমীয়া",
      "dir": "ltr"
    },
    "az": {
      "name": "Azerbaijani",
      "nativeName": "Azərbaycan",
      "dir": "ltr"
    },
    "ba": {
      "name": "Bashkir",
      "nativeName": "Bashkir",
      "dir": "ltr"
    },
    "bg": {
      "name": "Bulgarian",
      "nativeName": "Български",
      "dir": "ltr"
    },
    "bn": {
      "name": "Bangla",
      "nativeName": "বাংলা",
      "dir": "ltr"
    },
    "bo": {
      "name": "Tibetan",
      "nativeName": "བོད་སྐད་",
      "dir": "ltr"
    },
    "bs": {
      "name": "Bosnian",
      "nativeName": "Bosnian",
      "dir": "ltr"
    },
    "ca": {
      "name": "Catalan",
      "nativeName": "Català",
      "dir": "ltr"
    },
    "cs": {
      "name": "Czech",
      "nativeName": "Čeština",
      "dir": "ltr"
    },
    "cy": {
      "name": "Welsh",
      "nativeName": "Cymraeg",
      "dir": "ltr"
    },
    "da": {
      "name": "Danish",
      "nativeName": "Dansk",
      "dir": "ltr"
    },
    "de": {
      "name": "German",
      "nativeName": "Deutsch",
      "dir": "ltr"
    },
    "dv": {
      "name": "Divehi",
      "nativeName": "ދިވެހިބަސް",
      "dir": "rtl"
    },
    "el": {
      "name": "Greek",
      "nativeName": "Ελληνικά",
      "dir": "ltr"
    },
    "en": {
      "name": "English",
      "nativeName": "English",
      "dir": "ltr"
    },
    "es": {
      "name": "Spanish",
      "nativeName": "Español",
      "dir": "ltr"
    },
    "et": {
      "name": "Estonian",
      "nativeName": "Eesti",
      "dir": "ltr"
    },
    "eu": {
      "name": "Basque",
      "nativeName": "Euskara",
      "dir": "ltr"
    },
    "fa": {
      "name": "Persian",
      "nativeName": "فارسی",
      "dir": "rtl"
    },
    "fi": {
      "name": "Finnish",
      "nativeName": "Suomi",
      "dir": "ltr"
    },
    "fil": {
      "name": "Filipino",
      "nativeName": "Filipino",
      "dir": "ltr"
    },
    "fj": {
      "name": "Fijian",
      "nativeName": "Na Vosa Vakaviti",
      "dir": "ltr"
    },
    "fo": {
      "name": "Faroese",
      "nativeName": "Føroyskt",
      "dir": "ltr"
    },
    "fr": {
      "name": "French",
      "nativeName": "Français",
      "dir": "ltr"
    },
    "fr-CA": {
      "name": "French (Canada)",
      "nativeName": "Français (Canada)",
      "dir": "ltr"
    },
    "ga": {
      "name": "Irish",
      "nativeName": "Gaeilge",
      "dir": "ltr"
    },
    "gl": {
      "name": "Galician",
      "nativeName": "Galego",
      "dir": "ltr"
    },
    "gu": {
      "name": "Gujarati",
      "nativeName": "ગુજરાતી",
      "dir": "ltr"
    },
    "he": {
      "name": "Hebrew",
      "nativeName": "עברית",
      "dir": "rtl"
    },
    "hi": {
      "name": "Hindi",
      "nativeName": "हिन्दी",
      "dir": "ltr"
    },
    "hr": {
      "name": "Croatian",
      "nativeName": "Hrvatski",
      "dir": "ltr"
    },
    "hsb": {
      "name": "Upper Sorbian",
      "nativeName": "Hornjoserbšćina",
      "dir": "ltr"
    },
    "ht": {
      "name": "Haitian Creole",
      "nativeName": "Haitian Creole",
      "dir": "ltr"
    },
    "hu": {
      "name": "Hungarian",
      "nativeName": "Magyar",
      "dir": "ltr"
    },
    "hy": {
      "name": "Armenian",
      "nativeName": "Հայերեն",
      "dir": "ltr"
    },
    "id": {
      "name": "Indonesian",
      "nativeName": "Indonesia",
      "dir": "ltr"
    },
    "ikt": {
      "name": "Inuinnaqtun",
      "nativeName": "Inuinnaqtun",
      "dir": "ltr"
    },
    "is": {
      "name": "Icelandic",
      "nativeName": "Íslenska",
      "dir": "ltr"
    },
    "it": {
      "name": "Italian",
      "nativeName": "Italiano",
      "dir": "ltr"
    },
    "iu": {
      "name": "Inuktitut",
      "nativeName": "ᐃᓄᒃᑎᑐᑦ",
      "dir": "ltr"
    },
    "iu-Latn": {
      "name": "Inuktitut (Latin)",
      "nativeName": "Inuktitut (Latin)",
      "dir": "ltr"
    },
    "ja": {
      "name": "Japanese",
      "nativeName": "日本語",
      "dir": "ltr"
    },
    "ka": {
      "name": "Georgian",
      "nativeName": "ქართული",
      "dir": "ltr"
    },
    "kk": {
      "name": "Kazakh",
      "nativeName": "Қазақ Тілі",
      "dir": "ltr"
    },
    "km": {
      "name": "Khmer",
      "nativeName": "ខ្មែរ",
      "dir": "ltr"
    },
    "kmr": {
      "name": "Kurdish (Northern)",
      "nativeName": "Kurdî (Bakur)",
      "dir": "ltr"
    },
    "kn": {
      "name": "Kannada",
      "nativeName": "ಕನ್ನಡ",
      "dir": "ltr"
    },
    "ko": {
      "name": "Korean",
      "nativeName": "한국어",
      "dir": "ltr"
    },
    "ku": {
      "name": "Kurdish (Central)",
      "nativeName": "Kurdî (Navîn)",
      "dir": "rtl"
    },
    "ky": {
      "name": "Kyrgyz",
      "nativeName": "Кыргызча",
      "dir": "ltr"
    },
    "lo": {
      "name": "Lao",
      "nativeName": "ລາວ",
      "dir": "ltr"
    },
    "lt": {
      "name": "Lithuanian",
      "nativeName": "Lietuvių",
      "dir": "ltr"
    },
    "lv": {
      "name": "Latvian",
      "nativeName": "Latviešu",
      "dir": "ltr"
    },
    "lzh": {
      "name": "Chinese (Literary)",
      "nativeName": "中文 (文言文)",
      "dir": "ltr"
    },
    "mg": {
      "name": "Malagasy",
      "nativeName": "Malagasy",
      "dir": "ltr"
    },
    "mi": {
      "name": "Māori",
      "nativeName": "Te Reo Māori",
      "dir": "ltr"
    },
    "mk": {
      "name": "Macedonian",
      "nativeName": "Македонски",
      "dir": "ltr"
    },
    "ml": {
      "name": "Malayalam",
      "nativeName": "മലയാളം",
      "dir": "ltr"
    },
    "mn-Cyrl": {
      "name": "Mongolian (Cyrillic)",
      "nativeName": "Mongolian (Cyrillic)",
      "dir": "ltr"
    },
    "mn-Mong": {
      "name": "Mongolian (Traditional)",
      "nativeName": "ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ",
      "dir": "ltr"
    },
    "mr": {
      "name": "Marathi",
      "nativeName": "मराठी",
      "dir": "ltr"
    },
    "ms": {
      "name": "Malay",
      "nativeName": "Melayu",
      "dir": "ltr"
    },
    "mt": {
      "name": "Maltese",
      "nativeName": "Malti",
      "dir": "ltr"
    },
    "mww": {
      "name": "Hmong Daw",
      "nativeName": "Hmong Daw",
      "dir": "ltr"
    },
    "my": {
      "name": "Myanmar (Burmese)",
      "nativeName": "မြန်မာ",
      "dir": "ltr"
    },
    "nb": {
      "name": "Norwegian",
      "nativeName": "Norsk Bokmål",
      "dir": "ltr"
    },
    "ne": {
      "name": "Nepali",
      "nativeName": "नेपाली",
      "dir": "ltr"
    },
    "nl": {
      "name": "Dutch",
      "nativeName": "Nederlands",
      "dir": "ltr"
    },
    "or": {
      "name": "Odia",
      "nativeName": "ଓଡ଼ିଆ",
      "dir": "ltr"
    },
    "otq": {
      "name": "Querétaro Otomi",
      "nativeName": "Hñähñu",
      "dir": "ltr"
    },
    "pa": {
      "name": "Punjabi",
      "nativeName": "ਪੰਜਾਬੀ",
      "dir": "ltr"
    },
    "pl": {
      "name": "Polish",
      "nativeName": "Polski",
      "dir": "ltr"
    },
    "prs": {
      "name": "Dari",
      "nativeName": "دری",
      "dir": "rtl"
    },
    "ps": {
      "name": "Pashto",
      "nativeName": "پښتو",
      "dir": "rtl"
    },
    "pt": {
      "name": "Portuguese (Brazil)",
      "nativeName": "Português (Brasil)",
      "dir": "ltr"
    },
    "pt-PT": {
      "name": "Portuguese (Portugal)",
      "nativeName": "Português (Portugal)",
      "dir": "ltr"
    },
    "ro": {
      "name": "Romanian",
      "nativeName": "Română",
      "dir": "ltr"
    },
    "ru": {
      "name": "Russian",
      "nativeName": "Русский",
      "dir": "ltr"
    },
    "sk": {
      "name": "Slovak",
      "nativeName": "Slovenčina",
      "dir": "ltr"
    },
    "sl": {
      "name": "Slovenian",
      "nativeName": "Slovenščina",
      "dir": "ltr"
    },
    "sm": {
      "name": "Samoan",
      "nativeName": "Gagana Sāmoa",
      "dir": "ltr"
    },
    "so": {
      "name": "Somali",
      "nativeName": "Soomaali",
      "dir": "ltr"
    },
    "sq": {
      "name": "Albanian",
      "nativeName": "Shqip",
      "dir": "ltr"
    },
    "sr-Cyrl": {
      "name": "Serbian (Cyrillic)",
      "nativeName": "Српски (ћирилица)",
      "dir": "ltr"
    },
    "sr-Latn": {
      "name": "Serbian (Latin)",
      "nativeName": "Srpski (latinica)",
      "dir": "ltr"
    },
    "sv": {
      "name": "Swedish",
      "nativeName": "Svenska",
      "dir": "ltr"
    },
    "sw": {
      "name": "Swahili",
      "nativeName": "Kiswahili",
      "dir": "ltr"
    },
    "ta": {
      "name": "Tamil",
      "nativeName": "தமிழ்",
      "dir": "ltr"
    },
    "te": {
      "name": "Telugu",
      "nativeName": "తెలుగు",
      "dir": "ltr"
    },
    "th": {
      "name": "Thai",
      "nativeName": "ไทย",
      "dir": "ltr"
    },
    "ti": {
      "name": "Tigrinya",
      "nativeName": "ትግር",
      "dir": "ltr"
    },
    "tk": {
      "name": "Turkmen",
      "nativeName": "Türkmen Dili",
      "dir": "ltr"
    },
    "tlh-Latn": {
      "name": "Klingon (Latin)",
      "nativeName": "Klingon (Latin)",
      "dir": "ltr"
    },
    "tlh-Piqd": {
      "name": "Klingon (pIqaD)",
      "nativeName": "Klingon (pIqaD)",
      "dir": "ltr"
    },
    "to": {
      "name": "Tongan",
      "nativeName": "Lea Fakatonga",
      "dir": "ltr"
    },
    "tr": {
      "name": "Turkish",
      "nativeName": "Türkçe",
      "dir": "ltr"
    },
    "tt": {
      "name": "Tatar",
      "nativeName": "Татар",
      "dir": "ltr"
    },
    "ty": {
      "name": "Tahitian",
      "nativeName": "Reo Tahiti",
      "dir": "ltr"
    },
    "ug": {
      "name": "Uyghur",
      "nativeName": "ئۇيغۇرچە",
      "dir": "rtl"
    },
    "uk": {
      "name": "Ukrainian",
      "nativeName": "Українська",
      "dir": "ltr"
    },
    "ur": {
      "name": "Urdu",
      "nativeName": "اردو",
      "dir": "rtl"
    },
    "uz": {
      "name": "Uzbek (Latin)",
      "nativeName": "Uzbek (Latin)",
      "dir": "ltr"
    },
    "vi": {
      "name": "Vietnamese",
      "nativeName": "Tiếng Việt",
      "dir": "ltr"
    },
    "yua": {
      "name": "Yucatec Maya",
      "nativeName": "Yucatec Maya",
      "dir": "ltr"
    },
    "yue": {
      "name": "Cantonese (Traditional)",
      "nativeName": "粵語 (繁體)",
      "dir": "ltr"
    },
    "zh-Hans": {
      "name": "Chinese Simplified",
      "nativeName": "中文 (简体)",
      "dir": "ltr"
    },
    "zh-Hant": {
      "name": "Chinese Traditional",
      "nativeName": "繁體中文 (繁體)",
      "dir": "ltr"
    },
    "zu": {
      "name": "Zulu",
      "nativeName": "Isi-Zulu",
      "dir": "ltr"
    }
  }
}
export function UTCTimeConverter(date) {
  // let data = new Date(date)
  let tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function (num) {
          return (num < 10 ? '0' : '') + num;
      };

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(Math.floor(Math.abs(tzo) / 60)) +
      ':' + pad(Math.abs(tzo) % 60);
}

export const Tours = [{
  "title": "Discover The Whale Sharks of Qatar - Daily Explorer",
  "image": "https://www.discoverqatar.qa/images/whalesharks-147366550/accom_details/?m=nbf",
  "tags": ["Adventure", "Nature", "Wildlife"],
  "duration": "8 hours",
  "price": "QAR 1,800 pp*",
  "promotionTag": null
}, {
  "title": "Discover Dinner in the Desert - Private Tour",
  "image": "https://www.discoverqatar.qa/images/desert_safari_qatar4_1200x600px/accom_details/?m=nbf",
  "tags": ["Adventure", "Food & Drink"],
  "duration": "6 hours",
  "price": "QAR 1,467",
  "promotionTag": "Price per vehicle up to 4 people"
}, {
  "title": "Discover the Dunes and Inland Sea - Private Tour",
  "image": "https://www.discoverqatar.qa/images/desert_safari_pod_700x500px/accom_details/?m=nbf",
  "tags": ["Adventure", "Nature"],
  "duration": "4 hours",
  "price": "QAR 867",
  "promotionTag": "Price per vehicle up to 5 people"
}, {
  "title": "Discover Doha",
  "image": "https://www.discoverqatar.qa/images/1500x1000-discover-doha/accom_details/?m=nbf",
  "tags": ["City Tour", "History", "Shopping"],
  "duration": "4 hours",
  "price": "QAR 134 pp*",
  "promotionTag": "Best Seller"
}, {
  "title": "Discover Souq Waqif",
  "image": "https://www.discoverqatar.qa/images/1500x1000-discover-souq/accom_details/?m=nbf",
  "tags": ["Culture", "Food & Drink"],
  "duration": "2 hours",
  "price": "QAR 80 pp*",
  "promotionTag": null
}, {
  "title": "Discover Mangroves of Qatar without transfer",
  "image": "https://www.discoverqatar.qa/images/kayaking-in-mangroves2-1200x600/accom_details/?m=nbf",
  "tags": ["Adventure", "Nature", "Sport"],
  "duration": "2 hours",
  "price": "QAR 224 pp*",
  "promotionTag": null
}, {
  "title": "Discover Stand-up Paddle Boarding without transfer",
  "image": "https://www.discoverqatar.qa/images/stand-up-paddle-1200x600/accom_details/?m=nbf",
  "tags": ["Adventure", "Nature", "Sport"],
  "duration": "2 hours",
  "price": "QAR 224 pp*",
  "promotionTag": null
}, {
  "title": "Discover Quest Theme park",
  "image": "https://www.discoverqatar.qa/images/quest-oryx-express-1200x600/accom_details/?m=nbf",
  "tags": ["Adventure", "Family"],
  "duration": "7 hours",
  "price": "QAR 226 pp*",
  "promotionTag": null
}, {
  "title": "Discover Katara Village",
  "image": "https://www.discoverqatar.qa/images/katara-1200x600px/accom_details/?m=nbf",
  "tags": ["Art", "Culture"],
  "duration": "2 hours",
  "price": "QAR 80 pp*",
  "promotionTag": null
}, {
  "title": "Discover the Zekreet Peninsula",
  "image": "https://www.discoverqatar.qa/images/zekreet1_1200x600px/accom_details/?m=nbf",
  "tags": ["Art", "History", "Nature"],
  "duration": "6 hours",
  "price": "QAR 644 pp*",
  "promotionTag": "Private Tour"
}, {
  "title": "Discover Desert Falls Water & Adventure Park",
  "image": "https://www.discoverqatar.qa/images/desert-falls-water-and-adventure-park-family-1200x600/accom_details/?m=nbf",
  "tags": ["Adventure", "Family"],
  "duration": "6 hours",
  "price": "QAR 564",
  "promotionTag": null
}, {
  "title": "Discover Doha - Private Tour",
  "image": "https://www.discoverqatar.qa/images/corniche-skyline-with-dhow-1200x600px/accom_details/?m=nbf",
  "tags": ["Art", "Culture", "Food & Drink"],
  "duration": "4 hours",
  "price": "QAR 1,060",
  "promotionTag": "Private Tour"
}, {
  "title": "Discover Championship Golf",
  "image": "https://www.discoverqatar.qa/images/golf-in-doha/accom_details/?m=nbf",
  "tags": ["Sport"],
  "duration": "4 hours",
  "price": "QAR 534 pp*",
  "promotionTag": null
}, {
  "title": "Discover Doha by Night - Private Tour",
  "image": "https://www.discoverqatar.qa/images/museum_of_islamic_art7_1200x600px/accom_details/?m=nbf",
  "tags": ["City Tour", "Culture", "Food & Drink"],
  "duration": "5 hours",
  "price": "QAR 485 pp*",
  "promotionTag": "Private Tour"
}]