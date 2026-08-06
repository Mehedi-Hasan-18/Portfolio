const SplitText = ({
  text,
  className = '',
  textAlign = 'center',
  tag = 'p'
}) => {
  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  };
  const Tag = tag || 'p';

  return (
    <Tag style={style} className={className}>
      {text}
    </Tag>
  );
};

export default SplitText;
