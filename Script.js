let queue = []; //creacion de la queue

function enqueue()  //agregar a la cola
{
    const inputValue = document.getElementById('inputValue').value;

    if (inputValue)
    {
        queue.push(inputValue); //se agrega a la cola
        document.getElementById('inputValue').value = '';
        displayQueue(); //lo manda a la funcion de display que sal arriba de la caja
        animateInsertion(); //Anima la entrada del numero/caracter
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
            setTimeout(() =>    //para delimitar en cuando tiempo se realizara la accion
            {
                queue.shift();  //lo saca de la queue 
                displayQueue(); //lo saca de la queue (visualmente)
            }, 300); // tiempo de animacion
        }
    }
}

function animateInsertion()
{
    const elements = document.querySelectorAll('.queue-element');
    const newElement = elements[elements.length - 1];

    if (newElement) //si se agrega algo
    {
        newElement.classList.add('fade-in'); //se agrega y reproduce la animacion
    }
}

function readQueue()
{
    const output = document.getElementById('output');

    if (queue.length > 0)
    {
        output.innerText = 'La filita: ' + queue.join(', ');
    }
    
    else
    {
        output.innerText = 'No hay nada nadita :v';
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