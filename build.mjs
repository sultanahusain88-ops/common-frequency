import {build} from 'esbuild';
import fs from 'node:fs';
const result=await build({entryPoints:['main.tsx'],bundle:true,write:false,minify:true,format:'iife',target:'es2022',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
const js=result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script');
const css=fs.readFileSync('style.css','utf8').replace('@import "tailwindcss";','');
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f4f0e8"><title>COMMON FREQUENCY — Connect a City</title><meta name="description" content="A cooperative switchboard puzzle for 2–6 operators. Every connection needs someone."><meta property="og:title" content="COMMON FREQUENCY — Connect a City"><meta property="og:image" content="https://sultanahusain88-ops.github.io/common-frequency/cover.png"><style>${css}</style></head><body><div id="root"></div><script>${js}</script></body></html>`;
fs.writeFileSync('index.html',html);console.log('Built self-contained index.html: '+Buffer.byteLength(html)+' bytes.');

