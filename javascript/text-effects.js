// Ensure this script runs after the DOM is fully loaded
$(document).ready(function() {
    // Select the H1 element using its specific class
    const h1Element = $(".main-page-title");

    if (h1Element.length) {
        // Define two contrasting sets of 80s neon colors
        const brightNeonColors = [
            '#00FFFF', // Aqua / Electric Blue
            '#00FF00', // Lime Green
            '#FFFF00', // Neon Yellow
            '#ADFF2F', // Green Yellow
            '#FFD700'  // Gold
        ];

        const darkNeonColors = [
            '#FF00FF', // Fuchsia / Electric Pink
            '#FF69B4', // Hot Pink
            '#7B68EE'  // Medium Slate Blue (a good darker contrast)
        ];

        // Function to get a random color from a given palette
        function getRandomColorFromPalette(palette) {
            return palette[Math.floor(Math.random() * palette.length)];
        }

        // --- Apply background box and border ---
        let allLettersColor;
        let backgroundColor;

        // Randomly decide whether text is bright on dark, or dark on bright
        if (Math.random() < 0.5) {
            // Text will be a bright color, background will be a dark color
            allLettersColor = getRandomColorFromPalette(brightNeonColors);
            backgroundColor = getRandomColorFromPalette(darkNeonColors);
        } else {
            // Text will be a dark color, background will be a bright color
            allLettersColor = getRandomColorFromPalette(darkNeonColors);
            backgroundColor = getRandomColorFromPalette(brightNeonColors);
        }

        // Apply the contrasting background color to the H1 element itself
        h1Element.css({
            'background-color': backgroundColor,
            'border': `3px solid ${backgroundColor}`, // Border in the same contrasting color
            'padding': '10px 20px', // Add padding for the box effect
            'border-radius': '8px', // Slightly rounded corners for the box
            'display': 'inline-block', // Ensures background only wraps the text content
            'box-shadow': `0 0 15px ${backgroundColor}`, // Add a subtle glow
            'white-space': 'nowrap', // <--- ADDED: Prevents text from wrapping
            'overflow': 'hidden',     // <--- ADDED: Hides overflowing content
            'text-overflow': 'ellipsis', // <--- ADDED: Adds ellipsis for hidden overflow
            'max-width': '90vw' // <--- ADDED: Ensures it doesn't exceed viewport width
        });

        // --- Make letters flash with the single chosen neon color ---
        const originalText = h1Element.text(); // Get the original text
        h1Element.empty(); // Clear the h1's content to prepare for new spans

        let delay = 0;
        const delayIncrement = 70; // Milliseconds between each letter's animation start

        // Loop through each character of the original text
        for (let i = 0; i < originalText.length; i++) {
            const char = originalText[i];
            const span = $('<span>'); // Create a new span for each character

            // If the character is a space, use &nbsp; to ensure it's rendered and maintains spacing
            if (char === ' ') {
                span.html('&nbsp;');
            } else {
                span.text(char); // For other characters, set the text content
                // Apply the single chosen color to each letter
                span.css('color', allLettersColor);
            }

            // Add the CSS class for the flashing animation
            span.addClass('flash-letter');

            // Apply a staggered animation delay to each span
            span.css('animation-delay', `${delay}ms`);

            // Append the span to the H1 element
            h1Element.append(span);

            // Increment delay for all characters, including spaces, to maintain overall timing
            delay += delayIncrement;
        }
    }
});