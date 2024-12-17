# React Native Dimensions Inaccuracy on Screen Rotation

This repository demonstrates a common issue in React Native where using `Dimensions.get('window')` to obtain screen dimensions fails to update when the screen orientation changes. This can lead to incorrect layout and UI rendering.

The `bug.js` file showcases the problem, while `bugSolution.js` provides a corrected implementation using `useEffect` and `Dimensions.addEventListener` to handle orientation changes dynamically.

## Problem

`Dimensions.get('window')` returns the dimensions at the initial mount of the component.  Any subsequent rotation changes are not reflected, resulting in an outdated view.

## Solution

Using `useEffect` and `Dimensions.addEventListener` allows the component to listen for orientation changes and update the dimensions accordingly.