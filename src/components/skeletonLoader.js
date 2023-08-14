import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoader = () => {
    return (
        <div>
            <Skeleton height={"150px"} />
            <div className="my-1"></div>
            <Skeleton width={"120px"} />
            <div className="my-1"></div>
            <Skeleton count={2} />
        </div>
    );
};
