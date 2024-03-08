export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-auth h-screen w-full bg-cover bg-center">
      <div className="flex h-full w-full flex-col items-center justify-center p-6 md:p-12 lg:flex-row-reverse lg:justify-normal lg:p-24">
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          {children}
        </div>
      </div>
    </main>
  );
}
