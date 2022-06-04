import React from "react";

const BlogPostsSection = ({ blog }) => {
    const { before_title, title, posts } = blog;

    return (
        <section className="p-layout home-bs">

                <h6>
                    {before_title}
                </h6>
                <h2>
                    {title}<span className="orange-point">.</span>
                </h2>

                <div className="home-bs__grid">
                    {posts.map((item, i) => (
                        <div
                            key={i}
                            className="home-bs__grid--item"
                        >
                            <img src={item.img_url} />

                            <div className="home-bs__grid--content ">
                                <h3 className="">{item.title}</h3>

                                <span>{item.date}</span>

                                <a className="">
                                    {item.link.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            <svg
                className="home-bs__blob-1"
                width="1000"
                height="921"
                viewBox="0 0 1000 921"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0069 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z"
                    fill="#ECECEC"
                />
            </svg>
             <svg
                className="home-bs__blob-2"
                width="1000"
                height="921"
                viewBox="0 0 1000 921"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0069 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z"
                    fill="#ECECEC"
                    fillOpacity="0.7"
                />
            </svg> 
        </section>
    );
};

export default BlogPostsSection;
