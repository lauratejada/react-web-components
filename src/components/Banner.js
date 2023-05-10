//import {Component} from 'react';
import Button from './Button';
import Header from './Header';

function Banner({title='Designing awesome brands & experiences', text='We are located in Winnipeg. We provide excellent brand design and digital design'}) {
    return(
        <section className="banner">
            <Header />
            <div className="container flex">
                <div className="intro-animation-row">
                    <div className="title-banner intro-animation-col" >
                        <h2>{title}</h2>
                        <h5>{text}</h5>
                        <div className="buttons">
                            <Button isPrimary={true} />
                            <Button isPrimary={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
/*
class Banner extends Component {
    render() {


    }
}
*/
export default Banner;