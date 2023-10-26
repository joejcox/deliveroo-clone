import "./globals.css";

export const metadata = {
  title: "Deliveroo Clone",
  description: "Get yer food now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
