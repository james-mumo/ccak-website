import { Gallery } from "../Components/Gallery";
import { MediaCentreSideBar } from "../Containers/mediaCentreSideBar";
import { RecentNews } from "../Containers/recentNews";
import { Slide } from "react-reveal";

export const PhotoGalleryPage = () => {
    const data = [
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
    ];

    return (
        <div>
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        Photo Gallery
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Welcome to our company's gallery content page, where you
                        can browse through a collection of visual content
                        showcasing our events, services, and company culture.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                    {data.map((item) => {
                        return <Gallery data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="press release" />
                </div>
            </div>
            <section>
                <RecentNews />
            </section>
        </div>
    );
};
