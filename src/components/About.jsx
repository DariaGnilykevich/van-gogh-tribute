import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function About() {
  return (
    <section id="about">
      <div className="bg-[#C1AB7Dff] h-screen w-screen">
        <SectionHeading heading="ABOUT" />
        <div className="flex flex-row items-center justify-evenly">
          <img
            src="../assets/Vincent's-life.jpg"
            className="rounded-lg w-auto h-96 "
            alt="Vincent's Life"
          />
          <div className="h-auto w-2/5 text-right">
            <h3 className="text-5xl mb-6">
              Vincent's Life, <br />
              1853-1890
            </h3>
            <p className="text-2xl">
              Vincent Van Gogh decided to become an artist at the age of 27.
              That decision would change his life and art history
              <span className="text-black"> forever</span>.
            </p>
            <a
              href="https://www.vangoghmuseum.nl/en/art-and-stories/vincents-life-1853-1890/young-vincent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="Read Vincent's biography" styles="mt-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
