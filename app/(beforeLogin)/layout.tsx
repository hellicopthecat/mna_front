export default function beforeLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center min-h-dvh">
      <div className="flex flex-col p-10 gap-3 bg-slate-100 border-2 rounded-md shadow-lg">
        <div className="flex flex-col gap-2 mb-2 font-bold">
          <h2 className="text-3xl">안녕하세요.</h2>
          <h3 className="text-xl ">환영합니다.</h3>
        </div>
        {children}
      </div>
    </main>
  );
}
