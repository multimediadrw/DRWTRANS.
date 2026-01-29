export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Full-width layout untuk desktop admin - TIDAK menggunakan mobile container
    <div className="min-h-screen w-full bg-gray-50">
      {children}
    </div>
  );
}
