function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-md flex-col items-center justify-center bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </main>
  );
}
export default AuthLayout;
