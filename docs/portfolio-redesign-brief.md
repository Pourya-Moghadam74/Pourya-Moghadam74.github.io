# Portfolio Redesign Brief

## Purpose and positioning

The portfolio should position Pourya Moghadam primarily as a **Machine Learning Engineer**.

Secondary target roles are:

- Applied AI Engineer
- AI Engineer
- Applied Scientist
- Research Engineer

The supporting descriptor is **PhD · Applied AI and Multimodal Machine Learning**.

The core recruiter message is:

> I build end-to-end machine learning systems, from data and ranking models to APIs, evaluation, observability, and deployment.

Every content and design decision should reinforce ML engineering credibility. The portfolio should not lead with generic frontend development, general software development, or purely academic identity. Research should strengthen the engineering narrative by demonstrating rigorous evaluation, applied ML depth, and experience with real sensing or AI problems.

## Design principles

Use a restrained, dark technical aesthetic that feels credible to ML engineering teams, startups, research groups, and larger technology companies.

- Use deep navy rather than pure black.
- Use soft white for primary text and cool gray for supporting text.
- Use cyan or teal as the primary accent.
- Favor generous whitespace, strong typography, and clear hierarchy.
- Use subtle borders and restrained shadows.
- Limit gradients, glow, blur, and backdrop-filter effects.
- Avoid yellow accents, excessive pill badges, and repeated neon card treatments.
- Avoid generic AI-brain imagery and purely decorative technical diagrams.
- Use motion only when it communicates state or hierarchy.

### Initial palette direction

| Role | Initial value |
| --- | --- |
| Background | `#07111F` |
| Surface | `#0D1828` |
| Elevated surface | `#122033` |
| Primary text | `#F3F7FA` |
| Secondary text | `#9FB0C3` |
| Accent | `#22D3C5` |
| Accent hover | `#5EEAD4` |
| Border | `#203249` |

These values are design directions, not immutable tokens. Before implementation, verify WCAG contrast for every foreground/background pairing and for interactive states. In particular, border-only boundaries, subdued metadata, disabled states, and accent-colored small text require explicit checks. Color must not be the only indication of state.

## Homepage information architecture

1. Header
2. Hero
3. Featured projects
4. Machine learning engineering capabilities
5. Experience
6. Research and publications
7. Education and teaching
8. Contact call to action
9. Footer

The sequence should enable a recruiter to understand the target role, engineering scope, strongest evidence, and professional background in a short scan.

## Header

Use a compact site header with the candidate name or concise identity mark and normal fragment-anchor navigation. Likely destinations are Projects, Capabilities, Experience, Research, and Contact. On smaller screens, use a keyboard-accessible menu rather than compressing the desktop navigation.

Social links may include GitHub, LinkedIn, Google Scholar, email, and a future résumé only when their URLs are configured. Empty actions must not render.

## Hero

The hero must communicate role and capability within ten seconds.

- **Name:** Pourya Moghadam
- **Primary title:** Machine Learning Engineer
- **Secondary descriptor:** PhD · Applied AI and Multimodal Machine Learning
- **Value proposition:** “I build end-to-end machine learning systems, from data and ranking models to APIs, evaluation, observability, and deployment. My work spans intelligent search, recommendation, RAG, agentic AI, and privacy-preserving sensing.”
- **Primary action:** View Projects
- **Secondary action:** Connect on LinkedIn

Credibility indicators:

- University of Toronto
- Machine Learning and Applied AI
- Toronto, Canada

Future optional links are GitHub, Google Scholar, résumé, and email. Render them only when backed by configured URLs. The confirmed positioning is three years of production ML experience; do not add availability claims, numerical impact, new location details, or unverified links.

## Featured projects

The required order is:

1. ProjectPilot AI
2. Privacy-Preserving Multimodal Activity Recognition System

Projects should read as engineering case studies rather than generic cards. Each project data model should be able to represent:

- Title and one-line positioning
- Problem and context
- Candidate contribution
- Architecture
- ML or AI method
- Evaluation approach
- Production engineering
- Technical tradeoffs and limitations
- Technologies
- Optional GitHub, live-demo, case-study, and publication URLs
- Featured image with purposeful alternative text

All URLs are optional. Missing values should be omitted from the rendered interface rather than represented by empty links. The homepage should expose the most useful scanning information; detailed architecture and evaluation belong in an expandable or future case-study treatment.

### ProjectPilot AI

This is a placeholder project specification. Do not publish assumed details. The following fields require candidate input:

- Problem and intended users
- Document types and corpus characteristics
- Retrieval architecture
- Chunking strategy
- Embedding model
- Vector database
- Reranking approach
- Citation behavior
- LangChain usage
- LangGraph usage
- Tool calling
- Agent state and memory
- Evaluation methods and results
- Observability
- Deployment architecture
- Limitations
- Technologies, URLs, and featured image

Until these details are supplied, label the project internally as incomplete and avoid claims in the public interface.

### Privacy-Preserving Multimodal Activity Recognition System

Known high-level framing:

- Privacy-preserving sensing
- Multimodal machine learning
- Activity recognition
- Non-visual sensing
- Research-oriented evaluation

The following require candidate input before publication:

- Problem context and candidate contribution
- System architecture and modality-fusion approach
- Datasets and data-collection context
- Models and training approach
- Evaluation protocol, metrics, and results
- Privacy tradeoffs and limitations
- Deployment or edge-runtime claims
- Technologies, URLs, publication references, and featured image

Do not infer architecture, datasets, models, metrics, deployment status, or measurable outcomes from the high-level framing.

