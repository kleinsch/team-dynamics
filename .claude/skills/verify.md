# /verify

Run all checks to verify the app is working correctly. Execute these steps in order, stopping on failure:

1. **Typecheck**: Run `pnpm tsc -b`
2. **Lint**: Run `pnpm lint`
3. **Build**: Run `pnpm build`
4. **Dev server**: Check if the Vite dev server is already running on port 5173. If not, start it with `pnpm dev` in the background.
5. **Browser check**: Use Claude-in-Chrome to navigate to `http://localhost:5173` and verify the page loads correctly. Confirm there is visible content and no error screens.

Report pass/fail for each step. If any step fails, stop and report the failure.
