// Assets and Libraries
import "./BlogCard.css";
import moment from "moment";
import { PiReadCvLogo } from "react-icons/pi";
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

function BlogRegular(post: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="blog-regular-card flex flex-col w-full h-full bg-[#fff]">
        {/* Image */}
        <div className="w-full h-fit bg-[#fff] border-b-[1px] border-b-gray-300 cursor-pointer">
          <div className="bg-[#090909] p-3 w-fit absolute m-5 hover-button text-center flex flex-row items-center justify-center gap-2">
            Read more <PiReadCvLogo className="w-[20px] h-[20px]" />
          </div>
          <img
            src={post.thumbnailUrl}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col w-full h-full lg:py-4 py-2 px-4 gap-1">
          <p className="text-[#090909] opacity-80 lg:text-[16px] md:text-[14px] text-[14px] font-normal cursor-default">
            {moment(post.createdAt).format("MMMM Do, YYYY")}
          </p>
          <h1 className="text-[#090909] h-full lg:text-[28px] leading-tight md:text-[24px] text-[20px] font-medium cursor-pointer">
            {post.title}
          </h1>
          <p className="text-[#090909] lg:text-[16px] md:text-[14px] text-[14px] h-full opacity-80 font-normal cursor-default md:hidden hidden">
            {post.excerpt}
          </p>
          {/* Author */}
          <div className="flex flex-row w-full h-fit justify-end mt-2">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={post.avatarUrl}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-contain"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#090909] md:text-[14px] text-[12px] font-medium cursor-pointer">
                  {post.author}
                </p>
                <p className="text-[#090909] md:text-[12px] md:block text-[10px] opacity-80 font-normal cursor-pointer">
                  {post.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BlogRegular;
