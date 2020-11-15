import React,{useState} from 'react';
import peopledata from './Data'

//icons import
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRegGrinTongue } from 'react-icons/fa';

const Review = () =>{
    const [index, setIndex] = useState(0);
const { id,name,job,image,text } = peopledata[index];
console.log("id:"+id);
console.log("name:"+name);
console.log("job:"+job);
console.log("imageUrl:"+image);

//function in which we check for the legth of the array 
const checkNumber = (number) =>{
    if(number> peopledata.length-1){
        return 0;
    }
    if(number<0){
        return peopledata.length-1;
    }
    return number;
}

//function for nextPreview of the people 
const nextPreview = () =>{
    setIndex((index)=>{
        let newIndex = index + 1;
        return checkNumber(newIndex);
    });
}

//function for the Back Preview of the people 
const backPreview = () =>{
    setIndex( (index)=>{
        let newIndex = index - 1;
        return checkNumber(newIndex);
    } )
}

//function for the random people peakup in the array 
const randomPrevie =()=>{
    let randomNumber = Math.floor(Math.random() * peopledata.length );
    if(randomNumber ===index){
        randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
}
    return(
        <div className="review_container">
            <div >
                <img 
                 src={image}
                 className="review_image"
                />
                <span className="quote_icon">
                <FaQuoteRight />
                </span>
            <h4 className="name">{ name }</h4>
            <p className="job">
                {job}
            </p>
            <p className="info">
                {text}
            </p>
            </div>
            <div>
                <button 
                className="icon_chevron_left"
                onClick={backPreview}
                >
                <FaChevronLeft />
                </button>

                
                <button  
                className="icon_chevron_right"
                onClick={nextPreview}
                >
                <FaChevronRight />
                </button>
            </div>
            <button className="btn_surprise" onClick={randomPrevie}>
                Surprise me
            </button>
        </div>
    )
}
export default Review;