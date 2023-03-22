import React from "react";
import { News } from "../Components/news";
import { Fade } from "react-reveal";

export const RecentNews = () => {
    const data = [
        {
            id: 1,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "2023-03-08",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 2,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "2023-03-08",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "2/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 3,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "2023-03-08",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "3/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 4,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "2023-03-08",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "4/dont-destroy-greenery-and-dont-spoil-scenery",
        },
    ];

    return (
        <div className="py-5">
            <Fade top>
                <div className="flex flex-row px-6 lg:px-16">
                    <h2 className="w-full lg:w-2/12 text-2xl text-left text-black font-bold">
                        Recent News
                    </h2>
                    <div className="hidden md:block w-10/12 border-t border-gray-200 mt-4"></div>
                </div>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-6 sm:gap-6 px-6 lg:px-16 py-10">
                {data.map((item, i) => {
                    return <News key={i} data={item} />;
                })}
            </div>
        </div>
    );
};
