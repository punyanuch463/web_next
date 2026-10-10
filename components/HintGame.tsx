"use client";

import { useState } from "react";

interface HintGameProps {
    onSuccess: () => void;
}

export default function HintGame({
    onSuccess,
}: HintGameProps) {
    const [answer, setAnswer] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);
    const acceptedAnswers = [
        "เป็นๆซีฟู้ด",
        "เป็นๆ",
        "เป็นเป็น",
        "ร้านซีฟู้ด",
        "ชีฟู้ด",
    ];
    const correctAnswer = "เป็นเป็นซีฟู้ด";

    const normalizeAnswer = (value: string) => {
        return value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[.,!?。，！？'"“”‘’]/g, "");
    };

    const checkAnswer = () => {
        const normalizedAnswer = normalizeAnswer(answer);

        const isCorrect = acceptedAnswers.some((keyword) =>
            normalizedAnswer.includes(normalizeAnswer(keyword))
        );

        if (isCorrect) {
            setMessage("ถูกต้องแล้ว 💖");

            setTimeout(() => {
                onSuccess();
            }, 800);

            return;
        }

        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        setMessage("ยังไม่ใช่น้า 🥺 ลองคิดอีกนิด");
        setAnswer("");
    };

    return (
        <section className="page-enter">
            <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md sm:p-12">

                <div className="mb-6 text-6xl">
                    💡
                </div>

                <h1 className="mb-3 text-3xl font-bold text-pink-500">
                    เอาล่ะ... มาเล่นเกมกัน 💕
                </h1>

                <p className="mb-8 text-gray-600">
                    รหัสลับจำไม่ได้ใช่ไหม?
                    <br />
                    งั้นลองตอบคำถามจาก Hint นี้ดูนะ
                </p>

                <div className="mb-8 rounded-3xl bg-pink-50 p-6">
                    <p className="mb-3 text-sm text-pink-400">
                        HINT 💌
                    </p>

                    <p className="text-xl font-semibold text-gray-700">
                        ชื่อร้านอาหารที่เราไปกินกันครั้งเเรก
                    </p>

                    <p className="mt-3 text-sm text-gray-400">
                        ใบ้ให้ว่า... เเถว MRTสรินธร เป็นบุฟเฟต์ ❤️
                    </p>
                </div>

                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            checkAnswer();
                        }
                    }}
                    placeholder="พิมพ์คำตอบ..."
                    className="mb-4 w-full rounded-2xl border border-pink-200 bg-white px-5 py-4 text-center text-lg outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                />

                <button
                    onClick={checkAnswer}
                    className="w-full rounded-2xl bg-pink-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-pink-600 active:scale-95"
                >
                    เดาคำตอบ 💗
                </button>

                {message && (
                    <p className="mt-5 text-pink-500">
                        {message}
                    </p>
                )}

                {attempts > 0 && (
                    <p className="mt-2 text-sm text-gray-400">
                        ลองไปแล้ว {attempts} ครั้ง
                    </p>
                )}

            </div>
        </section>
    );
}