import Link from "next/link";

function Navbar() {
  return (
    <header className="my-10 mx-8 md:mx-10 lg:mx-20 text-2xl bg-[rgba(255, 255, 255, .1)] backdrop-blur">
      <div className="flex justify-between items-center ">
        <div className="">
          <Link href="/">Kevin K</Link>
        </div>
        <div className="">
          <ul className="flex justify-between">
            <li className="mx-8">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="#about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
