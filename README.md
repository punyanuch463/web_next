# missU 💗

หน้าเว็บ Next.js ที่กดปุ่ม next ไปเรื่อยๆ จนถึงหน้า "คิดถึงที่สุด"

## รัน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## แก้ข้อความ

ข้อความทุกหน้าอยู่ใน `app/steps.js`
- `steps` = หน้าระหว่างทาง (เพิ่ม/ลบได้ตามใจ progress dots ปรับตามอัตโนมัติ)
- `finalStep` = หน้าสุดท้าย

แต่ละ step มี `emoji`, `title`, `text` (ขึ้นบรรทัดใหม่ด้วย `\n`), `cta` (ข้อความบนปุ่ม)
