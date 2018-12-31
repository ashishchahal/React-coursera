import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedState:null
        }
    }

   

    

    renderComments(){
        const commentDetails = this.props.comments.map((fish)=>{
            return(
               
                <div key={fish.id}>
                    <ul>
                        <li>                
                            <div>{fish.comment}</div>
                        </li>
                        <li>
                            <p>-- </p>
                            <p>{fish.author}, </p>
                            <p>{fish.date}</p>
                        </li>
                    
                    
                    
                    </ul>
                </div>
            );
        });
    }

    render(){
       // 
        return(
            <div className="container">
                <div className="row">
                    <div className=" col-12 col-md-5 m-1">
                        {this.props.selectedDish}
                    </div>

                    <div className=" col-12 col-md-5 m-1">
                        
                            <div>
                                <h4>Comments</h4>
                                <div>{this.props.comments}</div>
                            </div>
                            <div>

                            </div>
                    
                    </div>
                </div>
            </div>
        );
    }

}
export default DishDetail;