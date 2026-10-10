// "use client";

// import { useEffect, useState } from "react";

// type Step = 1 | 2 | 3 | 4 | 5 | 6;

// const CORRECT_CODE = "0208";

// export default function Home() {
//   const [step, setStep] = useState<Step>(1);
//   const [code, setCode] = useState("");
//   const [error, setError] = useState("");
//   const [shake, setShake] = useState(false);

//   const [giftOpened, setGiftOpened] = useState(false);

//   const [openedRooms, setOpenedRooms] = useState<number[]>([]);

//   const [transitioning, setTransitioning] = useState(false);

//   const goNext = () => {
//     setTransitioning(true);

//     setTimeout(() => {
//       setStep((current) => {
//         if (current >= 6) return 6;
//         return (current + 1) as Step;
//       });

//       setTransitioning(false);

//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }, 250);
//   };

//   const checkCode = () => {
//     if (code === CORRECT_CODE) {
//       setError("");
//       goNext();
//       return;
//     }

//     setError("รหัสไม่ถูกต้องนะ 🥺");
//     setShake(true);

//     setTimeout(() => {
//       setShake(false);
//     }, 500);
//   };

//   const openGift = () => {
//     setGiftOpened(true);

//     setTimeout(() => {
//       // ไม่ต้องไปหน้าถัดไปทันที
//       // ให้ผู้ใช้เห็นแซลม่อนก่อน
//     }, 500);
//   };

//   const openRoom = (roomNumber: number) => {
//     if (openedRooms.includes(roomNumber)) return;

//     setOpenedRooms((current) => [...current, roomNumber]);
//   };

//   return (
//     <main className="love-background relative min-h-screen">
//       <FloatingHearts />

//       <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
//         <div
//           className={`w-full max-w-3xl ${transitioning ? "opacity-0" : "opacity-100"
//             } transition-opacity duration-300`}
//         >
//           {step === 1 && (
//             <StepOne
//               code={code}
//               setCode={setCode}
//               error={error}
//               shake={shake}
//               onSubmit={checkCode}
//             />
//           )}

//           {step === 2 && <StepTwo onNext={goNext} />}

//           {step === 3 && <StepThree onNext={goNext} />}

//           {step === 4 && (
//             <StepFour
//               giftOpened={giftOpened}
//               onOpenGift={openGift}
//               onNext={goNext}
//             />
//           )}

//           {step === 5 && (
//             <StepFive
//               openedRooms={openedRooms}
//               onOpenRoom={openRoom}
//               onNext={goNext}
//             />
//           )}

//           {step === 6 && <StepSix />}
//         </div>
//       </div>
//     </main>
//   );
// }

// /* =====================================================
//    Floating Hearts
// ===================================================== */

// function FloatingHearts() {
//   const hearts = [
//     {
//       left: "5%",
//       delay: "0s",
//       duration: "12s",
//       size: "18px",
//     },
//     {
//       left: "15%",
//       delay: "4s",
//       duration: "15s",
//       size: "13px",
//     },
//     {
//       left: "27%",
//       delay: "2s",
//       duration: "11s",
//       size: "20px",
//     },
//     {
//       left: "42%",
//       delay: "6s",
//       duration: "16s",
//       size: "14px",
//     },
//     {
//       left: "55%",
//       delay: "1s",
//       duration: "13s",
//       size: "18px",
//     },
//     {
//       left: "68%",
//       delay: "5s",
//       duration: "14s",
//       size: "12px",
//     },
//     {
//       left: "80%",
//       delay: "3s",
//       duration: "17s",
//       size: "19px",
//     },
//     {
//       left: "92%",
//       delay: "7s",
//       duration: "12s",
//       size: "14px",
//     },
//   ];

//   return (
//     <>
//       {hearts.map((heart, index) => (
//         <div
//           key={index}
//           className="floating-heart"
//           style={{
//             left: heart.left,
//             animationDelay: heart.delay,
//             animationDuration: heart.duration,
//             fontSize: heart.size,
//           }}
//         >
//           ♡
//         </div>
//       ))}
//     </>
//   );
// }

// /* =====================================================
//    Common Button
// ===================================================== */

// function NextButton({
//   children,
//   onClick,
// }: {
//   children: React.ReactNode;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className="love-button mt-8 rounded-full bg-[#e8899c] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200/50 hover:bg-[#df748d]"
//     >
//       {children}
//     </button>
//   );
// }

// /* =====================================================
//    Step 1
// ===================================================== */

// function StepOne({
//   code,
//   setCode,
//   error,
//   shake,
//   onSubmit,
// }: {
//   code: string;
//   setCode: (value: string) => void;
//   error: string;
//   shake: boolean;
//   onSubmit: () => void;
// }) {
//   function setError(arg0: string) {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <section className={`page-enter text-center ${shake ? "shake" : ""}`}>
//       <div className="mb-8 text-6xl heart-pulse">♡</div>

