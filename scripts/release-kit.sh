#!/usr/bin/env bash
# Cut a dashboard-kit release: split packages/dashboard-kit into its own history
# (npm git deps can't install a repo subfolder) and push it as tag dashboard-kit-v<version>.
#
# Usage: scripts/release-kit.sh 0.2.3
# Consumers then pin "@kyber/dashboard-kit": "github:Hemant-Mann/kyber-ui#dashboard-kit-v0.2.3".
set -euo pipefail

PREFIX=packages/dashboard-kit
VERSION=${1:-}
[[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "usage: $0 <major.minor.patch>, e.g. $0 0.2.3" >&2; exit 1; }
TAG="dashboard-kit-v$VERSION"

cd "$(git rev-parse --show-toplevel)"

# The split only sees commits, so uncommitted kit changes would silently be left out.
if [[ -n "$(git status --porcelain -- "$PREFIX")" ]]; then
  echo "Uncommitted changes in $PREFIX; commit them first:" >&2
  git status --short -- "$PREFIX" >&2
  exit 1
fi

git fetch --tags --quiet origin
if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then
  echo "Tag $TAG already exists" >&2
  exit 1
fi

SHA=$(git subtree split --prefix "$PREFIX" 2>/dev/null)
LATEST=$(git tag --list 'dashboard-kit-v*' --sort=-v:refname | head -1)
if [[ -n "$LATEST" && "$(git rev-parse "$LATEST^{commit}")" == "$SHA" ]]; then
  echo "No kit changes since $LATEST ($SHA); nothing to release" >&2
  exit 1
fi

git tag "$TAG" "$SHA"
git push origin "refs/tags/$TAG"
echo "Released $TAG -> $SHA"
