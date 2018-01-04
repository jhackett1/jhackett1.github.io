---
layout: post
title:  "Why beginners should learn Node"
date:   2017-08-18 23:35:20 +0000
categories: blog
image: /uploads/node_1.jpg
---

It's easy to get started
=====

Javascript is often the third language new coders learn, after they get comfortable with HTML and CSS, and start to think more about adding interactivity to their websites.

Node is coded in Java


It lets you grasp asynchronous functions
=====

New coders often assume that programs run from top to bottom, one line at a time. The first line of code you write is executed first, and so on.

This is true enough for very simple programs, but once you start to make use of functions, you'll find that it doesn't necessarily have to be.

Node is what we call single-threaded: it does only one thing at once. If Node needs to do something that takes time, say, send a HTTP request to a remote server and do something with the response, it will wait around doing nothing until the response comes back. That's a terrible experience for users, because your app will appear to freeze, becoming non-responsive to all user action.

To combat this, Node programs make liberal use of *callbacks* - functions containing code you want to run when requirements are met, not before. By putting the code you want to run later inside a callback, you free up Node to do other things while it's waiting.

Let's say that you want to fetch a list of users from your app's database and display them in a table. You might make a request to the database in a function, but to keep your app responsive in the meantime, you'll drop the code to actually handle and display the list response in a callback.

It's exceedingly rare for node programs to run from top to bottom - functions trigger callbacks which in turn trigger other callbacks. Learning how to structure a program that works in this manner can be incredibly eye-opening for novices. It's a great gateway to explore how large, mature programs work.


Small modules give results fast
=====

Pad-left


The community
======

Despite a recent high-profile falling out in the node community


Learn what node *isn't* geared for
=====

Node is popular with hobbyists working on small-scale and personal projects because it is so easy to get up and running, and modules allow novices to achieve complex functionality without much pain.
