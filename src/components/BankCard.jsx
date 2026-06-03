import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import chip from "../assets/chip.png";
import { useState } from "react";

function BankCard({ bankName, accountNumber, accountName }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(accountNumber);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="
        rounded-3xl
        border border-white/50
        bg-white/10
        backdrop-blur-md
        shadow-xl
        p-6
      "
    >
      <div className="flex justify-between">
        <img src={chip} alt="chip" width={50} />
        <h3 className="text-xl ">{bankName}</h3>
      </div>

      <div className="mt-2">
        <p className="flex items-start text-lg ">{accountNumber}</p>
        <p className=" flex items-start text-lg ">{accountName}</p>
        <div className="flex justify-end mt-3">
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            animate={
              copied
                ? {
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{
              duration: 0.4,
            }}
            className="rounded-lg text-[#faefeb] bg-[#664125] px-5 py-2 mt-5 "
          >
            {copied ? (
              <Check className="inline-block mr-2" />
            ) : (
              <Copy className="inline-block mr-2" />
            )}
            {copied ? "Tersalin" : "Salin Rekening"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
