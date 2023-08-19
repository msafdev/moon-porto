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

function BlogBig(post: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="w-full h-full relative blog-big-card"
    >
      <div className="bg-[#101010] h-full absolute bottom-0 left-0 blog-big-display overflow-clip flex flex-col">
        <div className="h-full w-fit flex flex-col justify-center p-6 md:p-6 lg:p-6 xl:p-8">
          <div className="h-fit">
            <p className="text-[#fffdf7] opacity-80 lg:text-[16px] md:text-[14px] text-[12px] font-normal cursor-default">
              {moment(post.createdAt).format("MMMM Do, YYYY")}
            </p>
            <h1 className="text-[#fffdf7] lg:text-[26px] leading-tight md:text-[24px] text-[20px] font-medium cursor-pointer">
              {post.title}
            </h1>
          </div>
          <p className="text-[#fffdf7] md:h-full h-fit lg:text-[16px] md:text-[14px] text-[12px] opacity-80 font-normal cursor-default md:block">
            {post.excerpt}
          </p>
          {/* Profile */}
          <div className="md:flex flex-row w-full h-fit justify-end mt-2 hidden">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={post.avatarUrl}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-contain"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#fffdf7] md:text-[15px] text-[13px] font-medium cursor-pointer">
                  {post.author}
                </p>
                <p className="text-[#fffdf7] md:text-[13px] md:block text-[11px] opacity-80 font-normal cursor-pointer">
                  {post.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={post.thumbnailUrl}
        alt="Moon Logo"
        className="object-cover w-full h-full"
      />
    </Link>
  );
}
export default BlogBig;
