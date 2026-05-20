import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <button style={{ backgroundColor:"black", padding:"20px"}}
//       >
//         Book your slot
//       </button>
//     </div>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/booking">
      <button style={{backgroundColor:"black" , padding:"10px", borderRadius:"10px", cursor:"pointer"}} >
        Book Now
      </button>
    </Link>
  );
}
