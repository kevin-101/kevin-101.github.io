import Image from "next/image";

function Intro() {
  return (
    <section
      id="intro"
      className="flex flex-col items-center text-center pb-20"
    >
      <div className="flex flex-col relative md:flex-row items-center justify-center">
        <div data-scroll data-scroll-speed=".3" className="flex flex-col">
          <h1 className="text-5xl mb-8">Hello, I'm Kevin</h1>
          <p className="text-3xl md:px-20">
            A budding web developer navigating the vast world of Web
            Development.
          </p>
        </div>
        {/* <pre className="text-green-500 animate-float will-change-transform whitespace-pre">
          {textArt}
        </pre> */}
        <div
          data-scroll
          data-scroll-speed=".1"
          className={`-z-10 absolute left-[50%] -ml-[150px] top-[50%] -mt-[150px]`}
        >
          <Image
            src="/react.svg"
            width="300"
            height="300"
            className="animate-float will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
