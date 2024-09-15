import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-black text-right p-10">
        <div className="flex flex-wrap justify-between">
          <img
            src={logo}
            className="w-auto h-16 p-4 bg-blue-200 inline-block"
          />

          <a
            href="https://frenchrivieraguide.com/infos/paintings/vincent-van-gogh-quotes.html"
            target="_blank"
          >
            <h3 className="text-2xl text-right bg-gradient-to-r from-orange-500 to-emerald-300 inline-block text-transparent bg-clip-text hover:text-white">
              “Art is to console those who are broken by life.” <br />― Vincent
              van Gogh
            </h3>
          </a>
        </div>
        <p className="font-sans text-center text-lg">
          &copy; Vincent. <span className="px-2">| </span>Van Gogh Tribute Page
        </p>
      </div>
    </>
  );
}