//       <p className="mb-3 text-sm tracking-[0.3em] text-[#b9828e]">
//         A LITTLE SURPRISE
//       </p>

//       <h1 className="text-4xl font-bold text-[#583943] md:text-6xl">
//         สำหรับเธอ
//       </h1>

//       <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#96717b] md:text-base">
//         มีบางอย่างที่เค้าอยากให้เธอเปิดดู
//         <br />
//         แต่ก่อนอื่น...ขอรหัสผ่านหน่อยนะ 💕
//       </p>

//       <div className="mx-auto mt-10 max-w-sm rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-xl shadow-pink-100 backdrop-blur">
//         <div className="mb-5 text-3xl">🔐</div>

//         <p className="mb-4 text-sm text-[#8e6873]">
//           รหัสที่เรารู้กันนะ
//         </p>

//         <input
//           value={code}
//           onChange={(e) => {
//             setCode(e.target.value);
//             setError("");
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               onSubmit();
//             }
//           }}
//           type="password"
//           inputMode="numeric"
//           maxLength={10}
//           placeholder="ใส่รหัสตรงนี้"
//           className="w-full rounded-2xl border border-pink-100 bg-[#fffafb] px-5 py-4 text-center text-lg tracking-[0.4em] text-[#583943] outline-none transition focus:border-[#e8899c] focus:ring-4 focus:ring-pink-100"
//         />

//         {error && (
//           <p className="mt-4 text-sm text-[#d66f85]">
//             {error}
//           </p>
//         )}

//         <button
//           onClick={onSubmit}
//           className="love-button mt-5 w-full rounded-2xl bg-[#e8899c] py-4 font-semibold text-white shadow-lg shadow-pink-200/50 hover:bg-[#df748d]"
//         >
//           เปิดดู ♡
//         </button>
//       </div>

//       <p className="mt-8 text-xs text-[#bd929d]">
//         made with a little bit of love ♡
//       </p>
//     </section>
//   );
// }

// /* =====================================================
//    Step 2
// ===================================================== */

// function StepTwo({ onNext }: { onNext: () => void }) {
//   return (
//     <section className="page-enter text-center">
//       <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
//         <div className="mb-7 text-6xl">🌷</div>

//         <p className="text-sm tracking-[0.25em] text-[#b9828e]">
//           FOR YOU
//         </p>

//         <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
//           ช่วงนี้เป็นไงบ้าง
//         </h2>

//         <div className="mx-auto mt-8 max-w-xl space-y-5 text-base leading-8 text-[#80616b] md:text-lg">
//           <p>เหนื่อยมั้ย</p>

//           <p>
//             พักผ่อนบ้างหรือยัง
//             <br />
//             อย่าลืมดูแลตัวเองด้วยนะ
//           </p>

//           <p className="font-medium text-[#d27689]">
//             เป็นห่วงนะ 🤍
//           </p>
//         </div>

//         <NextButton onClick={onNext}>
//           อ่านต่อไปนะ →
//         </NextButton>
//       </div>
//     </section>
//   );
// }

// /* =====================================================
//    Step 3
// ===================================================== */

// function StepThree({ onNext }: { onNext: () => void }) {
//   return (
//     <section className="page-enter text-center">
//       <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
//         <div className="mb-7 text-6xl">🥺</div>

//         <p className="text-sm tracking-[0.25em] text-[#b9828e]">
//           JUST IN CASE
//         </p>

//         <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
//           ถ้าเค้าทำตัวไม่น่ารัก
//         </h2>

//         <div className="mx-auto mt-8 max-w-xl text-base leading-9 text-[#80616b] md:text-lg">
//           <p>
//             ขอโทษด้วยนะคะ
//           </p>

//           <p className="mt-5">
//             บางทีเค้าอาจจะงอแง
//             <br />
//             บางทีอาจจะพูดอะไรไม่ดี
//             <br />
//             หรือทำให้เธอรู้สึกไม่ดี
//           </p>

//           <p className="mt-6 font-medium text-[#d27689]">
//             แต่เค้าไม่ได้อยากทำให้เธอเสียใจเลยนะ 🤍
//           </p>
//         </div>

//         <NextButton onClick={onNext}>
//           มีของมาง้อด้วยนะ →
//         </NextButton>
//       </div>
//     </section>
//   );
// }

// /* =====================================================
//    Step 4
// ===================================================== */

