// App.js files
import '../styles/styles.css'
import SearchBox from './modules/search-box'

new SearchBox;


// function myFunction(y) {
//     if (y.matches) { // If media query matches
//         document.getElementsByName('Search')[0].placeholder = 'Search for name or expertise';
//     } else {
//         document.getElementsByName('Search')[0].placeholder = 'concept and design concept...';
//     }
// }

// var x = window.matchMedia("(min-width: 767px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

if (module.hot) {
    module.hot.accept()
}