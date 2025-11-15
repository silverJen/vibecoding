import type { Metadata } from "next";
import "./globals.css";

// 한국어 폰트를 위한 설정 (Pretendard 또는 시스템 폰트 사용)

export const metadata: Metadata = {
  title: "Vibe Writing - 대화하면 생각이 정리되고, 글이 써진다",
  description: "AI와 대화(음성/텍스트)하며 생각을 정리하면, 그 대화를 기반으로 내가 한 말이 70~80%를 차지하는 초고를 자동 생성하는 인터뷰 기반 글쓰기 도구",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
