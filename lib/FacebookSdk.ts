'use client'
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    FB: typeof FB;
    fbAsyncInit: () => void;
  }
}

function useFacebookSDK(): typeof FB | null {
  const [fbSDK, setFbSDK] = useState<typeof FB | null>(null);

  useEffect(() => {
    window.fbAsyncInit = function() {
      try {
        window.FB.init({
          appId      : '1040314917436506', 
          cookie     : true,
          xfbml      : true,
          version    : 'v20.0'
        });

        setFbSDK(window.FB);
      } catch (error) {
        console.error('Error initializing Facebook SDK:', error);
      }
    };

    // Load the Facebook SDK script
    (function(d: Document, s: 'script', id: string) {
      var js: HTMLScriptElement | null, 
          fjs: HTMLScriptElement | null = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      js.onload = () => console.log('Facebook SDK loaded');
      js.onerror = (error) => console.error('Error loading Facebook SDK:', error);
      fjs.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return fbSDK;
}

export default useFacebookSDK;
