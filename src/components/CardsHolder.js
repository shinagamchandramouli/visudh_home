import Card from './CardItem';
import './css/CardHolder.css'

function CardsHolder(props) {

    const info = props.details

    return (
        <div className = 'cards-holder'>
            {info.map((desc, index)=>
                <Card title = {desc.title} description = {desc.description} img = {desc.img} btn = {desc.btn} first = {desc.first} name = {`card-${index}`}/>
            )}
        </div>
    )
}

export default CardsHolder
