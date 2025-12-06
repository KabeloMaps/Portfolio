export default function About() {
  return (
    <div className="text-white grid grid-cols-2">
      <div className="">
        <h3 className="text-[4.5rem] font-family-primary">ABOUT ME</h3>
      </div>
      <div className="about-description">
        <h1 className="heading5">
          I am a software developer based in Johannesburg, passionate about
          turning designs into code and solving problems with code!.
        </h1>
        <p>
          A passionate and detail-oriented Frontend Developer based in
          Johannesburg and Cape Town. With hands-on experience in JavaScript,
          React.js, HTML, CSS, and C#. I enjoy crafting interactive and
          user-friendly web interfaces. Completed my BCom in Information Systems
          at the University of Cape Town, I bring a strong foundation in Web
          development, UI/UX principles, version control, and agile
          methodologies. Beyond coding, I’m an avid chess player and piano
          player.
        </p>

        <p className="more-about-me">More about me</p>
      </div>
    </div>
  );
}
