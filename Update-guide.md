# Update Guide

How to update the content on this site: skills, projects, status, experience, and about sections. Follow these instructions task by task.

## Before anything: the color rule

Every box (skill box, project box, experience box) needs one of these three classes on it, written right in the HTML:

    surface-1   darkest green
    surface-2   mid green
    surface-3   lightest green

Example:

    <div class="skill-box surface-1">

**Guidelines:**

1. **Avoid Duplicate Surface Numbers:** Two adjacent boxes should never have the same surface number.  
   
2. **Numbering Sequence:** When progressing down a section, follow this pattern: 1, 2, 3, 1, 2, 3, and so on.

3. **Automatic Adjustments:** Once the class is set, all elements inside the box including tags, pills, and text color, will automatically adjust. 

4. **No Additional Color Codes:** There is no need to modify any other color codes.
## Update a project status

Find the project in index.html. Inside it, there's a line like:

    <span class="status-tag status-running">RUNNING</span>

To mark it complete, change both the class and the text:

    <span class="status-tag status-completed">COMPLETED</span>

That's the only change needed. The color, border, and glow follow automatically from the class name.

## Add a new project

1. Find the Projects section in index.html — look for `id="projects"`
2. Copy one whole project block, from `<div class="project-box ...">` down to its closing `</div>`
3. Paste it right after the last project
4. Change these inside the copy:
   - the filename in the header bar (e.g. `new-project.spec.ts`)
   - the project name
   - the status tag (running or completed, as above)
   - the description paragraph
   - the small tags at the bottom
   - the surface number on the box — pick whichever keeps the 1/2/3 pattern going from the box before it

## Add a new skill box

1. Find the Skills section — `id="skills"`
2. Copy one `.skill-box` block the same way
3. Change the filename in the header and the list of tags
4. Set the next surface number in sequence

## Add a new experience entry

1. Find the Experience section —>`id="experience"`
2. Copy one whole entry, from `<div class="notes-box ...">` to its closing `</div>`
3. Change the job title, type (Part-time / Full-time / Intern), company name, date, and the bullet points
4. Leave the dots as they are. Experience entries use hollow dots, About Me uses filled dots. Don't swap these between sections, that's the one visual difference between them.

## Remove a project or skill

Delete the whole block, from its opening `<div class="project-box ...">` (or `skill-box`) down to the matching closing `</div>`. Nothing else needs to change — the layout adjusts on its own.

## Change text anywhere else

Bio, name, contact info, about-me paragraphs all plain text inside index.html, in the Hero and Contact and About sections. Just edit the text directly, no classes involved.

## If something breaks after an edit

Almost always one of two things: a `<div>` got deleted without deleting its matching closing `</div>`, or the surface class got left off a new box. Check those two first.


