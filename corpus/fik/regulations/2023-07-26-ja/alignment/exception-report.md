# Japanese-English Semantic Alignment Exceptions

Status: `owner_approved_internal_research_with_documented_differences`

## Result

- Total paired passages reviewed: 100
- Meaning-equivalent despite wording differences: 87
- Exceptions requiring owner or domain review: 13
- Unable to determine: 0

These are differences between two official publications, not transcription errors. Neither official text has been
rewritten. The recommended default is to preserve both and expose the difference to applications and researchers.

## Exceptions

### 1. kkp:article:fik.regulations:000001

**Difference:** governing organization scope

**Japanese:** The purpose applies to shiai of the All Japan Kendo Federation.

**English:** The purpose applies to shiai of the International Kendo Federation.

**Why it matters:** The named governing organization and therefore the stated institutional scope differ.

**Recommended handling:** Preserve both official texts and expose the scope difference; do not normalize either organization name.

### 2. kkp:article:fik.regulations:000039

**Difference:** consultation vs approval

**Japanese:** Referees confer and handle the matter after consulting the shinpan-shunin or shinpan-cho.

**English:** The gogi decision is subject to approval of the shinpan-shunin or shinpan-cho.

**Why it matters:** Consultation and required approval may imply different final authority.

**Recommended handling:** Preserve both formulations and request domain review before presenting them as procedurally identical.

### 3. kkp:subsidiary-rule:fik.regulations:000008

**Difference:** additional approval condition

**Japanese:** Medical supporters are allowed when necessary, tidy, and not hazardous.

**English:** The same conditions apply, plus approval by the shinpan-shunin or shinpan-cho.

**Why it matters:** The English edition adds an express approval requirement absent from the Japanese passage.

**Recommended handling:** Preserve the edition-specific condition and surface it in cross-language comparison.

### 4. kkp:subsidiary-rule:fik.regulations:000012

**Difference:** modality

**Japanese:** The listed immediate strikes may be treated as valid.

**English:** The listed immediate strikes shall be valid.

**Why it matters:** The Japanese wording is discretionary while the English wording is mandatory.

**Recommended handling:** Preserve both modals and flag the difference for referee-domain review.

### 5. kkp:subsidiary-rule:fik.regulations:000023

**Difference:** additional signalling method

**Japanese:** Timekeepers signal expiration of shiai time without specifying the instrument in this article.

**English:** Timekeepers signal expiration using the flag and cite Figure 5.

**Why it matters:** The English edition adds a specific signalling instrument and figure reference.

**Recommended handling:** Preserve the extra English operational detail and verify it against tournament practice before treating it as shared.

### 6. kkp:subsidiary-rule:fik.regulations:000030

**Difference:** additional signalling method

**Japanese:** The kantoku gives a signal when filing igi, without specifying an instrument.

**English:** The kantoku signals with a kantoku-ki and cites Figure 5.

**Why it matters:** The English edition specifies an instrument absent from the Japanese passage.

**Recommended handling:** Preserve the edition-specific detail and avoid silently adding kantoku-ki to the Japanese text.

### 7. kkp:guideline-section:fik.regulations:2023-07-26:ja:shiai-sha:rei-to-the-shomen

**Difference:** multi day frequency

**Japanese:** For an event spanning two or more days, the text names the first shiai and last shiai without expressly saying each day.

**English:** The bow is expressly required at the first and last shiai of each day.

**Why it matters:** The English edition explicitly creates a daily repetition not stated in the Japanese passage.

**Recommended handling:** Link this finding with the shinpan-in counterpart and request domain confirmation as one shared-heading issue.

### 8. kkp:guideline-section:fik.regulations:2023-07-26:ja:shiai-sha:request-for-a-stoppage

**Difference:** additional opponent instruction

**Japanese:** The requesting shiai-sha withdraws and adjusts equipment in sonkyo or seiza.

**English:** The same procedure is given, plus an instruction that the opponent waits in seiza or sonkyo.

**Why it matters:** The English edition adds an operational duty for the opponent.

**Recommended handling:** Preserve the additional English instruction and do not inject it into Japanese official text.

### 9. kkp:guideline-section:fik.regulations:2023-07-26:ja:shiai-sha:fusen-gachi

**Difference:** team participants

**Japanese:** In dantai-shiai fusen-gachi, all shiai-sha receive the declaration at the ritsu-rei location.

**English:** The winning team lines up and receives the declaration.

**Why it matters:** The passages may identify different participants in the team procedure.

**Recommended handling:** Request domain review with the source figure before asserting equivalence.

### 10. kkp:guideline-section:fik.regulations:2023-07-26:ja:shiai-sha:other-guidelines

**Difference:** multiple operational differences

**Japanese:** The passage specifies the nito sheathing sequence, men-himo of 40cm or less, and prohibits physical gestures during changeover.

**English:** The nito sheathing wording does not describe the same sequence clearly, says shorter than 40cm, and says gestures should be avoided.

**Why it matters:** The pair contains a sequence discrepancy, a boundary difference at exactly 40cm, and a weaker English modal.

**Recommended handling:** Keep the three sub-findings together but expose them separately in applications and domain review.

### 11. kkp:guideline-section:fik.regulations:2023-07-26:ja:shinpan-in:rei-to-the-shomen

**Difference:** multi day frequency

**Japanese:** For an event spanning two or more days, the text names the first shiai and last shiai without expressly saying each day.

**English:** The bow is expressly required at the first and last shiai of each day.

**Why it matters:** This repeats the shared-heading frequency difference in the shinpan-in stream.

**Recommended handling:** Review together with the shiai-sha counterpart as one source-level issue.

### 12. kkp:guideline-section:fik.regulations:2023-07-26:ja:shinpan-in:request-for-a-stoppage

**Difference:** decision authority

**Japanese:** Gogi follows when the shinpan-in judge the stoppage request unjustified.

**English:** Gogi follows when the shushin deems the request unjustified.

**Why it matters:** Collective referees and the chief referee may imply different decision authority.

**Recommended handling:** Preserve both and request referee-domain confirmation.

### 13. kkp:guideline-section:fik.regulations:2023-07-26:ja:shinpan-in:other-guidelines

**Difference:** cross reference and scope

**Japanese:** Equipment checking cites Subsidiary Rules Articles 2 and 3 and includes attempted inappropriate conduct after shiai.

**English:** Equipment checking cites Subsidiary Rules Articles 3 and 4 and omits attempted conduct.

**Why it matters:** The English cross-references point to kendo-gu and mejirushi rather than both shinai and kendo-gu, and its conduct scope is narrower.

**Recommended handling:** Preserve the printed references, flag the English reference set as potentially erroneous, and do not silently correct it.

## Owner Approval

Approved by Adrian Yoneda on 2026-08-19 for internal research use.

Preserve both official texts without rewriting either edition.

The approval accepts these as documented edition differences. It does not choose one edition as universally
controlling and does not certify a legal interpretation.
