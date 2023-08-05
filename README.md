# Nav Testing

Workspace to explore cross-platform navigation + repro issues

# Issue: Expo Router > Modal Stack + Groups

## Overview

This "group folder" structure doesn't seem to support linking to the index of the modal stack


<details>

<summary>Screen Recording</summary>

https://github.com/leggomuhgreggo/nav-testing/assets/2213636/d2d8580a-d28c-4db5-9ccc-bc84ee3ca6e2

</details>


```
app
| -- (modal-stack) <-- links here don't work
|    |-- _layout.tsx
|    |-- modal-screen-1.tsx
|    |-- modal-screen-2.tsx
| -- _layout.tsx
| -- index.tsx
```

#### Group Folder

- ❌  `<Link href="/(group)/">(group)</Link>`
- ✅  `<Link href="/(group)/modal-screen-1">modal-screen-1</Link>`

#### Normal Path Folder

- ✅  `<Link href="/modal-stack/">modal-stack</Link>`
- ✅  `<Link href="/modal-stack/modal-screen-1">modal-screen-1</Link>`

### Repro Projects

- `apps/expo-router/modal-stack-working` - this uses normal "path folder" structure
- `apps/expo-router/modal-stack-grouped` - this uses a "group folder" structure

## Usage

To start a repro project:
#### Example w/ "group" folder (index link not working)
```
yarn nx run expo-router-modal-stack-grouped:start
```

#### Example w/ standard "path" folder (index link working)
```
yarn nx run expo-router-modal-stack-working:start
```

