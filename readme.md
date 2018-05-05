# Re:Base Installer

## When you need shit to help you get shit done

So I said over in the [rebase readme file](https://github.com/joecianflone/rebase) that you don't *need* an installer. You don't. You don't need this shit at all. Don't fucking clutter your system with yet another thing that you're not gonna use.

## Fuck you don't tell me what I don't need

Alright man chill! You wanna use this go for it.

## Installing this shit

Ok, first things first, this is a *global* installer. You can't run this local to your project because this will literally install your project. Don't even ask for that feature. It would have to literally eat itself to work that way. Do this:

```bash
$ npm install rebase-installer -g #global bitches
```

So let it do its thing, it won't take long. Once it's done you're ready to start using it.

## Usage

There's literally one command here. I didn't even make a `--help` because that would have taken more time than I gave a shit to do for this thing.

```bash
$ re:new <folder> --<yarn|npm>
```

By default I assume you use NPM, but you can use yarn if you'd like too.

That's it.

### Can you give me an example of using this shit?

Yeah, ok. Assume you want to install a new Re:Base project on a folder called `sites` that happens to be located in your `users` folder on your computer. Here's what you do:

```bash
$ cd ~/sites
# from the ~/sites folder
$ re:new silly-project
```

Done. That's it.

Now you'll have a new folder called `~/sites/silly-project` with all your shit ready to go.

### What about `yarn`?

```bash
$ re:new silly-project --yarn
```

### What about if I'm already in the folder?

Srly?

```bash
$ re:new
```

That'll just drop everything in an *empty* folder.

### What about...

Oy! Yes!

```bash
$ re:new --yarn
```

That uses `yarn` and drops everything in the current directory.

### What if I have something in that folder already?

Nope. The installer will kick you out. The folder needs to be empty, we're not going to overwrite stuff you gotta manually clone the [rebase](https://github.com/joecianflone/rebase) project in this case.

Fin.

## License
The MIT License (MIT) Copyright (c) 2018 Joe Cianflone

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
