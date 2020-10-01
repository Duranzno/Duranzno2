---
template: post
title: "Retrospective | Orcaestra Finanzas "
slug: retrospective-orcaestra-finanzas
socialImage: https://res.cloudinary.com/duranzno-cloudinary/image/upload/v1601575044/projects/estudiantes_ajxumd.png
draft: false
date: 2020-10-01T18:03:01.398Z
description: Looking back on one of my first projects
category: volunteering
tags:
  - retrospective
  - mongodb
  - node
  - testing
  - jquery
---
At my alma mater (love using this word after 5 years of college) a requirement for graduation was doing local community service, in my social group the recurring chosen assignment was the manual input of the donations made for the biggest local NGO, an orchestra focused on teaching kids and teenagers how to play instruments and classical music. For us students the environment was staying in an office for the minimum hours doing mindless work, talking with the directives of the institution and the teacher assigned we came up with the idea of automating this work so the orchestra could ease the process.

The project ended up being an adventure through my first steps on web development called Orcaestra Finanzas (a wordplay based on the words "**Orca**" and **Orchestra** and the word for Finances in Spanish). Deployed on Heroku the Backend is an Express Server connected to the MongoDB database through the Mongoose ORM. Following a lightly implemented test-driven development methodology with the Mocha, Chai & Supertest libraries and surrounding the possibility of importing already existing spreadsheet files to populate the database. On the Frontend side it leveraged its functionality with Bootstrap, JQuery and [Datatables.net](http://datatables.net/).

![Image of the Webpage](https://res.cloudinary.com/duranzno-cloudinary/image/upload/v1601575044/projects/estudiantes_ajxumd.png "Page Look")

Looking back into this project I can see myself a couple of years ago and these are my thoughts now about this project:

* I'm amazed that I used Heroku, and how great it was for this time, being tempted to use it again in a next project, it makes sense that this was the platform that started the PaaS race that has given us tools as Zeit and Netlify that makes way easier the deployment of projects
* The combination between Mocha, Chai, Supertest and Regexp for the tests remain focused on essential testable functions and classes, it amuses me that I even created a seed functionality to randomize data on the test database, all of this was before I knew the concept of Code Coverage.
* Today I cringe at the sight of really weird Spanglish for the naming conventions and classes I used.
* Interesting choice on the express routes, there's no need for a controller layer as the project was small enough that its functionality barely every surpassed the need of something more complex than one or two calls to the mongoose models methods.
* Sometime after I finished this project I felt embarrassed that I used JQuery for this, with all the bad reputation it has since its downfall in the developer collective mind, since then I've learned that you don't have to care about the latest tools and if a something is good enough you should use it, and although JQuery is capable of great antipatterns in really big projects it was good enough for this one.
* Funnily enough, I used Embedded Javascript templates as it was an easy intro into templating languages and taught me how to divide the templating into different partials (something that would be improved once I started using SPA frameworks), outside of this project and the tutorial that taught me how to use ejs files I've seen it implemented
* Something I barely remember now but back then It was painful for some reason was the management of the application state, that although

  (the library used for the table) used to abstract part of it. So much it marked me that this project was one of the reasons I fell in love with the Flux/Redux way of architecting an app.
* I was so excited for the name and the "brand" I had created I even design the logo with a small Orca whale in a fish tank.

A constant headache I had learning javascript was that I had no idea of what a module bundler was even if I (unconsciously) had the abstraction of it. As I tried being "Good developer"™ from the start I wanted to implement a module-based system (I wouldn't have known how to explain this in that time besides "a bunch of small and short files in a bunch of folders) and importing them where I needed them, this was easy enough on the node backend but the problem arose once I started working in the frontend.

Getting confused between CommonJS, AMD, and UMD, RequireJS, ES6 Modules with no type of bundler I spent weeks trying to coordinate the bunch of files I naively separated. In the end I implemented a mix between old and new technologies where JQuery waited until the document was ready that then launched an async function that just waited for a Promise.all that had an array of an obscure functionality of JQuery that let you import all the scripts. And I mean all the scripts, not trusting CDNs I bundled every little file and library my app needed depending on this function.

I feel sometimes its important to check out old projects and see how far have we come, what have we forgotten along the way and find ourselves in other stages of our career.