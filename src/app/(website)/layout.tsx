import Header from "../components/header"
import Footer from "../components/Footer";

async function getNavbar() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/navbar`,
    {
      next: { revalidate: 3600 },
    }
  );

  const data = await res.json();

  return data.success ? data.data : [];
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
   const navLinks = await getNavbar();

  return (
    <>
      <Header navLinks={navLinks}/>
      {children}
      <Footer navLinks={navLinks}/>
    </>
  );
}