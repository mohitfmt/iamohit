"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

const BlogCard = ({
  title,
  description,
  image,
  date,
  readTime,
  slug,
  tags,
  index = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-[#f5f543]/50 transition-all duration-300 h-full">
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-gray-800">
            <motion.div variants={imageVariants} whileHover="hover">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="text-xs px-3 py-1 bg-[#f5f543]/10 text-[#f5f543] rounded-full border border-[#f5f543]/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-white group-hover:text-[#f5f543] transition-colors duration-300 line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
              {description}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-[#f5f543]" />
                  <time>
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="text-[#f5f543]" />
                  <span>{readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <motion.div
                variants={arrowVariants}
                className="flex items-center gap-2 text-sm text-[#f5f543] font-medium"
              >
                <span>Read More</span>
                <FiArrowRight />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
