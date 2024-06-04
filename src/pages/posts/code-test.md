---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Code Test"
pubDate: 2024-06-04
description: "test for code"
author: ""
image:
  url: "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-Bash-Script-Code-Challenges-for-Beginners.png"
  alt: "image for code"
tags: ["astro","code"]
---
Testiamo dall-e bash
```javascript

import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}

```