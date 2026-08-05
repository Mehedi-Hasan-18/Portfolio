const ScrollFloat = ({
  children,
  containerClassName = '',
  textClassName = ''
}) => {
  return (
    <h2 className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>
        {children}
      </span>
    </h2>
  );
};

export default ScrollFloat;
