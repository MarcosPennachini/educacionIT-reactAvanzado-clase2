import {createStore} from 'redux'
import reducer from '../reducer/reducer'

const defaultData = {
    products: [
        {
            id: 1,
            name: "IPA",
            description: "La birra se toma fria",
            image: "https://picsum.photos/300/200?1",
            price: 400
        },
        {
            id: 2,
            name: "Stout",
            description: "La birra se toma fria",
            image: "https://picsum.photos/300/200?2",
            price: 300
        },
        {
            id: 3,
            name: "Golden",
            description: "La birra se toma fria",
            image: "https://picsum.photos/300/200?3",
            price: 100
        },
        {
            id: 4,
            name: "Red",
            description: "La birra se toma fria",
            image: "https://picsum.photos/300/200?4",
            price: 200
        }
    ]
}

export default createStore(reducer, defaultData);
