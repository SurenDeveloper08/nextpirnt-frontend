import AdminLayout from "@/app/components/admin/layout/AdminLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
}