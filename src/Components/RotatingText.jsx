'use client';

import { forwardRef, useMemo } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    mainClassName,
    ...rest
  } = props;

  const displayText = useMemo(() => {
    if (Array.isArray(texts) && texts.length > 0) {
      return texts[0];
    }
    return '';
  }, [texts]);

  return (
    <span ref={ref} className={cn('flex flex-wrap whitespace-pre-wrap relative', mainClassName)} {...rest}>
      {displayText}
    </span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;
