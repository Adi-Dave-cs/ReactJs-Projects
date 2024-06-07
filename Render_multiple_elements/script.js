import {createRoot} from 'react-dom/client';

function Card(key,title,description,url)
{
    return (
        <div className='card' key={key}>
        <img src={url} alt='card image'></img>
        <p className='title_text'>{title}</p>
        <p className='desc'>{description}</p>
        <button onClick={(e)=>changeText(e)} className='btn'>print</button>
        </div> 
    );
}


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((res)=>{
        console.log(res.products);
        const Container = res.products.map((elem)=>Card(elem.id,elem.title,elem.description,elem.images['0']));       
        const root = createRoot(document.getElementById('root'));
        root.render(Container);
        });



function changeText(elem)
{
    if(elem.target.innerText=='Clicked me!')
        elem.target.innerText = 'print';
    else
        elem.target.innerText = 'Clicked me!';
    // console.log(elem);
}

