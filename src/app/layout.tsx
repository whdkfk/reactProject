import Script from 'next/script'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}
