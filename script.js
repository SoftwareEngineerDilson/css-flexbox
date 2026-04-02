/**
 * update flex box property via select option dropdown
 * 2026 by dilsontorrefiel
 */

// get element object 
const flexContainer = document.getElementById("container");
const justifyContentDropdown = document.getElementById("justify-content");
const flexWrapDropdown = document.getElementById("flex-wrap");
const alignItemsDropdown = document.getElementById("align-items");
const alignContentDropdown = document.getElementById("align-content");

// set initial values
flexContainer.style.justifyContent = justifyContentDropdown.value;
flexContainer.style.flexWrap = flexWrapDropdown.value;
flexContainer.style.alignItems = alignItemsDropdown.value;
flexContainer.style.alignContent = alignContentDropdown.value;

// set justity content css property
justifyContentDropdown.addEventListener("change", (e) => {
    flexContainer.style.justifyContent = e.target.value;
});

// set flex wrap css property
flexWrapDropdown.addEventListener("change", (e) => {
    flexContainer.style.flexWrap = e.target.value;
});

// set align items css property
alignItemsDropdown.addEventListener("change", (e) => {
    flexContainer.style.alignItems = e.target.value;
});

// set align content css property
alignContentDropdown.addEventListener("change", (e) => {
   flexContainer.style.alignContent = e.target.value; 
});