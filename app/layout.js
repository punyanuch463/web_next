import "./globals.css";

export const metadata = {
  title: "หวัดดีนะ ไม่ใช่เว็บเถื่อน5555",
  description: "กด next ไปเรื่อยๆ นะ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
