import NextButton from "../NextButton";

interface StepFourProps {
    giftOpened: boolean;
    onOpenGift: () => void;
    onNext: () => void;
}

export default function StepFour({
    giftOpened,
    onOpenGift,
    onNext,
}: StepFourProps) {
    return (
        <section className="page-enter text-center">
            <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
                <p className="text-sm tracking-[0.25em] text-[#b9828e]">
                    A LITTLE GIFT
                </p>

                <h2 className="mt-5 text-3xl font-bold text-[#583943] md:text-5xl">
                    ถ้างอน...
                </h2>

                <p className="mt-5 text-base leading-8 text-[#80616b] md:text-lg">
                    เค้าจะเซ่นไหว้ด้วย
                    <br />

                    <span className="font-bold text-[#d27689]">
                        แซลม่อนนนนน 🐟
                    </span>
                </p>

                {!giftOpened ? (
                    <button
                        onClick={onOpenGift}
                        className="group mx-auto mt-10 block"
                    >
                        <div className="gift-box relative">
                            <div className="text-[9rem] drop-shadow-xl transition group-hover:scale-105 md:text-[11rem]">
                                🎁
                            </div>

                            <div className="mt-2 rounded-full bg-white/80 px-5 py-2 text-sm text-[#9a707b] shadow-sm">
                                คลิกเพื่อเปิดกล่อง ♡
                            </div>
                        </div>
                    </button>
                ) : (
                    <div className="mt-10">
                        <div className="salmon flex justify-center">
                            <img
                                src="/images/salmon.png"
                                alt="ปลาแซลมอน"
                                className="w-48 md:w-64 object-contain"
                            />
                        </div>
                        {/* <div className="salmon text-[8rem] md:text-[10rem]">
                            🐟
                        </div> */}

                        <h3 className="mt-4 text-2xl font-bold text-[#583943]">
                            แซลม่อนมาแล้ววว 🐟
                        </h3>

                        <p className="mt-3 text-[#96717b]">
                            งอนแค่ไหนก็ยอมแล้วนะ
                        </p>

                        <NextButton onClick={onNext}>
                            ไปต่อกันนะ →
                        </NextButton>
                    </div>
                )}
            </div>
        </section>
    );
}