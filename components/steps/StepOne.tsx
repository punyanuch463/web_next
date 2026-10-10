"use client";

import { useState } from "react";

interface StepOneProps {
    code: string;
    setCode: (value: string) => void;
    error: string;
    shake: boolean;
    onSubmit: () => void;
    hintSolved: boolean;
}

export default function StepOne({
    code,
    setCode,
    error,
    shake,
    onSubmit,
    hintSolved,
}: StepOneProps) {
    const [showCode, setShowCode] = useState(false);

    return (
        <section className={`page-enter text-center ${shake ? "shake" : ""}`}>
            <div className="heart-pulse mb-8 text-6xl"> ♡♡♡♡ </div>
            <p className="mb-3 text-sm tracking-[0.3em] text-[#b9828e]">
                A LITTLE SURPRISE
            </p>
            <h1 className="text-4xl font-bold text-[#583943] md:text-6xl">
                สำหรับเธอ
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#96717b] md:text-base">
                มีบางอย่างที่เค้าอยากให้เธอเปิดดู <br />
                แต่ก่อนอื่น...ขอรหัสผ่านหน่อยนะ 💕
            </p>

            <div className="mx-auto mt-10 max-w-sm rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-xl shadow-pink-100 backdrop-blur">
                <div className="mb-5 text-3xl"> 🔐 </div>
                {hintSolved ? (
                    <p className="mb-4 text-sm leading-7 text-[#8e6873]">
                        เก่งงมากกก 💕
                        <br />
                        รหัสคือ... <span className="font-bold text-[#e8899c]">
                            วันเกิดเธอเลยย 🎂
                        </span>
                    </p>
                ) : (
                    <p className="mb-4 text-sm leading-7 text-[#8e6873]">
                        รหัสที่เรารู้กันนะ เช่น วันวาเลนไทน์ 1402 ,
                        วันมาฆบูชา 2127 ,
                        <br />
                        วันสำคัญต่างๆ (วันเดือน)
                    </p>
                )}

                {/* Password Input */}
                <div className="relative">
                    <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onSubmit();
                            }
                        }}
                        type={showCode ? "text" : "password"}
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="ใส่รหัสตรงนี้"
                        className="w-full rounded-2xl border border-pink-100 bg-[#fffafb] px-5 py-4 pr-14 text-center text-lg tracking-[0.4em] text-[#583943] outline-none transition focus:border-[#e8899c] focus:ring-4 focus:ring-pink-100"
                    />

                    {/* ปุ่มเปิด / ปิดรหัส */}
                    <button
                        type="button"
                        onClick={() => setShowCode((current) => !current)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#b9828e] transition hover:scale-110"
                        aria-label={showCode ? "ซ่อนรหัส" : "แสดงรหัส"}
                    >
                        {showCode ? "🙈" : "👁️"}
                    </button>
                </div>

                {/* Error Message */}
                {error && <p className="mt-4 text-sm text-[#d66f85]">{error}</p>}

                {/* Submit Button */}
                <button
                    type="button"
                    onClick={onSubmit}
                    className="love-button mt-5 w-full rounded-2xl bg-[#e8899c] py-4 font-semibold text-white shadow-lg shadow-pink-200/50 transition hover:bg-[#df748d]"
                >
                    เปิดดู ♡
                </button>
            </div>

            <p className="mt-8 text-xs text-[#bd929d]">made with a little bit of love ♡</p>
        </section>
    );
}