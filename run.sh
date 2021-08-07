#!/bin/bash
yarn
yarn bundle-android
cd android
./gradlew assembleDebug
cd app/build/outputs/apk/debug/