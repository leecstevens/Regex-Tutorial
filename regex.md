# RegEx Tutorial

In this document, I will go over an example of a regex expression and how I broke it down.

A regex, or "regular expression" is a method how you can match a pattern with a string.  It is meant to serve two main uses: 1. To verify input data (like email address or social security number), and 2. in code, verifying a string matches a specific pattern.

## Summary

In this particulat example, I will be using this regex pattern to verify a line of text in a chat log:

We will have a few examples:

### Example 1: A datetime example:
```
^\[\d{4}(\/|-)\d{2}(\/|-)\d{2} \d{2}:\d{2}(:\d{2})?]
The above regex denotes a string in the file which will look like this:
[2023-09-08 12:33:10]
```
### Example 2: A parsing of a display and user name:
```
.*?\((.*)\):

The above regex parses a display name (Joe King) and optionally user name (joeking).  The string looks like this:

Joe King (joeking)
```
### Example 3: Simple parsing if a user is online or offline:
```
(.*): is (off|on)line.

The above is looking for a specific string whether a user has logged on or off, saying this isn't relevant to chat itself.

The string looks like this:
Joe King (joeking): is offline.
```
> I will be denoting the example in each of the below sections and how I use them.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors

An anchor simply begins and ends a regular expression.  They aren't part of the string matching class, but define positions before, after, before and after, or even between characters.

In example 1: The ^ symbol represents the start.  The lack of a $ to end denotes the regex anchor ends at the end.

![](./img/ex17-01.jpg)

> Examples 2 and 3 do not have anchors and are not required.

![](./img/ex17-02.jpg)

### Quantifiers

### OR Operator

### Character Classes

### Flags

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
