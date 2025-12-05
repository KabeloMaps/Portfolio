export default function FeatureSection() {
  return (
    <div className="bg-black justify-center py-24  sm:py-32">
      <div className="title-contianer max-w-7xl cursor-default  px-6 lg:px-8">
        <div className="max-w-2xl flex justify-items-start flex-row lg:text-center flex-wrap mx-0">
          <h2 className="text-[3.4rem] font-family-primary text-white font-bold">
            FEATURED PROJECTS
          </h2>

          <p className="mt-6 mb-16 flex  text-left font-family-third font-normal text-lg inset-0 text-white">
            Here are some of the selected projects that showcase my passion for
            <br />
            front-end development.
          </p>
        </div>
      </div>
      <div className="feature-container grid grid-cols-2  gap-28 mx-0  text-white">
        {/* E-commerce Product Page         */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                src="/assets/projects/E-commerce-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Developed a responsive landing page for lead generation using
              HTML, CSS, and JavaScript. This project tests key front-end skills
              including menu toggling, event handling, and layout design. A
              practical challenge that mirrors common UI patterns on modern
              websites, ideal for strengthening both structural and interactive
              skills.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp;
                CSS&nbsp;&nbsp;|&nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp;|&nbsp; API
                Integration
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>
        {/* End of E-commerce Product Page */}

        {/* Huddle landing Page         */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Huddle-Landing-Page-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              This challenge is an excellent opportunity to practice building a
              clean and responsive landing page layout. You'll focus on
              structuring a two-column design that includes both textual content
              and imagery, which is a common and practical layout in modern web
              design. The project emphasizes the fundamentals of HTML and CSS,
              including flexbox or grid for layout control, semantic markup for
              accessibility, and responsive design techniques to ensure the page
              looks good across various devices.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp; SASS&nbsp;&nbsp;
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>

        {/* End of Huddle landing Page */}

        {/* Be You Holistic Wellness */}

        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Be You Holistic Wellness.png"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Designed and developed a responsive WordPress website for a
              wellness and skincare clinic, featuring a blog, integrated booking
              system, and secure client data management, as part of team
              project. Delivered a user-friendly backend for staff, alongside
              custom-coded plugins for bookings, inventory tracking, and
              extended functionality—ensuring seamless operations and a
              professional online presence.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2024</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Full Stack Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                Wordpress&nbsp;&nbsp; |&nbsp;&nbsp; PHP&nbsp;&nbsp;
                |&nbsp;&nbsp; PhpMyAdmin{" "}
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>

        {/* End of Be You Holistic Wellness */}

        {/* FAQ Accordion */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/FAQ-Accordion-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Effectively implemented an interactive FAQ accordion with smooth
              toggle animations, highlighting a strong grasp of core HTML, CSS,
              and JavaScript fundamentals through a widely-used front-end UI
              pattern.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2026</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp; CSS&nbsp;&nbsp; |&nbsp;&nbsp;
                JAVASCRIPT
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>

        {/* End of FAQ Accordion */}

        {/* Product preview card */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Product preview card.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Successfully built a responsive product preview card using only
              HTML and CSS, demonstrating foundational layout skills and a
              mobile-first design approach—ideal for honing core web development
              techniques.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp; SASS
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>

        {/* End of Product preview card */}

        {/* Contoso University Application */}

        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Contoso University Application.png"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Developed a web-based university management system using ASP.NET
              Core MVC and Entity Framework Core, focusing on controller-view
              architecture and relational data handling. This project
              demonstrates key backend concepts such as model inheritance, raw
              SQL integration, and dynamic LINQ usage—laying a solid foundation
              for scalable, data-driven application development.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2024</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Full-Stack Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                C#&nbsp;&nbsp;
                |&nbsp;&nbsp;HTML&nbsp;&nbsp;|&nbsp;&nbsp;CSS&nbsp;&nbsp;
                |&nbsp;&nbsp;JAVASCRIPT{" "}
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>

        {/* End of Contoso University Application */}

        {/* Social Links Profile */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Social-Profile-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Developed a clean and responsive social link-sharing profile using
              HTML and CSS. This project serves as a great introduction to
              building simple, personal web interfaces. It offers a space to
              showcase and personalize links to various social platforms. A
              practical and reusable component ideal for enhancing your online
              presence or digital portfolio.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp; Tailwind
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>
        {/* End of Social Links Profile */}

        {/* Blog Preview */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Blog-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              The Blog Preview Card project centers on building a responsive and
              accessible blog card using semantic HTML and modern CSS
              techniques. Styled with Tailwind CSS, it follows a mobile-first
              approach to ensure optimal viewing across different screen sizes.
              The component incorporates clean HTML structure and interactive
              hover and focus states, making it both user-friendly and visually
              engaging. This project serves as a practical introduction to
              building content previews that are both elegant and functional.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp; Tailwind
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>
        {/* End of Blog Preview */}

        {/* QR Code Component */}

        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/QR-Code-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Built a clean and centered QR code card using HTML and CSS. This
              project is ideal for beginners looking to solidify their
              understanding of basic layout structure, element positioning, and
              visual hierarchy. A great entry point into front-end development,
              focusing on simplicity and precision in design.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp;Tailwind
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>
        {/* End of QR Code Component */}

        {/* Recipe Component */}
        <div className="image-container mx-7 py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img
                className=""
                src="/assets/projects/Recipe Page-Preview.jpg"
                alt="3D card"
              />
            </figure>

            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="description-container content-center ">
          <article>
            <h2 className="font-family-third font-normal text-[1.7rem] pb-3"></h2>
            <p
              className="font-family-third text-[1rem] font-light
            "
            >
              Crafted a structured and visually balanced recipe page using
              semantic HTML and modern CSS. This project emphasizes
              accessibility and meaningful markup, encouraging thoughtful
              selection of HTML elements to match content context. A valuable
              exercise in building clean, readable, and maintainable front-end
              code.
            </p>
            <h2 className="font-family-third font-semibold text-[0.89rem] pt-3.5 pb-3">
              PROJECT INFO
            </h2>
            <hr className="" />

            <div className="my-1 mb-3 flex">
              <p>Year</p>
              <p className="mx-auto mr-4">2025</p>
            </div>
            <hr />
            <div className="my-1 mb-3 flex">
              <p>Role</p>
              <p className="mx-auto mr-4">Front-end Developer</p>
            </div>

            <hr />
            <div className="my-1 mb-3 flex">
              <p>Technologies</p>
              <p className="mx-auto mr-4">
                HTML&nbsp;&nbsp; |&nbsp;&nbsp;Tailwind
              </p>
            </div>
            <hr />

            <div className="flex content-around justify-start  ">
              <button
                className=" bg-[hsl(240,100%,50%)] my-7 ml-0 py-3.5 px-11 rounded-[10rem] "
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>

              <button
                className="bg-[hsl(240,100%,50%)] my-7 ml-8  py-3.5 px-11 rounded-[10rem] "
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>

        {/* End of Recipe Component */}
      </div>
    </div>
  );
}
