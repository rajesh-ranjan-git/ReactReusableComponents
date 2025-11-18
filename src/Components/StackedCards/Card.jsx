import { motion, useMotionValue, useTransform } from "motion/react";

const Card = ({ img, cards, setCards }) => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, -50, 0, 50, 150], [0, 1, 1, 1, 0]);
  const rotateRow = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = img.id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : img.id % 2 ? 6 : -6;

    return `${rotateRow.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prev) =>
        prev.filter((card) => {
          return card.id !== img.id;
        })
      );
    }
  };

  return (
    <motion.img
      src={img.src}
      alt={img.alt}
      className="shadow-lg rounded-lg w-64 h-[80%] object-cover origin-bottom hover:cursor-grab active:cursor-grabbing select-none"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        zIndex: img.id,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default Card;
