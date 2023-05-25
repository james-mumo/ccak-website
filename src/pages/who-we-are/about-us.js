import { useState } from "react";
import { Slide, Fade } from "react-reveal";
import { LogoCarousel } from "../../components/carousel";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import {
    UsersIcon,
    ScaleIcon,
    Squares2X2Icon,
    CubeTransparentIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { SubFooter } from "../../layouts/subFooter";
import { ModalYoutubeVideo } from "../../layouts/modalVideo";

const partners = [
    {
        name: "cca",
        link: "https://cleancooking.org/",
        image: "/logos/cca.png",
    },
    {
        name: "hivos",
        link: "https://hivos.org/",
        image: "/logos/hivos.jpg",
    },
    {
        name: "giz",
        link: "https://www.giz.de/de/html/index.html",
        image: "/logos/giz.png",
    },
    {
        name: "practical action",
        link: "https://practicalaction.org/",
        image: "/logos/practical-action.png",
    },
    {
        name: "un habitait",
        link: "https://unhabitat.org/",
        image: "/logos/un-habitat.png",
    },
    {
        name: "snv",
        link: "https://snv.org/",
        image: "/logos/snv.png",
    },
];

const affiliations = [
    {
        name: "aku",
        link: "https://hospitals.aku.edu/nairobi/pages/default.aspx",
        image: "/logos/aku.gif",
    },
    {
        name: "nema",
        link: "https://www.nema.go.ke/",
        image: "/logos/nema.png",
    },
    {
        name: "epra",
        link: "https://www.epra.go.ke/",
        image: "/logos/epra.jpg",
    },
    {
        name: "kebs",
        link: "https://www.kebs.org/",
        image: "/logos/kebs.png",
    },
    {
        name: "kefri",
        link: "https://www.kefri.org/",
        image: "/logos/kefri.png",
    },
    {
        name: "kirdi",
        link: "https://www.kirdi.go.ke/",
        image: "/logos/kirdi.jpg",
    },
];

const pillars = [
    {
        icon: <ScaleIcon className="w-8 text-[#329E49]" />,
        name: "representation and advocacy",
        description:
            "This pillar focuses on representing the interests of the clean cooking sector at various levels, including engaging with governments, policymakers, and other stakeholders to advocate for supportive policies and regulations. It involves raising awareness about the importance of clean cooking and highlighting the benefits it brings to health, environment, and livelihoods.",
    },
    {
        icon: <UsersIcon className="w-8 text-[#329E49]" />,
        name: "membership and member oriented services",
        description:
            "This pillar emphasizes building and maintaining a strong membership base within the clean cooking sector. It involves offering services and support to members, such as networking opportunities, capacity building, and access to resources and information. The organization works to foster collaboration and provide value to its members.",
    },
    {
        icon: <CubeTransparentIcon className="w-8 text-[#329E49]" />,
        name: "standards and technical issues",
        description:
            "This pillar revolves around establishing and promoting standards for clean cooking technologies, fuels, and related practices. It includes developing guidelines and technical specifications to ensure the quality, safety, and performance of clean cooking solutions. This pillar also involves addressing technical challenges and facilitating innovation within the sector.",
    },
    {
        icon: <Squares2X2Icon className="w-8 text-[#329E49]" />,
        name: "knowledge and information management",
        description:
            "This pillar focuses on gathering, organizing, and disseminating knowledge and information related to clean cooking. It involves conducting research, collecting data, and sharing best practices, lessons learned, and evidence-based insights. The organization strives to be a central hub for knowledge exchange and learning within the clean cooking sector.",
    },
    {
        icon: <WrenchScrewdriverIcon className="w-8 text-[#329E49]" />,
        name: "institution strengthening and resourcing",
        description:
            "This pillar aims to strengthen the capacity and sustainability of the organization itself. It involves building institutional capabilities, establishing governance structures, and enhancing financial resources. This pillar focuses on ensuring the organization's long-term viability and effectiveness in achieving its mission and goals.",
    },
];

export const AboutUsPage = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <ModalYoutubeVideo show={show} setShow={setShow} />
            <section className="flex flex-col md:flex-row w-full pt-6 md:pb-40 md:pt-20 px-6 md:px-16">
                <div className="hidden w-full lg:block md:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 my-1"></div>
                    </Fade>
                </div>
                <div className="w-full lg:w-6/12 md:pr-5">
                    <Fade>
                        <h6 className="text-black text-xs font-bold">
                            ABOUT US
                        </h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl lg:text-5xl my-8 font-bold">
                            The Clean Cooking Association of Kenya (CCAK)
                        </h2>
                    </Slide>
                </div>
                <div className="w-full mt-5 md:mt-0 lg:w-5/12">
                    <Slide bottom>
                        <h5 className="font-semibold pb-5">
                            The Clean Cooking Association of Kenya: Working
                            Towards a Healthier Nation.
                        </h5>
                    </Slide>

                    <Slide bottom>
                        <p className="my-5 text-gray-600">
                            The Clean Cooking Association of Kenya is a sector
                            association with a vision to see universal access
                            and adoption of clean cooking solutions and
                            practices in Kenya, through a sustainable market
                            environment.
                            <br />
                            <br />
                            In addition to promoting clean cooking solutions,
                            the association's focus on creating a sustainable
                            market environment is also important.
                        </p>
                    </Slide>
                </div>
            </section>
            <section className="p-6 md:p-16 bg-[#EFF7F2]">
                <Slide bottom>
                    <div
                        style={{
                            backgroundImage: `url(${
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "about_us_section_2_video_bg.jpg?updatedAt=1684939639742"
                            })`,
                        }}
                        className="md:-mt-40 mx-auto flex justify-center w-10/12 p-40 bg-cover bg-center bg-no-repeat rounded-lg group cursor-pointer"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        <PlayCircleIcon className="w-12 text-white group-hover:scale-[1.15] group-hover:text-[#ED7423] duration-300 ease-in-out" />
                    </div>
                </Slide>
                <div
                    id="our-mission"
                    className="flex flex-col md:flex-row justify-evenly my-6"
                >
                    <div id="our-vision" className="lg:w-4/12">
                        <Slide bottom>
                            <h6 className="text-black text-sm font-semibold my-5">
                                OUR MISSION
                            </h6>
                        </Slide>

                        <Slide bottom>
                            <h5 className="font-semibold pb-5 text-2xl">
                                Championing Sustainable Solutions for Universal
                                Adoption
                            </h5>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                The Clean Cooking Association of Kenya is the
                                sector champion influencing a suitable market
                                environment and capacity development of its
                                members and other stakeholders, enabling them to
                                cause universal adoption of clean and efficient
                                cooking solutions in Kenya.
                            </p>
                        </Slide>
                    </div>
                    <div className="lg:w-4/12">
                        <Slide bottom>
                            <h6 className="text-black text-sm font-semibold my-5">
                                OUR VISION
                            </h6>
                        </Slide>

                        <Slide bottom>
                            <h5 className="font-semibold pb-5 text-2xl">
                                Building a Sustainable Future with Clean Cooking
                                Solutions
                            </h5>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                Universal access and adoption of clean and
                                efficient cooking solutions and practices in
                                Kenya, through a sustainable market environment.
                            </p>
                        </Slide>
                    </div>
                </div>
                <div id="our-partners" className="py-3">
                    <Fade>
                        <h6 className="text-black text-sm font-semibold my-5">
                            OUR PARTNERS AND DONORS
                        </h6>
                    </Fade>
                    <LogoCarousel logos={partners} />
                </div>
                <div className="py-3">
                    <Fade>
                        <h6 className="text-black text-sm font-semibold my-5">
                            OUR AFFILIATIONS
                        </h6>
                    </Fade>
                    <LogoCarousel logos={affiliations} />
                </div>
            </section>
            <section className="p-6 lg:p-16">
                <Slide bottom>
                    <h2 className="font-semibold text-4xl pb-10 flex justify-center">
                        About Us
                    </h2>
                </Slide>
                <div className="flex flex-col lg:flex-row  space-y-12 lg:space-y-0 lg:space-x-12">
                    <div className="lg:w-6/12">
                        <p className="text-gray-600">
                            <Slide bottom>
                                Clean Cooking Association of Kenya (CCAK), is a
                                private, not for profit, business membership
                                organization representing stakeholders in the
                                clean cooking sector. The members are mainly
                                drawn from the private sector as well as
                                representatives from government, academia,
                                development partners, Non-Governmental
                                Organizations among others.
                            </Slide>
                        </p>
                    </div>
                    <div className="lg:w-6/12">
                        <Slide bottom>
                            <p className="text-gray-600">
                                The main objective of CCAK is to advocate for an
                                enabling environment at both national and county
                                levels to catalyze the growth of the clean
                                cooking sector and promote adoption of clean
                                cooking technologies, capacity building of the
                                sector and sector coordination. The association
                                has effective frameworks of engagement with
                                government and other stakeholders to coordinate
                                and advocate for the sector.
                            </p>
                        </Slide>
                    </div>
                </div>
            </section>
            <section className="p-6 lg:p-16">
                <div className="flex flex-col lg:flex-row text-white bg-black md:space-x-10 p-6 lg:p-16 rounded-lg">
                    <div className="lg:w-6/12">
                        <Slide bottom>
                            <h3 className="text-3xl md:text-4xl mb-10">
                                Why clean cooking is important
                            </h3>
                        </Slide>

                        <Slide bottom>
                            <p className="text-gray-400">
                                Clean cooking is essential for a variety of
                                reasons. Traditional cooking methods, such as
                                burning wood or charcoal, release harmful
                                pollutants that can cause respiratory and other
                                health problems.
                            </p>
                        </Slide>
                        <br />
                        <Slide bottom>
                            <p className="text-gray-400">
                                They reduce or eliminate these pollutants,
                                improving indoor air quality and promoting
                                better health.
                            </p>
                        </Slide>
                        <br />
                        <Slide bottom>
                            <p className="text-gray-400">
                                Additionally, traditional cooking methods
                                contribute to deforestation and other
                                environmental problems. Clean cooking solutions
                                use renewable energy sources, produce fewer
                                emissions, and reduce reliance on biomass fuel.
                            </p>
                        </Slide>
                    </div>
                    <div className="mt-10 sm:mt-0 lg:w-6/12 lg:pt-10">
                        <Fade>
                            <img
                                className="rounded-lg"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    "about_us_section_6_clean_cooking_importance.jpg"
                                }
                                alt="Importance of clean cooking"
                            />
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="p-6 lg:px-8">
                <Slide bottom>
                    <h2 className="font-semibold text-3xl md:text-4xl flex justify-center">
                        Our Key Strategic Pillars
                    </h2>
                </Slide>
                <div className="flex flex-row md:px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-12 lg:p-10">
                        {pillars.map((pillar, i) => {
                            return (
                                <Slide bottom key={i}>
                                    <div className="space-y-2">
                                        {pillar.icon}
                                        <h6 className="font-semibold capitalize text-[#329E49]">
                                            {pillar.name}
                                        </h6>
                                        <p className="text-gray-600">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </Slide>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section>
                <SubFooter />
            </section>
        </div>
    );
};
