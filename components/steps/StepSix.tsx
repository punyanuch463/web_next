"use client";

import { useState } from "react";

export default function StepSix() {
    const [started, setStarted] = useState(false);

    return (
        <section className="page-enter text-center">
            <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
                {!started ? (
                    <>
                        <div className="heart-pulse mb-8 text-7xl">
                            ❤️
                        </div>

                        <p className="text-sm tracking-[0.25em] text-[#b9828e]">
                            OUR STORY
                        </p>

                        <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
                            เวลาที่เราคุยกัน
                        </h2>

                        <div className="mx-auto mt-8 max-w-xl text-base leading-9 text-[#80616b] md:text-lg">
                            <p>
                                จากวันแรกที่เราเริ่มคุยกัน
                                <br />
                                จนถึงวันนี้
                            </p>

                            <p className="mt-5">
                                เวลาผ่านไปตั้ง 2 เดือนแล้ว
                                <br />
                                แต่เค้ายังรู้สึกดีที่มีเธออยู่ตรงนี้เสมอ
                            </p>

                            <p className="mt-5 font-medium text-[#d27689]">
                                ขอบคุณที่เข้ามาเป็นส่วนหนึ่ง
                                <br />
                                ในทุก ๆ วันของเค้านะ
                            </p>
                        </div>

                        <button
                            onClick={() => setStarted(true)}
                            className="
                love-button
                mt-10
                rounded-full
                bg-[#e8899c]
                px-10
                py-4
                text-lg
                font-bold
                text-white
                shadow-xl
                shadow-pink-200/60
                hover:bg-[#df748d]
              "
                        >
                            ไปกันต่ออออ 💕
                        </button>
                    </>
                ) : (
                    <div className="page-enter">
                        <div className="heart-pulse text-8xl">
                            💕
                        </div>

                        <h2 className="mt-8 text-4xl font-bold text-[#583943] md:text-6xl">
                            ไปกันต่ออออออ
                        </h2>

                        <p className="mt-6 text-lg leading-9 text-[#80616b]">
                            ยังมีอีกตั้งหลายเดือน
                            <br />
                            หลายปี
                            <br />
                            และหลายเรื่องให้เราได้เจอด้วยกันนะ
                        </p>

                        <p className="mt-8 text-xl font-bold text-[#d27689]">
                            รักนะ ❤️
                        </p>

                        <div className="mt-10 text-4xl tracking-widest">
                            ♡ ♡ ♡
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}