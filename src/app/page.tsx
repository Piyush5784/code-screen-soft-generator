"use client"
import { useState } from 'react';
import { toPng } from "html-to-image";
import download from "downloadjs";
import { useRef } from "react";

import 'highlight.js/styles/github-dark.css';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/components/ui/select';
import WithLineNumbers from '@/components/code-block';
import { Language } from 'prism-react-renderer';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ThemeValue, themes, defaultCode, ThemeKey, paddingOptions, languageOptions } from '@/components/theme-options';



export default function Home() {
  const [theme, setTheme] = useState<ThemeValue>(themes.sunsetGlow)
  const [code, setCode] = useState(defaultCode);
  const handleThemeChange = (newTheme: ThemeKey) => {
    setTheme(themes[newTheme] || themes.sunsetGlow);
  };
  const codeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (codeRef.current === null) return;

    try {
      const dataUrl = await toPng(codeRef.current);
      download(dataUrl, "screensoft.png");
    } catch (err) {
      console.error("Failed to generate image:", err);
    }
  };

  const shadow = "shadow-[0px_9px_29px_0px_#2d3748]"
  const [showLines, setShowLines] = useState(false);

  const [language, setLanguage] = useState<Language>("typescript");

  const [padding, setPadding] = useState("56px")

  return (
    <>
      <div className='flex items-center justify-between p-10'>
        <div>
          <Textarea className='min-w-[500px] min-h-[400px]' value={code} onChange={(e) => setCode(e.target.value)}></Textarea>
        </div>
        <div>
          <div className="p-10 flex items-center justify-center flex-col">
            <h1 className="text-center font-bold text-4xl">Generate ScreenSoft's</h1>
            <div style={{ padding: `${padding}` }} className={` ${theme} mt-5 max-w-3xl border duration-300 rounded-md`} ref={codeRef}>
              <WithLineNumbers code={code} language={language} shadow={shadow} codingLines={showLines} />
            </div>
          </div >
          <div className="flex items-center justify-center ">
            <div className='border rounded-xl p-2 flex items-center gap-2'>

              <div>
                <p className='p-2 text-xs'>Theme</p>
                <div>
                  <Select onValueChange={handleThemeChange}>
                    <SelectTrigger className="w-[70px]">
                      <div className={`h-5 w-5 rounded-full ${theme}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Theme</SelectLabel>
                        {Object.keys(themes).map((themeKey) => (
                          <SelectItem key={themeKey} value={themeKey}>
                            <div className={`flex items-center`}>
                              <div className={`h-5 w-5 rounded-full ${themes[themeKey as ThemeKey]}`} />
                              <span className="ml-2 text-xs text-foreground/30">{themeKey.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className=" rounded-xl p-2">
                <p className="p-2 text-xs">Padding</p>

                <Select onValueChange={(val) => setPadding(val)}>
                  <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder={`${padding}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Padding</SelectLabel>
                      {paddingOptions.map((pad) => (
                        <SelectItem key={pad} value={pad}>
                          {pad}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>


              <div>
                <p className="p-1 text-xs">Language</p>
                <Select onValueChange={(lang: Language) => setLanguage(lang)}>
                  <SelectTrigger className="w-[120px]">
                    {language.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      {languageOptions.map((lang) => (
                        <SelectItem key={lang} value={lang}>{lang.replace(/([A-Z])/g, ' $1').toUpperCase()}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className='flex flex-col items-center gap-2 pl-5'>
                <p className="p-1 text-xs">Show lines</p>
                <Switch id="Show lines" checked={showLines} onCheckedChange={() => setShowLines(!showLines)} />

              </div>



            </div>

            <Button
              onClick={handleDownload}
              className='m-10'
            >
              Export
            </Button>


          </div>
        </div></div>
    </>
  );
}
