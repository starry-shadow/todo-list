import React, { useState } from 'react'
function Form(){
    const [modal,setModal]=useState(false); /*sets the modal intially to false*/
    const toggleModal=()=>{ /*when the function is called it sets the modal to the opposite of its current state */
        setModal(!modal)
    }
    return(
    <>
        <div class="search-bar">
            <input type="search" class="search-input"></input>
        </div>
        <button class="addButton" onClick={toggleModal}>+</button> {/*when the button is pressed it will run the function toggleModal*/}
        {modal && ( /* is the same as using an if statement to see if modal is equal to true. && is a logical operator which evaluates the left hand side to see if it is true. 
        if modal is true then it will execute the code below. if modal is false then the right hand side will also be false and not run the code*/
            <div class="modal">
                <div class="overlay">
                    <div class="modal-content">
                        <h3>Title</h3>
                        <div class="modal-search-bar">
                            <input type="text" class="search-input"></input>
                        </div>
                        <h3>Description</h3>
                        <div class="modal-search-bar">
                            <input type="text" class="search-input"></input>
                        </div>
                        <button class="close-button" onClick={toggleModal}>close</button>
                        <button class="add-button">Add</button>
                    </div>
                </div>
            </div>
        )}
        
    </>
    );
}
export default Form