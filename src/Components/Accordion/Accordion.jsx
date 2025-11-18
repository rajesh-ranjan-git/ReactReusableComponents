import { useState } from "react";
import GoHome from "../Utility/GoHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const data = [
  {
    question: "Question1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
  {
    question: "Question2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
  {
    question: "Question3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
  {
    question: "Question4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
];

const Accordion = () => {
  const [acc, setAcc] = useState(null);

  const handleAccordion = (index) => {
    if (acc === index) {
      setAcc(null);
    } else {
      setAcc(index);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Accordion</h1>
        {data.map((ques, index) => {
          return (
            <div className="w-[90%]" key={index}>
              <div
                className="flex justify-between bg-lime-600 shadow-slate-950 shadow-xl m-4 p-4 rounded-md font-semibold text-white text-2xl cursor-pointer"
                onClick={() => handleAccordion(index)}
              >
                <span>{ques.question}</span>
                {acc === index ? (
                  <motion.div // Change color smoothly
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ rotate: acc === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </motion.div>
                )}
              </div>
              {acc === index && (
                <div
                  className="flex justify-between bg-lime-200 shadow-slate-950 shadow-xl m-4 p-4 rounded-md max-h-0 overflow-hidden font-semibold text-lime-600 text-2xl transition-all duration-500 ease-in-out"
                  style={{ maxHeight: acc === index ? "500px" : "0" }}
                >
                  <span>{ques.answer}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <GoHome />
    </>
  );
};

export default Accordion;
