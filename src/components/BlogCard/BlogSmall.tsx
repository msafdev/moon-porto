// Assets and Libraries
import "./BlogCard.css";
import moment from "moment";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  bio: string;
  avatarUrl: string;
  createdAt: string;
  slug: string;
  thumbnailUrl: string;
  categoryName: string;
  categorySlug: string;
  contentHtml: string;
}

function BlogSmall(post: BlogCardProps) {
  return (
      <Link to={`/blog/${post.slug}`} className="w-full h-fit md:h-[200px] lg:h-[250px] xl:max-h-[158px] flex flex-row items-center justify-center gap-2 blog-small-card">
        <div className="h-full border-[1px] w-1/3 justify-center items-center hidden md:flex relative">
          <div className="w-full h-full absolute bg-[#fffdf7] blog-small-display bottom-0 flex items-center justify-center">
            <div className="h-full w-full flex items-center justify-center text-center">
              <p className="text-[#090909] font-medium hover:underline w-full cursor-pointer">
                Read more
              </p>
            </div>
          </div>
          <img
            src={post.thumbnailUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 w-full h-full p-1 flex-col flex justify-center md:justify-center">
          <div className="h-fit">
            <p className="text-[#fffdf7] opacity-80 font-normal cursor-default xl:text-[16px] lg:text-[16px] md:text-[16px] text-[18px]">
              {moment(post.createdAt).format("MMMM Do, YYYY")}
            </p>
            <h1 className="text-[#fffdf7] leading-tight font-medium cursor-pointer xl:text-[20px] md:text-[24px] text-[18px]">
              {post.title}
            </h1>
            <p className="text-[#fffdf7] opacity-80 font-normal cursor-default xl:text-[16px] md:text-[22px] text-[18px]">
              {post.excerpt}
            </p>
          </div>
          {/* Profile */}
        </div>
      </Link>
  );
}
export default BlogSmall;
