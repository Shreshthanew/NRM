import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCurrentUser } from "@/lib/server-auth";
import { AuthProvider } from "@/context/AuthContext";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  console.log("Server layout user:", user);
  return (
    <html lang="en">
      <body className="font-sans text-gray-900">
      <AuthProvider initialUser={user}>
        <Header />
        {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}