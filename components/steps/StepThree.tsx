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
                    แล้วก็... อีกเรื่องหนึ่ง
                </h2>

                <div className="mx-auto mt-8 max-w-xl text-base leading-9 text-[#80616b] md:text-lg">
                    <p className="font-medium text-[#d27689]">
                        เค้ามีเรื่องที่อยากจะบอก อะเเฮ่มๆ..
                    </p>

                    <p className="mt-3">
                        ถ้าที่ผ่านมาเค้าทำตัวไม่น่ารัก งอแง
                        <br />
                        หรือพูดอะไรที่ไปเพิ่มความเครียดให้เธอโดยไม่ตั้งใจ หรือทำให้เธอรู้สึกไม่ดี
                        <br />
                        เค้าอยากขอโทษด้วยนะคะ 🤍
                    </p>



                    <p className="mt-6 font-medium text-[#d27689]">
                        เค้าอยากเป็นความสบายใจให้เธอ เค้าไม่อยากทำให้เธอต้องเหนื่อยใจเพิ่มเลยนะ
                    </p>
                </div>

                <NextButton onClick={onNext}>
                    มีของมาง้อด้วยนะ →
                </NextButton>
            </div>
        </section>
    );
}