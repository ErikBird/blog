---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'AI-Assisted Software Development: Adapting to the New Paradigm'
pubDate: 2025-05-20
description: "Exploring how AI coding assistants are transforming software development workflows and the best practices for adapting to this new paradigm."
author: 'Erik Schwan'
image:
    url: '/images/posts/ai-coding-assistant.png'
    alt: 'AI Coding Assistant'
tags: ["AI", "software development", "programming", "technology adoption"]
category: "technology"
---
# AI Assisted Software Development: Adapting to the New Reality

*This blog post draws inspiration from guidelines found in AI coding setups like OpenAI Codex, Claude Code, and Cursor, though with different naming conventions. Readers are encouraged to consult official documentation for their preferred technology.*

## A New Layer of Abstraction

AI-assisted coding represents a fundamental paradigm shift. As developers, we must adapt our craft accordingly, embracing new priorities and workflows.

We now have access to an inexpensive crowd of talented junior engineers—AI agents—which means we should focus more on engineering and less on coding. We bear responsibility for helping these juniors succeed. This post outlines how to adapt your process to this new development landscape and "normalize" your repositories.

## Technology Selection Considerations

These AI junior engineers are surprisingly conventional, preferring well-established concepts and programming languages. They excel with Python more than Ruby or Rust.

Working with strict linting preferences and type systems is highly beneficial. Fortunately, the software engineering landscape hasn't changed radically for popular applications like web apps. However, exercise extra caution when selecting a tech stack that incorporates cutting-edge technologies.

## The New Definition of Technical Debt

In this future, technical debt will manifest as incoherent projects. Code style should remain consistent throughout the repository and align with documentation. Architecture should follow uniform principles, as AIs benefit significantly from clean abstraction layers.

Most importantly, document the structures that create coherence.

## Repository Setup

Every project setup is inherently opinionated. In this new world, great software engineers should be acutely aware of their opinions.

Consider generating a template project and collecting your wisdom/opinions throughout your career.

## Documentation: The New Cornerstone

Every repository needs a well-structured entry point document (typically in the root directory) that includes:

### Project Standards

- Code style guidelines
- Repository conventions (branch naming, merge vs. rebase preferences)
- Developer environment setup instructions
- Testing procedures
- Core files and utility functions overview
- Commonly used commands
- Project-specific quirks or warnings (like deprecated code styles)

### Repository Navigation

- Clear explanation of the codebase structure
- Key components and their relationships

### Monorepo Considerations

For monorepos, implement a hierarchical documentation approach:

- Create specific documentation for each subfolder with context-relevant information
- Document cross-cutting concerns in the root or dedicated documentation area
- Maintain up-to-date references between related components

## Maximize Model Context

Leverage Model Context Provision (MCP) integrations for each helpful technology to give the LLM proper context.

## Git as a Historical Record

Since Git provides a text-based chronology of your repository, maintain a clean Git history with tags, meaningful commit descriptions, and ideally references to implemented tickets with excerpts. This approach greatly assists LLMs as they can seamlessly interpret this information.

## Document Your Programming Routines

Document when to run tests after implementing a feature.
Document running migration auto-generate scripts and reviewing them after database changes.

Provide AI agents with clear process preferences about your expected working style, such as:

* Write code, screenshot result, iterate
* Write tests, commit; code, iterate, commit
* Explore, plan, code, commit

## Developer's Daily Approach

* Make documentation iteration/optimization part of your daily ritual
* Experiment to determine what produces the best instruction-following from the model
* Be specific in your instructions—take time to think through the problem and what the model needs to know
* Course-correct early and often (but don't forget that this is what we want to avoid long-term)
* Keep context focused
* Use checklists and scratchpads for complex workflows
* Leverage AI Agents for issue triage or generating Project Requirement Documents (PRDs)
* Use AI Agents as linters

## The Path to Meta-Programming

Improving our ability to control AI Agents will lead us toward clearly defining how we want architectures modeled.

This will create a state where common problems and paradigms are easily implemented with our preferred tools: databases, vector search, settings, CQRS/event stores, APIs, frontends, and user/app logic.
The developer of tomorrow will be less a coder and more an architect, guiding AI to implement their vision efficiently and cohesively.
