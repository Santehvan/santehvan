

import Script from 'next/script'
import React from 'react'

const GoogleTagManager = () => {
  return (
    <>
    <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=AW-16664456504`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16664456504', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  )
}

export default GoogleTagManager