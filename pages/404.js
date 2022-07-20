// 404.js
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="h-[50vh] text-center">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
