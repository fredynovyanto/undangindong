import { Check, Copy, GiftIcon, House } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import chip from "../assets/chip.png";

function Gift({ name, phone, address }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
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
      <div className="flex justify-center">
        <h3 className="text-2xl font-bold">Alamat Kirim Kado</h3>
      </div>
      <div className="flex justify-center my-4">
        <House size={50} className="text-[#664125]" />
      </div>

      <div className="mt-2">
        <h3 className="text-xl font-bold">Nama Penerima:</h3>
        <p className="text-lg mb-4">{name}</p>
        <h3 className="text-xl font-bold">No. HP:</h3>
        <p className=" text-lg mb-4">{phone}</p>
        <h3 className="text-xl font-bold">Alamat:</h3>
        <p className=" text-lg mb-4">{address}</p>
        <div className="mt-3">
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
            {copied ? "Tersalin" : "Salin Alamat"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Gift;
