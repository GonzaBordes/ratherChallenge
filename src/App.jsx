import { useState } from 'react'
import {motion} from 'framer-motion'
import './App.css'
import NumberGrid from './components/numberGrid';
import galaxyFormImg from './assets/galaxy-form.png'


// ---- ANIMATION VARIANTS

const svgTranslateVariants ={
  initial:{
    top: 0
  },
  translated: {
    top: "94%",
    transition: {
      delay: .6,
      duration: 1.2,
      ease: [0.85, 0, 0.15, 1],
    },
  }
} 

const CardVariants = {
  initial: {
    rotateY: 0,
    transition: {
      duration: 1,
    },
   
  },
  rotated: {
    rotateY: 180,
    transition: {
      delay: 6,
      duration: 2,
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

const firstContentVariants ={
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition:{
      duration: .5,
      delay: 1.2
    }
  }
}

const animatedFisrtImgVariants ={
  initial:{
    x:-10
  },
  animate:{
    x: [-10, 5, -10],
    transition:{
      duration: 1, repeat: Infinity, repeatDelay: 0
    }
  }
}

const secondImageVariants = {
  initial: { rotate: 0 },
  animate: { rotate: 360, transition: { duration: 30,ease: "linear", repeat: "Infinity" } },
};

const logoSpanVariants = {
  initial:{
    scaleY:0
  },
  animate:{
    scaleY:1,
    transition:{
      duration: .6,delay: 1.3
    }
  },
}

const animusContentVariant = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition: {
      staggerChildren: 0.4,
      duration: .4,
      delay:.3 // Ajusta el valor de stagger según tus necesidades
    },
  }
}

const animusChildrenVariant ={
  initial: { opacity: 0},
  animate: { opacity: 1,},
}

const blueDotVariants ={
  initial:{
    opacity: 0
  },
  animate:{
    opacity: [0,1,0],
    transition:{
      duration: .5, repeat: Infinity, repeatDelay: .7
    }
  }
}

const firstColumnVariant = {
  initial: {
    y: 0
  },
  animate:{
    y: ["0%", "20%","-5%", "-17%", "0%", "14%","0%"], 
    transition: { duration: 3, ease: "linear",repeat: Infinity,times: [0, 0.2, 0.5, 0.8, 1], }, 
  }
}

const secondColumnVariant = {
  initial: {
    y: 0
  },
  animate:{
    y: ["95%", "-40%","20%", "-5%", "-20%", "4%","-10%"], 
    transition: { duration: 3, ease: "linear",repeat: Infinity,times: [0, 0.2, .5, 0.8, 0], }, 
  }
}

function App() {

  const [changeCardContent, setchangeCardContent] = useState(false)

  const handleSpanAnimationComplete = () => {
    const logoSpanAll = document.querySelectorAll('.logo span')
    logoSpanAll.forEach(span => {
      span.classList.add('blue-bg')
    });
  };  

  setTimeout(() => {
    setchangeCardContent(true)
  }, 7000);

  return (
    <div className='app'>
      <div className="content">
        <motion.div className="card"
        variants={CardVariants}
        initial="initial"
        animate="rotated"
        >
          {/* SVG CONTAINERS */}
          <div className="svg-box">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 30V1.5H30" stroke="red" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              
              />
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 30.5V2H2" stroke="red" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              
              />
            </svg>
          </div>

          <motion.div className="translated-corners"
          variants={svgTranslateVariants}
          initial='initial'
          animate='translated'
          >
            <div className="svg-box">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L2 30.5L30 30.5" stroke="red" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
               
                fill='none'
                />
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 1.5L30 30L2 30" stroke="red" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"

               
                fill='none'
                />
              </svg>
            </div>
          </motion.div>

          {/* HERE GOES CONTENT LOGIC */}
          {
            !changeCardContent && 
            <motion.div className='card--inner-content first'
            
            
            >
              <NumberGrid />
              <motion.div
                variants={firstContentVariants}
                initial='hidden'
                animate='visible'
              >
                  <motion.img className='img' src={galaxyFormImg} alt="" 
                    variants={animatedFisrtImgVariants}
                    initial="initial"
                    animate='animate'                 
                  />
                  <div className="logo">
                    <motion.span className="left-line"
                    variants={logoSpanVariants}
                    initial='initial'
                    animate='animate'
                    onAnimationComplete={handleSpanAnimationComplete}
                    ></motion.span>
                    <div className="vertical-lines">
                      <motion.span
                      variants={logoSpanVariants}
                      initial='initial'
                      animate='animate'
                      onAnimationComplete={handleSpanAnimationComplete}
                      ></motion.span>
                      <motion.span
                      variants={logoSpanVariants}
                      initial='initial'
                      animate='animate'
                      onAnimationComplete={handleSpanAnimationComplete}
                      ></motion.span>
                    </div>
                    <motion.span className="right-line"
                    variants={logoSpanVariants}
                    initial='initial'
                    animate='animate'
                    onAnimationComplete={handleSpanAnimationComplete}
                    ></motion.span>
                  </div>
              </motion.div>
            </motion.div>
          }



          {
            changeCardContent && 
            <motion.div className='card--inner-content second'>

              <motion.div className="animus-title-wrapper"
                
                >
                  <div className="columns-grid">
                    <div className="col-1">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <motion.div className="col-2"
                    variants={firstColumnVariant}
                    initial='initial'
                    animate='animate'
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </motion.div>
                    <motion.div className="col-3"
                    variants={secondColumnVariant}
                    initial='initial'
                    animate='animate'
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </motion.div>
                    <div className="col-4">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <motion.div className="div"
                    variants={firstColumnVariant}
                    initial='initial'
                    animate='animate'
                  >

                  </motion.div>
              </motion.div>

              <motion.div className="animus-title-wrapper"
                variants={animusContentVariant}
                initial="initial"
                animate="animate"
                >
                <h2>Animus rec.</h2>
                <div className="animus-details">
                  <motion.span
                    variants={animusChildrenVariant}
                    transition={{delay: .5}}
                  >#3355</motion.span>
                  <motion.span
                    variants={animusChildrenVariant}
                    transition={{delay: 1}}
                  >
                    <motion.div className="blue-dot"
                    variants={blueDotVariants}
                    initial='initial'
                    animate='animate'
                    ></motion.div>
                    <span>ON</span>
                  </motion.span>
                </div>
              </motion.div>
              
              <motion.div 
                  variants={animusContentVariant}
                  initial="initial"
                  animate="animate"

              />
                <motion.img src={galaxyFormImg} alt="" 
                  variants={secondImageVariants}
                  initial='initial'
                  animate='animate'
                />
              <motion.div/>
              <div className="logo">
                    <span className="left-line blue-bg"></span>
                    <div className="vertical-lines">
                      <span className='blue-bg'></span>
                      <span className='blue-bg'></span>
                    </div>
                    <span className="right-line blue-bg"></span>
              </div>
              
              
              

             
            </motion.div>

            
          }
        </motion.div>
      </div>    

    </div>
  )
}

export default App
