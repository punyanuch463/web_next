"use client";

import { useState } from "react";

import FloatingHearts from "@/components/FloatingHearts";

import StepOne from "@/components/steps/StepOne";
import StepTwo from "@/components/steps/StepTwo";
import StepThree from "@/components/steps/StepThree";
import StepFour from "@/components/steps/StepFour";
import StepFive from "@/components/steps/StepFive";
import StepSix from "@/components/steps/StepSix";
import HintGame from "@/components/HintGame";

import { LOVE_CONFIG } from "@/constants/love";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function Home() {
  const [step, setStep] = useState<Step>(1);

  const [code, setCode] = useState("");

  const [error, setError] = useState("");

  const [shake, setShake] = useState(false);

  const [giftOpened, setGiftOpened] = useState(false);

  const [openedRooms, setOpenedRooms] = useState<number[]>([]);
  const [hintSolved, setHintSolved] = useState(false);
  // จำนวนครั้งที่กรอกรหัสผิด
  const [wrongAttempts, setWrongAttempts] = useState(0);

  // แสดงเกม Hint หรือไม่
  const [showHintGame, setShowHintGame] = useState(false);

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
    // รหัสที่ถูกต้อง รองรับหลายรูปแบบ
    const correctCodes = ["1703", "173", "17/3"];

    if (correctCodes.includes(code.trim())) {
      setError("");
      setWrongAttempts(0);
      setHintSolved(false);
      goNext();
      return;
    }

    // รหัสไม่ถูกต้อง
    const newAttempts = wrongAttempts + 1;
    setWrongAttempts(newAttempts);

    // Reset ช่องกรอกรหัส
    setCode("");

    // เล่น Animation สั่น (Shake)
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500);

    // กรอกผิดครบ 3 ครั้ง เข้าสู่ Hint Game
    if (newAttempts >= 3) {
      setError("");
      setShowHintGame(true);
      return;
    }

    // แจ้งเตือนจำนวนครั้งที่กรอกผิด
    setError(`รหัสไม่ถูกต้องนะ 🥺 (${newAttempts}/3)`);
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


  // ถ้าผิดครบ 3 ครั้ง ให้เล่นเกม Hint
  if (showHintGame) {
    return (
      <main className="love-background relative min-h-screen">
        <FloatingHearts />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
          <div className="w-full max-w-3xl">
            <HintGame
              onSuccess={() => {
                setShowHintGame(false);
                setHintSolved(true);
                setWrongAttempts(0);
                setCode("");
                setError("");
              }}
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="love-background relative min-h-screen">
      <FloatingHearts />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="w-full max-w-3xl">

          {step === 1 && (
            <>
              {/* {hintSolved && (
                <div className="mb-6 rounded-[2rem] border border-pink-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur-md">
                  <div className="mb-2 text-4xl">
                    💗
                  </div>

                  <p className="text-lg font-semibold text-pink-500">
                    เก่งมากกก 🥰
                  </p>

                  <p className="mt-2 text-gray-600">
                    รหัสของ 4 ตัวนี้...
                  </p>

                  <p className="mt-1 text-xl font-bold text-pink-500">
                    คือวันเกิดเธอไง 💕
                  </p>
                </div>
              )} */}

              <StepOne
                code={code}
                setCode={setCode}
                error={error}
                shake={shake}
                onSubmit={checkCode}
                hintSolved={hintSolved}
              />
            </>
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