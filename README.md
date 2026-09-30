Learn Next js
. Fast performance — pages jaldi load hote hain.
. SEO friendly — search engines ke liye better.
. Easy routing — file-based routing.
. Image optimization — images automatically optimize hoti hain.
. API support — backend APIs bhi bana sakte ho.
. Code splitting — unnecessary JavaScript load nahi hoti.
. Full-stack — frontend + backend ek project mein.
. Easy deployment — deployment relatively simple hai.

Next.js ki Definition

Next.js ek React-based framework hai jo fast, SEO-friendly aur scalable web applications banane ke liye use hota hai.

Nextjs creating command:
npx create-next-app@latest <forlder-name> --yes
cd my-app
npm run dev

Note: Folder name ke jahaga ager ap . laga do to ose folder ma he next js install ho jaha ge lakin os folder ma koi or faile ya folder phala sa na ho.

JSX: HTML ka jasa dikh ta ha lakin ya HTML ho ta nahi ha.

Nextjs JSX formate ma he likha jata ha.

JSX Example:

import React from "react";

const Buttons = () => {
return <div>Buttons</div>; <---- This is a JSX
};

export default Buttons;

componets: Wo Code jo bar bar project ma easily use kar sagen.
Note:
\*\*) har component file ka First Latter BIG ho ga. & File ke extention JXS ho ge Small ma.
Name Example: Button.jsx

\*\*) Ager TYPESCRIPT use kar raha ho to file ka extention tsx ho ga.
Name Example: Button.tsx

**) Export hota ha.
**) Component Import kar ta time @ ka zarya sa Root sa path define kar ta hain.
Example:

import Buttons from "@/components/Buttons";

export default function Home() {
return (
<>
<Buttons />
</>
);
}

1. Static
2. Dynamic
