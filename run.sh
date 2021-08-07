#!/bin/bash

LOTTIE_CONSTANTS_FILE="$(pwd)/src/constants.ts"
LOTTIES_PATH="$(pwd)/src/lotties"

# Remove constants lottie file if exists
if [ -f "$LOTTIE_CONSTANTS_FILE" ]; then
    rm $LOTTIE_CONSTANTS_FILE
fi

# Create a new constant file
touch $LOTTIE_CONSTANTS_FILE

# Create an array
echo "export const lotties = [" >> $LOTTIE_CONSTANTS_FILE
for file in "$LOTTIES_PATH"/*; do
  filename="${file##*/}"
  echo "  require('./lotties/$filename')," >> $LOTTIE_CONSTANTS_FILE
done
echo "];" >> $LOTTIE_CONSTANTS_FILE

# Build dev apk
yarn
yarn bundle-android
cd android
./gradlew assembleDebug
cd app/build/outputs/apk/debug/