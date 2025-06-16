$(document).ready(function() {
    // Select the H1 element using its current classes
    const h1Element = $(".display-5.font-weight-bold.mb-3");

    if (h1Element.length) {
        // 1. Randomize Color Function
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Apply a random color initially to the whole H1
        h1Element.css('color', getRandomColor());

        // 2. Make letters flash
        const originalText = h1Element.text(); // Get the original text, including spaces
        h1Element.empty(); // Clear the h1's content to prepare for new spans

        let delay = 0;
        const delayIncrement = 50; // Milliseconds between each letter's animation start

        // Loop through each character of the original text
        for (let i = 0; i < originalText.length; i++) {
            const char = originalText[i];
            const span = $('<span>'); // Create a new span for each character

            // If the character is a space, use &nbsp; to ensure it's rendered
            if (char === ' ') {
                span.html('&nbsp;');
            } else {
                span.text(char); // For other characters, set the text content
            }

            // Add the CSS class for the flashing animation
            span.addClass('flash-letter');

            // Apply a staggered animation delay to each span
            span.css('animation-delay', `${delay}ms`);

            // Append the span to the H1 element
            h1Element.append(span);

            // Increment delay only for visible characters to avoid long pauses on multiple spaces
            if (char !== ' ') {
                delay += delayIncrement;
            }
        }
    }
});