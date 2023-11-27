import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { translateOprionsUrl, Languages } from '../../utils';
import copy from "copy-to-clipboard";
import { AiFillCopy} from "react-icons/ai";
import { FcSpeaker } from 'react-icons/fc';
import { MdClear } from "react-icons/md";


const copyToClipboard = (text) => {
  copy(text);
}
const wrapToTranslationRequest = (text) => {
  return `[{"Text":"${text}"}]`;
}

export default function TranslateView() {
  let [language, setLanguage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [translationData, setTranslationData] = useState("The translated text will appear here");
  const [traslationOptions, setTraslationOptions] = useState(translateOprionsUrl);
  const [traslationText, setTraslationText] = useState("");
  const [source, setSource] = useState("");


  const translate = async () => {
    if (language) {
      let options = traslationOptions;
      options.params = {
        'to[0]': 'ar',
        'api-version': '3.0',
        from: language,
        profanityAction: 'NoAction',
        textType: 'plain'
      }
      options.data = wrapToTranslationRequest(traslationText);
      setTraslationOptions(options);
      const response = await axios(traslationOptions);
      let traslatedString = response.data[0].translations[0].text;
      setTranslationData(traslatedString);
    }
  }
  useEffect(() => {
    translate();
  }, [traslationText]);

  console.log(translationData);
  const handleChangeLanguage = (event) => {
    setSelectedLanguage(event.target.value);
    setLanguage(event.target.value)
    console.log(event.target.value);
  };
  const handleTranslate = (event) => {
    setSource(event.target.value);
    setTraslationText(event.target.value);

  };
  const resetText = () => {
    setSource("");
    document.getElementById('sourceText').value = "";
    document.getElementById('output').innerText = "";
  }
  const speak = ()=>{
    let text = translationData;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar';
    window.speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div className="mainBox">
        <div>
          <div className="select">
            <select id='source' value={selectedLanguage} onChange={handleChangeLanguage}>
              <option value="" disabled>Select Language</option>
              {Object.entries(Languages.translation).map(([code, language]) => (
                <option value={code} key={code}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <textarea onChange={handleTranslate} id="sourceText" className="outputResult"></textarea>
          </div>
          <div className="iconBox">
            <p>{source.length}/250</p>
            <AiFillCopy onClick={() => { copyToClipboard(source) }} className="icon" />
            <MdClear onClick={resetText} className="icon" />
          </div>
        </div>

        <div>
          
          <div className="box">
            <textarea id="output" className="outputResult" value={translationData}> </textarea>
          </div>
          <div className="iconBox">
            <FcSpeaker size={30} onClick={()=>{speak()}} className="speaker-icon"/> 
            <AiFillCopy onClick={() => { copyToClipboard(document.getElementById('output').innerText) }} className="icon" />
          </div>
        </div>
      </div>
      {/*<div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Easy Arabic</h1>
            <div className="flex mb-4">
              <select className="p-2 rounded border w-1/2 mr-2" value={selectedLanguage} onChange={handleChangeLanguage}>
                <option value="" disabled>Select a language</option>
                {Object.entries(Languages.translation).map(([code, language]) => (
                  <option value={code} key={code}>
                    {language.name}
                  </option>
                ))}
              </select>
              <button onClick={() => translate()} className="p-2 rounded bg-blue-500 text-white">
                Translate
              </button>
            </div>
            <textarea className="p-2 rounded border w-full h-32" onChange={handleTranslate}></textarea>
            <p className="text-gray-600 mt-4">{translationData}</p>

          </div> */}
    </>
  )
}
