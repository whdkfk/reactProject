import React from 'react'
import Header from '@/components/Header'
import "@/app/globals.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}