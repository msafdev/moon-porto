// Assets
import "./Blog.css";
import { getPosts, getLimitedPosts, Post, getSmallPosts } from "../../services";
import BlogCard from "../../components/BlogCard/BlogRegular";
import BlogBig from "../../components/BlogCard/BlogBig";
import BlogSmall from "../../components/BlogCard/BlogSmall";

// Libraries
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Separator } from "../../components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { RiTerminalBoxLine } from "react-icons/ri";

export default function Blog() {
  const [allBlog, setAllBlog] = useState<Post[]>([]);
  const [limitedPosts, setLimitedPosts] = useState<Post[]>([]);
  const [smallPosts, setSmallPosts] = useState<Post[]>([]);

  // All Blog Posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setAllBlog(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Limited Blog Posts
  useEffect(() => {
    const fetchLimitedPosts = async () => {
      try {
        const fetchedLimitedPosts = await getLimitedPosts(4);
        setLimitedPosts(fetchedLimitedPosts);
      } catch (error) {
        console.error("Error fetching limited posts:", error);
      }
    };

    fetchLimitedPosts();
  }, []);

  // Blog Post by an by postId
  useEffect(() => {
    const fetchSmallPosts = async () => {
      try {
        const fetchedSmallPosts = await getSmallPosts();
        setSmallPosts(fetchedSmallPosts);
      } catch (error) {
        console.error("Error fetching limited posts:", error);
      }
    };

    fetchSmallPosts();
  }, []);

  // Blog Post by slug
  const slugPost =
    allBlog.length > 0
      ? allBlog.find((post) => post.slug === "my-own-developer-journal")
      : null;

  return (
    <>
      <motion.div
        className="absolute flex items-center justify-center w-full h-full bg-[#fffdf7] origin-top z-[999]"
        animate={{ scaleY: [1, 0] }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      >
        <motion.h1
          className="text-[64px] text-[#090909]"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          BLOG
        </motion.h1>
      </motion.div>
      <motion.div
        className="w-screen h-full bg-[#fffdf7] lg:px-[10%] overflow-hidden origin-bottom"
        animate={{ scaleY: [0, 1], display: ["none", "block"] }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
      >
        {/* Blog */}
        <div className="blog-layout flex flex-col items-center bg-[#090909] text-[#fffdf7] h-full">
          {/* Navbar */}
          <div className="w-full flex flex-row justify-between items-center p-10">
            <div className="w-[80px] h-[80px]">
              <a href="/" className="w-full h-full">
                <RiTerminalBoxLine className="w-full h-full object-contain text-[#fffdf7" />
              </a>
            </div>
            <div className="relative">
              <div className="w-[20px] h-[20px] bg-red-500 rounded-full border-4 border-[#090909] right-0 absolute z-50" />
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
          {/* Separator */}
          <Separator
            orientation="horizontal"
            className="lg:w-[95%] w-[90%] h-[2px] bg-white opacity-70"
          />
          {/* Container 1 */}
          <div className="flex flex-col py-10 w-full">
            <code className="lg:px-8 md:px-6 px-4">#recent-posts</code>
            <div className="h-fit w-full lg:px-8 md:px-6 px-4 grid grid-rows-1 xl:grid-cols-4 grid-cols-2 lg:gap-7 md:gap-6 gap-5 pt-0">
              {/* Card Normal */}
              {limitedPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author.name}
                  bio={post.author.bio}
                  avatarUrl={post.author.avatar.url}
                  createdAt={post.createdAt}
                  slug={post.slug}
                  thumbnailUrl={post.thumbnail.url}
                  categoryName={post.categories[0].name}
                  categorySlug={post.categories[0].slug}
                  contentHtml={post.content.html}
                />
              ))}
            </div>
          </div>
          {/* Separator */}
          <Separator
            orientation="horizontal"
            className="lg:w-[95%] w-[90%] h-[2px] bg-white opacity-70"
          />
          {/* Container 2 */}
          <div className="flex flex-col py-10 w-full">
            <code className="lg:px-8 md:px-6 px-4">#special-posts</code>
            <div className="w-full h-full lg:px-8 md:px-6 px-4 flex xl:flex-row flex-col items-center justify-center gap-4">
              <div className="xl:w-1/2 w-full flex flex-col items-center justify-center xl:h-[500px] md:h-[400px] h-[350px] border-2">
                {/* Card Large */}
                {slugPost?.title && (
                  <BlogBig
                    key={slugPost.slug}
                    title={slugPost.title}
                    excerpt={slugPost.excerpt}
                    author={slugPost.author.name}
                    bio={slugPost.author.bio}
                    avatarUrl={slugPost.author.avatar.url}
                    createdAt={slugPost.createdAt}
                    slug={slugPost.slug}
                    thumbnailUrl={slugPost.thumbnail.url}
                    categoryName={slugPost.categories[0].name}
                    categorySlug={slugPost.categories[0].slug}
                    contentHtml={slugPost.content.html}
                  />
                )}
              </div>
              <div className="xl:w-1/2 w-full flex flex-col items-center justify-center xl:h-[500px] h-fit gap-3">
                {/* Card Small */}
                {smallPosts.map((post) => (
                  <BlogSmall
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author.name}
                    bio={post.author.bio}
                    avatarUrl={post.author.avatar.url}
                    createdAt={post.createdAt}
                    slug={post.slug}
                    thumbnailUrl={post.thumbnail.url}
                    categoryName={post.categories[0].name}
                    categorySlug={post.categories[0].slug}
                    contentHtml={post.content.html}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Separator */}
          <Separator
            orientation="horizontal"
            className="lg:w-[95%] w-[90%] h-[2px] bg-white opacity-70"
          />
          {/* Footer */}
          <div className="w-full h-[200px] flex flex-row justify-between items-center py-10 lg:px-[10%] px-[5%]">
            <div className="flex flex-row gap-5">
              <p className="text-[#fffdf7] lg:text-[32px] md:text-[28px] text-[24px] font-medium cursor-pointer hover:underline">
                BLOG
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
