import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

        const menu =this.props.dishes.map((dish)=> {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>                       
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
            </div>
        );
    


export default Menu;