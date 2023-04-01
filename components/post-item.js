import Link from "next/link";

const AllPostDetails = ({ post }) => {
  return (
    <div >
      <Link href={`/posts/${post.id}`} className="text-xl font-medium  m-3"> {post.id}-{post.title}</Link>
    
    </div>
  );
};

export default AllPostDetails;


