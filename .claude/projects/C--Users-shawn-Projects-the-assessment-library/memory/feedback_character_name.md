---
name: Character name is permanent identity
description: Never derive character name from getCharacter() or DISC trait — it is a stored profile field that must not change
type: feedback
---

Character name must never change. Only the character image/avatar should update when the dominant DISC trait changes.

**Why:** Users choose custom character names (e.g., "Sonic") during onboarding. Deriving the name from `getCharacter(theme, discType, gender)` overwrites the custom name with a generic archetype name (e.g., "Blaze"), which broke Shane's character name.

**How to apply:** In KidsCharacterCard.vue, `characterName()` must always read from `profile.characterName || profile.characterCustomName || profile.childName`. Never use `getCharacter()` for the name. The rule is: name = identity (permanent, stored), image = appearance (follows dominant trait, derived dynamically).
