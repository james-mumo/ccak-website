import { Slide } from "react-reveal";
import { Research } from "../../components/research";

const data = [
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "1/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "2/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "3/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "4/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "5/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "6/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        excerpt:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "7/analysis-of-the-implications-of-the-value-added-tax-on-clean-cooking-in-kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
];

export const NewslettersPage = () => {
    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Newsletters</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Join us as we highlight success stories, share
                        innovative technologies, showcase policy developments,
                        and shed light on the importance of clean cooking for
                        sustainable development.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                        {data.map((item, i) => {
                            return <Research key={i} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
