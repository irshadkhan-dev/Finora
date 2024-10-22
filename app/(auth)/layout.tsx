import AuthDisplayImage from "@/components/auth/AuthDisplayImage";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-full">
      <div className="flex flex-col max-w-[420px] h-full w-full py-10  max-sm:px-8 mx-auto items-center justify-center">
        {children}
      </div>

      <div className="max-lg:hidden flex justify-end items-center top-0 sticky bg-sky-100">
        <AuthDisplayImage />
      </div>
    </main>
  );
}
