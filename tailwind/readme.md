# HTML + Tailwind CSS v4 — Normal HTML Setup

Ye guide **normal HTML project mein Tailwind CSS v4** use karne ke liye hai.

**React ki zarurat nahi hai.**
**Vite ki zarurat nahi hai.**

---

## 1. Project Structure

Main folder kuch aisa hona chahiye:

```text
tailwind/
│
├── day1/
│   └── index.html
│
├── day2/
│   └── index.html
│
├── day3/
│   └── index.html
│
├── index.css
├── output.css
├── package.json
├── package-lock.json
└── node_modules/
```

`day1`, `day2`, `day3` mein hum apne HTML practice projects rakhenge.

---

## 2. Tailwind Install Karna

Terminal mein main `tailwind` folder ke andar jao:

```bash
cd tailwind
```

Phir:

```bash
npm init -y
```

Tailwind install karo:

```bash
npm install tailwindcss @tailwindcss/cli
```

---

## 3. `index.css` Banao

Main `tailwind` folder mein `index.css` file banao:

```text
tailwind/
└── index.css
```

`index.css` ke andar:

```css
@import "tailwindcss";
```

Bas itna hi.

---

## 4. `package.json` Mein Script

`package.json` mein `scripts` ke andar:

```json
"scripts": {
  "dev": "npx @tailwindcss/cli -i ./index.css -o ./output.css --watch"
}
```

Complete example:

```json
{
  "name": "tailwind",
  "version": "1.0.0",
  "scripts": {
    "dev": "npx @tailwindcss/cli -i ./index.css -o ./output.css --watch"
  },
  "dependencies": {
    "@tailwindcss/cli": "^4.3.3",
    "tailwindcss": "^4.3.3"
  }
}
```

---

## 5. Tailwind Start Karna

Terminal mein **main `tailwind` folder** ke andar hona chahiye:

```text
PS C:\react\tailwind>
```

Phir:

```bash
npm run dev
```

Agar ye dikhe:

```text
≈ tailwindcss v4.3.3

Done in 67ms
```

to Tailwind successfully run ho raha hai.

### Important

Terminal ko development ke time **open rehne do**.

`--watch` ki wajah se Tailwind HTML/CSS changes ko watch karta rahega.

---

# 6. `output.css` Kya Hai?

Hum manually `output.css` nahi likhte.

Command:

```bash
npm run dev
```

automatically:

```text
index.css
    ↓
Tailwind CLI
    ↓
output.css
```

banata hai.

Isliye HTML mein `output.css` ko load karna hai.

---

# 7. Day Folder Mein Tailwind Use Karna

Example:

```text
tailwind/
├── day2/
│   └── index.html
│
├── index.css
└── output.css
```

`day2/index.html` mein:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Day 2</title>

    <link rel="stylesheet" href="../output.css">
</head>

<body>

    <h1 class="text-9xl bg-pink-800">
        day2
    </h1>

</body>
</html>
```

### `../output.css` kyun?

Kyuki `index.html` `day2` folder ke andar hai:

```text
day2/
└── index.html
```

Aur `output.css` ek level upar hai:

```text
tailwind/
└── output.css
```

Isliye:

```html
<link rel="stylesheet" href="../output.css">
```

`../` ka matlab hai **ek folder peeche/uppar jaana**.

---

# 8. New Day Kaise Banana Hai?

Maan lo ab `day3` banana hai.

Sirf:

```text
day3/
└── index.html
```

banao.

`day3/index.html` mein:

```html
<link rel="stylesheet" href="../output.css">
```

use karo.

Bas.

**Tailwind dobara install nahi karna hai.**

**`npm init` dobara nahi karna hai.**

**`npm install` dobara nahi karna hai.**

Sirf:

```text
day4/
day5/
day6/
...
```

folders bana sakte ho.

---

# 9. Example Day 3

```text
tailwind/
├── day1/
│   └── index.html
├── day2/
│   └── index.html
├── day3/
│   └── index.html
├── index.css
├── output.css
└── package.json
```

`day3/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Day 3</title>

    <link rel="stylesheet" href="../output.css">
</head>

<body class="bg-black">

    <h1 class="text-5xl text-white">
        Day 3
    </h1>

</body>
</html>
```

---

# 10. VS Code IntelliSense

VS Code mein:

**Tailwind CSS IntelliSense** extension install karo.

Phir HTML mein:

```html
<h1 class="text-">
```

type karne par Tailwind classes ke suggestions milne chahiye.

Examples:

```text
text-white
text-black
text-red-500
text-blue-500
text-2xl
text-5xl
```

Similarly:

```html
<div class="bg-">
```

par:

```text
bg-black
bg-white
bg-red-500
bg-blue-500
bg-pink-800
```

jaise suggestions mil sakte hain.

---

# 11. Important: CDN Use Nahi Karna

Is setup mein ye CDN script use nahi karni:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Hum Tailwind ko npm ke through use kar rahe hain.

---

# 12. Common Mistakes

### Mistake 1 — Wrong CSS path

Agar HTML `day2` ke andar hai:

```html
<link rel="stylesheet" href="index.css">
```

galat ho sakta hai.

Use:

```html
<link rel="stylesheet" href="../output.css">
```

---

### Mistake 2 — Tailwind command wrong folder mein chalana

Correct:

```text
PS C:\react\tailwind>
```

Then:

```bash
npm run dev
```

---

### Mistake 3 — `input.css` aur `index.css` confuse karna

Is setup mein hum:

```text
index.css
```

ko input file use kar rahe hain.

`package.json`:

```json
"dev": "npx @tailwindcss/cli -i ./index.css -o ./output.css --watch"
```

---

### Mistake 4 — Terminal band kar dena

Agar:

```bash
npm run dev
```

chal raha hai, to terminal ko development ke time open rakho.

---

# 13. Daily Workflow

Har naye day ke liye:

### Step 1

Folder banao:

```text
day4/
```

### Step 2

Usmein:

```text
index.html
```

banao.

### Step 3

HTML mein:

```html
<link rel="stylesheet" href="../output.css">
```

add karo.

### Step 4

Tailwind command already running ho to kuch aur karne ki zarurat nahi:

```bash
npm run dev
```

### Step 5

Tailwind classes use karo:

```html
<h1 class="text-5xl text-white bg-blue-500">
    Hello
</h1>
```

---

# Final Concept

Tumhara setup basically:

```text
             Tailwind
                │
                ▼
          ┌───────────┐
          │ index.css │
          └─────┬─────┘
                │
                ▼
         Tailwind CLI
                │
                ▼
         ┌────────────┐
         │ output.css │
         └──────┬─────┘
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
     day1     day2     day3
    HTML     HTML     HTML
```

**Ek baar Tailwind setup → jitne chahe practice days banao.**

React ki zarurat nahi hai.
