import { SudokuProvider } from "@/contexts/sudokuContext";
import "./globals.css";

export const metadata = {
  title: "Sudoku",
  description: "Sudoku App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <SudokuProvider>
        <body>{children}</body>
      </SudokuProvider>
    </html>
  );
}
