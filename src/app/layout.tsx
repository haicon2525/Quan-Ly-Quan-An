import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google"; // Hoặc font Geist nếu bạn dùng bản mới
import "./globals.css";
import { cn } from "@/lib/utils"; // Import hàm cn để gộp class sạch sẽ hơn

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Quản lý món ăn",
  description: "Ứng dụng quản lý món ăn chuyên nghiệp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      {/* Thêm suppressHydrationWarning để tránh lỗi khi dùng dark mode/next-themes */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geist.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
