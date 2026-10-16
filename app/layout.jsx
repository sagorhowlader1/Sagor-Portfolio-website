import "../src/styles/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />


        {/* <link rel="icon" type="image/jpeg" href="/images/profile.png" /> */}
        <link rel="icon" href="/images/dev1.png" type="image/x-icon" />
      </head>
      <body className="bg-dark-bg text-text-primary antialiased  selection:text-white">
        {children}
      </body>
    </html>
  );
}

