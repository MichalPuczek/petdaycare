import prisma from "@/lib/db";
import { checkAuth, getPetsByUserId } from "@/lib/server-utils";
// Contexts
import PetsContextProvider from "@/contexts/pet-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";
// Components
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import { Toaster } from "@/components/ui/sonner";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProps) {
  // FETCHING DATA and passing it to a provider
  const session = await checkAuth();
  const pets = await getPetsByUserId(session.user.id);

  return (
    <>
      <BackgroundPattern />

      <div className="flex flex-col min-h-screen max-w-[1050px] mx-auto px-4">
        <AppHeader />

        <SearchContextProvider>
          <PetsContextProvider data={pets}>{children}</PetsContextProvider>
        </SearchContextProvider>

        <AppFooter />
      </div>

      <Toaster position="top-right" />
    </>
  );
}
