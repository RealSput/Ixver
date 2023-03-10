# Ixver
Ixver (_iyks·vur_) is a web voice assistant I made for fun. It is built on top of Microsoft's DialoGPT.

[![Add to Tampermonkey](https://user-images.githubusercontent.com/117580169/212810343-1afca32f-05e1-4695-b810-954ff9b96159.png)](https://github.com/RealSput/Ixver/raw/main/web/ixver.user.js)


# What is it useful for?
Ixver is useful for handlessly getting quick answers to uncomplicated questions. For example, when you're wondering what a company is, you can say:
> _Computer, what is the company Apple?_

.. and it usually returns with this:

> It's a company that makes computers.

It can do a lot, ... and sometimes not a lot.

Since it is built on DialoGPT (a less powerful model than ChatGPT, but open-source) it cannot do the same things that a voice assistant like Siri or Google Assistant can do.

For example, getting a result to a mathematical problem (even 1+1) will almost never work.

# Why should I use this like it's practical?
You should not (or at least, on other websites).

Trust me, even Bing will return with better answers than Ixver. This is just an toy project that I wanted to make.

A reason why is the UI: While it might be sleek, it might glitch with some websites. Here's a screenshot of it working with [example.com](example.com):

![image](https://user-images.githubusercontent.com/117580169/212771019-649ea85c-9ed5-4c91-b39a-8c398a01a20d.png)

It looks quite weird, even with such a simple website.

Another reason: it barely ever returns correct answers.

The prompt was: 

> _"Who founded Microsoft?"_

The result, well... I'll just have to show you:
![image](https://user-images.githubusercontent.com/117580169/212771318-971aff58-806d-477b-a93d-ff060f246083.png)

So that's why I discourage using this on a website outside of Ixver's homepage.

# But... what if __I do__ want to use it on a different website?
If you do end up wanting to use it on a different website, then download an extenstion (like Grease/TamperMonkey), and click the button on the top. It should then install Ixver for you.

If you want to implement it in your own website, you should download the "web/ixver.js" file, place it in your web server, and put this in your page:
```html
<script src='ixver.js"></script>
```
# Where can I try it?
You can try it at the [homepage](https://realsput.github.io/Ixver/). 
