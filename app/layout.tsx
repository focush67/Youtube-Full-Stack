import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/Navigation";
import CurrentUserProvider from "@/contextx/currentUserContext";
import getCurrentUser from "@/getCurrentUser";
import CreateChannelModalProvider from "@/contextx/createChannelContext";
import CreateChannelModal from "@/components/shared/Modals/CreateChannelModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Youtube",
  description: "Showify",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <CreateChannelModalProvider>
          <CurrentUserProvider user={currentUser}>
            <CreateChannelModal />
            <Navigation />
            <div className="pt-16">{children}</div>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}
