import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/Dishes';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
        
            selectedDish: null,
        }
       // console.log('Menu component constructor is invoked!');
    }

    /*componentDidMount(){
        console.log('Menu Component componentDidMount is invoked! ');
    }*/

    onDishSelect(dish){
        this.setState({selectedDish: dish,
                        });
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

    renderComments(dish){
        if(this.props.dish.comments!=null){
            
             const Comment= this.props.dish.comments.map((dish)=>{
                    return(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                    
                    <ul>
                    <li>                
                        <div>{dish.comment}</div>
                    </li>
                    <li>
                        <p>-- </p>
                        <p>{dish.author}, </p>
                        <p>{dish.date}</p>
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
        const menu =this.props.dishes.map((dish)=> {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)}>                       
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay  body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }
        );

        const showcmnts = this.props.dishes.comments;

        //Testing lifecycle method mounting
        //console.log('Menu component render is invoked!');

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                  
                    {/*{this.renderDish(this.state.selectedDish)}*/}
                    <DishDetail selectedDish={this.renderDish(this.state.selectedDish)} comments={this.renderComments(this.state.selectedDish)}/>
                </div>
            </div>
        );
    }
}

export default Menu;