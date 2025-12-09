export default function About() {
  return (
    <div>
      <div className="text-white pb-10  grid grid-cols-2">
        <div className="">
          <h3 className=" text-[2.5rem] font-bold font-family-third ">
            ABOUT ME
          </h3>
        </div>
        <div className=" about-description">
          <h1 className="heading5 text-[2rem] pb-4 font-semibold font-family-primary">
            I enjoy taking designs and turning them into clean, maintainable
            interfaces. I work mainly with TypeScript, React, HTML, CSS, and
            Tailwind, and I’ve also spent time building projects with C# on the
            backend.
          </h1>
          <p className=" text-[1.125rem] font-family-third font-light">
            I completed a BCom in Information Systems at UCT, which taught me
            how to think about systems instead of just syntax. Outside of code,
            I play chess and piano — both of which sharpen my patience,
            calculation, and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}
