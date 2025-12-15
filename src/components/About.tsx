export default function About() {
  return (
    <section id="about">
      <div className="text-white pb-10 grid  lg:grid-cols-2">
        <div className="px-4 pt-20 ">
          <h3 className=" text-[2.5rem] font-bold font-family-third pb-8">
            ABOUT ME
          </h3>
        </div>
        <div className=" about-description px-5">
          <h1 className="heading5 text-[1.45rem] pb-9 font-semibold font-family-third">
            I enjoy turning designs into clean, maintainable interfaces. I work
            mainly with TypeScript, React, HTML, CSS, and Tailwind, and I’ve
            also spent time building projects with C# on the backend.
          </h1>
          <p className=" text-[1.325rem] pb-4 font-family-secondary font-normal ">
            I completed a BCom in Information Systems at UCT, which taught me
            how to think about systems instead of just syntax. Outside of code,
            I play chess and piano — both of which sharpen my patience,
            calculation, and problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
