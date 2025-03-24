import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center not-found h-dvh text-black">
      <div className="flex text-[32px] mb-3">
        <h2 className="border-r-2 border-r-black pr-3 mr-3 ">404</h2>
        <h2>Not Found</h2>
      </div>

      <Link className=" text-[32px]" href="/">
        Вернуться на главную
      </Link>
    </div>
  );
}
