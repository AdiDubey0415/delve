import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user", user);

  return (
    <>
      <Navbar />
      {/* {user ? <Sidebar /> : <></>} */}

      <main className="container p-4 sm:p-6 flex-1 min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}
