let queue = [];

function enqueue()
{
    const inputValue = document.getElementById('inputValue').value;

    if (inputValue)
    {
        queue.push(inputValue);
        document.getElementById('inputValue').value = '';
        displayQueue();
    }
}

function dequeue()
{
    if (queue.length > 0)
    {
        queue.shift();
        displayQueue();
    }
}

function readQueue()
{
    const output = document.getElementById('output');
    if (queue.length > 0)
    {
        output.innerText = 'Queue: ' + queue.join(', ');
    }
    
    else
    {
        output.innerText = 'Queue is empty';
    }
}

function displayQueue()
{
    const queueContainer = document.getElementById('queue-container');
    queueContainer.innerHTML = '';
    queue.forEach(element => {
        const div = document.createElement('div');
        div.className = 'queue-element';
        div.innerText = element;
        queueContainer.appendChild(div);
    });
}