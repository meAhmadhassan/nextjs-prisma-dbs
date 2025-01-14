import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Prisma DB",
  description: "Next.js Prisma DBs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
