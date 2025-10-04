import React from "react";

const Comment = ({ author, content, timestamp, image }) => {
  return (
    <article className="flex items-start space-x-4 p-4" aria-label="User comment">
      <header className="flex-shrink-0 text-center">
        <img
          className="h-10 w-10 rounded-full"
          src={`https://i.pravatar.cc/150?u=${author}`}
          alt={author}
        />
        <div className="text-sm font-medium font-Inter">{author}</div>
      </header>
      <section className="p-4 border border-greyLight rounded-lg shadow-md mb-4 bg-primary/65 font-normal font-Inter flex-1">
        <div className="mt-1 text-sm">{content}</div>
        <time className="mt-2 text-xs block" dateTime={timestamp}>
          {timestamp}
        </time>
        {image && (
          <figure className="mt-4">
            <img
              className="w-full h-auto rounded-lg"
              src={image}
              alt="Uploaded"
            />
          </figure>
        )}
      </section>
    </article>
  );
};

export default Comment;
