---
template: page
title: Orcaestra Sinfonica
slug: orcaestra-sinfonica
socialImage: https://res.cloudinary.com/duranzno-cloudinary/image/upload/v1601575044/projects/estudiantes_ajxumd.png
draft: false
isProject: true
---

The "Orquesta Sinfonica Juvenil e Infantil de Ciudad Guayana" the local orchestra for the youth is an NGO focused on teaching the kids from the surrounding community how to improve their lives through music and musical instruments free of charge. To pay the day to day costs of running an organization parents can donate any kind of amount to the foundation.

The logistics related to the donations the Orchestra had been organized with a system of spreadsheet files sorted by the month the donation was done. Orcaestra Finanzas (a wordplay based on the words "Orca Whale" and Orchestra and the word for Finances in Spanish) was presented as a solution to these problems.

Deployed on Heroku the Backend of Orcaestra Finanzas is an Express Server connected to the MongoDB database through the Mongoose ORM. Following a lightly implemented test-driven development methodology with the Mocha, Chai & Supertest libraries and surrounding the possibility of importing already existing spreadsheet files to populate the database. On the Frontend side, it leveraged its functionality with Bootstrap, JQuery, and [Datatables.net](http://datatables.net/)
