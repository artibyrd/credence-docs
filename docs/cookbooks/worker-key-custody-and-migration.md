---
title: "Cookbook: Worker Key Custody & Machine Migration"
description: "How to backup, export, import, and manage your Ed25519 worker identity key to preserve your leaderboard rank, badges, and reputation across machines."
since_version: "v2.22.0"
verified_version: "v2.22.0"
last_verified: 2026-09-13
---

# Cookbook: Worker Key Custody & Machine Migration

In the Credence ecosystem, contributor reputation is **cryptographically sovereign**. There are no accounts, passwords, or centralized database logins. Your identity on the network, your position on the volunteer leaderboard, your unlocked achievement badges, and the validity of your signatures are all derived directly from your **Ed25519 private key**.

If you change computers, reinstall your operating system, or deploy worker daemons across multiple cloud servers without migrating your private key, your new worker will generate a fresh keypair and start at Rank 0.

This cookbook explains how to safely inspect, backup, export, import, and inject your Ed25519 keypair across machines.

---

## 1. Inspecting Your Local Identity Key

To inspect your current worker key, public key hex string, and local storage location:

```bash
credence key show
```

Output:
```bash
# Output format:
# Public Key (Hex): 9f486ba6241d696123456789abcdef0123456789abcdef0123456789733db917df
# Key Storage Path: /home/user/.credence/node_identity.pem
# Key Algorithm: Ed25519 (256-bit elliptic curve)
# Dossier Link: https://credence.nexus/#worker/9f486ba6241d69...
```

The 64-character public key hex string is your public identifier across all Credence nodes, consensus quorums, and leaderboard tables.

---

## 2. Exporting Your Key for Backup or Migration

To export your private key into a secure PKCS#8 PEM file:

```bash
# Export key to a local file
credence key export -o ~/my-credence-worker.pem
```

Output:
```bash
# Private key successfully exported to: /home/user/my-credence-worker.pem
# Keep this file secure and private. Never commit it to git.
```

### Security Hygiene
Always ensure the exported file has strict filesystem permissions so other local processes cannot read it:

```bash
chmod 600 ~/my-credence-worker.pem
```

---

## 3. Importing Your Key on a New Machine

When you switch to a new workstation, laptop, or server, transfer your PEM file securely (e.g., via `scp` or an encrypted USB drive) and import it:

```bash
# Import the key onto the new machine
credence key import -i ~/my-credence-worker.pem
```

Output:
```bash
# Key successfully validated and imported to: /home/user/.credence/node_identity.pem
# Public Key: 9f486ba6241d69...733db917df
# Your previous leaderboard rank, badges, and audit history are now active on this machine.
```

Now, when you launch the worker daemon:
```bash
uvx credence worker --continuous
```
It immediately uses your imported keypair, maintaining your rank, historical bounties, and badges.

---

## 4. Headless & Container Deployments via `CREDENCE_NODE_KEY_PEM`

For headless Docker containers, Kubernetes pods, or CI/CD runners where you do not want to write private key files to disk, Credence supports memory-only environment variable injection:

```bash
# Read the PEM file into the environment variable
export CREDENCE_NODE_KEY_PEM="$(cat ~/my-credence-worker.pem)"

# Run worker daemon in headless container
docker run --rm \
  -e CREDENCE_NODE_KEY_PEM="$CREDENCE_NODE_KEY_PEM" \
  -e CREDENCE_MODEL_API_KEY="$CREDENCE_MODEL_API_KEY" \
  ghcr.io/credence-ecosystem/credence:v2.22.0 worker --continuous
```

When `CREDENCE_NODE_KEY_PEM` is set:
- The daemon parses the Ed25519 key directly in memory.
- No files are written to the container filesystem.
- The daemon will validate the key curve and format, rejecting corrupted strings or foreign curve types.

---

## 5. Generating a Fresh Identity Key

If you ever need to deliberately reset your worker identity or generate a dedicated key for a secondary test node:

```bash
# Generate a new key (fails if key already exists to prevent accidental deletion)
credence key generate

# Force overwrite existing key
credence key generate --force
```

---

## 6. Key Custody Checklist

Before decommissioning a computer or rotating hardware:
- [ ] Run `credence key show` and verify your public key matches your leaderboard entry.
- [ ] Run `credence key export -o ~/credence-worker-backup.pem`.
- [ ] Test the backup key on your new machine with `credence key import -i ...`.
- [ ] Run `credence key show` on the new machine to confirm matching public keys.
- [ ] Securely delete the temporary export file (`shred -u ~/credence-worker-backup.pem` or `rm -P`).
