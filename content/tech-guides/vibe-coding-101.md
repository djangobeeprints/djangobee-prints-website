---
title: "Vibe Coding 101: Building Classroom Apps with AI"
date: 2026-02-17
type: "tech"
description: "No programming experience required. Learn how to use AI tools like Claude and ChatGPT to build custom interactive applications for your Promethean board and classroom."
tag: "Tech Guide"
tag_color: "#059669"
---

I have been a music teacher for over a decade, and for most of that time I have been constrained by what commercial software happens to exist for music educators. If a tool did not exist, I simply did not have it. That changed when I discovered vibe coding.  This is the practice of using AI to build custom applications by describing what you want in plain English. Since then, I have built over 25 classroom tools, including a student name spinner, rhythm flashcard apps, and even this very website.

This guide will walk you through exactly how to get started, from your very first prompt to building a fully functional, customized classroom tool.

## Why This Matters for Teachers

If you are familiar with the [TPACK framework](https://www.powerschool.com/blog/the-tpack-framework-explained-with-classroom-examples/) (Technological Pedagogical Content Knowledge), you know that the overlap between technology and content knowledge has always been the hardest zone for teachers to reach. Why? Because we are constrained by whatever software companies happen to build for our subject area. Music, art, physical education, and other subjects have historically had very thin software support compared to core academic classes.

Vibe coding breaks that constraint. As a teacher, you are already a content expert. You know exactly what tools you need and how they should behave. AI handles the programming. You just need to know how to ask for it.

![TPACK framework diagram showing the overlap of Technological, Pedagogical, and Content Knowledge](/assets/vibe_coding_tpack_diagram.jpg)

## What You Need to Get Started

The barrier to entry is lower than you might expect:

- **An AI assistant** — [ChatGPT](https://chat.openai.com), [Claude](https://claude.ai), or [Google Gemini](https://gemini.google.com) all work. The free versions are sufficient to experiment with and build numerous applications.
- **A text editor or web browser** — Most vibe-coded projects are HTML web apps that run directly in any browser, including the browser built into your Promethean board.
- **No programming experience required**, though it is helpful!

If you already have a subscription to any AI service, you already have everything you need.

![ChatGPT, Claude, and Gemini logos — the three main AI tools for vibe coding](/assets/vibe_coding_ai_tools.jpg)

## Key Terminology

Before you start building, it helps to know a few terms:

**Model** — The specific AI being used. Different models have different strengths. For most classroom applications, Claude Sonnet or GPT-4o are reliable choices.

**Context** — The information the AI "remembers" during your conversation. This is important: the AI only knows what is in the current conversation. If you start a new chat, it forgets everything. Context is short term memory.

**Tokens** — The fundamental unit the AI uses for input and output. One token is roughly three to four characters. Free tiers have limited token allowances, which is why free versions typically allow around six exchanges before hitting a limit.

**Usage** — How much of your token allowance you have consumed. Keep an eye on this if you are on a free plan.

![Key AI terminology: Model, Context, Usage, and Tokens defined in an infographic](/assets/vibe_coding_key_terminology.jpg)

## Your First Build: A Student Name Spinner

Let's walk through building a real, usable classroom tool from scratch. The example here is a student name spinner — something every teacher can use.

### Step 1: Write Your Initial Prompt

The most important skill in vibe coding is writing a clear, specific initial prompt. Think of yourself as a project manager briefing a contractor. You need to describe the end result, not the technical steps.

Here is an example of a strong first prompt:

> *"Please build a spinner for my Promethean board that uses touch controls as an HTML webapp. It will load a list of 24 names (placeholder) and will spin quickly with a fun animation. When the spin is complete, whatever name the arrow is pointing at will be largely displayed. When a name has been selected once, it will not be allowed to be selected again until the application is reloaded or reset."*

![The full spinner prompt displayed in a styled box, highlighting key requirements](/assets/vibe_coding_first_prompt.jpg)

Notice what makes this prompt effective:
- It specifies the **platform** (Promethean board, touch controls)
- It specifies the **format** (HTML webapp — this means it runs in any browser, no installation needed)
- It describes the **core behavior** in plain language
- It includes edge cases (no repeating names until reset)

The AI will return a block of HTML code. Copy it, save it as a `.html` file, and open it in your browser. That is your first app.

### Step 2: Iterate One Feature at a Time

Vibe coding works best when you build incrementally. Do not try to describe every feature in your first prompt. Get something working, then add to it.

After your spinner is running, you can add features one at a time with short follow-up prompts:

**Iteration 1 — Select multiple students at once:**
> *"Add a button that selects three students at once"*

**Iteration 2 — Manage individual students:**
> *"Add a long-press feature on each name to disable or re-enable that student"*

![Tablet mockup showing long-press to disable a student from the spinner](/assets/vibe_coding_iteration_2_longpress.jpg)

**Iteration 3 — Load your real class list:**
> *"Replace placeholder names with a CSV upload button"*

Each of these is a small, targeted request. The AI has the previous code in its context, so it knows what it is adding to.

## Critical Warning: Student Data Privacy (FERPA)

When you reach the step of loading real student names, you need to be careful.

**Do not paste student names directly into an AI chat.** Uploading identifiable student information to an external AI service is a [FERPA violation](https://studentprivacy.ed.gov/ferpa).

The correct approach is to ask the AI to build **CSV file support that processes the file locally in the browser**. When done correctly, your student data never leaves your computer — the browser reads the file and uses the names without sending them anywhere. This is compliant and is actually the better user experience anyway, since you can just drag a roster export from your gradebook.

When asking for this feature, you can simply say: *"Make sure the CSV is processed locally and the data never leaves the browser."*

![FERPA warning: uploading student names is a violation, CSV processed locally is compliant](/assets/vibe_coding_ferpa_warning.jpg)

## Workflow Tips

### Tip 1: Use CSV Files for Unique Data

If your app needs a lot of specific content — flashcard questions, vocabulary words, song lyrics, image paths — do not hard-code it all into the app. Instead, ask the AI to build the app so it reads from a CSV file.

For example, a rhythm flashcard application could have a CSV with columns for difficulty, topic, grade level, and answer behavior. Updating the content is then as simple as editing a spreadsheet. You can even use AI to help you generate or modify the CSV content — just remember the FERPA rule if student data is involved.

**The less specific data you have hardcoded in your application, generally the better.**

### Tip 2: Use an AI Image Generator to Design Your Interface First

One of the most powerful vibe coding techniques is to use an AI image generator to sketch out your interface before asking a coding AI to build it.

The workflow looks like this:

1. Use an AI image generator (Google's ImageFX, Adobe Firefly, etc.) to generate a mock screenshot of what you want your app to look like
2. Provide that image to your coding AI (Claude, ChatGPT) along with a prompt like: *"Build this application based on the interface shown in this image"*

This is especially effective when you have specific visual elements — musical notation symbols, subject-specific icons, or a particular color scheme. By feeding the AI a visual reference, you skip a lot of back-and-forth on layout and styling.

As a vibe coder, you are acting as a **project manager**, coordinating different AI tools to produce a final product.

![Gemini-generated interface concept next to the functional Claude-built rhythm application](/assets/vibe_coding_gemini_vs_claude.jpg)

### Tip 3: Avoid One-Shotting

One-shotting is when you try to put every single requirement into a single massive prompt and get the AI to build the entire application at once. This is tempting but usually counterproductive.

The problem is that a single enormous prompt produces a large, complex codebase in one step. If something does not work — and something usually does not — it is very hard to identify what went wrong. You also burn through your token allowance quickly.

Instead, build incrementally as described above.

**The exception:** For very simple, well-defined applications, a detailed single prompt can work well. As you gain experience, you will develop a feel for when to one-shot and when to iterate.

![One-shotting as a trap versus using PRD.md structure as the technique](/assets/vibe_coding_one_shotting.jpg)

### Tip 4: Use a PRD.md File to Keep the AI on Track

AI has a limited context window. In a long coding session, the AI can start to forget earlier decisions or contradict itself. A practical solution is to maintain a **PRD.md** — a Project Requirements Document.

Ask the AI to create one at the start of your project:
> *"Create a PRD.md file that documents what we are building, the features we have implemented, and what is left to do."*

Whenever you start a new chat session on the same project, paste in your PRD.md first. This gives the AI the context it needs to continue your work without repeating earlier mistakes.

Markdown files (`.md`) are plain text files with simple formatting. They are the easiest format for AI to read and update. If you want a standalone note-taking app that handles `.md` files well, [Obsidian](https://obsidian.md) is worth looking at.

## Useful Skills to Pick Up Along the Way

You do not need to learn to code to vibe code, but a few supporting skills will make you significantly more capable:

**Reading code** — You do not need to write it, but being able to read a function call helps you understand what the AI has built and spot obvious errors.

**The browser console (F12)** — If you open your app and nothing appears where something should be, press F12. This opens the browser developer console. When things go wrong, error messages appear here. You can copy an error message and paste it directly into your AI chat: *"I am getting this error, can you fix it?"*

**[Git](https://git-scm.com/docs/gittutorial)** — Git is version control software used by professional programmers to track changes to code. Learning the basics allows you to easily publish your apps online and maintain a history of working versions. That said, AI can manage git for you if needed.

## Going Further: Advanced Techniques

Once you are comfortable with the basics, there are more powerful approaches worth exploring:

![CLI tools, AI-powered IDEs, and Model Context Protocol explained side by side](/assets/vibe_coding_advanced_techniques.jpg)

**CLI tools and AI-powered IDEs** — Tools like [Claude Code](https://code.claude.com/docs/en/overview) (which is what powers this website) or [Cursor](https://cursor.com) allow the AI to directly read, write, and edit files on your computer. This is significantly more powerful than copy-pasting code in a chat window and is how larger projects are built.

**[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction)** — If you use any kind of software that creates a digital product — video editors, 3D modeling software, music production tools — there is likely an MCP server available that allows AI to interact with that software directly via text commands. This is the frontier of vibe coding and enables genuinely complex, cross-application workflows.

## What You Can Build

To give you a sense of the range, here are some examples of what is achievable:

- **Classroom management tools**: Student name spinners, group generators, timer displays
- **Subject-specific learning apps**: Rhythm builders, note identification flashcards, vocabulary games
- **Interactive displays**: Animated visual aids that respond to touch on a Promethean board
- **Data tools**: Attendance trackers, simple gradebooks, class progress dashboards

The key insight is that **you are the content expert**. The AI does not know what a music teacher needs any better than it knows what a chemistry teacher needs. What makes vibe coding work is that you already know exactly what tool you need and how it should behave. You just did not previously have a way to build it. Now you do.

## Getting Started Today

1. Open any AI assistant ([ChatGPT](https://chat.openai.com), [Claude](https://claude.ai), or [Gemini](https://gemini.google.com))
2. Write a clear description of a simple tool you have always wished you had
3. Paste the returned HTML code into a file called `myapp.html`
4. Open it in your browser
5. Iterate from there

The first app will feel like magic. The tenth will feel routine. By the time you have built twenty-five, you will wonder how you ever managed without it.
