import React, { useState } from 'react';
import CardComponent from '../../components/CardComponent';
import SimpleFormik from '../../components/SimpleFormik';

const FunctionalComponent = ( ) => {
    const jsxElement = <h1>This is a JSX element.</h1>;
    const testVar = "20"
    const data = {
        title: "What is Lorem Ipsum?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
    const [myList, setMyList] = useState(
        [
            {
                id: 1,
                title: "Card 1",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                image: "https://picsum.photos/id/237/200/300"
            },
            {
                id: 2,
                title: "Card 2",
                text: "The quick brown fox jumps over the lazy dog.",
                image: "https://picsum.photos/id/235/200/300"
            },
            {
                id: 3,
                title: "Card 3",
                text: "Ea numquam voluptatem non impedit consectetur qui explicabo ratione non asperiores accusamus",
                image: "https://picsum.photos/id/236/200/300"
            },
            {
                id: 4,
                title: "Card 4",
                text: "At ratione accusantium qui quia provident sit omnis illum est Quis officiis eum dolorum iure est fugit modi sit accusantium illo.",
                image: "https://picsum.photos/id/233/200/300"
            },
        ]
    );

    const mystyle = {
        margin: "40px",
        border: "5px black",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px"
    }

    const formStyle = {
        margin: "40px",
        border: "1px solid black",
        padding: "30px"
    }

    const addCard = (title, description) => {
        const newCard = {
            id: myList.length + 1,
            title: title,
            text: description,
            image: "https://picsum.photos/id/237/200/300"
        }

        setMyList([...myList, newCard]);
    }
        
    
    return (
        <div>
            <div style={formStyle}>
                <SimpleFormik addCard={addCard}/>
            </div>
            <div style={mystyle}>
                {myList.map((item) => {
                    return (<CardComponent {...item} key={item.id}/>)
                })}
            </div>
        </div>
    )
}

export default FunctionalComponent;