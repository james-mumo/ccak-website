import React, { useState, useEffect } from "react";
import { News } from "../components/news";
import { Fade } from "react-reveal";
import { searchPosts } from "../api/api-calls";
import { SkeletonLoader } from "../components/skeletonLoader";

export const RecentNews = ({ limit = 4 }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, updateData] = useState([]);

    const searchData = {
        keyword: "",
        table: "posts",
        category: "news",
        technology: "",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: limit,
        ip_address: "",
        created_by: 0,
    };

    useEffect(() => {
        searchPosts(searchData, updateData)
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // eslint-disable-line

    return (
        <div className="py-5">
            <Fade top>
                <div className="flex flex-row px-6 lg:px-16">
                    <h2 className="w-full lg:w-3/12 text-2xl text-left text-black font-bold">
                        Recent News
                    </h2>
                    <div className="hidden md:block w-9/12 border-t border-gray-200 mt-4"></div>
                </div>
            </Fade>

            {loading && (
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${limit} 2xl:grid-cols-5 gap-y-6 sm:gap-6 px-6 lg:px-16 py-10`}
                >
                    {[1, 2, 3, 4].map((_, i) => {
                        return <SkeletonLoader key={i} type="news" />;
                    })}
                </div>
            )}

            {!loading && data.length < 1 && (
                <div className="flex justify-center mt-14">
                    <p className="text-xl text-gray-500">
                        No news posts at the moment
                    </p>
                </div>
            )}

            {error && !loading && (
                <div className="flex justify-center mt-14">
                    <p className="text-xl text-gray-500">
                        Connection error, please try refreshing your page.
                    </p>
                </div>
            )}

            {!loading && data.length > 0 && (
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${limit} 2xl:grid-cols-5 gap-y-6 sm:gap-6 px-6 lg:px-16 py-10`}
                >
                    {data.map((item, i) => {
                        return <News key={i} data={item} />;
                    })}
                </div>
            )}
        </div>
    );
};
