+++
title = "Ornellember"

[taxonomies]
tags = ["typescript", "npm"]

[extra]
date_built = 2022-01-18
date_approximate = true
+++



## The idea
ornellember is an npm package to convert dates to Ornellember, a joke date format I invented based on the International Fixed Calendar. It comprises 13 days that are each 28 days in length, except month 13 (known as M), which contains 29 days on normal years and 30 days on leap years.

## Check it out
* Source code/instructions on [GitHub](https://github.com/0rnella/ornellember)

* Published package on [NPM](https://www.npmjs.com/package/ornellember)

## Making it
This was my first package published on NPM, which was an interesting process. I wrote it using functional programming for the most part, and was really inspired by [dayjs](https://day.js.org/)'s approach to immutability and method chainability.

This project has zero dependencies (just dev dependencies), which makes it tinyyy, and I wrote it almost completely using test-driven development! I also invested in writing pretty good docs from jump, even though I was convinced no one would ever use it. 

## What's next
As of July 2022, I am still actively maintaining this library. I may build equivalent libraries in other languages -- I am toying with the idea of making this in Rust in order to learn the language. If people keep liking this as much as they currently do, I might also try to market this calendar as a bit more than my weird, whimsical passion project. TBD.