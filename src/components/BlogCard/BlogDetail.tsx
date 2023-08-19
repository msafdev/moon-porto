// Asset
import "./BlogDetail.css";
import "../../index.css";

// Library
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailedPosts, Post } from "../../services";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function BlogDetail() {
  const { slug } = useParams<{ slug: string | undefined }>();

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<Post[]>(["detailedPosts", slug || ""], () => {
    if (slug) {
      return getDetailedPosts(slug);
    }
    return Promise.resolve([]); // Return an empty array if slug is undefined
  });

  if (isLoading) {
    return (
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <p className="md:text-[64px] text-[42px] font-bold">. . .</p>
      </div>
    );
  }

  if (isError || !posts) {
    return <div>Error occurred while fetching the post.</div>;
  }

  const post = posts[0];

  return (
    <div className="bg-[#fff] lg:px-[10%] h-full">
      {/* Navbar */}
      <div className="w-full flex flex-row justify-between items-center p-10 bg-[#fff]">
        <div className="w-[80px] h-[80px] lg:p-3 p-4">
          <a href="/blog" className="w-full h-full">
            <TbArrowBigLeftFilled className="w-full h-full object-contain text-[#090909]" />
          </a>
        </div>
        <div className="relative">
          <div className="w-[20px] h-[20px] bg-red-500 rounded-full border-4 border-[#fffdf7] right-0 absolute z-50" />
          <a
            href="https://github.com/muhammadsalmanalfarisi"
            target="_blank"
            className="cursor-pointer"
          >
            <Avatar className="lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]">
              <AvatarImage src="https://github.com/muhammadsalmanalfarisi.png" />
              <AvatarFallback>MSAF</AvatarFallback>
            </Avatar>
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="text-white bg-[#fff]  md:px-[10%] px-6">
        <img src={post.thumbnail.url} alt="" className="w-full" />
        <h1 className="lg:text-[42px] text-[32px] text-center font-semibold text-black mt-10">
          {post.title}
        </h1>
        <div
          className="detail lg:px-10"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
      {/* Footer */}
      <div className="w-full h-[200px] bg-[#090909] flex flex-row justify-between items-center py-10 mt-10 lg:px-[10%] px-[5%]">
        <div className="flex flex-row gap-5 items-center">
          <a href="/blog">
            <p className="text-[#fffdf7] lg:text-[32px] md:text-[28px] text-[24px] font-medium cursor-pointer hover:underline">
              BLOG
            </p>
          </a>
          <p className="text-[#fffdf7] lg:text-[32px] md:text-[28px] text-[24px] font-medium">
            |
          </p>
          <p className="text-sm">Made with {"<"}3</p>
        </div>
      </div>
    </div>
  );
}
export default BlogDetail;
