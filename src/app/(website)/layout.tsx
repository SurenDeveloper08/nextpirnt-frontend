import Header from "../components/header";
import Footer from "../components/Footer";

export const dynamic = "force-dynamic";

async function getNavbar() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/navbar`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return [];

    const data = await res.json();

    return data.success ? data.data : [];
  } catch (err) {
    console.log("Navbar fetch failed:", err);
    return [];
  }
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = await getNavbar();

  return (
    <>
      <Header navLinks={navLinks} />
      {children}
      <Footer navLinks={navLinks} />
    </>
  );
}