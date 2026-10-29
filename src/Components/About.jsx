import Seo from "./Seo";
import { PAGE_SEO } from "../data/site";
import profileImage from "../assets/heroPhotonew_photo.webp";

const About = () => {
  return (
    <>
      <Seo page={PAGE_SEO.about} />
      <main className="relative py-16 bg-transparent text-gray-200">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-10 text-center">
            <p className="eyebrow">About Me</p>
            <h1 className="mt-4 text-4xl font-extrabold text-white">
              Mehedi Hasan
            </h1>
            <p className="mt-3 text-lg text-blue-300">
              Frontend-focused Software Engineer
            </p>
          </header>
          <div className="flex flex-col items-center gap-10 rounded-3xl border border-gray-800 bg-gray-900/80 p-8 shadow-2xl md:flex-row md:p-14">
            <img
              src={profileImage}
              alt="Portrait of Mehedi Hasan"
              width={896}
              height={1184}
              className="h-40 w-40 flex-shrink-0 rounded-full border-4 border-blue-600 object-contain shadow-lg md:h-56 md:w-56"
            />
            <div className="flex-1 space-y-7">
              <section>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  What does Mehedi Hasan do?
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  Mehedi Hasan is a software engineer who builds modern,
                  responsive web applications. His portfolio reflects both
                  frontend and full-stack work, including React interfaces,
                  API-connected products, and projects designed to work across
                  desktop and mobile devices.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Which technologies does Mehedi Hasan use?
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  Mehedi's listed technologies include JavaScript, React,
                  Python, Django, and PostgreSQL. His project work also shows
                  experience with Tailwind CSS and REST APIs. These tools appear
                  in his portfolio projects and describe the technologies he
                  uses to build web applications.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  What kind of projects has he built?
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  Mehedi Hasan's portfolio includes an e-commerce platform, a
                  news platform, a hotel-booking frontend, and SyncMe, a shared
                  clipboard project. The work spans product listings,
                  authentication, responsive interfaces, API integration, and
                  peer-to-peer device synchronization.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Where does Mehedi Hasan study?
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  Mehedi Hasan is studying for a Diploma in Information
                  Technology at the University of Dhaka in Bangladesh. Alongside
                  his studies, he builds web applications, solves algorithmic
                  and coding challenges, and continues learning about software
                  development.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default About;
