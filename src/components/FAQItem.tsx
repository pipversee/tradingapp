import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/16">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[18px] font-medium text-white group-hover:text-white/80 transition-colors pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-white/40 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[18px] text-white/50 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}