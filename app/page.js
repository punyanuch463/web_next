"use client";

import { useState } from "react";
import Hearts from "./Hearts";
import { steps, finalStep } from "./steps";
import s from "./page.module.css";

export default function Home() {
  const [i, setI] = useState(0);

  const total = steps.length;
  const done = i >= total;
  const step = done ? finalStep : steps[i];

  return (
    <main className={s.wrap}>
      <Hearts count={done ? 26 : 14} />

      <section className={s.card} key={i}>
        <span className={`${s.emoji} ${done ? s.big : ""}`}>{step.emoji}</span>

        <h1 className={`${s.title} ${done ? s.final : ""}`}>{step.title}</h1>
        <p className={s.text}>{step.text}</p>

        {done ? (
          <>
            <button className={s.ghost} onClick={() => setI(0)}>
              อ่านอีกรอบ 🔁
            </button>
            <p className={s.counter}>ขอบคุณที่กดมาจนถึงตรงนี้นะ 🩷</p>
          </>
        ) : (
          <>
            <button className={s.button} onClick={() => setI(i + 1)}>
              {step.cta} →
            </button>
            <div className={s.dots}>
              {steps.map((_, n) => (
                <span
                  key={n}
                  className={`${s.dot} ${n <= i ? s.dotOn : ""}`}
                />
              ))}
            </div>
            <p className={s.counter}>
              {i + 1} / {total}
            </p>
          </>
        )}
      </section>

      {!done && <p className={s.hint}>กดปุ่มไปเรื่อยๆ นะ ✨</p>}
    </main>
  );
}
