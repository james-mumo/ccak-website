import { SocialHubPost } from "../../components/navBar/socialHub/post";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";

const posts = [
    {
        id: 1,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "home_hero_section.jpg",
        comments: 12,
        likes: 24,
    },
    {
        id: 5,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "",
        comments: 11,
        likes: 120,
    },
];

export const SocialHubBookmarksPage = () => {
    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-8">
                <div className="md:w-3/12 py-10">
                    <div className="fixed md:w-3/12">
                        <SideMenu />
                    </div>
                </div>
                <div className="md:w-6/12 pt-10 lg:px-10">
                    <div className="space-y-6 mb-5">
                        {posts.map((post) => {
                            return <SocialHubPost data={post} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
