export default function FloatingHearts() {
    const hearts = [
        {
            left: "5%",
            delay: "0s",
            duration: "12s",
            size: "18px",
        },
        {
            left: "15%",
            delay: "4s",
            duration: "15s",
            size: "13px",
        },
        {
            left: "27%",
            delay: "2s",
            duration: "11s",
            size: "20px",
        },
        {
            left: "42%",
            delay: "6s",
            duration: "16s",
            size: "14px",
        },
        {
            left: "55%",
            delay: "1s",
            duration: "13s",
            size: "18px",
        },
        {
            left: "68%",
            delay: "5s",
            duration: "14s",
            size: "12px",
        },
        {
            left: "80%",
            delay: "3s",
            duration: "17s",
            size: "19px",
        },
        {
            left: "92%",
            delay: "7s",
            duration: "12s",
            size: "14px",
        },
    ];

    return (
        <>
            {hearts.map((heart, index) => (
                <div
                    key={index}
                    className="floating-heart"
                    style={{
                        left: heart.left,
                        animationDelay: heart.delay,
                        animationDuration: heart.duration,
                        fontSize: heart.size,
                    }}
                >
                    ♡
                </div>
            ))}
        </>
    );
}