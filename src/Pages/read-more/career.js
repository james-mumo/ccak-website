import { Fade } from "react-reveal";
import { ReadMoreHeader } from "../../Components/readMoreHeader";
import { SubFooter } from "../../Containers/subFooter";
import { Career } from "../../Components/career";

const data = {
    id: 1,
    title: "Programmes Manager",
    excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
                Diam ut venenatis tellus in metus vulputate eu scelerisque.
                Donec pretium vulputate sapien nec sagittis aliquam malesuada
                bibendum. Ac tincidunt vitae semper quis lectus nulla. Nunc sed
                blandit libero volutpat sed. Congue mauris rhoncus aenean vel
                elit scelerisque mauris pellentesque. Aenean et tortor at risus
                viverra adipiscing at in tellus. Enim nec dui nunc mattis enim
                ut tellus elementum. Imperdiet nulla malesuada pellentesque elit
                eget. Et sollicitudin ac orci phasellus egestas tellus rutrum.
                Nec nam aliquam sem et tortor consequat id porta.
            </p>
            <br />

            <p>
                Nibh mauris cursus mattis molestie a iaculis. Adipiscing elit ut
                aliquam purus sit. Nulla porttitor massa id neque aliquam
                vestibulum. Elit duis tristique sollicitudin nibh sit. Nisl nunc
                mi ipsum faucibus. Quis vel eros donec ac odio tempor. Gravida
                in fermentum et sollicitudin. Aliquet porttitor lacus luctus
                accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non
                enim praesent elementum facilisis leo. Amet cursus sit amet
                dictum.
            </p>
        </div>
    ),
    category: "careers",
    published: "2023-04-01",
};

const recentData = [
    {
        id: 1,
        category: "careers",
        title: "Programmes Manager",
        excerpt:
            "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
        url: "1/programmes-manager",
    },
    {
        id: 2,
        category: "careers",
        title: "Programmes Manager",
        excerpt:
            "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
        url: "2/programmes-manager",
    },
    {
        id: 3,
        category: "careers",
        title: "Programmes Manager",
        excerpt:
            "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
        url: "3/programmes-manager",
    },
    {
        id: 4,
        category: "careers",
        title: "Programmes Manager",
        excerpt:
            "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
        url: "4/programmes-manager",
    },
];

export const CarrerReadMore = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <ReadMoreHeader data={data} />
            <section className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="md:w-9/12 py-10">
                    <p>{data.content}</p>
                </div>
                <div className="md:w-4/12 pt-10 lg:px-10">
                    <div className="py-3">
                        <Fade top>
                            <h2 className="w-full text-xl text-black font-bold py-3">
                                Recent Careers
                            </h2>
                        </Fade>
                        <div className="grid grid-cols-1 gap-y-6">
                            {recentData.map((item) => {
                                return <Career data={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10">
                <SubFooter />
            </section>
        </div>
    );
};
