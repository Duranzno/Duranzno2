---
template: post
title: My first startup job rejection. It hurt, but it was a good hurt.
slug: first-startup-rejection
draft: false
date: 2020-10-06T01:43:39.973Z
description: What I learned the first time I tried to get a real job
category: job
tags:
  - job
  - interviewing
---


A little over a month ago I sent an application to a Chilean startup that was looking for a Front-end Developer (the software development position I'm currently most comfortable with). Their goals and work philosophy resonated with me, to the point that a few weeks earlier a group of friends and I tried to solve a similar problem by using technological tools to bring neighbors together.

Yesterday the dreaded rejection email came metaphorically knocking at my door leaving me with a bittersweet aftertaste.

### First Interview

One of the most important rules for when you start interviewing is to know about the company beforehand; this I know but for some reason that day I didn't apply it and probably earned a few negative points. On the other side, I had researched a bit about the interviewer and found out that both of us come from the same country and studied in similar colleges which helped a bit empathizing over the fact that, were the conditions given, their app would do wonders for our country.

A matter I hope we bonded over was that at some point in our conversation I realized how different their growth as a company is to the usual e-commerce or social media and the fact that, the value their app was giving to the community grew at the same rate the neighbor users did; which is an organic and nice way of growing.

My lack of reading their company's blog came into view once I asked about the origins of the company (and was clarified on how much was I mispronouncing their name 😅)

All in all, at the end of the interview I was told they liked my *entrepreneurial and forward* spirit and that I was welcome to continue with the assessment test knowing I was at a disadvantage due to the lack of work and React Native experience I had.

### Assessment Test

I was given 72 hours (the entire weekend) to code both a React and React Native app, implementing push connections through Pusher and Google Maps, a summary of the requirements is [available in the repository](https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush/blob/master/REQUIREMENTS.md). Great focus was **explicitly** given to Analysis capacity, Code quality, Solution Design, and Documentation.

Wanting to show my skills and how up to date with the newest trends I focused on working on a monorepo (managing both projects in the same repository with the advantage of sharing code), implementing following the [Component Driven Development with storybook](https://storybook.js.org), using [the Tailwind framework](https://tailwindcss.com/), and creating a quick design to base myself from in [Figma](https://www.figma.com//)

To be honest, that was a chaotic weekend:

* I focused too much on using a monorepo with a tool with minimal support for it which gave me enough headaches. At some point, I was managing four sub-projects (both react apps, a common interface package, and a small node server).
* I ended doing what I wanted to avoid violating the DRY principle and having most typescript interfaces repeated once or twice
* Most of the Storybook features weren't even used and in a couple of cases, some half-baked tests ended up functioning barely enough so I could check their effects on the Pusher Dashboard.
* And to top it all I made the big mistake at the time to not communicate with the interviewer until an hour before the time limit, just to send them the final result.

### Technical Interview

A few weeks after finishing the assessment test I had to present it to most (if not all) of the Startup Engineering Team along with a couple of extra guys from Design and Sales. I babbled through the entire source code about my experience on that weekend while excruciatingly explaining every little detail my code had that I felt was remotely relevant.

Suffice to say It was not one of my best moments.

Some basic **IT** and **CS** questions were raised like explaining some of the code design choices, opinions on frameworks, explaining concepts like OOP or Reactive Programming. I answered correctly to their questions but maybe talking more than I had to and extending myself too much without being concrete. The interview was finalized with a reminder that I was one of the final candidates and they'd contact me soon to give me their ultimate decision.

### Yesterday's Email

Some of the reasons why I did not get the job should be clear to anyone. It stung a little to see the "you have **not** been selected"*, but after a full reading, it made sense why they took that decision and gave me heartfelt feedback on how I could improve which I'm deeply grateful for.

While they praised my determination of competing against more senior developers and, the lack of experience and maturity was evident.

I spend the time I didn't have on cool tech and patterns rather than focusing on tasks like usability, documentation, and testing.

I lacked conciseness and clarity failing to express myself concisely in the oral presentation. This further empathized as they are a remote company and clear communication tends to be critical in their day to day operations.

In the end, I was not a good fit, but this experience has reinvigorated my job search and illuminated me on what skills need to improve to be more competitive in this field. Taking things into action I've started to focus more on delivering usable products rather than play around with the latest and shiniest tech, write more regularly to express myself better and reinforce
Links:

* [Figma Design field](https://www.figma.com/file/YEpWITzMCsJLztfqCoNQOO/geolocaction-based-startup-assesment-test)
* [Repo](https://github.com/Duranzno/react-rn-node-assessment-test-geolocation-webpush/blob/master/REQUIREMENTS.md)