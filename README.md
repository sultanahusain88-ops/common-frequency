# COMMON FREQUENCY — Connect a City

**No one connects a city alone.** A cooperative switchboard puzzle for 2–6 operators.

Play: https://sultanahusain88-ops.github.io/common-frequency/

## The idea
A community radio network is down. Every operator controls a different colour of switches, so the crew must talk and work together. Rotate your switches to connect all the rooftops to the source at A1. There is no individual score and no wall-clock timer.

## Play together
1. Create a room and share the invite or six-letter code.
2. Everyone joins from their own phone or laptop before the host starts the shift.
3. A tap rotates your switch a quarter-turn clockwise, costing one turn.
4. Adjacent cables connect when their open ends face each other. The green network has signal from A1.
5. Connect every switch to A1 before the rotation budget runs out. Shared flags and radio messages are free.

Keep the host's original tab open. If an operator is away for 60 seconds, their switches become available to the crew. Refresh the same tab to attempt session recovery. If the host closes the tab, the room is interrupted until they recover it.

Three districts offer 4×4 and 5×5 networks. Every shift generates a fresh solvable board. The budget includes enough clockwise rotations to reach one guaranteed solution plus extra turns. Solo practice gives one operator all switches and an optional nudge. Audio is optional and the design respects reduced-motion preferences.

## Multiplayer and hosting
GitHub Pages serves the prebuilt static game. PeerJS Cloud handles signaling; WebRTC data channels carry room actions. The host validates ownership, rotation versions, phase transitions and the turn budget before broadcasting the new state. No account, download, microphone or camera is needed.

Some restricted networks and NAT configurations can prevent a WebRTC connection. There is no dedicated TURN relay configured. Try another network if a connection fails. Solo practice works without the signaling service. The host must stay online; this is not a persistent always-on game server.

## Source
- `game.ts`: seeded spanning-tree board generator, signal propagation and game rules.
- `transport.ts`: host coordinator, peer connections, per-tab operator passes and recovery.
- `main.tsx`: interface, switch rendering, room lobby, radio, guide, optional audio and practice.
- `style.css`: responsive layout and visual design.
- `build.mjs`: creates a self-contained `index.html`.
- `test-game.mjs`: meaningful rule and generation checks.

With Node.js 22.18+ and npm:

```sh
npm ci
node test-game.mjs
npm run build
```

Serve the folder with a static HTTP server. For GitHub Pages, publish the root of `main`; the committed `index.html` is ready to serve.

## Verification
The engine passed 1,200 generated board playthroughs across all three districts and crew sizes 2–6. Tests cover ownership, stale rotation rejection, free flags/messages, disconnected operator handover, privacy of operator passes, host permissions, solo practice and loss/restart. Browser tests cover two independent operators, shared rotations, ownership restrictions, flags, radio and a 390px layout without horizontal overflow. TypeScript checks and production bundling passed.

## Credits
Created with ChatGPT for the Handshake multiplayer game mission. The switchboard gameplay, board generator and visual identity are new for this project. Networking infrastructure is adapted from the earlier AFTERLIGHT prototype created in the same working session. React, Lucide and PeerJS retain their respective open-source licenses. The artwork is authored SVG; no paid assets are required.
