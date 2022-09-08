const dataCubes = document.querySelectorAll('[data-cubes]'),
    gradientColors = [
        '#00d2ff, #3a47d5',
        '#4b6cb7, #182848',
        '#f8ff00, #3ad59f',
        '#08aeea, #2af598',
        '#ffe53b, #ff2525',
        '#00c6ff, #0072ff',
        '#005C97, #363795',
        '#f7971e, #ffd200',
        '#0cebeb, #20e3b2'
], usedColors = [];

dataCubes.forEach(dataCube => {
    const cubes = [...dataCube.children];
    cubes.forEach(generateCube);
});

function generateCube(cube) {
    const acceptLefts = [random(5, 20), random(80, 95)];
    const styles = {
        size: cube.dataset.size || random(5, 10),
        top: cube.dataset.top || random(0, 100),
        left: cube.dataset.left || acceptLefts[random(0, 1, true)],
        rotateZ: cube.dataset.rotateZ || random(0, 360),
        gradient: cube.dataset.gradient || tryColor(gradientColors[random(0, gradientColors.length - 1, true)]),
        delay: cube.dataset.delay || random(-0.5, 1)
    };

    cube.style = `
    --size: ${styles.size};
    --top: ${styles.top};
    --left: ${styles.left};
    --rotateZ: ${styles.rotateZ};
    --gradient: ${styles.gradient};
    --delay: ${styles.delay}s;
    `;

    usedColors.push(styles.gradient);
};

function tryColor(color) {
    var newColor = color;
    const isUsed = usedColors.indexOf(color);
    if (isUsed !== -1) {
        newColor = gradientColors[random(0, gradientColors.length - 1, true)];
        return tryColor(newColor);
    } else return newColor;
};

function random(min = 0, max = 1, int = false) {
    const randomly = Math.random() * (max - min) + min;
    return int ? Math.round(randomly) : randomly;
};