# /verify

Run all checks to verify the app is working correctly. Execute these steps in order, stopping on failure:

1. **Typecheck**: Run `pnpm tsc -b`
2. **Lint**: Run `pnpm lint`
3. **Test**: Run `pnpm test`
4. **Build**: Run `pnpm build`
5. **Dev server**: Check if the Vite dev server is already running on port 5173. If not, start it with `pnpm dev` in the background.
6. **Browser check**: Use Claude-in-Chrome to navigate to `http://localhost:5173` and verify the page loads correctly. Confirm there is visible content and no error screens.
7. **Mobile check**: Resize the browser to 375px wide mobile viewport. Run a JavaScript overflow check (`document.documentElement.scrollWidth > document.documentElement.clientWidth`) and use read_page to confirm the layout looks correct with no horizontal overflow.

Report pass/fail for each step. If any step fails, stop and report the failure.
