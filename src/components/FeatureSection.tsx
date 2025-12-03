export default function FeatureSection() {
  return (
    <div className="bg-black justify-center py-24  sm:py-32">
      <div className="title-contianer max-w-7xl  px-6 lg:px-8">
        <div className="max-w-2xl flex justify-items-start flex-row lg:text-center flex-wrap mx-0">
          <h2 className="text-[3.4rem] font-family-primary text-white font-bold">
            FEATURED PROJECTS
          </h2>

          <p className="mt-6 flex  text-left font-family-third font-normal text-lg inset-0 text-white">
            Here are some of the selected projects that showcase my passion for
            <br />
            front-end development.
          </p>
        </div>
      </div>
      <div className="feature-container grid grid-cols-2  gap-28 text-white">
        <div className="image-container py-36 px-36 my-5 bg-neutral-600 object-fit object-fit-cover rounded-3xl ">
          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 hover-gallery rounded-2xl">
              <img
                src="/public/assets/projects/E-commerce-Preview.jpg"
                alt="3D card"
              />
              <img src="/assets/E-commerce/active-states-basket-empty.jpg" />
              <img
                src="/public/assets/E-commerce/Screenshot 2025-12-03 at 12.40.59.jpg"
                className="object-fit"
              />
              <img src="/assets/E-commerce/active-states-basket-filled.jpg" />
              <img src="/assets/E-commerce/active-states-lightbox.jpg" />
              <img src="/assets/E-commerce/desktop-design-lightbox.jpg" />
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

            <div>
              <button
                type="button"
                data-link="https://kumkani-finance-demo2.netlify.app"
              >
                LIVE DEMO
              </button>
              <button
                type="button"
                data-link="https://github.com/KabeloMaps/Kumkani-Finance?tab=readme-ov-file"
              >
                SEE ON GITHUB
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