// function StepFour({
//   giftOpened,
//   onOpenGift,
//   onNext,
// }: {
//   giftOpened: boolean;
//   onOpenGift: () => void;
//   onNext: () => void;
// }) {
//   return (
//     <section className="page-enter text-center">
//       <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
//         <p className="text-sm tracking-[0.25em] text-[#b9828e]">
//           A LITTLE GIFT
//         </p>

//         <h2 className="mt-5 text-3xl font-bold text-[#583943] md:text-5xl">
//           ถ้างอน...
//         </h2>

//         <p className="mt-5 text-base leading-8 text-[#80616b] md:text-lg">
//           เค้าจะเซ่นไหว้ด้วย
//           <br />
//           <span className="font-bold text-[#d27689]">
//             แซลม่อนนนนน 🐟
//           </span>
//         </p>

//         {!giftOpened ? (
//           <button
//             onClick={onOpenGift}
//             className="group mx-auto mt-10 block"
//             aria-label="เปิดกล่อง"
//           >
//             <div className="gift-box relative">
//               <div className="text-[9rem] drop-shadow-xl transition group-hover:scale-105 md:text-[11rem]">
//                 🎁
//               </div>

//               <div className="mt-2 rounded-full bg-white/80 px-5 py-2 text-sm text-[#9a707b] shadow-sm">
//                 คลิกเพื่อเปิดกล่อง ♡
//               </div>
//             </div>
//           </button>
//         ) : (
//           <div className="mt-10">
//             <div className="salmon text-[8rem] md:text-[10rem]">
//               🐟
//             </div>

//             <h3 className="mt-4 text-2xl font-bold text-[#583943]">
//               แซลม่อนมาแล้ววว 🐟
//             </h3>

//             <p className="mt-3 text-[#96717b]">
//               งอนแค่ไหนก็ยอมแล้วนะ
//             </p>

//             <NextButton onClick={onNext}>
//               ไปต่อกันนะ →
//             </NextButton>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* =====================================================
//    Step 5
// ===================================================== */

// function StepFive({
//   openedRooms,
//   onOpenRoom,
//   onNext,
// }: {
//   openedRooms: number[];
//   onOpenRoom: (roomNumber: number) => void;
//   onNext: () => void;
// }) {
//   const allOpened = openedRooms.length === 4;

//   return (
//     <section className="page-enter text-center">
//       <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/70 bg-white/70 px-5 py-10 shadow-xl shadow-pink-100 backdrop-blur md:px-12 md:py-14">
//         <p className="text-sm tracking-[0.25em] text-[#b9828e]">
//           TWO MONTHS
//         </p>

//         <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
//           ผ่านมา 2 เดือนแล้วนะ
//         </h2>

//         <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#80616b] md:text-lg">
//           แต่เค้าก็ยังมี
//           <br />
//           <span className="font-bold text-[#d27689]">
//             เธอเต็มทั้ง 4 ห้องเลยนะ
//           </span>
//           🏠💕
//         </p>

//         <p className="mt-4 text-sm text-[#aa818c]">
//           ลองเปิดประตูดูสิ
//         </p>

//         <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
//           {[1, 2, 3, 4].map((room) => {
//             const isOpen = openedRooms.includes(room);

//             return (
//               <button
//                 key={room}
//                 onClick={() => onOpenRoom(room)}
//                 className="door group mx-auto h-48 w-full max-w-[150px] outline-none"
//               >
//                 <div
//                   className={`relative h-full w-full rounded-2xl ${isOpen ? "door-open" : ""
//                     }`}
//                 >
//                   {/* Inside room */}
//                   <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-[#fff0f3] shadow-inner">
//                     <div
//                       className={`text-6xl ${isOpen ? "room-heart" : "opacity-0"
//                         }`}
//                     >
//                       ❤️
//                     </div>
//                   </div>

//                   {/* Door */}
//                   <div className="door-inner absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl border-4 border-[#d998a5] bg-[#e9aab7] shadow-lg">
//                     <span className="text-4xl">🚪</span>

//                     <span className="mt-3 text-sm font-semibold text-white">
//                       ห้อง {room}
//                     </span>

//                     <span className="mt-2 text-xs text-white/80">
//                       {isOpen ? "เปิดแล้ว ♡" : "เปิดดู"}
//                     </span>
//                   </div>
//                 </div>
//               </button>
//             );
//           })}
//         </div>

//         <div className="mt-8">
//           <p className="text-sm text-[#a77b87]">
//             เปิดแล้ว {openedRooms.length}/4 ห้อง
//           </p>
//         </div>

//         {allOpened && (
//           <div className="page-enter">
//             <p className="mx-auto mt-8 max-w-xl text-base font-medium leading-8 text-[#d27689] md:text-lg">
//               เห็นมั้ย...
//               <br />
//               เปิดไปห้องไหนก็เจอเธออยู่ดี ❤️
//             </p>

