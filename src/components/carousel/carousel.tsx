import {useState, useEffect} from 'react';

interface CarouselProps {
  children: JSX.Element[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const prev = () => {
    setIsAnimating(true);
    setPrevClicked(true);
    setNextClicked(false);
    setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setIsAnimating(true);
    setPrevClicked(false);
    setNextClicked(true);
    setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide || isPaused) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          // Info: 讓圖片移過頭的動畫 (20240328 - Shirley)
          transform: `translateX(calc(-${curr * 100}% ${isAnimating && nextClicked ? '- 20px' : isAnimating && prevClicked ? '+ 20px' : ''}))`,
        }}
        onTransitionEnd={() => setIsAnimating(false)}
      >
        {slides}
      </div>
      {/* <div
        className="flex transition-transform ease-out duration-500"
        style={{transform: `translateX(-${curr * 100}%)`}}
      >
        {slides}
      </div> */}
      {/* Info: 往前往後的按鈕 (20240328 - Shirley) */}
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between p-0">
        <button onClick={prev} className="h-full p-6 lg:p-8 rounded-none bg-transparent"></button>
        <button onClick={next} className="h-full p-6 lg:p-8 rounded-none bg-transparent"></button>
      </div>

      {/* Info: 點點點 (20240328 - Shirley) */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all max-md:w-2 max-md:h-2 w-3 h-3 bg-primaryPurple rounded-full
              ${curr === i ? 'p-1' : 'bg-white/50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
