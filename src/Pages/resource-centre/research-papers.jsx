import { Slide, Fade } from "react-reveal";
import { Research } from "../../Components/research";

const data = [
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
];

export const ResearchPapersPage = () => {
    return (
        <div>
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        Research Papers
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Welcome to our research papers page! This is the place
                        where you can find a collection of our latest and most
                        innovative research in a variety of fields.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 py-10">
                        {data.map((item) => {
                            return <Research data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
