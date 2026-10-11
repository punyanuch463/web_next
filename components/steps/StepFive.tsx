import NextButton from "../NextButton";

interface StepFiveProps {
    openedRooms: number[];
    onOpenRoom: (roomNumber: number) => void;
    onNext: () => void;
}

export default function StepFive({
    openedRooms,
    onOpenRoom,
    onNext,
}: StepFiveProps) {
    const allOpened = openedRooms.length === 4;
    const roomImages = [
        "/images/rooms/room1.jpg",
        "/images/rooms/room2.jpg",
        "/images/rooms/room3.jpg",
        "/images/rooms/room4.jpg",
    ];
    return (
        <section className="page-enter text-center">
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/70 bg-white/70 px-5 py-10 shadow-xl shadow-pink-100 backdrop-blur md:px-12 md:py-14">
                <p className="text-sm tracking-[0.25em] text-[#b9828e]">
                    TWO MONTHS
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#583943] md:text-5xl">
                    ผ่านมา 2 เดือนแล้วนะ
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#80616b] md:text-lg">
                    แต่เค้าก็ยังมี
                    <br />

                    <span className="font-bold text-[#d27689]">
                        เธอเต็มทั้ง 4 ห้องเลยนะ
                    </span>

                    🏠💕
                </p>

                <p className="mt-4 text-sm text-[#aa818c]">
                    ลองเปิดประตูดูสิ
                </p>

                <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
                    {[1, 2, 3, 4].map((room) => {
                        const isOpen =
                            openedRooms.includes(room);

                        return (
                            <button
                                key={room}
                                onClick={() => onOpenRoom(room)}
                                className="door group mx-auto h-48 w-full max-w-[150px] outline-none"
                            >
                                <div
                                    className={`relative h-full w-full rounded-2xl ${isOpen ? "door-open" : ""
                                        }`}
                                >
                                    <div
                                        className={`absolute inset-2 overflow-hidden rounded-xl
        transition-all duration-500 ${isOpen
                                                ? "scale-100 opacity-100"
                                                : "scale-75 opacity-0"
                                            }`}
                                    >
                                        <img
                                            src={roomImages[room - 1]}
                                            alt={`ความทรงจำห้อง ${room}`}
                                            className="h-full w-full rounded-xl object-cover"
                                        />
                                    </div>

                                    <div className="door-inner absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl border-4 border-[#d998a5] bg-[#e9aab7] shadow-lg">
                                        <span className="text-4xl">
                                            🚪
                                        </span>

                                        <span className="mt-3 text-sm font-semibold text-white">
                                            ห้อง {room}
                                        </span>

                                        <span className="mt-2 text-xs text-white/80">
                                            {isOpen
                                                ? "เปิดแล้ว ♡"
                                                : "เปิดดู"}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-8">
                    <p className="text-sm text-[#a77b87]">
                        เปิดแล้ว {openedRooms.length}/4 ห้อง
                    </p>
                </div>

                {allOpened && (
                    <div className="page-enter">
                        <p className="mx-auto mt-8 max-w-xl text-base font-medium leading-8 text-[#d27689] md:text-lg">
                            เห็นมั้ย...
                            <br />
                            เปิดไปห้องไหนก็เจอเธออยู่ดี เเละเธอก็น่ารักที่สู้ดในโลก ❤️
                        </p>

                        <NextButton onClick={onNext}>
                            มีอีกอย่างอยากบอก... →
                        </NextButton>
                    </div>
                )}
            </div>
        </section>
    );
}