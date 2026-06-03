import "./App.css";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import FlowerDecoration from "./components/FlowerDecoration";
import AnimatedText from "./components/AnimatedText";

import { coverDecorations, heroDecorations } from "./data/decorations";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useSearchParams } from "react-router-dom";

import bgImage from "./assets/bg1.jpg";
import character from "./assets/character.png";
import img1 from "./assets/4.png";
import WeddingSection from "./components/WeddingSection";
import SaveTheDateButton from "./components/SaveTheDateButton";
import Countdown from "./components/Countdown";
import { Calendar, CalendarDays, Map } from "lucide-react";
import BankCard from "./components/BankCard";
import Gift from "./components/Gift";

function App() {
  const heroRef = useRef(null);
  const quoteRef = useRef(null);
  const brideGroomRef = useRef(null);
  const eventRef = useRef(null);
  const giftRef = useRef(null);
  const footerRef = useRef(null);

  const [isCoverOpening, setIsCoverOpening] = useState(false);

  const [searchParams] = useSearchParams();

  const to = searchParams.get("to");

  const isHeroInView = useInView(heroRef, {
    amount: 0.5,
  });
  const isQuoteInView = useInView(quoteRef, {
    amount: 0.5,
  });
  const isBrideGroomInView = useInView(brideGroomRef, {
    amount: 0.5,
  });
  const isEventInView = useInView(eventRef, {
    amount: 0.5,
  });
  const isGiftInView = useInView(giftRef, {
    amount: 0.5,
  });
  const isFooterInView = useInView(footerRef, {
    amount: 0.5,
  });

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";

    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsCoverOpening(true);

    // setTimeout(() => {
    document.body.style.overflowY = "auto";

    //   lenisRef.current?.start();

    //   lenisRef.current?.scrollTo(heroRef.current, {
    //     duration: 1,
    //   });
    // }, 1000);
  };

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleOpenMaps = () => {
    window.open(
      "https://www.google.com/maps/place/25J5%2BMHH,+Jl.+AMD,+Pegandon+Timur,+Pegandon,+Kec.+Pegandon,+Kabupaten+Kendal,+Jawa+Tengah+51357/@-6.9683482,110.1588364,21z/data=!4m9!1m2!2m1!1sJl.+AMD+Pegandon+RT+02+RW+01,+Pegandon,+Kendal,+Jawa+Tengah!3m5!1s0x2e705d40c66a647b:0x8dece38f3d5b8727!8m2!3d-6.9683076!4d110.1589891!16s%2Fg%2F11gphx8btk?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
    );
  };

  return (
    <>
      {/* STATIC BACKGROUND */}
      <div
        className="
          fixed
          inset-0
          -z-50
          overflow-hidden
        "
      >
        <img
          src={bgImage}
          alt=""
          className="
            w-full
            h-full
            object-cover
            pointer-events-none
            select-none
          "
        />
      </div>

      {/* COVER SECTION */}
      <AnimatePresence mode="wait">
        {!isCoverOpening && (
          <motion.div
            className="
              flex
              w-full
              h-screen
              overflow-hidden
              relative
            "
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {/* FLOWERS */}
            {coverDecorations.map((item, index) => (
              <FlowerDecoration
                key={index}
                image={item.image}
                className={item.className}
                animation={item.animation}
              />
            ))}

            {/* CONTENT */}
            <div className="container z-50">
              <div className="flex justify-center items-center h-full px-6">
                <div className="flex-col w-full text-center">
                  <AnimatedText className="mb-10 text-3xl">
                    <p style={{ fontFamily: "Parisienne" }}>The Wedding Of</p>
                  </AnimatedText>

                  <AnimatedText
                    className="font-bold text-5xl"
                    y={-50}
                    delay={0.2}
                  >
                    <p style={{ fontFamily: "Parisienne" }}>Donny</p>
                  </AnimatedText>

                  <AnimatedText className="font-bold text-4xl" delay={0.4}>
                    <p style={{ fontFamily: "Parisienne" }}>&</p>
                  </AnimatedText>

                  <AnimatedText
                    className="font-bold text-5xl"
                    y={50}
                    delay={0.6}
                  >
                    <p style={{ fontFamily: "Parisienne" }}>Ayuk</p>
                  </AnimatedText>

                  <AnimatedText delay={0.8}>
                    <div>
                      <p className="mt-10">Kepada Yth.</p>

                      <p>Bapak/Ibu/Saudara/i</p>

                      <p className="font-bold text-2xl mt-3">{to}</p>

                      <p className="mt-2 mx-14 text-[10px] italic">
                        *Mohon maaf jika ada kesalahan dalam penulisan nama /
                        gelar.
                      </p>
                    </div>
                  </AnimatedText>

                  <AnimatedText delay={1}>
                    <motion.button
                      onClick={handleOpenInvitation}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      className="
                        rounded-lg
                        text-[#faefeb]
                        bg-[#664125]
                        px-5
                        py-2
                        mt-5
                      "
                    >
                      Buka Undangan
                    </motion.button>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <WeddingSection
        ref={heroRef}
        active={isHeroInView}
        decorations={heroDecorations}
      >
        <div className="text-center z-20 px-6">
          <AnimatedText className="mb-5 text-3xl">
            <p style={{ fontFamily: "Parisienne" }}>The Wedding Of</p>
          </AnimatedText>
          <AnimatedText>
            <div className="flex items-center justify-center">
              <img src={character} alt="Character" width={250} />
            </div>
          </AnimatedText>
          <div className="flex justify-center items-center h-full">
            <div className="flex-col w-full text-center">
              <AnimatedText
                className="font-bold text-5xl my-4"
                y={-50}
                delay={0.2}
              >
                <p style={{ fontFamily: "Parisienne" }}>Donny & Ayuk</p>
              </AnimatedText>

              <AnimatedText delay={0.4} y={50}>
                <p className="text-xl">Rabu, 10 Juni 2026</p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </WeddingSection>

      <WeddingSection
        ref={quoteRef}
        active={isQuoteInView}
        decorations={heroDecorations}
      >
        <div className=" z-20 px-6">
          <AnimatedText className="font-bold text-4xl">
            <p style={{ fontFamily: "Parisienne" }}>Save The Date</p>
          </AnimatedText>
          <AnimatedText className="mt-10">
            <Countdown targetDate="2026-06-10T11:00:00+07:00" />
          </AnimatedText>
          <AnimatedText>
            <SaveTheDateButton
              title="Pernikahan Donny & Ayuk"
              description="Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir."
              location="Jl. AMD Pegandon RT 02 RW 01, Pegandon, Kendal, Jawa Tengah"
              startDate={new Date("2026-06-10T11:00:00+07:00")}
              endDate={new Date("2026-06-10T15:00:00+07:00")}
              className="mt-6 mb-20"
            >
              <CalendarDays className="inline-block mr-2" size={18} />
              Simpan di kalender
            </SaveTheDateButton>
          </AnimatedText>
          <AnimatedText delay={0.5} y={50}>
            <div className="flex items-center justify-center">
              <img src={img1} alt="Character" width={150} />
            </div>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <p className="italic">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang."
            </p>
            <p className="font-bold mt-2 italic">[QS. Ar-Rum: 21]</p>
          </AnimatedText>
        </div>
      </WeddingSection>

      <WeddingSection
        ref={brideGroomRef}
        active={isBrideGroomInView}
        decorations={heroDecorations}
      >
        <div className=" z-20 px-6 my-10">
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Bride & Groom</p>
          </AnimatedText>
          <AnimatedText className="mb-20">
            <p>
              Maha Suci Allah yang telah menciptakan makhluk-Nya
              berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
              pernikahan kami.
            </p>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Ayuk</p>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl mb-5">
            <p className="text-[#664125]">Fitriana Teguh Rahayu</p>
          </AnimatedText>
          <AnimatedText>
            <p>Putri dari Bapak Alm.Teguh Imam Sutopo & Ibu Siti Maskanah</p>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl my-10">
            <p>&</p>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Donny</p>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl mb-5">
            <p className="text-[#664125]">Donny Meiyandi, S.Pd</p>
          </AnimatedText>
          <AnimatedText>
            <p>Putra dari Bapak Achmad Romdon & Ibu Priyanti</p>
          </AnimatedText>
        </div>
      </WeddingSection>

      <WeddingSection
        ref={eventRef}
        active={isEventInView}
        decorations={heroDecorations}
      >
        <div className=" z-20 px-6 my-10">
          <AnimatedText className="mb-10">
            <p>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kedua mempela
            </p>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Akad Nikah</p>
          </AnimatedText>
          <AnimatedText className="flex items-center justify-center mb-5 gap-3 w-full">
            <div className="flex-1 border-t border-[#8B5E3C]"></div>

            <span className="text-[#8B5E3C] font-bold text-2xl tracking-wider uppercase  whitespace-nowrap">
              Rabu, 10 Juni 2026
            </span>

            <div className="flex-1 border-t border-[#8B5E3C]"></div>
          </AnimatedText>
          <AnimatedText>
            <p>Jam 07:00 WIB - Selesai</p>
            <p>Bertempat di:</p>
            <p>Kediaman Mempelai Wanita</p>
            <p>Jl. AMD Pegandon RT 02 RW 01, Pegandon, Kendal, Jawa Tengah</p>
          </AnimatedText>
          <AnimatedText delay={1}>
            <motion.button
              onClick={handleOpenMaps}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="
                        rounded-lg
                        text-[#faefeb]
                        bg-[#664125]
                        px-5
                        py-2
                        mt-5
                      "
            >
              <Map className="inline-block mr-2" size={18} />
              Google Maps
            </motion.button>
          </AnimatedText>
          <div className="my-20" />
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Resepsi</p>
          </AnimatedText>
          <AnimatedText className="flex items-center justify-center mb-5 gap-3 w-full">
            <div className="flex-1 border-t border-[#8B5E3C]"></div>

            <span className="text-[#8B5E3C] font-bold text-2xl tracking-wider uppercase  whitespace-nowrap">
              Rabu, 10 Juni 2026
            </span>

            <div className="flex-1 border-t border-[#8B5E3C]"></div>
          </AnimatedText>
          <AnimatedText>
            <p>Jam 11:00 WIB - 15:00 WIB</p>
            <p>Bertempat di:</p>
            <p>Kediaman Mempelai Wanita</p>
            <p>Jl. AMD Pegandon RT 02 RW 01, Pegandon, Kendal, Jawa Tengah</p>
          </AnimatedText>
          <AnimatedText delay={1}>
            <motion.button
              onClick={handleOpenMaps}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="
                        rounded-lg
                        text-[#faefeb]
                        bg-[#664125]
                        px-5
                        py-2
                        mt-5
                      "
            >
              <Map className="inline-block mr-2" size={18} />
              Google Maps
            </motion.button>
          </AnimatedText>
        </div>
      </WeddingSection>

      <WeddingSection
        ref={giftRef}
        active={isGiftInView}
        decorations={heroDecorations}
      >
        <div className=" z-20 px-6">
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Wedding Gift</p>
          </AnimatedText>
          <AnimatedText>
            <p>
              Doa restu anda merupakan karunia yang sangat berarti bagi kami.
              Jika memberi adalah ungkapan tanda kasih, anda dapat memberi kado
              secara cashless.
            </p>
          </AnimatedText>
          <AnimatedText className="mb-5">
            <BankCard
              bankName="Bank BRI"
              accountNumber="5910 0101 0547 501"
              accountName="Fitriana Teguh Rahayu"
            />
          </AnimatedText>
          {/* <AnimatedText className="mb-5">
            <BankCard
              bankName="Bank BCA"
              accountNumber="8940510733"
              accountName="Fitriana Teguh Rahayu"
            />
          </AnimatedText> */}
          <AnimatedText className="mb-5">
            <Gift
              name="Fitriana/Donny"
              phone="081234567890"
              address="Jl. AMD Pegandon RT 02 RW 01, Pegandon, Kendal, Jawa Tengah"
            />
          </AnimatedText>
        </div>
      </WeddingSection>

      <WeddingSection
        ref={footerRef}
        active={isFooterInView}
        decorations={heroDecorations}
      >
        <div className="z-20 px-6 my-10">
          <AnimatedText>
            <div className="flex items-center justify-center">
              <img src={character} alt="Character" width={250} />
            </div>
          </AnimatedText>
          <AnimatedText className="font-bold text-4xl mb-5">
            <p style={{ fontFamily: "Parisienne" }}>Terima Kasih</p>
          </AnimatedText>
          <AnimatedText className="mb-10">
            <p>
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu
              kepada kami.
            </p>
          </AnimatedText>
          <AnimatedText className="mb-20">
            <p className="font-bold text-lg">See you on our wedding day!</p>
          </AnimatedText>
          <AnimatedText className="mb-3">
            <p className=" text-lg">Kami Yang Berbahagia</p>
          </AnimatedText>
          <AnimatedText className="mb-20">
            <p className="text-[#664125] font-bold text-4xl">Ayuk & Donny</p>
          </AnimatedText>
        </div>
      </WeddingSection>
    </>
  );
}

export default App;
