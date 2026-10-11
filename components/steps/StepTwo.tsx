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

                <section className="mx-auto max-w-xl text-center">
                    {/* หัวข้อหลัก */}
                    <h2 className="text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
                        ช่วงนี้เป็นอย่างไงบ้างคะ
                    </h2>

                    {/* เนื้อหาข้อความให้กำลังใจ */}
                    <div className="mt-8 space-y-6 text-base leading-8 text-[#80616b] md:text-lg">
                        <p className="text-xl font-medium text-[#d27689] md:text-2xl">
                            เธออาจจะกำลังคิดมาก เหนื่อยล้าหมดเเรง
                        </p>

                        <p className="font-medium text-[#d27689]">
                            เค้าขอส่งกำลังใจให้เธอผ่านตัวอักษรเหล่านี้นะ 🤍
                        </p>

                        <p>
                            ถ้ากำลังรู้สึกเหนื่อยล้าหรือแบกอะไรไว้เยอะแยะไปหมด
                            อย่าลืมหาเวลาถอยออกมาพักผ่อนสักแป๊บหนึ่งนะ
                            ชีวิตไม่จำเป็นต้องเร่งรีบตลอดเวลา และเธอไม่จำเป็นต้องเข้มแข็งตลอดเวลาก็ได้
                        </p>

                        <p>
                            กินของอร่อยๆ นอนหลับให้เต็มอิ่ม และปล่อยให้ตัวเองได้พักกายพักใจบ้าง
                            สิ่งที่ทำอยู่มันสำคัญก็จริง... แต่ตัวเธอน่ะ
                            <span className="font-semibold text-[#583943]"> สำคัญที่สุด</span> เลยนะ
                        </p>

                        <p className="pt-2 font-semibold text-[#d27689]">
                            โอบกอดตัวเองเบาๆ เค้าเป็นห่วงและคอยซัพพอร์ตเสมอเสมอ 🤍
                        </p>
                    </div>
                </section>

                <NextButton onClick={onNext}>
                    Next →
                </NextButton>
            </div>
        </section>
    );
}