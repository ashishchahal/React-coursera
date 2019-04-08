import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';


class DishDetail extends Component{

    componentDidMount(){
        console.log('Dishdetail Component componentDidMount is invoked! ');
    }

    componentDidUpdate(){
        console.log('Dishdetail Component componentDidUpdate is invoked! ')
    }

    renderDish(dish){
        if(dish!=null){
            return(


                <Card>
                    <CardImg width="100%" src={dish.image} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

     renderComments(comments){
        if(this.props.dish.comments!=null){
            
             const Comment= this.props.dish.comments.map((dish)=>{
                    return(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                    
                    <ul>
                    <li>                
                        <div>{dish.comment}</div>
                    </li>
                    <li>
                        <p>-- {dish.author}, {new Intl.DateTimeFormat( 'en-US', {year:'numeric',month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        
                    </li>           
                
                    </ul>
                    </div>
                );
            })
            return Comment;
        }
        else{
            return(
            <div></div>
            );
        }       
    }

    render(){
        console.log('Dishdetail Component render is invoked!')
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