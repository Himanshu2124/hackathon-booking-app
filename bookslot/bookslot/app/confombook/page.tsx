
// export default function Home() {
//   return (
//     <div style={{color:"black"}}>
//      <h2>Book Hackathon Slot</h2>
//      <div>Selected Bookink</div>
//      <div> 2026-05-20</div>
//       <div>09:00 AM</div>
//     </div>
//   );
// }
"use client";

import { useSearchParams } from "next/navigation";

export default function ConfirmBook() {

    const searchParams = useSearchParams();

    const title = searchParams.get("title");
    const date = searchParams.get("date");
    const time = searchParams.get("time");

    return (
        <div
            style={{
                padding: "30px",
            }}
        >
            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    padding: "20px",
                     color:"black"
                }}
            >
                <h1>{title}</h1>

                <p>{date}</p>

                <p>{time}</p>
            </div>
        </div>
    );
}