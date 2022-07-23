import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { v4 as uuidv4 } from "uuid";

const RowSkeletonLoader = () => {
  const fakeArray = Array(8).fill(8);
  return (
    <section className='container mx-auto'>
      <Skeleton width={120} height={15} />
      <div className='flex w-full gap-3 text-white overflow-x-scroll scrollbar-hide'>
        {fakeArray.map((_) => (
          <Skeleton key={uuidv4()} width={240} height={140} />
        ))}
      </div>
    </section>
  );
};

export default RowSkeletonLoader;
