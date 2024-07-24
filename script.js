
let matrixCount = 0;
let rows, columns;
let sumButtonAdded = false;

document.querySelector('.button-add').addEventListener('click', function() {
    rows = parseInt(document.getElementById('rows').value);
    columns = parseInt(document.getElementById('Columns').value);

    if (rows > 0 && columns > 0) {
        createMatrices(rows, columns);
    } else {
        alert("Please enter valid row and column numbers.");
    }
});

function createMatrices(rows, columns) {
    document.querySelector('.matrix-container').innerHTML = '';
    matrices = [];

    for (let matrixIndex = 0; matrixIndex < 2; matrixIndex++) {
        const matrixDiv = document.createElement('div');
        matrixDiv.className = 'matrix';
        matrixDiv.innerHTML = `<h3>Matrix ${matrixIndex + 1}</h3>`;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.className = `matrix-${matrixIndex + 1}`;
                input.dataset.row = i;
                input.dataset.column = j;
                matrixDiv.appendChild(input);
            }
            matrixDiv.appendChild(document.createElement('br'));
        }

        document.querySelector('.matrix-container').appendChild(matrixDiv);
        matrices.push(matrixDiv);
    }

    if (!sumButtonAdded) {
        createSumButton();
        sumButtonAdded = true;
    }
}

function createSumButton() {
    const container = document.querySelector('.button-div');
    const sumButton = document.createElement('button');
    sumButton.textContent = 'SUM';
    sumButton.className = 'button-sum';
    sumButton.style.marginTop = '20px';
    sumButton.addEventListener('click', function() {
        addMatrices(rows, columns);
    });
    container.appendChild(sumButton);
}

function addMatrices(rows, columns) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'matrix';
    resultDiv.innerHTML = `<h3>Result</h3>`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell1 = document.querySelector(`.matrix-1[data-row='${i}'][data-column='${j}']`);
            const cell2 = document.querySelector(`.matrix-2[data-row='${i}'][data-column='${j}']`);
            const resultCell = document.createElement('input');
            resultCell.type = 'text';
            resultCell.className = 'result-cell';
            resultCell.readOnly = true;
            resultCell.dataset.row = i;
            resultCell.dataset.column = j;

            const value1 = parseFloat(cell1.value) || 0;
            const value2 = parseFloat(cell2.value) || 0;
            resultCell.value = value1 + value2;

            resultDiv.appendChild(resultCell);
        }
        resultDiv.appendChild(document.createElement('br'));
    }

    document.querySelector('.result-container').innerHTML = '';
    document.querySelector('.result-container').appendChild(resultDiv);
}
