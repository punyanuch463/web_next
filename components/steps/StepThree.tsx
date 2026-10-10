import NextButton from "../NextButton";

interface StepThreeProps {
    onNext: () => void;
}

export default function StepThree({
    onNext,
}: StepThreeProps) {
    return (
        <section className="page-enter text-center">
            <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
                <div className="mb-7 text-6xl">
                    🥺
                </div>

                <p className="text-sm tracking-[0.25em] text-[#b9828e]">
                    JUST IN CASE
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
                    ถ้าเค้าทำตัวไม่น่ารัก
                </h2>

                <div className="mx-auto mt-8 max-w-xl text-base leading-9 text-[#80616b] md:text-lg">
                    <p>
                        ขอโทษด้วยนะคะ
                    </p>

                    <p className="mt-5">
                        บางทีเค้าอาจจะงอแง
                        <br />
                        บางทีอาจจะพูดอะไรไม่ดี
                        <br />
                        หรือทำให้เธอรู้สึกไม่ดี
                    </p>

                    <p className="mt-6 font-medium text-[#d27689]">
                        แต่เค้าไม่ได้อยากทำให้เธอเสียใจเลยนะ 🤍
                    </p>
                </div>

                <NextButton onClick={onNext}>
                    มีของมาง้อด้วยนะ →
                </NextButton>
            </div>
        </section>
    );
}