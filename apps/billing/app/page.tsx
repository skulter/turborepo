'use client';
import { css } from '@ui/css';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getTheme, injectTheme, ThemeByName, ThemeName } from '@ui/themes';
import { Button } from '@repo/ui';
import { useEffect } from 'react';
export default function Home() {
  const queryClient = new QueryClient();

  const handleChangeTheme = async <T extends ThemeName>(themeName: T) => {
    console.log(themeName)
    const theme = await getTheme(themeName as ThemeName);
    setCookie('theme', themeName, 7);
    injectTheme(document.documentElement, theme);
  };

  useEffect(() => {
    // console.log(document.getElementsByTagName('button').length);
    // @ts-ignore
    [...document.getElementsByTagName('button')].forEach((button) => {
      button.addEventListener('click', (e: any) => {
        // const beforeStyle = window.getComputedStyle(button,'::before')
        // console.log(e.layerX, e.layerY )
        // console.log(e.target.clientWidth/2 - e.layerX)
        const x = e.layerX - e.target.clientWidth / 2;
        const y = e.layerY - e.target.clientHeight / 2;
        button.style.setProperty('--top-cursor', y + 'px');
        button.style.setProperty('--left-cursor', x + 'px');
      });
    });
    // const body = document.body;
    // @ts-ignore
    // body.addEventListener('click', (e: any) => {
    //   // console.log(e.target, e.target.tagName);
    //   if (e.target.tagName === 'BUTTON') {
    //     const button = e.target;
    //     console.log(button.layerX, button.clientWidth);
    //     const x = button.layerX - button.clientWidth / 2;
    //     const y = button.layerY - button.clientHeight / 2;
    //     console.log(x, y);
    //     button.style.setProperty('--top-cursor', y + 'px');
    //     button.style.setProperty('--left-cursor', x + 'px');
    //   }
    //   console.log('effect');
    // });
  }, []);

  // await queryClient.prefetchQuery(userQueries.all());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <Button onClick={() => handleChangeTheme('light')}>Light</Button>
        <Button onClick={() => handleChangeTheme('dark')}>Dark</Button>
        <Button onClick={() => handleChangeTheme('custom')}>Custom</Button>
      </div>
      <div className={css({ fontSize: '123px', fontWeight: 'bold' })}>Hello 🐼!</div>
    </HydrationBoundary>
  );
}
// Set a Cookie
function setCookie(cName: string, cValue: any, expDays: number) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
}
