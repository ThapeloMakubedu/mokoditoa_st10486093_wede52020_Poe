/* ==========================================================
   Divine Delights - script.js
   External JavaScript file, linked at the bottom of the order
   and contact pages. It checks the forms and shows a message
   under any box that was left empty.
   Author: Thapelo Mokoditoa
   ========================================================== */


/* setUpForm does the same job for any form:
   - formId:        the id of the <form>
   - requiredFields: the boxes that must be filled in
   - makeThanks:    a function that returns the thank-you message */
function setUpForm(formId, requiredFields, makeThanks) {
    var form = document.getElementById(formId);

    // If this page does not have that form, do nothing
    if (form === null) {
        return;
    }

    // Runs when the person clicks the send button
    form.addEventListener("submit", function (event) {
        event.preventDefault();          // stop the page from reloading
        var allGood = true;

        for (var i = 0; i < requiredFields.length; i++) {
            var field = requiredFields[i];
            var box = document.getElementById(field.id);
            var errorMessage = document.getElementById(field.id + "-error");
            var text = box.value.trim();
            var problem = "";

            if (text === "") {
                problem = field.message;
            } else if (field.mustContain && text.indexOf(field.mustContain) === -1) {
                problem = field.badMessage;
            }

            errorMessage.textContent = problem;

            if (problem === "") {
                box.classList.remove("invalid");
            } else {
                box.classList.add("invalid");
                allGood = false;
            }
        }

        var success = document.getElementById("success");

        if (allGood) {
            success.textContent = makeThanks();
            form.reset();
        } else {
            success.textContent = "";
        }
    });

    // Remove the red message as soon as the person starts typing
    for (var j = 0; j < requiredFields.length; j++) {
        document.getElementById(requiredFields[j].id).addEventListener("input", function () {
            this.classList.remove("invalid");
            document.getElementById(this.id + "-error").textContent = "";
        });
    }
}


/* ---------- Order form (order.html) ---------- */
setUpForm(
    "orderForm",
    [
        { id: "firstname",   message: "Please fill in your first name." },
        { id: "surname",     message: "Please fill in your surname." },
        { id: "contact",     message: "Please fill in your contact number or email." },
        { id: "description", message: "Please describe the cake you want." }
    ],
    function () {
        var name = document.getElementById("firstname").value.trim();
        return "Thank you, " + name + "! We have your order request and will contact you with a quote.";
    }
);


/* ---------- Contact form (contact.html) ---------- */
setUpForm(
    "contactForm",
    [
        { id: "name",    message: "Please fill in your full name." },
        { id: "email",   message: "Please fill in your email.",
                          mustContain: "@", badMessage: "Please enter a valid email address." },
        { id: "message", message: "Please type your message." }
    ],
    function () {
        var name = document.getElementById("name").value.trim();
        return "Thank you, " + name + "! We have your message and will reply soon.";
    }
);



/* ---------- Rainbow mouse follower (styles are in style.css) ---------- */
var follower = document.createElement("div");   // make the circle
follower.className = "cursor-follower";
document.body.appendChild(follower);            // put it on the page

var hue = 0;   // a position on the colour wheel, from 0 to 360

// Runs every time the mouse moves
document.addEventListener("mousemove", function (event) {

    // Step round the colour wheel: red, orange, yellow, green, blue, purple...
    hue = hue + 8;
    if (hue > 360) {
        hue = 0;
    }
    var colour = "hsl(" + hue + ", 90%, 60%)";

    // Move the circle to the mouse and give it the new colour
    follower.style.display = "block";
    follower.style.left = event.clientX + "px";
    follower.style.top = event.clientY + "px";
    follower.style.backgroundColor = colour;

    // Drop a small dot of the same colour where the mouse is
    var sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";
    sparkle.style.backgroundColor = colour;
    document.body.appendChild(sparkle);

    // Remove the dot after the fade finishes, so the page doesn't fill up
    setTimeout(function () {
        sparkle.remove();
    }, 800);
});