## Machine learning engineering capabilities

Use grouped capability areas rather than a dense badge cloud:

1. Machine Learning
2. Search, Ranking, and Recommendation
3. Applied AI and LLM Systems
4. ML and Backend Engineering
5. Deployment and Observability
6. Research and Evaluation

Each final capability must be grounded in demonstrable candidate experience. Do not add tools or techniques because they are popular. Prefer a small number of meaningful capabilities linked to project or experience evidence.

## Experience

Prioritize, in order:

1. Relevant ML and AI research
2. AI engineering work
3. Data and analytics work
4. Technically relevant teaching

Experience entries should emphasize verified scope, responsibilities, systems, and methods. Do not invent metrics. Research and industry work should carry greater visual weight than teaching.

## Research and publications

Support a concise research section containing:

- Selected publications
- PhD research focus
- Privacy-preserving sensing
- Multimodal learning
- Activity recognition
- Time-series learning
- Google Scholar link

This section should demonstrate technical depth without turning the homepage into a full academic CV. Publication titles, authorship, venues, dates, links, and research specifics require verified candidate data before inclusion.

## Education and teaching

Keep education easy to scan. Preserve technically relevant teaching, but present it compactly so that it does not consume more space than research and industry experience. A summarized course count or selected-course list may be considered only when it can be derived accurately from the supplied records.

## Contact call to action

Remove the existing contact form in the redesign and replace it with a compact call-to-action section.

Suggested copy:

> Interested in machine learning engineering, applied AI, or research collaboration?

- **Primary action:** Connect on LinkedIn
- **Optional actions:** Email me; Download résumé

Only render actions with configured URLs. The absence of an email or résumé URL must not leave empty controls or awkward spacing.

## Responsive behavior

Define layouts intentionally at three levels:

### Mobile

- Use a single-column content flow and compact header menu.
- Present projects as straightforward stacked case-study cards.
- Keep primary actions visible without crowding.
- Avoid interactions that depend on hover.

### Tablet

- Introduce selective side-by-side layouts where content remains readable.
- Preserve comfortable line lengths and touch targets.
- Avoid treating tablet as either an enlarged phone or compressed desktop.

### Desktop

- Use composition and whitespace unavailable on smaller screens rather than merely widening the mobile stack.
- Allow richer project layouts, potentially alternating image and content placement.
- Keep reading widths controlled and hierarchy obvious.

## Accessibility requirements

- Use semantic header, navigation, main, section, and footer landmarks.
- Use normal fragment anchors for section navigation.
- Provide visible focus states for all interactive controls.
- Make the mobile menu fully keyboard accessible.
- Include `aria-expanded` and `aria-controls` on the menu trigger.
- Support Escape dismissal and restore focus to the trigger.
- Respect reduced-motion preferences for scrolling and transitions.
- Ensure every hover-revealed interaction is also available by keyboard and touch.
- Verify sufficient text, control, focus, and boundary contrast.
- Give informative images concise, contextual alternative text; use empty alternative text for genuinely decorative images.
- Maintain logical heading order and descriptive link labels.

## Performance requirements

- Audit large PNG assets and convert appropriate images to WebP or AVIF.
- Provide responsive image sizes and avoid serving desktop assets to small screens.
- Lazy-load below-the-fold images.
- Set explicit image dimensions or aspect ratios to reduce layout shift.
- Replace render-blocking font imports with optimized loading or self-hosting.
- Reduce repeated blur and backdrop-filter effects.
- Avoid unnecessary gradients and expensive decorative layers.
- Eventually consolidate to one icon library after confirming required icons.
- Measure changes rather than assuming an optimization improved performance.

## Out of scope for the initial redesign

- TypeScript migration
- CMS integration
- Blog
- Authentication
- Complex animation libraries
- Three-dimensional effects
- Speculative metrics
- Invented links or project details
- Unnecessary dependency additions
- Full multi-page routing unless approved later

## Implementation sequence

Each phase should remain independently reviewable and preserve a working build.

1. **Content confirmation:** Gather missing project, publication, research, capability, résumé, and URL details. Mark unverified fields as unavailable rather than filling them speculatively.
2. **Content model extension:** Expand the existing content modules to support case studies, optional actions, capability groups, publications, and explicit image metadata without changing presentation.
3. **Design foundations:** Establish accessible palette, typography, spacing, surface, border, focus, and motion tokens. Review contrast before component work.
4. **Page skeleton:** Reorder semantic sections and add stable fragment anchors while retaining simple existing presentation.
5. **Header and hero:** Implement the role-first message, credibility indicators, calls to action, and accessible responsive navigation.
6. **Featured projects:** Build recruiter-scannable case-study components and keep incomplete project details explicitly data-gated.
7. **Capabilities:** Add evidence-based grouped capabilities linked conceptually to projects and experience.
8. **Experience and research:** Rebalance industry, research, education, publications, and compact teaching content.
9. **Contact and footer:** Replace the form with an optional-link-aware call to action and simplify supporting navigation.
10. **Responsive refinement:** Create intentional mobile, tablet, and desktop compositions, including richer desktop project layouts.
11. **Accessibility pass:** Test landmarks, headings, anchors, keyboard navigation, menu behavior, focus restoration, reduced motion, contrast, and image alternatives.
12. **Performance pass:** Optimize images and fonts, reduce costly visual effects, consolidate icons where safe, and compare measured results.
13. **Final validation:** Run lint and production build, test representative viewport sizes and input modes, verify every factual claim and URL, and review the result against this brief.
