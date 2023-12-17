import Link from "next/link";

function Navbar() {
  return (
    <header className="z-50 w-full fixed top-0 py-7 px-8 md:px-10 lg:px-20 text-2xl bg-[rgba(255, 255, 255, .1)] backdrop-blur border-b-2">
      <div className="flex justify-between items-center">
        <div className="">
          <Link href="/">Kevin K</Link>
        </div>
        <div className="">
          <ul className="flex justify-between">
            <li className="mx-8">
              <Link href="#about">About</Link>
            </li>
            <li className="">
              <Link href="#projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
