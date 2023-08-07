const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        // variants={quote}
        // initial="initial"
        // animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <span
            key={word + "-" + index}
            className="inline-block"
            // variants={singelWord}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
