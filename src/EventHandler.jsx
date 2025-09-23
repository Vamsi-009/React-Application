import React,{useState} from "react";

function EventHandler(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping,setShipping] = useState('');


    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handelCommentChange(event){
        setComments(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>name : {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quntity : {quantity}</p>

            <textarea name="" value={comments} onChange={handelCommentChange} placeholder="give me Your feedback" id="#"></textarea>

            <select name="" value={payment} onChange={handlePaymentChange} id="">
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>payment : {payment}</p>

            <label>
                <input type="radio" value='pickup' checked={shipping ==='pickup'} onChange={handleShippingChange} />
                PickUp
            </label>
            <br />
            <label>
                <input type="radio" value='Delivery' checked={shipping ==='Delivery'} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>

    )
}
export default EventHandler;