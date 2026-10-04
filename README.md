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

JSX: HTML ka jasa dikh ta ha lakin ya HTML ho ta nahi ha. Curly Brakets ka under he JS likh sakta hain. 

Nextjs JSX formate ma he likha jata ha.

<!-- JSX Example: -->

import React from "react";

const Buttons = () => {
return <div>Buttons</div>; <---- This is a JSX
};

export default Buttons;

componets: Wo Code jo bar bar project ma easily use kar sagen.
Note:
\*\*) har component file ka First Latter BIG ho ga. & File ke extention JXS ho ge Small ma.

<!-- Name Example: Button.jsx -->

\*\*) Ager TYPESCRIPT use kar raha ho to file ka extention tsx ho ga.

<!-- Name Example: Button.tsx -->

**) Export hota ha.
**) Component Import kar ta time @ ka zarya sa Root sa path define kar ta hain.

<!-- Example: -->

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

\*\*) Static: jis ma Data ka bihave par kuch bhi na ho. or sara data ma same work kara.

import React from "react";

const Buttons = () => {
return <div>Buttons</div>;
};

export default Buttons;

\*\*) Dynamic: Data ka bihave par kuch React kara ya change ho.
Note: 
**) Typescript ma har prop ke type define kar ne hote ha jo ka object ke form ma ho te ha. or exported function ka under Circle brakets ma object ka under props likhan ga. phir type ka name object ka aga colon laga kar likh daen ga.
**) Props ko use kar na ka liya Curly Brakets use karen ga. 

<!-- Example: -->

import React from "react";
type ButtonProps = {
title: string;
name: string;
description: string;
};
const Buttons = ({ title, name, description }: ButtonProps) => {
<></>;
};

export default Buttons;


Routing: app folder ka under 1 folder create karoo. os ma page.tsx / page.jsx name ke file bana ho. 

<!-- Example: -->
app/folder/page.tsx


anchor tag sa page realod hota ha joa ka ham ko nahi cahiya. is ka liya Ham link ka use kar ta hain, jo ka next.js waloon ka apna khood ka componet ha. 



Client Side Rendaring vs Server Side Rendaring

1. Client Side Rendaring: Jis ka sath user intrect kara. (By Defult next.js use kar ta ha.)
2. Server Side Rendaring: Jis ka sath user intrect na kara. 

Note: kabhi bhi complete page ya bara component ko clinet component nahi bana ta balka jitna code ko client component bana na ke zaroorat ho te ha otna ko he client component bana ta hain. 


<!-- API -->

api jab bhi call hote ha to wo aik async call hote ha. 