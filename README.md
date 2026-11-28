# Ozodbek Muhammadov, portfolio

Personal portfolio with a narrated film for every project, in English, Uzbek and Russian.

Live: https://mukh4mmadovuzz.vercel.app

## Features

- A page for every project with its film, chapters, a searchable transcript and subtitles in three languages
- A demo of OPUS Support that runs in the browser, with its database inside the page
- A woven ikat background drawn with WebGL
- Static pages for every language and project

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Three.js with React Three Fiber, GSAP, Lenis

## Structure

```
app/            routes and pages
components/     interface parts
content/        project texts, translations and video data
lib/            helpers
public/videos/  films, posters, previews and subtitles
public/demo/    built OPUS Support demo
```

## Run

```
npm install
npm run dev
```
