const cells = [];
const containerSize = 480;
let size = 16;
let isDrawing = false;
let isColorRandomised = false;
let etchColor = "#000";
let hue = 0;

const canvas = document.querySelector(".canvas");
const resetBtn = document.querySelector(".reset-btn");
const setGridBtn = document.querySelector(".set-grid-btn");
const randomiseColorBtn = document.querySelector(".randomise-color-btn");
const etchColorPicker = document.querySelector(".etch-color-picker");

