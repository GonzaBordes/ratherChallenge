import { useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';

const NumberGrid = () => {
  const [grid, setGrid] = useState([
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1],
    [0, 1],
    [0],
    [],
  ]);

  const [showContent, setShowContent] = useState(false)

  const generateRandomNumber = () => Math.round(Math.random());
  const generateRandomColor = () => (Math.random() < 0.5 ? 'white' : 'green');

  const updateGrid = () => {
    setGrid((prevGrid) =>
      prevGrid.map((row) =>
        row.map(() => {
          return generateRandomNumber();
        })
      )
    );
  };

  setTimeout(() => {
    setShowContent(true)
  }, 600);

  useEffect(() => {
    const intervalId = setInterval(updateGrid, 500);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (

    showContent && <div className="grid-container">
    {grid.map((row, rowIndex) => (
      <motion.div key={rowIndex} className="number-row"
       
      >
        {row.map((number, colIndex) => (
          <motion.span
            key={colIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              staggerChildren: 0.2,
              delay: (row.length - colIndex - 1) * 0.2,
            }}
            className={`number-span ${generateRandomColor()}`}
          >
            {number}
          </motion.span>
        ))}
      </motion.div>
    ))}
  </div>
    
  );
};

export default NumberGrid;
