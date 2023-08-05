# Nav Testing

Workspace to explore cross-platform navigation + repro issues



# Issue: Expo Router > Modal Stack + Groups

This "group folder" structure doesn't seem to support linking to the index of the modal stack

```
app
| -- (modal-stack) <-- doesn't seem to work
|    |-- _layout.tsx
|    |-- modal-screen-1.tsx
|    |-- modal-screen-2.tsx
| -- _layout.tsx
| -- index.tsx
```

❌  `<Link style={styles.link} href="/(group)/">(group)</Link>`
✅  `<Link style={styles.link} href="/(group)/modal-screen-1">modal-screen-1</Link>`

vs.

✅  `<Link style={styles.link} href="/modal-stack/">modal-stack</Link>`
✅  `<Link style={styles.link} href="/modal-stack/modal-screen-1">modal-screen-1</Link>`


Repro projects in this workspace:
`apps/expo-router/modal-stack-working` - this uses normal "path folder" structure
`apps/expo-router/modal-stack-grouped` - this uses a "group folder" structure

To start a repro project:
`yarn nx run expo-router-modal-stack-grouped:start`
`yarn nx run expo-router-modal-stack-working:start`


# Misc

### Typed Routes + Monorepo?

I added this to `app.json`, but I don't get autocompletion for my `<Links />` or see the `expo-env.d.ts`
```json
    "experiments": {
      "tsconfigPaths": true,
      "typedRoutes": true
    },
```
