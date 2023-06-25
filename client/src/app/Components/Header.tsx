import Link from "next/link";
import SignInButton from "./SignInButton";

export default function Header() {
  return (
    <>
      <header>
        <section className="flex justify-end m-2">
          <Link
            className="mr-auto p-2 border rounded-full hover:text-cyan-500 hover:border-cyan-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="mx-4 p-2 border rounded-full hover:text-cyan-500 hover:border-cyan-500"
            href="rules"
          >
            Rules
          </Link>
          <div className="border rounded-full p-2 hover:text-cyan-500 hover:border-cyan-500">
            <SignInButton />
          </div>
        </section>
      </header>
    </>
  );
}

export {Header};
