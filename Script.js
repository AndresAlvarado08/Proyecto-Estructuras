let queue = [];

function enqueue()
{
    const inputValue = document.getElementById('inputValue').value;

    if (inputValue)
    {
        queue.push(inputValue);
        document.getElementById('inputValue').value = '';
        displayQueue();
        animateInsertion();
    }
}

function dequeue()
{
    if (queue.length > 0)
    {
        const element = document.querySelector('.queue-element');
        if (element)
        {
            element.classList.add('fade-out');
            setTimeout(() =>
            {
                queue.shift();
                displayQueue();
            }, 300); // Wait for the animation to complete
        }
    }
}

function animateInsertion()
{
    const elements = document.querySelectorAll('.queue-element');
    const newElement = elements[elements.length - 1];

    if (newElement)
    {
        newElement.classList.add('fade-in');
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
        output.innerText = 'Nu hay na';
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