#!/bin/sh
set -e

TITLE="$1"
RESOLUTION="$2"
DURATION="$3"
FILESIZE="$4"

MESSAGE="${TITLE}
📐 ${RESOLUTION}   ⏱ ${DURATION}   💾 ${FILESIZE}"

curl -s \
  -H "Title: 📥 Download abgeschlossen" \
  -H "Tags: white_check_mark,tv" \
  -H "Priority: default" \
  -H "Click: https://metube.viersimons.de" \
  --data-binary "$MESSAGE" \
  https://ntfy.sh/${NTFY_TOPIC}