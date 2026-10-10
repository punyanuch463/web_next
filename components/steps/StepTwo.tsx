import NextButton from "../NextButton";

interface StepTwoProps {
    onNext: () => void;
}

export default function StepTwo({
    onNext,
}: StepTwoProps) {
    return (
        <section className="page-enter text-center">
            <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 px-7 py-12 shadow-xl shadow-pink-100 backdrop-blur md:px-14 md:py-16">
                <div className="mb-7 text-6xl">
                    🌷
                </div>

                <p className="text-sm tracking-[0.25em] text-[#b9828e]">
                    FOR YOU
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
                    ช่วงนี้เป็นไงบ้าง
                </h2>

                <div className="mx-auto mt-8 max-w-xl space-y-5 text-base leading-8 text-[#80616b] md:text-lg">
                    <p>เหนื่อยมั้ย</p>

                    <p>
                        พักผ่อนบ้างหรือยัง
                        <br />
                        อย่าลืมดูแลตัวเองด้วยนะ
                    </p>

                    <p className="font-medium text-[#d27689]">
                        เป็นห่วงนะ 🤍
                    </p>
                </div>

                <NextButton onClick={onNext}>
                    อ่านต่อไปนะ →
                </NextButton>
            </div>
        </section>
    );
}