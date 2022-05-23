import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          cursor: "pointer",
        }}
      >
        <motion.h2 layout="position">framer motion 🚀</motion.h2>

        
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
            className="expand"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus a eligendi numquam, eaque repellat in tempore eos dicta
              mollitia voluptatibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates, perspiciatis!
            </p>
           
          </motion.div>
        ) : (
          ""
        )}
        

      </motion.div>
    </div>
  );
}

export default App;
