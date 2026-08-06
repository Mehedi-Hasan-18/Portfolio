import { ArrowUpRight, Youtube } from "lucide-react";

const videos = [
  {
    id: "8L_TqjwJ85M",
    title: "The Pros and Cons of Studying in Malaysia",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    id: "9cZEJtiXujI",
    title: "Malaysia Student Visa 2026 — Complete Guide",
    className: "md:col-span-5",
  },
  {
    id: "D4VrvMYdOCU",
    title: "Living Cost in Malaysia",
    className: "md:col-span-5",
  },
  {
    id: "EU6mn8FzNx0",
    title: "Two Major Updates About German Student Visa",
    className: "md:col-span-5",
  },
  {
    id: "JI1xVT4wATw",
    title: "Study in China from Bangladesh — Complete Guide",
    className: "md:col-span-7",
  },
];

const VideoCard = ({ video, featured = false }) => (
  <article
    className={`group relative min-w-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-gray-900/80 shadow-xl shadow-black/20 ${video.className}`}
  >
    <div className="relative aspect-video h-full min-h-[190px] w-full overflow-hidden bg-gray-950 lg:min-h-0 lg:aspect-auto">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
        title={video.title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-4 pb-4 pt-12 md:px-5">
      <p className={`${featured ? "md:text-lg" : "text-sm"} line-clamp-2 font-semibold leading-snug text-white`}>
        {video.title}
      </p>
    </div>
  </article>
);

const YouTubeShowcase = ({ channelUrl }) => {
  return (
    <section
      id="youtube"
      className="relative flex overflow-hidden py-16 lg:h-[calc(100svh-4rem)] lg:min-h-[560px] lg:items-center lg:py-6"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:h-full">
        <div className="grid gap-10 lg:h-full lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="lg:pb-2">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
              <Youtube className="h-4 w-4" />
              On YouTube
            </div>
            <h2 className="max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Beyond code.
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real guidance.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400 md:text-base">
              Honest videos about studying abroad, student visas, living costs,
              and the decisions that shape an international student journey.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-gray-300 sm:max-w-md">
              {["Student stories", "Visa updates", "Living costs", "Study guides"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-purple-500"
            >
              See all videos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-fr lg:h-full lg:max-h-[680px] lg:grid-rows-3">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} featured={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeShowcase;
