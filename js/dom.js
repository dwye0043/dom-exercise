// Task 1 ----------------------------------------------------------------------------------


// Access HTML element with id tag-line.  Place value in collect variable.
var tag_line = document.getElementById("tag-line").innerHTML;
var collect = tag_line + "\n ------------------------------------------- \n";


// Access all headings that belong to div with the class name bg-main-content.
var bg_main_h2 = document.querySelectorAll(".bg-main-content h2");

// Loop through array of headings and append the content of each heading to variable collect.
for (var i = 0; i < bg_main_h2.length; i += 1) {
    collect += bg_main_h2[i].innerHTML + "\n";
}

// Print the results.
alert(collect);


// Task 2 -------------------------------------------------------------------------------------

//Reset Variable.
var collect = null;    

//Access 13th div with class name box that belongs to div with class name bg-main-content. 
var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12];

//Set box_array to contain all HTML elements that belong to that div using children property.
var box_array = when_to_launch.children;

//Set collect to heading of array content - which is stored in first element.
collect = box_array[0].innerHTML + "\n-------------------\n";

//Loop through the array starting with the second array element and append the content of array elements to variable collect.
for (var i = 1; i < box_array.length; i += 1) {
    collect += box_array[i].innerHTML + "\n\n";
}

// Print the results.
alert(collect);


