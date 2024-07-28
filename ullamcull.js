/**
 * Function to generate gradient labels for a legend
 * @param {Object} spec - Specifications for the legend.
 * @param {Object} config - Configuration settings.
 * @param {Object} userEncode - User-defined encoding settings.
 * @param {Object} dataRef - Reference to the data used for the legend.
 * @returns {Array} An array of labels for the gradient legend.
 */
function legendGradientLabels(spec, config, userEncode, dataRef) {
    // Placeholder for the labels array
    const labels = [];

    // Example logic to generate labels based on provided parameters

    // 1. Extract relevant information from spec
    // (e.g., the range of values for the gradient)
    const gradientRange = spec.range || [0, 1];
    const labelCount = spec.labelCount || 5;

    // 2. Generate the labels based on the range and the count
    for (let i = 0; i < labelCount; i++) {
        const value = gradientRange[0] + (i * (gradientRange[1] - gradientRange[0]) / (labelCount - 1));
        labels.push(value.toFixed(2)); // Format the value to 2 decimal places
    }

    // 3. Apply any user encoding (if applicable)
    if (userEncode && typeof userEncode === 'function') {
        for (let i = 0; i < labels.length; i++) {
            labels[i] = userEncode(labels[i], i, labels);
        }
    }

    // 4. Additional configuration settings can be applied here
    // (e.g., formatting, styling, etc.)

    return labels;
}

// Example usage
const spec = {
    range: [0, 100],
    labelCount: 5
};

const config = {};  // Assuming some configuration settings are present
const userEncode = (label, index, labels) => `Label ${index + 1}: ${label}`;
const dataRef = {};  // Reference to the data, if necessary

const gradientLabels = legendGradientLabels(spec, config, userEncode, dataRef);
console.log(gradientLabels); // Output: ["Label 1: 0.00", "Label 2: 25.00", "Label 3: 50.00", "Label 4: 75.00", "Label 5: 100.00"]
