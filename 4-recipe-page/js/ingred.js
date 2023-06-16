const steps = [
    [{
        text: '1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)',
        important: 'graham cracker'
    },
    {
        text: '5 Tablespoons (70g) unsalted butter, melted',
        important: 'unsalted butter'
    },
    {
        text: '1/4 cup (50g) granulated sugar',
        important: 'granulated sugar'
    },
    ], [
        {
            text: 'four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature',
            important: 'cream cheese'

        },
        {
            text: '1 cup (200g) granulated sugar',
            important: 'granulated sugar'

        },
        {
            text: '1 cup (240g) full-fat sour cream, at room temperature',
            important: 'sour cream'

        },
        {
            text: '1 teaspoon pure vanilla extract',
            important: 'pure vanilla extract'

        },
        {
            text: '2 teaspoons fresh lemon juice (optional, but recommended)',
            important: 'fresh lemon juice'

        },
        {
            text: '3 large eggs, at room temperature',
            important: 'eggs'

        },
        {
            text: 'topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) ',
            important: 'salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce'

        },

    ]

]
const containers = document.querySelectorAll("#ingred-items .item");

containers.forEach((container, i) => {

    steps[i].forEach((step) => {
        const div = createStepDiv();
        const input = createCheckboxInput();
        const p = createStepParagraph(step.text, step.important);

        div.appendChild(input);
        div.appendChild(p);
        container.appendChild(div);
    });
});

function createStepDiv() {
    const div = document.createElement("div");
    div.classList.add("step");
    return div;
}

function createCheckboxInput() {
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "");
    input.setAttribute("id", "");
    return input;
}

function createStepParagraph(text, important) {
    const p = document.createElement("p");

    const startIndex = text.indexOf(important);
    const endIndex = startIndex + important.length;

    if (startIndex !== -1) {
        const beforeText = text.slice(0, startIndex);
        const importantText = text.slice(startIndex, endIndex);
        const afterText = text.slice(endIndex);

        const beforeSpan = createSpan(beforeText);

        const importantSpan = createSpan(importantText);
        importantSpan.style.fontWeight = "bold"; // Apply bold style to the important text
        // Or use importantSpan.style.fontStyle = "italic"; for italic style

        const afterSpan = createSpan(afterText);

        p.appendChild(beforeSpan);
        p.appendChild(importantSpan);
        p.appendChild(afterSpan);
    } else {
        p.textContent = text;
    }

    return p;
}

function createSpan(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
}
