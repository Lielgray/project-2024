document.getElementById('createTable').addEventListener('click', function() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const tableContainer = document.getElementById('tableContainer');
    
    tableContainer.innerHTML = ''; 
    
    if (rows > 0 && cols > 0) {
        const table = document.createElement('table');
        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const td = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'table-cell';
                td.appendChild(input);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        tableContainer.appendChild(table);
    }
});

document.getElementById('changeBorderColor').addEventListener('click', function() {
    const borderColor = document.getElementById('borderColor').value;
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.borderColor = borderColor;
    });
});

document.getElementById('changeCellColor').addEventListener('click', function() {
    const cellColor = document.getElementById('cellColor').value;
    const inputs = document.querySelectorAll('input.table-cell');
    inputs.forEach(input => {
        input.style.backgroundColor = cellColor;
    });
});

document.getElementById('increaseSize').addEventListener('click', function() {
    const table = document.querySelector('table');
    if (table) {
        const currentSize = parseFloat(window.getComputedStyle(table).fontSize);
        table.style.fontSize = (currentSize + 2) + 'px';
    }
});

document.getElementById('decreaseSize').addEventListener('click', function() {
    const table = document.querySelector('table');
    if (table) {
        const currentSize = parseFloat(window.getComputedStyle(table).fontSize);
        table.style.fontSize = (currentSize - 2) + 'px';
    }
});