//             <NextButton onClick={onNext}>
//               มีอีกอย่างอยากบอก... →
//             </NextButton>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* =====================================================
//    Step 6
// ===================================================== */

// function StepSix() {
//   const [started, setStarted] = useState(false);

//   return (
//     <section className="page-enter text-center">
//       <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
//         {!started ? (
//           <>
//             <div className="heart-pulse mb-8 text-7xl">
//               ❤️
//             </div>

//             <p className="text-sm tracking-[0.25em] text-[#b9828e]">
//               OUR STORY
//             </p>

//             <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
//               เวลาที่เราคุยกัน
//             </h2>

//             <div className="mx-auto mt-8 max-w-xl text-base leading-9 text-[#80616b] md:text-lg">
//               <p>
//                 จากวันแรกที่เราเริ่มคุยกัน
//                 <br />
//                 จนถึงวันนี้
//               </p>

//               <p className="mt-5">
//                 เวลาผ่านไปตั้ง 2 เดือนแล้ว
//                 <br />
//                 แต่เค้ายังรู้สึกดีที่มีเธออยู่ตรงนี้เสมอ
//               </p>

//               <p className="mt-5 font-medium text-[#d27689]">
//                 ขอบคุณที่เข้ามาเป็นส่วนหนึ่ง
//                 <br />
//                 ในทุก ๆ วันของเค้านะ
//               </p>
//             </div>

//             <button
//               onClick={() => setStarted(true)}
//               className="love-button mt-10 rounded-full bg-[#e8899c] px-10 py-4 text-lg font-bold text-white shadow-xl shadow-pink-200/60 hover:bg-[#df748d]"
//             >
//               ไปกันต่ออออ 💕
//             </button>
//           </>
//         ) : (
//           <div className="page-enter">
//             <div className="text-8xl heart-pulse">
//               💕
//             </div>

//             <h2 className="mt-8 text-4xl font-bold text-[#583943] md:text-6xl">
//               ไปกันต่ออออออ
//             </h2>

//             <p className="mt-6 text-lg leading-9 text-[#80616b]">
//               ยังมีอีกตั้งหลายเดือน
//               <br />
//               หลายปี
//               <br />
//               และหลายเรื่องให้เราได้เจอด้วยกันนะ
//             </p>

//             <p className="mt-8 text-xl font-bold text-[#d27689]">
//               รักนะ ❤️
//             </p>

//             <div className="mt-10 text-4xl tracking-widest">
//               ♡ ♡ ♡
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

import FloatingHearts from "@/components/FloatingHearts";

import StepOne from "@/components/steps/StepOne";
import StepTwo from "@/components/steps/StepTwo";
import StepThree from "@/components/steps/StepThree";
import StepFour from "@/components/steps/StepFour";
import StepFive from "@/components/steps/StepFive";
import StepSix from "@/components/steps/StepSix";

import { LOVE_CONFIG } from "@/constants/love";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function Home() {
  const [step, setStep] = useState<Step>(1);

  const [code, setCode] = useState("");

  const [error, setError] = useState("");

  const [shake, setShake] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [openedRooms, setOpenedRooms] = useState<number[]>([]);

  const goNext = () => {
    setStep((current) => {
      if (current >= 6) {
        return 6;
      }

      return (current + 1) as Step;
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkCode = () => {
    if (code === LOVE_CONFIG.correctCode) {
      setError("");
      goNext();
      return;
    }

    setError("รหัสไม่ถูกต้องนะ 🥺");

    setShake(true);

    setTimeout(() => {
      setShake(false);
    }, 500);
  };

  const openGift = () => {
    setGiftOpened(true);
  };

  const openRoom = (roomNumber: number) => {
    if (openedRooms.includes(roomNumber)) {
      return;
    }

    setOpenedRooms((current) => [
      ...current,
      roomNumber,
    ]);
  };

  return (
    <main className="love-background relative min-h-screen">
      <FloatingHearts />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="w-full max-w-3xl">

          {step === 1 && (
            <StepOne
              code={code}
              setCode={setCode}
              error={error}
              shake={shake}
              onSubmit={checkCode}
            />
          )}

          {step === 2 && (
            <StepTwo
              onNext={goNext}
            />
          )}

          {step === 3 && (
            <StepThree
              onNext={goNext}
            />
          )}

          {step === 4 && (
            <StepFour
              giftOpened={giftOpened}
              onOpenGift={openGift}
              onNext={goNext}
            />
          )}

          {step === 5 && (
            <StepFive
              openedRooms={openedRooms}
              onOpenRoom={openRoom}
              onNext={goNext}
            />
          )}

          {step === 6 && <StepSix />}

        </div>
      </div>
    </main>
  );
}