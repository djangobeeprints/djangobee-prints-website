# Claude Code Instructions — djangobee prints website

## Git / GitHub Account Switching

This repo belongs to the `djangobeeprints` GitHub account, but the default active account is `Mr-Dangerous`.

**Whenever the user asks to push or commit and push:**

1. Switch to the djangobeeprints account:
   ```
   gh auth switch --user djangobeeprints
   ```
2. Run the push:
   ```
   git push
   ```
3. Switch back to Mr-Dangerous:
   ```
   gh auth switch --user Mr-Dangerous
   ```

Always do all three steps in order. Never leave the session on the djangobeeprints account.
